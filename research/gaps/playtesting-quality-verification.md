# Playtesting, Quality & Verification — cross-media process primer (Phase 3 research)

> Phase 3 Task 4 Step 3. Generalizes the IF notes testing_interactive_fiction,
> quality_standards_if, research_and_verification to cross-media (IF / Live / Tabletop /
> Puzzle-Hunt). Provenance: [corpus] · [researched] (cited) · [synthesis]. Not rendered.

These three IF notes describe one underlying production discipline: *you cannot trust
your own judgment about your own work, so you build a process that substitutes other
people's fresh experience and external facts for your own contaminated knowledge.* The
discipline splits into three movements — watch a fresh person try it (playtesting),
agree in advance on what "done" means (quality bars), and get the real-world facts right
(research and verification). Each generalizes cleanly to all four media; what differs is
the cost and irreversibility of a test, and what a "bug" is allowed to be. [synthesis]

---

## 1. Playtesting & Testsolving

### The core principle: the author can't unsee

The load-bearing observation across every medium is that the maker is the worst possible
judge of their own work's legibility. The IF note states it directly: "Authors know too
much. They fill gaps readers can't, see foreshadowing that isn't there, understand
choices that aren't clear, know the 'right' path… Author testing catches bugs, not
experience issues." [corpus] This is the "can't-unsee" / contaminated-knowledge problem,
and it is why every medium independently arrived at the same fix: **put the work in front
of someone who has never seen it and watch, without intervening.**

The watching is as important as the having-watched. The IF playtest protocol is to
observe where the player hesitates, re-reads, clicks first, or shows confusion — and
explicitly **not** to "explain things while they play, defend your choices, guide them
toward 'correct' paths, or interrupt flow unless stuck." [corpus] The puzzle-hunt
community states the identical non-interference rule for a different reason — fidelity to
real conditions: "it's important to not intervene in any way to replicate the conditions
that real solvers will be operating under." [researched] [2] The same emotional pull to
intervene shows up in escape-room design, where designers describe watching players
"struggle with puzzles or miss obvious solutions" and learning to resist the urge to
help. [researched] [4]

### Pattern over anecdote, and "if one person does it"

A single tester's confusion may be idiosyncratic; a repeated one is a defect. The IF note:
"One player's confusion might be their issue. Three players' confusion is your problem."
[corpus] The escape-room formulation is more aggressive because live play is unforgiving:
"If one person does it, others probably will too. So we adjust." [researched] [5] Both
are the same triage rule — distinguish signal from noise by counting, and weight live
media toward "assume it generalizes" because you cannot patch a physical room mid-session.
[synthesis]

### Per-medium forms of the same practice

| Medium | Name of the practice | Fresh-eyes mechanism | What it catches that the maker can't |
|--------|----------------------|----------------------|--------------------------------------|
| IF | Beta testing / fresh-eye playtest | Recruit testers "who've never seen the work" for final passes [corpus] | Comprehension, choice clarity, pacing drag, state bugs across branches [corpus] |
| Tabletop | **Blind playtesting** | Designer absent; testers use **only the rulebook** [researched] [1] | Rulebook ambiguity, unintuitive rules, balance with the real audience [researched] [1][3] |
| Live (escape/immersive/larp) | Test play / play-through / usability read-through | External groups who don't know the room; larp "R.I.T.E." document hand-off to a fresh person each cycle [researched] [4][6] | "Avenues of thought… logical but different from our intentions"; timing; momentum loss [researched] [4] |
| Puzzle-Hunt | **Testsolving** | Unspoiled solvers; MIT Mystery Hunt norm is **two successful, independent, unspoiled testsolves** per puzzle [researched] [2] | Whether the puzzle is solvable at all; difficulty miscalibration; "moon logic" leaps [researched] [2][7] |

Testsolving deserves emphasis as the purest instance: in puzzle hunts it is described as
"the most important step in the puzzle writing process," and its first job is not polish
but *existence proof* — "testsolving not only allows other people to give you valuable
feedback, but also proves that your puzzle is actually solvable," because "even very
experienced puzzle constructors routinely write puzzles which are too difficult to be
solved." [researched] [2]

