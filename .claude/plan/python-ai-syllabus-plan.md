# Plan: Python & AI Course for Madhav (age 11)

_Resolved via /grill-me on 2026-11-01 (two passes: initial plan + gap grilling). Status: approved._

## Goal
Over ~10 months, take Madhav (11) from "how did computers begin?" to understanding — and building pieces of — how an LLM works, with code he wrote himself at every step. The parent (ML practitioner) teaches; Claude builds materials chapter-by-chapter using `/teach`.

## Learner profile
- Age 11; prior coding: Scratch / block-based.
- Math: ahead of grade level (comfortable with some algebra, coordinates, y = 2x + 1).
- Interests: space, science, animals → all exercises/datasets themed accordingly.
- Pronouns: he/him (as stated by parent).

## Teacher profile
- Parent is a DS/ML practitioner → teacher notes focus on pedagogy, pacing, misconceptions, answer keys; no need to explain ML theory to the teacher.

## Constraints & assumptions
- Cadence: 2 sessions/week × ~45 min. No deadline; mastery over speed.
- ~82 lessons ≈ 41 weeks ≈ 10 months; with review-lesson buffer `[PED-010]` realistically 10–12 months.
- Machine: Windows PC.
- Typing: slow / hunt-and-peck at start → `[PED-011]`, `[PED-012]`.
- AI use: only supervised, on parent's account (consumer AI services are generally 13+/18+). Explain-only rule `[AI-002]`.
- Prerequisite-first rule `[PED-006]`: any concept a later chapter uses must be taught earlier.

## Sequence

### Phase 0 — The Story (rank: Cadet) · ~3 lessons
- Ch 1. From abacus to AI
  - L1 Machines that count: abacus → mechanical calculators → ENIAC → transistor → microchips
  - L2 CPU vs GPU (one genius vs a thousand helpers) + what software is
  - L3 The AI story & where we stand today → "and you're going to build one"
  - Framing `[PED-013]`: optimistic but honest — exciting tools & careers, plus age-appropriate limits (AI makes mistakes, can be misused, humans stay in charge). Message: "learn how it works, don't just use it".

### Phase 1 — Python Foundations · ~18 lessons
- Ch 2. How programming languages think (Scratch blocks → Python text; variables/loops/conditions are universal) + setup (Python, Thonny, Jupyter) + first program
- Ch 3. Variables, data types, input, expressions & evaluation
- Ch 4. Decisions: booleans, comparisons, if/elif/else
- Ch 5. Loops: for, range, while
- Ch 6. Strings and lists
- Ch 7. Functions (basics)
- Turtle graphics woven throughout (stars, spirals, solar system) `[TOOL-003]`
- 🚀 Capstone A: Space Explorer text adventure · Phase checkpoint

### Phase 2 — Meet the AI Tools (rank: Pilot) · ~4 lessons
- Ch 8. How LLMs came to be (autocomplete → ChatGPT/Claude/Gemini); what they can't do; hallucination; privacy & safety
- Ch 9. Using AI tools well: chat assistants (compare answers) + coding assistants (explain/debug, never write his solution); prompting basics
- Gen AI beyond chat `[AI-003]`: image/music/video generation & deepfakes taught as concept; one parent-run demo he watches and critiques ("how to spot AI-made images").

### Phase 3 — Advanced Python · ~22 lessons
- Ch 10. Dictionaries, tuples, sets
- Ch 11. Functions in depth: parameters/returns, scope, modules & imports, recursion
- Ch 12. Errors & debugging, try/except
- Ch 13. Files, CSV, JSON
- Ch 14. OOP: classes/objects (Planet, Animal), methods, inheritance
- Ch 15. NumPy
- Ch 16. pandas
- Ch 17. matplotlib
- 🚀 Capstone B: Solar System Data Explorer · Phase checkpoint

