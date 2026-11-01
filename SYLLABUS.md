# Syllabus: Python & AI for Madhav

> **Mission:** learn how AI works, don't just use it. See [MISSION.md](MISSION.md).
> **Plan and decision IDs:** [.claude/plan/python-ai-syllabus-plan.md](.claude/plan/python-ai-syllabus-plan.md). **How lessons are built:** [CLAUDE.md](CLAUDE.md).

**82 lessons** in 6 phases, 2 sessions a week, about 45 minutes each. That's about 10 months, or 10–12 months with review lessons.
Each lesson below is a blueprint. `/teach` turns it into a full PRIMM lesson with warm-up, Predict → Run → Investigate → Modify → Make, exit ticket, homework, teacher notes and an answer key.

**Legend**
- **Activities:** ✏️ unplugged (Coder's Journal) · 💻 coding · 🏠 homework (about 30 min) · 🎟️ exit-ticket focus · 🔗 prereqs
- **Markers:** 🐢 turtle exercise, run in Thonny or as a .py file, not Jupyter · 🧮 math interlude · 🚀 capstone · 🛂 checkpoint · 🌌 Deep Space stretch idea
- **IDs:** lessons are `chapter.lesson` (e.g. `3.2`), capstones are `A.1`, checkpoints are `P1-CHK`
- **Phase 1 homework:** about 10 min typing drill plus about 20 min coding `[PED-011]`
- **Starter code:** fades out by Chapter 7 `[PED-012]`

**Ranks** `[PED-005]`: Madhav starts as **Cadet**. Passing P1-CHK makes him **Pilot**, passing P3-CHK makes him **Commander**, and passing the final checkpoint makes him **AI Engineer**.

**Recurring datasets** (themed to his interests; `/teach` must source and verify each one):
- 🪐 **Planets**: hand-built from the NASA Planetary Fact Sheet.
- 🐧 **Palmer Penguins**: classification and clustering.
- 🦗 **Cricket chirps vs temperature** (Dolbear's law): regression.
- ⭐ **Stars** (temperature and brightness): clustering.
- ✍️ **Handwritten digits (MNIST)**: neural nets.

---

## Overview

| Phase | Chapters | Lessons | Rank on entry |
|---|---|---|---|
| 0 · The Story | 1 | 3 | Cadet |
| 1 · Python Foundations | 2–7, Capstone A, P1-CHK | 18 | Cadet |
| 2 · Meet the AI Tools | 8–9 | 4 | Pilot |
| 3 · Advanced Python | 10–17, Capstone B, P3-CHK | 22 | Pilot |
| 4 · Machine Learning | 18–26, Capstone C, P4-CHK | 23 | Commander |
| 5 · Neural Nets → LLMs | 27–29, Final Capstone, Final CHK | 12 | Commander |

> Phase 2 has no separate checkpoint session. It teaches no new coding skills, so its check is the "Pilot's Licence" built into lesson 9.2. Phase 1's checkpoint makes him Pilot, Phase 3's makes him Commander.

---

## Phase 0 — The Story (Cadet)

Framing `[PED-013]`: optimistic but honest. Each lesson ends with a "what this means for *you*" moment.

### Chapter 1 · From Abacus to AI

**1.1 Machines That Count** · 🔗 none
- 🎯 Explain how people built ever-faster counting machines: abacus → mechanical calculators → ENIAC (vacuum tubes) → transistor → microchip.
- ✏️ Timeline strip in the journal. Do an addition sum on a paper abacus, then time how fast he does sums vs a calculator.
- 💻 No coding yet. On a computer, look at photos of ENIAC and a modern chip and compare their size.
- 🏠 Ask a grandparent or older relative what the first computer or phone they used was like, and add it to the timeline. Draw "a computer in 2050".
- 🎟️ Put 4 inventions in order. What made computers small?

**1.2 Brains and Muscles: CPU, GPU and Software** · 🔗 1.1
- 🎯 A computer = hardware + software. Input → process → output. A CPU is a few very clever workers, a GPU is thousands of simple workers in parallel. Software is a set of instructions.
- ✏️ "Human GPU" race: one person colours a 100-square grid alone (CPU) vs 4 people colouring a quarter each (GPU). Write a recipe-style instruction list (software) for making a sandwich.
- 💻 Open Task Manager on Windows and find the CPU and GPU and how busy each one is. Watch it while a video plays.
- 🏠 List 10 things at home that contain a chip and label the input, process and output of 3 of them.
- 🎟️ When would a GPU win over a CPU? What is software?

**1.3 The AI Story and Where We Stand Today** · 🔗 1.2
- 🎯 AI history in plain words: rules-based programs → machines that learn from examples → deep learning on GPUs → today's chat assistants. What AI is good at, what it gets wrong, and that humans stay in charge.
- ✏️ "Human or rule?" card sort: which tasks are easy for computers and hard for people, and the other way round. Draw the course map, a "mission route" from Cadet to AI Engineer.
- 💻 With his parent, ask an AI assistant to explain one planet fact. Then check it against NASA. Is it right?
- 🏠 Find 3 places AI is used in daily life (maps, recommendations, voice assistants). Write one question he hopes to answer by the end of the course.
- 🎟️ Name one thing AI is good at and one mistake it can make. Why did GPUs matter for AI?

---

## Phase 1 — Python Foundations (Cadet → Pilot)

### Chapter 2 · How Programming Languages Think

**2.1 From Blocks to Words** · 🔗 1.2
- 🎯 Every language (Scratch, Python, JavaScript…) shares the same ideas: instructions in order, variables, decisions, loops. Install Python and Thonny, and run a first `print()`.
- ✏️ "Robot parent" game: he writes exact instructions to guide his parent across the room. Find the bugs. Match Scratch blocks to Python lines on paper.
- 💻 Install Python 3, Thonny and Jupyter. `print("Hello, Universe!")`. Use the shell as a calculator.
- 🏠 Typing drill (home row plus `( ) "`). Print a 5-line space poem.
- 🎟️ Name 3 ideas every programming language shares. What does `print` do?

**2.2 Programs, Errors and Comments** · 🔗 2.1
- 🎯 Shell vs editor, saving `.py` files, comments `#`. Errors are clues, not failures. Read a simple `SyntaxError`/`NameError`.
- ✏️ "Spot the typo" worksheet: 6 broken lines, circle each bug and predict the error message.
- 💻 Fix 5 broken starter programs. Write a mission briefing program with comments.
- 🏠 Typing drill (`: _ =`). Break his own program on purpose 3 ways and record each error in the journal.
- 🎟️ What does `#` do? What should you do first when you see an error?

### Chapter 3 · Variables and Evaluation

**3.1 Variables Are Labelled Boxes** · 🔗 2.2
- 🎯 Assignment `=`, naming rules, reassigning, printing variables.
- ✏️ Draw labelled boxes. "Trace the boxes" puzzle: follow 6 assignment lines and write the final values.
- 💻 Rocket profile: `name`, `fuel`, `crew` variables. Change fuel and print again.
- 🏠 Typing drill. Write variables for his favourite animal (name, legs, top speed) and print a sentence.
- 🎟️ After `x = 5; x = x + 2`, what is `x`? Which variable names are invalid?

**3.2 Types and How Python Evaluates** · 🔗 3.1
- 🎯 `int`, `float`, `str`, `bool`, `type()`. Operators `+ - * / // % **`, order of operations. Python evaluates the right-hand side first. Step through with the Thonny debugger.
- ✏️ Evaluate expressions by hand step by step (like BODMAS), then check in Python.
- 💻 Predict-then-run 10 expressions. Use the Thonny debugger to watch evaluation step by step. Convert km to light-minutes.
- 🏠 Typing drill. Space maths sheet: distance to the Moon in different units.
- 🎟️ `7 // 2` vs `7 / 2`? What is the type of `"5"`?

**3.3 Talking to the User: input()** · 🔗 3.2
- 🎯 `input()` always returns text, so convert with `int()` and `float()`. f-strings for nice output.
- ✏️ Design the "Your Age and Weight on Other Planets" questionnaire on paper.
- 💻 Planet age calculator: ask for age, print it on Mars and Jupiter (orbital periods from NASA).
- 🏠 Typing drill. Extend the calculator to 3 planets plus weight.
- 🎟️ Why does `input()` + 1 fail? Fix it.
- 🌌 Round answers nicely with `round()`.

### Chapter 4 · Decisions

**4.1 True or False?** · 🔗 3.3
- 🎯 Booleans, comparison operators `== != < > <= >=`, and `and`/`or`/`not`.
- ✏️ True/false card game with statements about animals ("a whale is a fish and lives in water").
- 💻 Evaluate 12 boolean expressions (predict first). "Can this animal fly?" checks.
- 🏠 Typing drill. Write 10 true/false facts as Python expressions that print `True`.
- 🎟️ `=` vs `==`? `True and False` gives?

**4.2 If, Elif, Else** · 🔗 4.1
- 🎯 Branching, indentation, `elif` chains.
- ✏️ Draw a flowchart: "Which planet should you visit?" from temperature preference.
- 💻 Space quiz with scoring. Animal-category classifier using if/elif. (Foreshadows decision trees.)
- 🏠 Typing drill. Write a 5-question quiz on his topic of choice.
- 🎟️ Indentation error spot. What prints when several conditions are true?

### Chapter 5 · Loops

**5.1 For Loops and Turtle Stars** · 🔗 4.2 · 🐢
- 🎯 `for` with `range()`. Repetition replaces copy-paste. Turtle basics.
- ✏️ Draw a square and a star by "walking" instructions on graph paper. Spot the repetition.
- 💻 🐢 Draw a square, then a 5-point star, then a ring of stars. Countdown with `range(10, 0, -1)`.
- 🏠 Typing drill. 🐢 Draw his own constellation.
- 🎟️ What does `range(3)` produce? How many times does the loop run?

**5.2 While Loops and Random** · 🔗 5.1
- 🎯 `while`, loop conditions, avoiding infinite loops, `import random`.
- ✏️ Play "guess my number" on paper, writing down the strategy (halving!).
- 💻 Guess-the-number game. Rocket fuel burn until empty.
- 🏠 Typing drill. Add a tries counter and a "too hot / too cold" message.
- 🎟️ When should you use `while` instead of `for`? Why might a loop never end?

**5.3 Patterns: Nested Loops and Accumulators** · 🔗 5.2 · 🐢
- 🎯 Loops inside loops. The accumulator pattern (running total).
- ✏️ Fill a times-table grid by hand. Notice it's a loop inside a loop.
- 💻 🐢 Spiral galaxy and star field. Sum the planet distances with an accumulator.
- 🏠 Typing drill. 🐢 Design an original pattern. Print a multiplication table.
- 🎟️ How many prints does a 3×4 nested loop make?
- 🌌 Colour gradient spiral.

### Chapter 6 · Strings and Lists

**6.1 Strings: Text as Data** · 🔗 5.3
- 🎯 Indexing, slicing, `len`, `upper/lower/replace`, looping over characters, f-strings.
- ✏️ Write a word in boxes with index numbers. Practise slicing by hand. Secret-code (Caesar shift) by hand.
- 💻 Name reverser, vowel counter, Caesar cipher "alien messages".
- 🏠 Typing drill. Decode a secret message his parent prepares.
- 🎟️ `"Saturn"[1:4]`? What is the last index of a 6-letter word?

**6.2 Lists: Collections** · 🔗 6.1
- 🎯 Creating, indexing, changing, `append`, `remove`, looping over lists.
- ✏️ A "planet train" of paper cards, physically appending and removing cards.
- 💻 Planets list: print each with its position number. Build a mission crew list from `input()`.
- 🏠 Typing drill. Favourite animals list with add, remove and print.
- 🎟️ What does `planets[-1]` give? Difference between `append` and `insert`?

**6.3 Lists + Loops + Decisions** · 🔗 6.2
- 🎯 `in`, `sort`, `min`, `max`, `sum`. Filtering a list into a new list.
- ✏️ Sort animal cards by speed by hand. Write down the steps he used (an algorithm!).
- 💻 Find the fastest animal, filter planets with moons > 2, compute the average.
- 🏠 Coding only (no typing drill from here). Animal stats mini-report.
- 🎟️ Write the steps to filter a list.

### Chapter 7 · Functions

**7.1 Make Your Own Commands** · 🔗 6.3 · 🐢
- 🎯 `def`, parameters, `return`, calling. "Don't repeat yourself". Mirrors Scratch "My Blocks".
- ✏️ Design a `draw_planet(size, colour)` "machine" on paper: inputs → box → output.
- 💻 🐢 `draw_star(size)`, `draw_planet(size, colour)`. `age_on(planet, age)` with `return`.
- 🏠 Three useful functions of his own choice, typed fully himself (no starter code from here) `[PED-012]`.
- 🎟️ `print` vs `return`? What is a parameter?

**7.2 Building Big Things from Small Functions** · 🔗 7.1 · 🐢
- 🎯 Decomposition: breaking a problem into functions that call each other.
- ✏️ Break "draw the solar system" into a tree of sub-tasks.
- 💻 🐢 Solar system scene built from his functions.
- 🏠 Design the Capstone A story map on paper: rooms or planets, choices, items.
- 🎟️ Why split code into functions?

### 🚀 Capstone A · Space Explorer Text Adventure `[PED-007]`

**A.1 Design and Start** · 🔗 7.2
- 🎯 Turn his paper map into code. Required features: at least 4 locations (functions), choices with `if`, an inventory list, a game loop with `while`, a random event.
- ✏️ Finalise the flowchart and decide his 1–2 own-idea features.
- 💻 Starter template (game loop skeleton). Build the first 2 locations.
- 🏠 Build the remaining locations (counts toward the capstone).

**A.2 Build, Polish, Show** · 🔗 A.1
- 🎯 Finish, test with his parent as player, fix bugs, add his own features.
- 💻 Playtest → bug list → fixes. Prep for show-and-tell.
- 🏠 Family show-and-tell demo `[PED-005]`.
- Rubric in `teacher/`.

### 🛂 P1-CHK · Phase 1 Checkpoint `[PED-008]` `[PED-009]`
- 10 min predict-the-output, 10 min bug hunt, 15 min live coding (a fresh small problem), 10 min teach-back ("explain loops to Grandma").
- Pass bar is about 80% plus the Capstone A rubric. Passing makes him 🎖️ **Pilot**.

---

## Phase 2 — Meet the AI Tools (Pilot)

### Chapter 8 · How LLMs Came to Be

**8.1 From Autocomplete to Chat Assistants** · 🔗 1.3, 6.2
- 🎯 Timeline: ELIZA (1966) → chess and Go AIs → the transformer (2017) → GPT-style models → ChatGPT, Claude, Gemini. The core idea is *predicting the next word*, learned from huge amounts of text, on GPUs.
- ✏️ Next-word game: cover the next word in a book and guess it. Tally how often he's right. Phone keyboard predictions as "tiny LLMs".
- 💻 Tiny Python demo: count which word follows which in a sentence list (dictionaries come later, so use lists here).
- 🏠 Ask family which AI tools they use. Make a "tool zoo" poster.
- 🎟️ What does an LLM actually do? Why did it need GPUs?

**8.2 What AI Gets Wrong + Generative AI** · 🔗 8.1
- 🎯 Hallucinations, out-of-date knowledge, bias, privacy (never share personal info). Generative AI makes images, music and video, including deepfakes. Concept only, plus one demo run by his parent `[AI-003]`.
- ✏️ "Spot the fake": a sheet of real vs AI-made images, plus a list of clues to look for.
- 💻 Parent demo: generate one space image together and critique it against a real NASA photo.
- 🏠 Write his own "AI Safety Rules" poster (5 rules).
- 🎟️ What is a hallucination? Name one clue that an image may be AI-made.

### Chapter 9 · Using AI Tools Well

**9.1 Asking Good Questions** · 🔗 8.2
- 🎯 Prompting basics: be specific, give context, ask for an explanation suited to his age. Compare assistants. Always fact-check.
- ✏️ Rewrite 3 vague prompts into good ones on paper.
- 💻 With his parent: ask Claude, ChatGPT and Gemini the same space question. Compare the answers and verify with NASA or another trusted source.
- 🏠 Prompt journal: 3 questions, the answers, and a fact-check verdict.
- 🎟️ What makes a prompt good? Why compare and verify?

**9.2 AI as Your Coding Tutor + Pilot's Licence** · 🔗 9.1
- 🎯 Use a coding assistant to *explain* errors and concepts, never to write his solution `[AI-002]`. He signs the "AI Explain-Only" pact.
- ✏️ Write the pact in the journal.
- 💻 With his parent: paste a buggy program, ask "explain why this fails, don't fix it", then fix it himself.
- 🏠 Use the pact on one homework bug from Capstone A.
- 🛂 **Pilot's Licence**: 5-question quiz on AI use plus a teach-back ("how LLMs work and when not to trust them").

---

## Phase 3 — Advanced Python (Pilot → Commander)

### Chapter 10 · Dictionaries, Tuples, Sets

**10.1 Dictionaries: Labelled Data** · 🔗 6.3, 8.1
- 🎯 Key → value, lookup, add, update, loop over `.items()`.
- ✏️ Make a paper "planet passport" card with fields. Each card is a dict.
- 💻 Planet facts dict. Upgrade the 8.1 next-word counter to a dict.
- 🏠 Animal encyclopedia dict with a search-by-name program.
- 🎟️ List vs dict: when to use which?

**10.2 Tuples, Sets and Nested Data** · 🔗 10.1
- 🎯 Tuples (fixed, e.g. coordinates), sets (unique, membership), list of dicts.
- ✏️ Venn diagram of animals that fly or swim, which is set intersection.
- 💻 Star coordinates as tuples, unique species with a set, a solar system as a list of dicts.
- 🏠 Query the list of dicts: all planets with rings, sorted by size.
- 🎟️ What's special about a set?

### Chapter 11 · Functions in Depth

**11.1 Parameters, Returns and Scope** · 🔗 7.2, 10.2
- 🎯 Default and keyword arguments, returning several values, local vs global scope.
- ✏️ "Which box can see which variable?" scope diagram.
- 💻 `launch(rocket, fuel=100)`. Function returning (min, max, average).
- 🏠 Refactor the Capstone A code with better functions.
- 🎟️ Why can't a function see another function's local variable?

**11.2 Modules and Imports** · 🔗 11.1
- 🎯 `import math`, `random`, `from … import`. Write his own module `space_tools.py`.
- ✏️ Plan a "toolbox": which functions belong in which module.
- 💻 Build `space_tools.py` and import it from another file.
- 🏠 Add 3 functions to his module and use them in a mini-program.
- 🎟️ What does `import` do?

**11.3 Recursion** · 🔗 11.2 · 🐢
- 🎯 A function calling itself. Base case and recursive case.
- ✏️ Russian-doll and mirror-in-mirror. Hand-trace a recursive countdown.
- 💻 Recursive countdown, factorial. 🐢 Fractal tree.
- 🏠 🐢 Fractal snowflake or his own fractal.
- 🎟️ What happens without a base case?
- 🌌 Fibonacci and the sunflower spiral.

### Chapter 12 · Errors and Debugging

**12.1 Reading Tracebacks and Debugging** · 🔗 11.3
- 🎯 Error types (Syntax, Name, Type, Index, Key, Value), reading a traceback, print-debugging, the Thonny debugger.
- ✏️ Detective worksheet: match tracebacks to their causes.
- 💻 Bug hunt across 6 broken programs. Use the debugger with breakpoints.
- 🏠 Debug a longer program his parent breaks on purpose.
- 🎟️ Where in a traceback do you look first?

**12.2 try / except: Handling Problems** · 🔗 12.1
- 🎯 `try/except`, specific exceptions, validating user input.
- ✏️ List everything a user could type wrong into the planet calculator.
- 💻 Make the planet calculator crash-proof.
- 🏠 Crash-proof Capstone A inputs.
- 🎟️ Why catch a specific error rather than all of them?

### Chapter 13 · Files and Data Formats

**13.1 Reading and Writing Text Files** · 🔗 12.2
- 🎯 `open`, `with`, read/write/append modes, file paths on Windows.
- ✏️ Design a "captain's log" format.
- 💻 Captain's log program that saves and reloads entries.
- 🏠 High-score file for the guess-the-number game.
- 🎟️ `"w"` vs `"a"`?

**13.2 CSV and JSON** · 🔗 13.1, 10.2
- 🎯 The `csv` module, `json` save/load. Data as tables vs nested objects.
- ✏️ Build the 🪐 planets table by hand from the NASA Planetary Fact Sheet.
- 💻 Type it into `planets.csv`, read it with `csv.DictReader`. Save a game state to JSON.
- 🏠 Animal dataset CSV (10 animals) plus a JSON save for Capstone A.
- 🎟️ When would you choose CSV and when JSON?

### Chapter 14 · Object-Oriented Programming

**14.1 Classes and Objects** · 🔗 13.2
- 🎯 Class = blueprint, object = instance, `__init__`, attributes.
- ✏️ Blueprint vs objects: draw a "Planet" form and fill in 3 copies.
- 💻 `Planet` class, creating all 8 planets from `planets.csv`.
- 🏠 `Animal` class with 5 objects.
- 🎟️ Class vs object in one sentence each.

**14.2 Methods and Behaviour** · 🔗 14.1
- 🎯 Methods, `self`, `__str__`.
- ✏️ List what a Spacecraft *has* (attributes) vs *does* (methods).
- 💻 `Spacecraft` with `launch()`, `travel(distance)`, `refuel()`. Fuel logic.
- 🏠 Add methods to `Animal` (`describe()`, `speed_vs(other)`).
- 🎟️ What is `self`?

**14.3 Inheritance** · 🔗 14.2
- 🎯 Parent and child classes, overriding methods, `super()`.
- ✏️ Animal family tree: Animal → Mammal, Bird, Fish.
- 💻 `Animal` → `Bird` (fly) and `Fish` (swim) with overridden `move()`.
- 🏠 Mini zoo simulation using inheritance.
- 🎟️ Why use inheritance?
- 🌌 Polymorphism: loop over mixed animals calling `move()`.

### Chapter 15 · NumPy

**15.1 Arrays: Lists with Superpowers** · 🔗 14.3
- 🎯 `pip install numpy`. Arrays vs lists, vectorised maths, `arange`, `linspace`. Introduces Jupyter as the main tool for data work.
- ✏️ Do the same calculation on 8 planet distances by hand (loop) vs all at once. Feel the difference.
- 💻 Convert all planet distances km → AU in one line. Speed test: list loop vs NumPy.
- 🏠 Array maths on the animal speeds dataset.
- 🎟️ Why is NumPy faster or easier than a loop?

**15.2 Stats, Masks and 2D Arrays** · 🔗 15.1
- 🎯 `mean`, `max`, `argmax`, boolean masks, 2D arrays and shape.
- ✏️ Grid of numbers on paper: pick out rows, columns and cells.
- 💻 Planets with mass > Earth via a mask. A 2D "star map" grid.
- 🏠 Masks on the animals dataset (fast **and** heavy).
- 🎟️ What does `arr[arr > 5]` do?

### Chapter 16 · pandas

**16.1 DataFrames** · 🔗 15.2, 13.2
- 🎯 `pip install pandas`, `read_csv`, `head`, `shape`, columns, selecting.
- ✏️ Label the parts of a table: rows, columns, index, header.
- 💻 Load `planets.csv` and 🐧 penguins. Explore.
- 🏠 Answer 5 questions about the penguins with pandas.
- 🎟️ How do you select one column?

**16.2 Filter, Sort, New Columns** · 🔗 16.1
- 🎯 Boolean filtering, `sort_values`, computed columns.
- ✏️ Write each question in plain English, then translate it to a pandas line.
- 💻 Heaviest penguins, planets sorted by gravity, a new "weight on planet" column.
- 🏠 Penguin "top 5" report.
- 🎟️ Write a filter for penguins heavier than 4,000 g.

**16.3 Group, Summarise, Clean** · 🔗 16.2
- 🎯 `groupby`, `mean`, `value_counts`, missing values (`isna`, `dropna`, `fillna`).
- ✏️ Group paper cards by species and compute averages by hand.
- 💻 Average flipper length per penguin species. Handle missing rows.
- 🏠 Cleaning challenge on a messy dataset his parent prepares.
- 🎟️ Why does missing data matter?

### Chapter 17 · matplotlib

**17.1 Line, Bar and Scatter** · 🔗 16.3
- 🎯 `pip install matplotlib`. Choosing the right chart type.
- ✏️ Hand-draw a bar chart and a scatter plot on graph paper from small tables.
- 💻 Bar: planet sizes. Scatter: penguin bill vs flipper. Line: temperature over a day.
- 🏠 Three charts about animals.
- 🎟️ Which chart shows a relationship between two numbers?

**17.2 Telling a Story with Charts** · 🔗 17.1
- 🎯 Titles, labels, colours by category, histograms, subplots.
- ✏️ Sketch a "dashboard" layout for the Capstone B explorer.
- 💻 Penguin scatter coloured by species. Histogram of body mass (foreshadows the normal curve).
- 🏠 One-page chart story: "What I discovered about penguins".
- 🎟️ What makes a chart easy to understand?

### 🚀 Capstone B · Solar System Data Explorer `[PED-007]`

**B.1 Plan, Load, Clean** · 🔗 17.2
- 🎯 Required features: `Planet` class loaded from CSV, menu loop, search and filter, at least 3 charts, save favourites to JSON, error handling. Plus his own 1–2 features.
- ✏️ Menu and feature plan.
- 💻 Starter template. Data loading, classes, menu.
- 🏠 Build features.

**B.2 Charts, Polish, Show** · 🔗 B.1
- 💻 Charts, testing, bug fixes. Show-and-tell prep.
- 🏠 Family demo. Rubric in `teacher/`.

### 🛂 P3-CHK · Phase 3 Checkpoint
- Predict-the-output (dicts, classes, recursion), bug hunt (a traceback-driven fix), live coding (load a CSV, then answer a question with pandas and a chart), teach-back ("what is a class?").
- Pass bar is about 80% plus the Capstone B rubric. Passing makes him 🎖️ **Commander**.

---

## Phase 4 — Machine Learning (Commander)

Use `scikit-learn` from Chapter 20 (`pip install scikit-learn`). Math interludes 🧮 come just before the algorithm that needs them `[PED-002]`.

### Chapter 18 · What Is Machine Learning?

**18.1 Learning from Examples** · 🔗 16.3, 9.1
- 🎯 Rules vs learning from examples. Features and labels. Regression (predict a number) vs classification (predict a category).
- ✏️ Card sort: 12 problems sorted into "regression" or "classification". Invent features to describe an animal.
- 💻 Hand-write a rule-based classifier for penguins (if/else), measure how often it's right, and realise rules get hard.
- 🏠 5 real-world ML examples, each labelled regression or classification with its features.
- 🎟️ Feature vs label? Is "predict tomorrow's temperature" regression or classification?

**18.2 Four Ways to Learn** · 🔗 18.1
- 🎯 Supervised (teacher with answers), unsupervised (find groups without answers), semi-supervised (a few labels), self-supervised (hide part of the data and predict it, which is how LLMs learn, back to 8.1).
- ✏️ Four mini-games: flashcards with answers, sorting shells without names, labelling only 3 of 20, fill-in-the-blank sentences.
- 💻 Fill-in-the-blank: mask a word in planet sentences and guess it with simple word counts (the self-supervised idea).
- 🏠 A comic strip showing the 4 learning types.
- 🎟️ Which type does an LLM's pretraining use?

### Chapter 19 · 🧮 Mean, Spread and the Normal Curve

**19.1 Middle and Spread** · 🔗 18.2, 15.2
- 🎯 Mean, median, mode, range, standard deviation (intuition: "typical distance from the mean").
- ✏️ Measure the hand spans of family members and compute mean, median and range by hand.
- 💻 NumPy and pandas stats on penguin body mass. Compare species.
- 🏠 Stats on a dataset of his choice.
- 🎟️ When is the median better than the mean?

**19.2 The Normal Curve** · 🔗 19.1, 17.2
- 🎯 Many measurements form a bell shape. Mean ± standard deviation. Randomness adds up (Galton board).
- ✏️ Coin-flip Galton board: 10 flips per "ball", 20 balls, plot a tally histogram.
- 💻 Simulate thousands of balls with `random`/NumPy and plot a histogram. Compare with penguin mass.
- 🏠 Simulate dice sums (1, 2 and 5 dice) and watch the bell appear.
- 🎟️ What's the shape of a normal curve? Where is the mean?
- 🌌 The 68–95–99.7 rule.

### Chapter 20 · 🧮 Lines → Linear Regression

**20.1 Lines and Slope** · 🔗 19.2
- 🎯 Coordinates, y = mx + b, slope as "rise over run", intercept.
- ✏️ Graph paper: plot 3 lines, read off slope and intercept, and predict y for new x.
- 💻 Plot lines with matplotlib. Drag-the-slope experiment by changing `m` and `b`.
- 🏠 Line puzzles: find the equation from two points.
- 🎟️ What does the slope tell you?

**20.2 Best-Fit Line and Error** · 🔗 20.1
- 🎯 Fitting a line through scattered points. Residuals, squared error, mean squared error (the loss).
- ✏️ 🦗 Plot cricket chirps vs temperature on paper, draw a best-guess line with a ruler, and measure the errors.
- 💻 Compute the MSE of his line in Python, then try to beat it by tweaking `m` and `b` (manual gradient descent, foreshadowing Chapter 28).
- 🏠 Tune for the lowest MSE. Record attempts in a table.
- 🎟️ Why square the errors?

**20.3 Linear Regression with scikit-learn** · 🔗 20.2
- 🎯 `LinearRegression().fit()`, `.predict()`, coefficients. Compare with his hand-made line.
- ✏️ Predict the temperature from his paper line before the computer answers.
- 💻 🦗 Chirps → temperature model. Then predict penguin mass from flipper length.
- 🏠 Regression on a new pair of columns. Explain what the slope means in words.
- 🎟️ How did the computer's line compare with yours?

### Chapter 21 · Is My Model Any Good?

**21.1 Train/Test and Overfitting** · 🔗 20.3
- 🎯 Testing on unseen data (no peeking at exam answers). Overfitting = memorising.
- ✏️ "Memoriser vs understander" game: one student memorises answers, the other learns the rule. Who wins on new questions?
- 💻 `train_test_split`. A wiggly polynomial that overfits vs a straight line, compared on test error.
- 🏠 Repeat with different split sizes and record the results.
- 🎟️ Why can't we test on training data?

**21.2 Measuring Classifiers** · 🔗 21.1
- 🎯 Accuracy, confusion matrix, why accuracy alone can fool you.
- ✏️ Build a confusion matrix from 20 "is it a mammal?" guesses.
- 💻 Evaluate his 18.1 rule-based penguin classifier with a confusion matrix.
- 🏠 Confusion-matrix puzzles.
- 🎟️ What does an off-diagonal cell mean?

### Chapter 22 · Logistic Regression

**22.1 The Sigmoid: Squashing to Probability** · 🔗 21.2, 20.1
- 🎯 Turning any number into a probability between 0 and 1. A threshold makes the decision.
- ✏️ "Confidence meter" worksheet: map scores to how sure he is, then sketch the S-curve.
- 💻 Plot the sigmoid. Change the threshold and watch the decisions change.
- 🏠 Sigmoid explorer: what happens with big and small inputs?
- 🎟️ What does an output of 0.9 mean?

**22.2 Logistic Regression in Action** · 🔗 22.1
- 🎯 `LogisticRegression`, `predict_proba`, decision boundary.
- ✏️ Draw a line separating two penguin species on a paper scatter plot.
- 💻 🐧 Classify Adelie vs Gentoo. Plot the decision boundary. Confusion matrix.
- 🏠 Try different feature pairs and report which gives the best accuracy.
- 🎟️ Why is it called "regression" if it classifies?

### Chapter 23 · Decision Trees

**23.1 Twenty Questions** · 🔗 22.2, 4.2
- 🎯 A tree of yes/no questions. Choosing the best question first (splitting).
- ✏️ Build a 20-questions tree for 8 animals on paper and test it on his parent.
- 💻 Code his paper tree as if/elif (back to 4.2!).
- 🏠 Improve the tree to use fewer questions.
- 🎟️ What makes a question "good" for splitting?

**23.2 Trees with scikit-learn** · 🔗 23.1, 21.1
- 🎯 `DecisionTreeClassifier`, `plot_tree`, `max_depth`. Deep trees overfit.
- ✏️ Predict what the computer's first question will be.
- 💻 🐧 3-species tree. Visualise it. Compare depths 1–10 on test accuracy.
- 🏠 Write up the "best depth" experiment.
- 🎟️ Why might a very deep tree do worse on test data?

### Chapter 24 · Ensembles: Wisdom of the Crowd

**24.1 Random Forests** · 🔗 23.2
- 🎯 Many different trees vote. Bagging (random samples and features).
- ✏️ Jellybean jar: everyone guesses and the average beats most individuals.
- 💻 `RandomForestClassifier` vs a single tree on penguins. Feature importance.
- 🏠 Change the number of trees and plot accuracy.
- 🎟️ Why do many trees beat one?

**24.2 Boosting** · 🔗 24.1
- 🎯 Each new model fixes the previous one's mistakes.
- ✏️ "Mistake relay": each person corrects only the last person's errors on a quiz.
- 💻 `GradientBoostingClassifier`. Leaderboard of all models so far.
- 🏠 Model leaderboard write-up: which won and why.
- 🎟️ Bagging vs boosting in one sentence each.

### Chapter 25 · K-Means Clustering (Unsupervised)

**25.1 Finding Groups by Hand** · 🔗 24.2, 18.2
- 🎯 Clusters, centroids, the assign → update loop.
- ✏️ Paper K-means: 15 dots, 3 coin "centroids", iterate by hand until stable.
- 💻 Code one K-means step with NumPy distances.
- 🏠 Finish a hand-coded K-means loop.
- 🎟️ Why is K-means "unsupervised"?

**25.2 K-Means with scikit-learn** · 🔗 25.1
- 🎯 `KMeans`, choosing k (the elbow), comparing clusters with the true labels.
- ✏️ Guess how many star groups there are from a scatter plot.
- 💻 ⭐ Cluster stars by temperature and brightness. 🐧 Cluster penguins without labels, then compare with species.
- 🏠 Elbow plot and a written conclusion.
- 🎟️ How do you pick k?

### Chapter 26 · 🧮 Vectors → Dimensionality Reduction

**26.1 Vectors: Arrows and Lists of Numbers** · 🔗 25.2, 15.2
- 🎯 A vector as an arrow and as a list of features. Adding, scaling, length, distance.
- ✏️ Graph-paper arrows: add two vectors. Describe 3 animals as [legs, weight, speed] vectors.
- 💻 NumPy vector maths. Which animal is "closest" to a cat?
- 🏠 Animal similarity finder.
- 🎟️ How can an animal be a vector?

**26.2 PCA: Shadows of Data** · 🔗 26.1
- 🎯 Squashing many features into 2 while keeping the most spread. The shadow analogy.
- ✏️ Torch-and-object shadows: which angle shows the most?
- 💻 `PCA` on penguins (4 features → 2). Scatter plot coloured by species.
- 🏠 PCA on another dataset. Explain what was kept and what was lost.
- 🎟️ Why reduce dimensions?

### 🚀 Capstone C · Animal Classifier `[PED-007]`

**C.1 Question and Exploration** · 🔗 26.2
- 🎯 Required: pick a classification question about animals, explore with charts, clean the data. Own-idea features welcome.
- 💻 Starter notebook. EDA.
- 🏠 Exploration findings.

**C.2 Train and Compare** · 🔗 C.1
- 💻 Train at least 3 models (logistic regression, tree, forest), train/test split, confusion matrices, leaderboard.
- 🏠 Tune the best model.

**C.3 Evaluate and Show** · 🔗 C.2
- 💻 Final evaluation, PCA plot, an interactive `predict()` function.
- 🏠 Family show-and-tell: "my AI can tell animals apart". Rubric in `teacher/`.

### 🛂 P4-CHK · Phase 4 Checkpoint
- Predict (what would the model do?), bug hunt (data leakage and a wrong split), live coding (fit and evaluate a model), teach-back ("supervised vs unsupervised", "why test data?").
- Pass bar is about 80% plus the Capstone C rubric.

---

## Phase 5 — Neural Nets → LLMs (Commander → AI Engineer)

Intuition comes first here, since this is the steepest phase (plan risk #2). Expect to use the review-lesson buffer `[PED-010]`.

### Chapter 27 · 🧮 Matrices → The Neuron

**27.1 Matrices: Tables of Numbers That Do Things** · 🔗 26.2
- 🎯 Matrix × vector as "many weighted sums at once". `np.dot` and `@`.
- ✏️ Hand-compute a matrix × vector: shop prices × quantities, for several shoppers.
- 💻 NumPy matrix maths. Check the paper answers.
- 🏠 Matrix puzzles.
- 🎟️ What does a matrix × vector compute?

**27.2 The Perceptron** · 🔗 27.1, 22.1
- 🎯 Neuron = weighted sum + bias + activation. The perceptron learning rule.
- ✏️ Be a neuron: weights on cards decide "go stargazing tonight?" from cloudiness, Moon and homework.
- 💻 Perceptron from scratch in NumPy. Learn AND/OR. Discover that it can't learn XOR.
- 🏠 Hand-tune perceptron weights for a new rule.
- 🎟️ What are weights for?

### Chapter 28 · Neural Networks and Gradient Descent

**28.1 Gradient Descent: Walking Downhill** · 🔗 27.2, 20.2
- 🎯 Loss landscape, slope tells the direction, learning rate. (Derivative only as "slope at a point".)
- ✏️ Blindfold hill walk: find the lowest point using only "feel the slope" steps.
- 💻 Fit the 🦗 cricket line by gradient descent in NumPy and watch the MSE fall (closes the loop with 20.2).
- 🏠 Experiment with learning rates (too big vs too small).
- 🎟️ What happens if the learning rate is too big?

**28.2 A Tiny Neural Net from Scratch** · 🔗 28.1
- 🎯 Layers of neurons. Hidden layers solve XOR. Forward pass, then learn from the error (backprop as "blame passed backwards", intuition only).
- ✏️ Draw a 2-2-1 network and hand-compute one forward pass.
- 💻 NumPy 2-layer net learns XOR. Plot the loss curve.
- 🏠 Change the hidden size and learning rate and record the results.
- 🎟️ Why can a hidden layer solve XOR when one neuron can't?

**28.3 PyTorch: Real Deep Learning** · 🔗 28.2
- 🎯 `pip install torch`. Tensors, a `nn.Sequential` model, the training loop.
- ✏️ Write his own digit on a grid as pixels, which is how a computer sees it.
- 💻 ✍️ MNIST digit classifier in PyTorch. Test it on a digit he draws himself.
- 🏠 Improve accuracy (layers, epochs) and keep a log.
- 🎟️ What do the training loop's 4 steps do?

### Chapter 29 · From Words to LLMs

**29.1 Words → Numbers: Tokens and Embeddings** · 🔗 28.3, 26.1
- 🎯 Tokenising text. Words as vectors (embeddings). Similar meanings sit close together.
- ✏️ Place animal words on a 2D paper map by meaning (size vs wildness), which is an embedding by hand.
- 💻 Simple tokenizer. Cosine similarity on small hand-made word vectors. With his parent, look at a real tokenizer demo.
- 🏠 Build a 10-word space-vocabulary embedding map and find the nearest neighbours.
- 🎟️ Why turn words into vectors?

**29.2 Next-Word Prediction** · 🔗 29.1, 10.1
- 🎯 Language model = predict the next token. Bigrams, sampling, "temperature". Self-supervised learning on text (back to 18.2).
- ✏️ Bigram table by hand from a short space paragraph, then generate a sentence by rolling dice.
- 💻 Bigram text generator in pure Python trained on a space book text. Temperature knob.
- 🏠 Train on a different text and compare the styles.
- 🎟️ Why does more context make better predictions?

**29.3 Attention, Transformers and the Assistants You Use** · 🔗 29.2, 1.3, 8.1
- 🎯 Attention = "which earlier words matter for the next word?" Transformers stack attention plus neural nets. Trained on GPUs (back to 1.2): pretraining → fine-tuning → learning from human feedback. Back to "where we stand today".
- ✏️ Attention highlighter: for each blank in a sentence, draw arrows to the words that matter.
- 💻 Compute a toy attention weighting with NumPy (softmax over similarities) for a 4-word sentence.
- 🏠 Teach-back poster: "How Claude/ChatGPT works, from Chapter 1 to now".
- 🎟️ What does attention decide?

### 🚀 Final Capstone `[PED-007]`

**F.1 Choose and Design** · 🔗 29.3
- 🎯 Options (or his own idea with his parent's approval): 🌌 a mini "Space-GPT" (a character-level or bigram generator trained on space texts), an AI-powered animal identifier app (Capstone C plus a menu), or a neural-network digit or doodle game. Required: data, training, evaluation, a short explanation of how it works.
- ✏️ Project plan and architecture sketch.
- 🏠 Data gathering.

**F.2 Build** · 🔗 F.1
- 💻 Build and train. 🏠 Iterate.

**F.3 Present** · 🔗 F.2
- 💻 Polish. Make a presentation that explains the full journey from abacus to his own AI.
- 🏠 Family show-and-tell. Rubric in `teacher/`.

### 🛂 Final Checkpoint
- Predict (neural net forward pass), bug hunt (a training loop bug), live coding (a small model end to end), teach-back ("how an LLM works").
- Passing makes him 🏅 **AI Engineer**.
