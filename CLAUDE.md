# MadhavAICoding — Teaching Workspace

A parent-led course teaching **Madhav (age 11)** Python and AI, built lesson by lesson with the `/teach` skill.

- Approved plan and all decision IDs: [.claude/plan/python-ai-syllabus-plan.md](.claude/plan/python-ai-syllabus-plan.md)
- Lesson-by-lesson sequence: [SYLLABUS.md](SYLLABUS.md)
- Learner's mission: [MISSION.md](MISSION.md)

## Who is who — overrides for `/teach`  `[REPO-001]`

The `/teach` skill assumes the person at the keyboard is the learner. **In this repo they are not.**

| Role | Person | Implication |
|---|---|---|
| **User** (talks to Claude) | Madhav's parent — a DS/ML practitioner | Teacher notes cover pedagogy, pacing, misconceptions and answer keys. Don't explain ML theory to the parent. |
| **Learner** | Madhav, 11 (he/him) | All child-facing text is written for him: short sentences, warm, concrete, space/science/animal examples. |

Apply `/teach` with these substitutions:
- `MISSION.md` is **Madhav's** mission, not the parent's.
- `learning-records/` record what **Madhav** has shown he understands. They come from the parent's post-session debrief, never from Claude assuming that covered material was learned.
- "Remind the user to ask the agent follow-up questions" becomes: *"Stuck? Ask your teacher. You can ask Claude together, too."* Madhav only uses AI with his parent present `[AI-001]`.
- The zone of proximal development is calculated for Madhav, from learning records plus debriefs.

## Lesson rules

**Follow the syllabus.** Build the next lesson in `SYLLABUS.md` order unless a debrief says otherwise. Every concept a lesson uses must already be taught `[PED-006]`; check the lesson's *Prereqs* line.

**One file = one 45-minute session = one tangible win** `[PED-001]`. Save lessons to `lessons/NNNN-<slug>.html`, where `NNNN` increments in creation order. The syllabus ID (e.g. `3.2`) goes in the lesson's title and metadata. Review lessons inserted later take the next free number.

**Lesson anatomy (PRIMM).** Every lesson has these sections, in this order:
1. **Warm-up** (5 min): retrieval questions from *older* lessons (spacing), not just the previous one.
2. **Unplugged** (about 10 min): pen-and-paper activity in Madhav's **Coder's Journal** `[PED-005]`.
3. **Predict → Run → Investigate → Modify → Make**: the coding core. *Make* ends with something he created himself.
4. **Exit ticket** (3 min): 2–3 questions. The parent reports the results in the debrief.
5. **Homework** (about 30 min, required) `[PED-004]`. In Phase 1, split it into about 10 min typing drill (including Python symbols `: ( ) [ ] " _ =`) plus about 20 min coding `[PED-011]`.
6. Optional **🌌 Deep Space** stretch challenge for when he's ahead `[PED-010]`.
7. A primary source link (most trustworthy, kid-appropriate where possible) and a link to the relevant `reference/` sheet.
8. **🔭 Explore more** (parent request): 4–6 **age-suitable** further-reading or video links from trusted kid sources. Examples: Britannica Kids, Science Trek (Idaho PBS), NASA Space Place, Smithsonian, museums, PBS. Build it with the `.explore` component. Tag each link `Read alone` (written for kids), `Read together` (adult-level, read with the parent) or `Watch`, and give each a one-line hook. Find and check them with web search, never from memory. Add new sources to `RESOURCES.md`.

**Two audiences, one file** `[REPO-003]`:
- Child-facing content is visible by default.
- A **"Teacher mode" toggle** reveals timings, teaching tips, likely misconceptions and what to listen for. It must **never** contain homework or checkpoint answers.
- **Answer keys** go in `teacher/NNNN-<slug>-key.md`, matching the lesson number. Madhav must not be able to reach them from the lesson page, so don't link to them from lessons.
- **Publishing:** the repo is public and served by GitHub Pages from `main` at https://rajesh-nair.github.io/MADHAVAICODING/. `teacher/` is **gitignored**; never commit it, and never `git add -f` it. Every new lesson or reference sheet must also be added to `index.html` (Mission Control), and the previous lesson's "coming soon" footer must be updated to a link. Lessons link back to `../index.html`.