### Staged funnels and scaling

Every medium runs tests in stages from cheap-and-internal to expensive-and-external,
because external fresh-eyes tests are costly and you want the obvious failures gone before
you spend them. Tabletop formalizes this as a funnel: **internal** (validate core rules,
change fast) → **local/targeted** (balance against the real audience) → **blind** (rulebook
only, designer absent). [researched] [1][3] IF mirrors it: early/structural (think-aloud,
whiteboard) → mid/content (clarity) → late/polish (coverage) → pre-release (fresh-eye).
[corpus] Larp scales the player count across runs — one documented combat system ran five
playtests growing from 10 to 25 players, "revealing how scaling reveals new systemic
problems." [researched] [6] The IF corpus flags the same trap larp names: skipping the
cheap read-through wastes the expensive live test on usability problems that a document
review would have caught. [corpus] [6] [synthesis]

### Branch / path coverage — IF's special burden, shared with branching live games

A single playthrough can never exercise all content in a branching work. The IF note works
the combinatorics — "a 10-passage story with 2 choices per passage has 512 possible paths"
— and prescribes breadth-first, depth-first, or priority-based coverage, reserving human
testing for emotional impact and coherence while automating link validity and reachability.
[corpus] This burden transfers to any branching live experience: branching escape rooms
"require coverage testing across each branch," and the same solver-time calibration that IF
applies to reading speed becomes the escape room's 60/90-minute target window. [corpus]
(per the IF↔Live cross-reference map) [synthesis]

### When NOT to change

Fresh-eyes feedback is not a mandate to comply. The IF note lists feedback that signals the
work is *succeeding*: "'I didn't like the consequence' (consequence landed), 'That choice
was hard' (intended difficulty), 'I wanted to save everyone' (meant to be impossible)."
[corpus] The discipline is to separate "this confused me" (a defect) from "this affected me
in a way I didn't enjoy" (possibly the point) — a judgment that applies to a hard hunt
puzzle or a deliberately tense larp scene exactly as it does to IF. [synthesis]

---

## 2. Quality Bars

### What a "bar" is, and why agree in advance

A quality bar is a pre-agreed, ideally checkable statement of what "done / shippable" means,
so that "done" is not a mood. The IF note operationalizes this as nine bars — Integrity,
Reachability, Comprehension, Style, Safety, Accessibility, Canon, Spoiler hygiene, Research
posture — each with a key question, common failures, and an **automation level**: Integrity
and Reachability are "High" automation (schema validation, graph traversal, ChoiceScript's
quicktest/randomtest), while Comprehension, Style, and Spoiler are "Low" — they "require
human testing." [corpus] The generalizable insight is the split itself: **every medium has a
mechanically checkable layer and a human-judgment layer, and conflating them is a quality
failure.** [synthesis]

The IF note also separates **bars** (validatable: does it hold together?) from **design
goals** (not validatable: is it moving? does choice feel meaningful?). "Whether the story
moves readers emotionally cannot be validated — only tested through reader response."
[corpus] This boundary is itself cross-media: you can put a bar on "the door reliably
unlocks," not on "the room feels magical." [synthesis]

### Pre-gate vs full-gate

IF distinguishes a fast **pre-gate** (schema, required fields, link validation — "during
active creation") from a comprehensive **full-gate** (all bars, cross-references, human
review — "before publication"). [corpus] Tabletop's completion criterion is the same idea
expressed as a stopping rule: put the game through "at minimum… 3 waves of blind
playtesting," and treat it as done when scores cluster at 8–9–10 with feedback "just related
to fine-tuning" — i.e. **pass consecutive clean blind playtests with no major rules
questions.** [researched] [1] D&D's public-playtest survey grades work the same numeric way:
80%+ means "the community wants exactly that," 70s means "thumbs up but tinkering needed,"
below 60% means "a good chance they'll drop it." [researched] [8] The shared pattern: a bar
is only useful if it names a threshold you can fail. [synthesis]

### Per-medium quality checklists