### Phase 4 — Machine Learning (rank: Commander) · ~23 lessons
- Ch 18. What is learning? Regression vs classification; supervised / unsupervised / semi-supervised / self-supervised
- Ch 19. 🧮 Mean, median, spread, the normal curve
- Ch 20. 🧮 Lines & slope → Linear Regression (by hand, then scikit-learn) + loss/error
- Ch 21. Train/test split, overfitting, evaluation (accuracy, confusion matrix)
- Ch 22. Logistic Regression (sigmoid, probability)
- Ch 23. Decision Trees
- Ch 24. Ensembles: random forest, boosting ("wisdom of the crowd")
- Ch 25. K-means clustering
- Ch 26. 🧮 Vectors → Dimensionality reduction (PCA)
- 🚀 Capstone C: Animal Classifier · Phase checkpoint

### Phase 5 — Neural Nets → LLMs (rank: AI Engineer) · ~12 lessons
- Ch 27. 🧮 Matrices → the neuron / perceptron
- Ch 28. Neural networks & gradient descent (from scratch in NumPy, then PyTorch) `[TOOL-005]`
- Ch 29. Words → numbers: tokens, embeddings, next-word prediction, attention → transformers → LLMs (closes the loop with Ch 1 & Ch 8)
- 🚀 Final Capstone · Final checkpoint

## Lesson design
- **Shape `[PED-001]`** (one lesson = one 45-min session, one tangible win):
  1. 5' retrieval warm-up (spaced recall from earlier lessons)
  2. ~10' unplugged / pen-and-paper idea in the Coder's Journal
  3. PRIMM: Predict → Run → Investigate → Modify → Make
  4. 3' exit ticket (2–3 questions)
- **Homework `[PED-004]`**: required, ~30 min per lesson; checked async by parent; answer keys in `teacher/`.
  - Phase 1 split `[PED-011]`: ~10 min typing drill (incl. Python symbols `: ( ) [ ] " _ =`) + ~20 min coding.
- **Starter code `[PED-012]`**: early Phase 1 lessons ship partly-typed starter files he completes; scaffolding fades so by Ch 7 he types everything.
- **Capstones `[PED-007]`**: 2–3 sessions each; starter template + required features + 1–2 features of his own design; homework time counts toward the build. Each lesson/capstone has a rubric.
- **Checkpoint session `[PED-008]`**: one dedicated 45-min session per phase — ~10' predict-the-output quiz, ~10' bug hunt, ~15' live coding, ~10' teach-back (doubles as show-and-tell prep).
- **Pass bar `[PED-009]`**: ~80% on checkpoint + capstone rubric met. Below → one targeted review lesson + short re-check.
- **Adaptive pacing `[PED-010]`**: ahead → optional "Deep Space" stretch challenges (never skip core lessons); behind → insert review lessons, max 2 extra per chapter before parent and Claude rethink the approach.
- **Math `[PED-002]`**: just-in-time interludes (🧮) immediately before the algorithm needing them.
- **Mastery gate `[PED-003]`**: exit ticket per lesson; checkpoint quiz + capstone rubric per phase; failing → a review lesson before advancing.
- **Motivation `[PED-005]`**: space-mission ranks (Cadet → Pilot → Commander → AI Engineer); physical Coder's Journal; family show-and-tell for each capstone.
- **Display**: screen-first; printable (A4) when worksheets need it.
- **Views `[REPO-003]`**: child-facing lesson HTML with a "Teacher mode" toggle (notes, timings, misconceptions only). Homework & checkpoint answer keys live in `teacher/NNNN-*-key.md` so Madhav can't reveal them.

## Tooling
- `[TOOL-001]` Python 3 on Windows.
- `[TOOL-002]` Thonny and Jupyter/VS Code, interchangeable. All code must run in both, **except turtle** (unreliable in Jupyter) → turtle exercises are marked "run in Thonny / as .py".
- `[TOOL-004]` NumPy, pandas, matplotlib, scikit-learn.
- `[TOOL-005]` Neural nets: NumPy from scratch, then PyTorch.
- `[AI-001]` AI tools: chat assistants (Claude, ChatGPT, Gemini) + coding assistants. No image-gen / Teachable Machine.