**Code rules** `[TOOL-001]` `[TOOL-002]`:
- Python 3 on Windows. All code must run in both **Thonny** and **Jupyter/VS Code**.
- **Exception: turtle.** Mark turtle exercises 🐢 *"Run in Thonny (or as a .py file), not Jupyter"*. Turtle freezes in Jupyter.
- Phase 1 uses **fading starter code** `[PED-012]`. Provide partly-typed files in `lessons/code/NNNN/` that he completes. Fade them out so that by Chapter 7 he types everything himself.
- From Phase 3 on: `numpy`, `pandas`, `matplotlib`, `scikit-learn`, then `torch` in Chapter 28 `[TOOL-004]` `[TOOL-005]`. Give the `pip install` command the first time each one is used.
- Keep early programs short. He's a slow typist coming from Scratch.

**Interaction and quizzes**:
- Quizzes give feedback instantly, in the browser.
- Answer options must be the same length, so formatting never gives the answer away.
- Make lessons beautiful and consistent. Build from `assets/` (shared stylesheet, teacher toggle, quiz widget) and add new reusable components there.
- Lessons are screen-first. Worksheets that are meant to be printed must print cleanly on A4.

**AI-use rules (put them in lessons that involve AI)** `[AI-002]` `[AI-003]`: AI may *explain* errors and concepts. It never writes Madhav's solution. AI tools are used only with his parent, on the parent's account. Gen AI beyond chat (images, video, deepfakes) is taught as a concept, plus one demo run by the parent.

**Tone** `[PED-013]`: optimistic but honest about AI. The running message is *"learn how it works, don't just use it."* Theme with the space-mission ranks: **Cadet → Pilot → Commander → AI Engineer**.

**Video links**: before publishing, check that every YouTube link is public. Use `https://www.youtube.com/oembed?url=<video-url>&format=json`: 200 means public, 403 private, 404 removed. Prefer official channels. If only re-uploads exist, include a backup link and a teacher note to preview it.

**Trust**: follow `/teach`. Don't trust parametric knowledge for facts and dates. Cite trustworthy sources and track them in `RESOURCES.md`. Glossary terms in `reference/` must be used consistently.

## Review missions (parent request)

At the end of a chapter, the parent may ask for a **review mission** like `lessons/0004-the-lost-archive.html`:
- a story hook
- one "Data Fragment" per topic, each with main questions from the lessons and 🔍 Deep Scan questions from the Explore-more links
- a code lock per fragment (`.lock`) feeding a vault (`.vault`)
- the 7-step Field Guide note recipe, a Bonus open-research fragment, and Safe Explorer rules
- a **🖨 Print this mission** button (`data-print-page`)
- a notebook-only **Hearing**, with its rubric in `teacher/`

The deliverable is always Madhav's **handwritten notes**. Reuse the components; don't rebuild them.

## Assessment

- **Capstones** `[PED-007]`: 2–3 sessions each. Provide a starter template, required features, 1–2 features of his own design, and a rubric (in `teacher/`).
- **Phase checkpoint** `[PED-008]`: one session with about 10 min predict-the-output, 10 min bug hunt, 15 min live coding, and 10 min teach-back.
- **Pass bar** `[PED-009]`: about 80% plus the capstone rubric met. Otherwise build one targeted review lesson and a short re-check.
- **Pacing** `[PED-010]`: if he's behind, insert review lessons, at most 2 extra per chapter. After that, flag it to the parent and rethink the approach instead of adding more.

## Post-session debrief protocol  `[REPO-005]`

After each session the parent tells Claude, in chat:
1. Which lesson was taught
2. Exit ticket results
3. Homework score (when checked)
4. What clicked
5. What he struggled with
6. Mood (1–5)

Claude then:
1. Writes a learning record in `learning-records/NNNN-<slug>.md` if there's evidence of learning, a misconception or prior knowledge (`/teach` format). Coverage alone doesn't count.
2. Updates `NOTES.md` with any preferences or observations about Madhav.
3. Decides the next lesson: next in the syllabus, a review lesson, or added Deep Space stretch. Says why.
4. Watches mood. Two scores of 2 or lower in a row means proposing a lighter or more playful lesson, and discussing homework load with the parent (plan risk #1).

## Repo layout

```
CLAUDE.md  MISSION.md  SYLLABUS.md  RESOURCES.md  NOTES.md
lessons/          NNNN-<slug>.html  (+ lessons/code/NNNN/ starter files)
teacher/          NNNN-<slug>-key.md, rubrics, checkpoint keys
assets/           shared CSS, teacher toggle, quiz widget, diagram helpers
reference/        cheat sheets and glossary (HTML, printable)
learning-records/ NNNN-<slug>.md
.claude/plan/     approved plan
```