| Medium | Representative bars / "shippable" tests |
|--------|------------------------------------------|
| IF | Integrity (links resolve), Reachability (all content reachable; no dead ends), Comprehension, Style (no anachronism/voice drift), Safety, Accessibility (WCAG 2.1), Canon, Spoiler hygiene, Research posture [corpus] |
| Tabletop | Rulebook clarity (no recurring rules questions in blind tests), component/iconography legibility, balance against real audience, target play-length hit across groups, 3+ clean blind-playtest waves [researched] [1][3] |
| Live (escape/immersive) | **Mechanism reliability** (locks/props fire every time), **reset integrity** between groups, timing calibration (60/90 min), fairness of puzzle logic, safety/egress [researched] [4][5] [synthesis] |
| Puzzle-Hunt | **Solvability proven** (≥1, ideally 2 independent unspoiled testsolves), **difficulty calibrated** to the hunt's tier, **fairness** — no "moon logic," and clean extraction so the answer is confirmable [researched] [2][7] |

Reachability is the clearest cross-media translation: IF's "can players reach every passage
from the start?" [corpus] is the escape room's "does every prop reliably trigger and reset
so the next group can finish?" and the hunt's "does a clean path actually lead from the
clues to the answer?" — all three are the same bar, *no content is stranded behind a broken
gate.* [synthesis]

### Fairness and "moon logic" as a quality bar

Puzzle media add a fairness bar that IF carries under Comprehension and choice-clarity. A
**moon logic puzzle** is "a puzzle which is solved, not by logic, but by some obtuse form of
thinking that is entirely counter-intuitive" — and the defining failure is that "even after
you know the solution, there is no clear path from the clues to the answer." [researched] [7]
The bar is not "hard vs easy" — a fair puzzle "will make complete, brilliant sense in
hindsight," and testsolving is precisely how you tell a satisfying aha from an unfair leap,
because the maker (who already knows the answer) cannot feel the difference. [researched] [7]
[2] This is the same author-blind-spot problem from §1, applied as a ship/no-ship gate.
[synthesis]

### Actionable feedback

