# Madhav's Python & AI Course

A parent-led course taking Madhav (11) from "how did computers start?" to building his own small AI, in **82 sessions of 45 minutes, 2 per week**.

## What's in here

| File / folder | What it is |
|---|---|
| `SYLLABUS.md` | The full course, lesson by lesson. **Start here.** |
| `MISSION.md` | Why Madhav is learning this, and what success looks like |
| `CLAUDE.md` | Rules Claude follows when building lessons (you don't need to edit it) |
| `lessons/` | One HTML file per session for Madhav, with a **Teacher mode** toggle |
| `teacher/` | Answer keys and rubrics. **Don't share these with Madhav.** |
| `reference/` | Printable cheat sheets and a glossary |
| `learning-records/` | What Madhav has shown he understands. Claude writes these from your feedback. |
| `.claude/plan/` | The approved plan and every design decision |

## How to use it

```
1. Build   →   2. Teach   →   3. Debrief   →   (back to 1)
```

**1. Build the next lesson.** In Claude Code, in this folder, run:

```
/teach next lesson
```

You can also name a lesson: `/teach lesson 3.2`. Claude reads the syllabus, Madhav's learning records and your last debrief, then creates:
- `lessons/NNNN-<name>.html`: the lesson (warm-up, pen-and-paper activity, coding, exit ticket, homework)
- `teacher/NNNN-<name>-key.md`: the answers
- starter code and shared styles when they're needed

**2. Teach the session.** Open the lesson in a browser. Madhav works through it. Click **Teacher mode** for your timings and tips. He keeps a paper **Coder's Journal**.

**3. Debrief.** Tell Claude how it went, in a few lines of chat:

```
Lesson 3.2 done.
Exit ticket: 2/3 (missed // vs /).
Homework: 7/10.
Clicked: debugger stepping.
Struggled: f-strings.
Mood: 4/5.
```

Claude then:
- records what Madhav has actually learned
- **adapts the next lesson**: carries on as planned, adds a review lesson, or adds a 🌌 *Deep Space* stretch challenge if he's ahead
- suggests a lighter or more playful session if his mood is low twice in a row

Then go back to step 1.

## Improving the course

Just tell Claude what to change, in chat:
- **One lesson:** "Lesson 5.1 was too long, split it" or "make the homework shorter".
- **The plan:** "Add a pygame chapter after Chapter 7." Claude updates `SYLLABUS.md` and the plan file.
- **A lesson you've already built:** "Redo lesson 0004 with more pictures."

## Checkpoints and ranks

Each phase ends with a 🚀 **capstone** project (2–3 sessions, shown to the family) and a 🛂 **checkpoint** session. To pass, he needs about 80% on the checkpoint plus the capstone rubric. If he doesn't pass, Claude builds a review lesson first.

**Cadet → Pilot → Commander → AI Engineer**

## Ground rules

- Madhav uses AI tools **only with a parent, on the parent's account**.
- AI may **explain**, never write his solutions.
- Turtle-drawing exercises (🐢) run in **Thonny**, not Jupyter.