## Repo & /teach integration
- `[REPO-004]` `git init` locally, no remote. (Done.)
- `[REPO-002]` `SYLLABUS.md` at root, lesson-level: per lesson → objective, prerequisites, unplugged activity, coding activity, homework theme, exit-ticket focus.
- `[REPO-001]` Project `CLAUDE.md` adapts `/teach` without modifying the global skill:
  - Learner = Madhav (11); user = parent/teacher.
  - `MISSION.md` describes Madhav's mission.
  - `learning-records/` written from parent's post-session reports.
  - Debrief `[REPO-005]`: after each session the parent gives a short chat debrief — exit-ticket results, homework score, what clicked, what struggled, mood (1–5). Claude writes the learning record and adjusts the next lesson (applying `[PED-010]`).
  - Every lesson has child-facing content + teacher toggle; keys go to `teacher/`.
  - Lessons follow `SYLLABUS.md` order and `[PED-001]` shape.
- Folders: `lessons/`, `teacher/`, `assets/` (shared stylesheet, toggle, quiz widgets), `reference/`, `learning-records/`, plus `MISSION.md`, `RESOURCES.md`, `NOTES.md`.

## Open risks
1. 30-min required homework may erode motivation → watch exit tickets/attitude; adjust per phase.
2. Phase 5 math (gradient descent, attention) is the steepest jump → intuition-first, expect to slow down or repeat.
3. AI tool ToS/features change → re-verify Ch 8–9 content just before teaching.
4. Turtle doesn't work in Jupyter → mark exercises clearly.
5. Slow typing + 30-min homework in Phase 1 → mitigated by `[PED-011]`/`[PED-012]`; watch mood scores in debriefs.
6. Review-lesson buffer may stretch timeline 10–20% → acceptable given "no deadline".

## Next steps
1. ~~`git init`~~ (done).
2. Write `CLAUDE.md` (the /teach adaptation) and `MISSION.md`.
3. Write lesson-level `SYLLABUS.md`.
4. Run `/teach` chapter by chapter starting with Ch 1.

## Reference IDs
| ID | Decision |
|---|---|
| PED-001 | PRIMM lesson shape; 1 lesson = 1 × 45-min session |
| PED-002 | Just-in-time math interludes |
| PED-003 | Exit ticket + phase checkpoint + capstone rubric; review lesson on fail |
| PED-004 | Required ~30-min homework, async check, keys in teacher/ |
| PED-005 | Space ranks, Coder's Journal, show-and-tell |
| PED-006 | Prerequisite-first ordering rule |
| PED-007 | Capstones: 2–3 sessions, scaffolded, own-idea features |
| PED-008 | Checkpoint = 1 session: predict quiz, bug hunt, live coding, teach-back |
| PED-009 | Pass bar ~80% + capstone rubric; else review lesson + re-check |
| PED-010 | Adaptive pacing: Deep Space stretch / max 2 review lessons per chapter |
| PED-011 | Phase 1 homework = 10' typing drill + 20' coding |
| PED-012 | Fading starter code through Ch 7 |
| PED-013 | Ch 1 AI framing: optimistic but honest |
| TOOL-001 | Python 3 on Windows |
| TOOL-002 | Thonny + Jupyter/VS Code interchangeable; turtle → Thonny/.py |
| TOOL-003 | Turtle graphics in Foundations |
| TOOL-004 | NumPy, pandas, matplotlib, scikit-learn |
| TOOL-005 | Neural nets: NumPy from scratch → PyTorch |
| AI-001 | Chat + coding assistants, supervised on parent account |
| AI-002 | Explain-only AI rule for exercises |
| AI-003 | Gen AI beyond chat: concept + 1 parent-run critique demo |
| REPO-001 | /teach adapted via project CLAUDE.md |
| REPO-002 | Lesson-level SYLLABUS.md |
| REPO-003 | Teacher toggle in-lesson; answer keys in teacher/ |
| REPO-004 | Local git repo |
| REPO-005 | Post-session chat debrief → learning record + next-lesson adjustment |