A bar is only useful if violations are reported actionably. The IF note's structure —
**Location → Problem → Standard (which bar) → Fix** — and its contrast of bad ("the prose
needs work") versus good ("Choice 2 and 3 are near-synonyms… differentiate the action")
feedback [corpus] transfers verbatim to a testsolve report ("step 3's extraction has two
equally-valid orderings; pin it") or a blind-playtest note ("rulebook p.4 doesn't say
whether you draw before or after scoring"). [synthesis]

---

## 3. Research, Verification & Provenance

### The posture framework

The research note's central tool is **posture** — a certainty classification attached to
every real-world claim: **Corroborated** (multiple reliable sources agree → state directly),
**Plausible** (one good source or logical extension → soft hedge, "believed to be"),
**Disputed** (sources conflict → present as in-world disagreement), **Uncorroborated** (no
sources → neutral phrasing, assess risk). [corpus] Uncorroborated claims are then triaged by
**risk** — Low (flavor, e.g. a tavern sign's color), Medium (could cause plot
inconsistency), High (central premise, safety-/medical-/legal-critical — "escalate, don't
proceed without resolution"). [corpus] The cross-media generalization: **the cost of getting
a fact wrong scales with how load-bearing the fact is, and your phrasing should advertise
your confidence.** [synthesis]

### Research serves the work; it never shows

Two principles travel to every medium. First, **"research deeply, use sparingly. Know ten
times more than you show"** — the IF note's "small lies, big truth" principle permits moving
a meeting from Tuesday to Thursday for drama but not "having the wrong side win the battle."
[corpus] Second, **never surface sources**: players should never see "According to
Wikipedia…" or citation markers; facts are integrated into the fiction, not footnoted on
player-facing surfaces. [corpus] An escape room's period set dressing, an immersive event's
historical script, and a hunt puzzle's flavor text all obey the same rule — the seams of
research stay invisible. [synthesis]

### Source hygiene

The note ranks sources: **primary** (diaries, letters, period newspapers, government
records) and **secondary** (academic histories, biographies) over **caution sources**
(Wikipedia as "starting point only," and — critically — "fiction is inspiration, not
evidence… verify against primary or academic sources"). [corpus] This is the same discipline
this very primer follows: each external claim below carries a numbered citation to a fetched
URL, and unsupported generalizations are marked [synthesis] rather than asserted as fact.
[synthesis]

### Per-medium verification

| Medium | What gets verified | How |
|--------|--------------------|-----|
| IF | Period accuracy, technical/historical facts, anachronism avoidance | Research memo (Question → Short Answer → Posture → Citations → Caveats → Implications → Neutral phrasing); posture-matched hedging on the surface [corpus] |
| Tabletop | Theme/historical fidelity; rules-as-written consistency; component accuracy | Designer research + development editing; public playtest surfaces rules-text contradictions [researched] [1][8] [synthesis] |
| Live | Period set dressing, prop authenticity, safety facts (egress, materials) | Designer research; the reliability bar (§2) cross-checks that the physical world behaves as the fiction claims [researched] [4] [synthesis] |
| Puzzle-Hunt | Factual content puzzles depend on (trivia, ciphers, real-world data) | Testsolvers double as fact-checkers — a wrong fact that breaks extraction surfaces as an unsolvable testsolve [researched] [2] [synthesis] |

The elegant cross-media observation: in puzzle media, **verification and playtesting
collapse into one act.** A factual error in a hunt puzzle does not merely embarrass — it
*breaks the puzzle*, because the wrong fact yields the wrong intermediate and the testsolve
fails. The testsolve (§1), the solvability bar (§2), and fact-verification (§3) are, for a
data-driven puzzle, the same gate. [synthesis] [2]

### Research posture as a quality bar

Note the loop back to §2: IF's ninth quality bar **is** "Research Posture — are claims
supported?", with automation level "Low — requires source evaluation." [corpus] Verification
is thus not a separate phase bolted on; it is one of the ship/no-ship bars, scoped (per the
note) to "fiction engaging with real history, science, or current events," where "pure
fantasy may have minimal research requirements beyond internal consistency." [corpus] The
same scoping holds cross-media: a purely abstract puzzle or an invented-world larp owes
verification only to its own internal canon; the moment it touches the real world, posture
applies. [synthesis]

---

## Sources

[1] Stonemaier Games — "Tabletop Game Prototyping, Playtesting, and Development." https://stonemaiergames.com/tabletop-game-prototyping-playtesting-and-development/ (accessed 2026-06)
[2] "Introduction to Writing Good Puzzle Hunt Puzzles" (D. Wilson, MIT) — testsolving as the most important step; two independent unspoiled testsolves; non-interference; solvability. https://www.mit.edu/~dwilson/puzzles/puzzlewriting.html (accessed 2026-06; via search index)
[3] BackerKit — "The 3 stages of playtesting: Internal, Local, and Blind." https://www.backerkit.com/blog/tabletop-games-crowdfunding-roadmap/playtest/the-3-stages-of-playtesting-internal-local-and-blind/ (accessed 2026-06)
[4] Escape Room Workshop — "The Importance of Testing Escape Rooms." https://erworkshop.com/home/the-importance-of-testing-escape-rooms.html (accessed 2026-06)
[5] Society of Curiosities — "Our Escape Room Playtest Process." https://blog.societyofcuriosities.com/2025/05/07/our-escape-room-playtest-process/ (accessed 2026-06)
[6] itch.io blog — "Playtesting for larps" (usability read-throughs; R.I.T.E. document hand-off; scaling player count). https://itch.io/blog/701979/playtesting-for-larps (accessed 2026-06)
[7] "Moon Logic Puzzle" — TV Tropes (definition of unfair counter-intuitive puzzle; fair aha makes sense in hindsight). https://tvtropes.org/pmwiki/pmwiki.php/Main/MoonLogicPuzzle (accessed 2026-06; via search index)
[8] EN World — "WotC on One D&D Playtest Survey Results" (numeric grading thresholds: 80%+, 70s, sub-60%). https://www.enworld.org/threads/wotc-on-one-d-d-playtest-survey-results-nearly-everything-scored-80.693544/ (accessed 2026-06)
