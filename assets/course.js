/* Mission Control — shared lesson components.
   Components (declared in HTML, wired here):
   - Teacher toggle:  <button class="teacher-toggle" data-teacher-toggle>
   - Quiz:            <div class="quiz" data-quiz="id"> … <div class="quiz-q" data-answer="2"> <p class="prompt"> <div class="options"><button>…
                      optional data-explain on .quiz-q; first-try score shown in [data-quiz-score="id"]
   - Order puzzle:    <div class="order" data-order="A|B|C|D"> (correct order, pipe-separated; shuffled on load)
   - Stopwatch:       <div class="stopwatch" data-stopwatch>
   - Print worksheet: <button data-print-sheet>
   - Code lock:       <div class="lock" data-lock="f1" data-hash="…" data-reward="A"> (answer stored only as a hash;
                      progress saved per browser so a multi-day mission survives closing the tab)
   - Vault:           <div class="vault" data-locks="f1,f2,…" data-hash="…"> + child .vault-reward (hidden until solved)
                      Hashes: MC.hash(MC.norm("answer")) — run in the browser console or node to make new ones.
*/
(function () {
  const store = {
    get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
  };

  /* Teacher toggle — notes only; answer keys live in teacher/ and are never in lesson pages. */
  function initTeacher() {
    const btns = document.querySelectorAll("[data-teacher-toggle]");
    if (!btns.length) return;
    const apply = on => {
      document.body.classList.toggle("teacher", on);
      btns.forEach(b => { b.setAttribute("aria-pressed", on); b.textContent = on ? "Teacher mode: on" : "Teacher mode"; });
    };
    apply(store.get("mc-teacher") === "1");
    btns.forEach(b => b.addEventListener("click", () => {
      const on = !document.body.classList.contains("teacher");
      store.set("mc-teacher", on ? "1" : "0");
      apply(on);
    }));
  }

  /* Quiz — instant feedback; records first-try score so the parent can report it in the debrief. */
  function initQuizzes() {
    document.querySelectorAll("[data-quiz]").forEach(quiz => {
      const id = quiz.dataset.quiz;
      const qs = quiz.querySelectorAll(".quiz-q");
      let answered = 0, firstTry = 0;
      const scoreEl = document.querySelector(`[data-quiz-score="${id}"]`);
      const updateScore = () => {
        if (scoreEl) scoreEl.textContent = answered === qs.length
          ? `First-try score: ${firstTry} / ${qs.length}`
          : `Answered ${answered} of ${qs.length}`;
      };
      qs.forEach(q => {
        const correct = parseInt(q.dataset.answer, 10);
        const buttons = q.querySelectorAll(".options button");
        const fb = document.createElement("p");
        fb.className = "feedback"; fb.setAttribute("aria-live", "polite");
        q.appendChild(fb);
        let tried = false, done = false;
        buttons.forEach((b, i) => b.addEventListener("click", () => {
          if (done) return;
          if (i === correct) {
            b.classList.add("correct"); done = true; answered++;
            if (!tried) firstTry++;
            fb.textContent = "✅ Correct! " + (q.dataset.explain || "");
            buttons.forEach(x => x.disabled = x !== b);
            updateScore();
          } else {
            b.classList.add("wrong"); b.disabled = true; tried = true;
            fb.textContent = "Not quite — have another think.";
          }
        }));
      });
      updateScore();
    });
  }

  /* Order puzzle — click items to build a sequence, then check. */
  function initOrders() {
    document.querySelectorAll("[data-order]").forEach(box => {
      const correct = box.dataset.order.split("|").map(s => s.trim());
      const pool = document.createElement("div"); pool.className = "pool";
      const answer = document.createElement("div"); answer.className = "answer";
      answer.setAttribute("aria-label", "Your order");
      const controls = document.createElement("div"); controls.className = "controls";
      const check = document.createElement("button"); check.className = "primary"; check.textContent = "Check my order";
      const reset = document.createElement("button"); reset.textContent = "Start again";
      const fb = document.createElement("p"); fb.className = "feedback"; fb.setAttribute("aria-live", "polite");
      controls.append(check, reset);
      box.append(pool, answer, controls, fb);

      const shuffled = () => {
        const a = correct.slice();
        do { for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } }
        while (a.join() === correct.join());
        return a;
      };
      const build = () => {
        pool.innerHTML = ""; answer.innerHTML = ""; fb.textContent = "";
        shuffled().forEach(label => {
          const b = document.createElement("button"); b.textContent = label;
          b.addEventListener("click", () => {
            (b.parentElement === pool ? answer : pool).appendChild(b);
            fb.textContent = "";
          });
          pool.appendChild(b);
        });
      };
      check.addEventListener("click", () => {
        const got = [...answer.children].map(b => b.textContent);
        if (got.length < correct.length) { fb.textContent = "Move all the cards into the box first."; return; }
        const right = got.filter((g, i) => g === correct[i]).length;
        fb.textContent = right === correct.length
          ? "🚀 Perfect order! " + (box.dataset.explain || "")
          : `${right} of ${correct.length} are in the right spot. Tap a card to move it back, then try again.`;
      });
      reset.addEventListener("click", build);
      build();
    });
  }

  /* Stopwatch — for timed races (human vs machine). */
  function initStopwatches() {
    document.querySelectorAll("[data-stopwatch]").forEach(sw => {
      sw.innerHTML = '<span class="readout">0.0 s</span><button class="primary">Start</button><button>Lap</button><button>Reset</button><ol class="laps"></ol>';
      const [readout] = sw.getElementsByClassName("readout");
      const [startBtn, lapBtn, resetBtn] = sw.querySelectorAll("button");
      const laps = sw.querySelector(".laps");
      let t0 = 0, elapsed = 0, timer = null;
      const show = ms => readout.textContent = (ms / 1000).toFixed(1) + " s";
      const now = () => elapsed + (timer ? performance.now() - t0 : 0);
      startBtn.onclick = () => {
        if (timer) { elapsed = now(); clearInterval(timer); timer = null; startBtn.textContent = "Start"; }
        else { t0 = performance.now(); timer = setInterval(() => show(now()), 100); startBtn.textContent = "Stop"; }
      };
      lapBtn.onclick = () => { const li = document.createElement("li"); li.textContent = (now() / 1000).toFixed(1) + " s"; laps.appendChild(li); };
      resetBtn.onclick = () => { clearInterval(timer); timer = null; elapsed = 0; show(0); laps.innerHTML = ""; startBtn.textContent = "Start"; };
    });
  }

  /* Print: data-print-page prints the whole page (print CSS hides interactive bits);
     data-print-sheet prints only the .sheet section(s). */
  function initPrint() {
    document.querySelectorAll("[data-print-page]").forEach(b => b.addEventListener("click", () => window.print()));
    document.querySelectorAll("[data-print-sheet]").forEach(b => b.addEventListener("click", () => {
      document.body.classList.add("print-sheet");
      window.print();
      setTimeout(() => document.body.classList.remove("print-sheet"), 500);
    }));
  }

  /* Code lock + vault — treasure-hunt style review missions.
     Answers are normalised (case, spaces, commas, dots ignored) and compared by hash, so the page source
     doesn't simply show them. Not real security — just enough to keep the hunt honest. */
  const norm = s => String(s).toLowerCase().replace(/[\s,.'"!?-]/g, "");
  const hash = s => { let h = 5381; for (const c of s) h = ((h << 5) + h + c.charCodeAt(0)) >>> 0; return h.toString(36); };
  window.MC = { norm, hash };

  function initLocks() {
    const listeners = [];
    document.querySelectorAll(".lock[data-lock]").forEach(lock => {
      const id = lock.dataset.lock, key = "mc-lock-" + id;
      lock.insertAdjacentHTML("beforeend",
        '<div class="lock-row"><input type="text" inputmode="text" autocomplete="off" aria-label="Fragment code">' +
        '<button class="primary">Unlock</button></div><p class="feedback" aria-live="polite"></p>');
      const input = lock.querySelector("input"), btn = lock.querySelector("button"), fb = lock.querySelector(".feedback");
      const open = () => {
        lock.classList.add("unlocked"); input.disabled = btn.disabled = true;
        fb.innerHTML = `🔓 Fragment restored! Vault letter: <span class="reward">${lock.dataset.reward}</span>`;
        listeners.forEach(fn => fn());
      };
      if (store.get(key) === "1") open();
      const tryIt = () => {
        if (!input.value.trim()) return;
        if (hash(norm(input.value)) === lock.dataset.hash) { store.set(key, "1"); open(); }
        else fb.textContent = "🔒 Code not accepted. Check your notes and try again." + (lock.dataset.hint ? " Hint: " + lock.dataset.hint : "");
      };
      btn.addEventListener("click", tryIt);
      input.addEventListener("keydown", e => { if (e.key === "Enter") tryIt(); });
    });

    document.querySelectorAll(".vault[data-locks]").forEach(vault => {
      const ids = vault.dataset.locks.split(",");
      const slots = document.createElement("div"); slots.className = "slots";
      const row = document.createElement("div"); row.className = "lock-row";
      row.innerHTML = '<input type="text" autocomplete="off" aria-label="Vault password"><button class="primary">Open the vault</button>';
      const fb = document.createElement("p"); fb.className = "feedback"; fb.setAttribute("aria-live", "polite");
      const reward = vault.querySelector(".vault-reward");
      vault.prepend(slots); vault.append(row, fb);
      const [input, btn] = row.children;
      const draw = () => {
        slots.innerHTML = "";
        ids.forEach(id => {
          const lock = document.querySelector(`.lock[data-lock="${id}"]`);
          const s = document.createElement("span");
          s.textContent = lock && lock.classList.contains("unlocked") ? lock.dataset.reward : "?";
          slots.appendChild(s);
        });
      };
      listeners.push(draw); draw();
      const solve = () => { if (reward) reward.hidden = false; row.hidden = true; fb.textContent = ""; };
      if (store.get("mc-vault-" + vault.dataset.hash) === "1") solve();
      const tryIt = () => {
        if (hash(norm(input.value)) === vault.dataset.hash) { store.set("mc-vault-" + vault.dataset.hash, "1"); solve(); }
        else fb.textContent = "The vault stays shut. Unscramble the letters you've collected.";
      };
      btn.addEventListener("click", tryIt);
      input.addEventListener("keydown", e => { if (e.key === "Enter") tryIt(); });
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    initTeacher(); initQuizzes(); initOrders(); initStopwatches(); initPrint(); initLocks();
  });
})();
