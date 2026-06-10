# IF Systems Abstractions — Phase 3 gap research

> Phase 3 Task 4 research note. Corpus-silent cells: Playbook-Design·IF,
> Progress-Clocks-&-Faction-State·IF, Prep-Economy·IF.
> Provenance: [researched] (cited) · [synthesis]. Not rendered.

## Playbook Design · IF

The tabletop "playbook" — a bundled identity that ships pre-packaged moves,
stats, and relationships chosen at the table's start — has **no single named IF
counterpart**, but its two constituent ideas appear separately and are both
documented design vocabulary.

- **Stat-gated availability is a first-class engine feature.** ChoiceScript
  exposes two gating primitives: `*selectable_if` greys out an option the player
  can see but cannot take, while a plain `*if` hides the option entirely from
  players outside the required stat profile [1]. The same article uses the
  worked example of a low-Daring character not being offered the skydiving
  option — i.e. a stat value deciding which content is reachable [1]. This is the
  mechanical substrate a playbook would need: "your build determines which moves
  you can play."
- **The up-front "what kind of character am I" choice is recognised but is
  usually distributed, not bundled.** Choice of Games frames early-game
  "Establishing Choices" as the place where "the reader develops their character
  (commonly referred to as 'character generation') and learns about the rules of
  the world" — but treats it as an *ongoing* series of individual choices spread
  across the opening chapter (talk down / chase / intimidate, each nudging a
  different stat) rather than one packaged role pick [2]. So the tabletop
  playbook's defining move — choose the whole bundle at once — is the part IF
  tends *not* to do by default [synthesis].
- **The bundled-pick variant does exist as a named structural pattern: the
  "Sorting Hat."** Sam Kabo Ashwell's taxonomy describes early-game branching
  that ends by "ultimately determining which major branch the player gets
  assigned to," with those branches "typically quite linear" thereafter [3]. A
  Sorting Hat that assigns a role/origin and then routes the player into a
  role-specific, largely linear track is the closest structural analogue to the
  bundled-identity playbook [synthesis]. Choice of Rebels' opening
  "helot or aristocrat" fork is the canonical worked example, and the COG
  guidance flags its real cost: the author "has to reference both branches…
  later in the game, and both branches have to be equally satisfying" — the
  up-front bundle commits you to honouring that identity for the whole runtime
  [2].

**Net:** the playbook's two halves map cleanly onto IF — stat-gated content
(`*if`/`*selectable_if`) supplies "your build gates your moves," and the Sorting
Hat supplies "pick the bundle up front and get routed" — but IF has no unified
term that fuses both into one abstraction the way a tabletop playbook does
[synthesis].

## Progress Clocks & Faction State · IF

A segmented, visible, threshold-triggering countdown **does** exist in IF as a
reusable abstraction, but it lives inside the broader quality-based-narrative
(QBN) vocabulary rather than as a separately named "clock" primitive.

- **The generic substrate is the "quality."** In Failbetter's QBN model a quality
  is a numerical variable that "can go up or down during play, and represent[s]
  absolutely everything from inventory… to skills… to story progress" [4]. A
  progress clock is therefore not a distinct data type — it is a quality whose
  *intended use* is "fill toward a threshold that fires a consequence"
  [synthesis].
- **Fallen London's "menace" qualities are the documented clock-with-threshold
  instance.** Menaces (Wounds, Nightmares, Suspicion, Scandal) are tracks that
  fill as a consequence of risky actions; crossing fixed thresholds changes the
  game state — level 5+ injects menace-specific cards into the player's
  Opportunity Deck, and level 8 forcibly sends the player to a penalty location
  they must spend actions to escape [5]. This is exactly the "visible filling
  track that triggers consequences at thresholds" pattern, distinct from a binary
  state flag because the *intermediate* values (5, 8) carry distinct mechanical
  meaning [5].
- **Storylet preconditions are what read the clock.** Emily Short defines a
  storylet as content + prerequisites that "determine when the content can play"
  + effects on world state; she explicitly cites the Fallen London "menace stat"
  as a quality that gates which content becomes available [6]. So the reusable
  loop is: an action raises a menace quality → its new value satisfies (or
  newly fails) some storylet's precondition → different content surfaces. The
  clock is a design *convention layered on* the quality+precondition mechanism,
  not engine machinery of its own [synthesis].
- **In Twine the same abstraction is hand-rolled, not built-in.** Twine has no
  native clock object; authors implement countdown/threat tracks as ordinary
  variables incremented per passage, with story-format timer macros
  (Harlowe `(live:)`, SugarCube timed passages) used for *real-time* timers
  rather than narrative countdowns [7]. The "doom clock / threat track" is thus a
  documented community *pattern* in Twine, but the segmentation-and-threshold
  discipline is the author's responsibility, not the format's [7][synthesis].

**Net:** the clock-as-design-language exists in IF and is most crisply visible in
Fallen London's menaces, but it is realised as a *usage convention over a generic
numeric quality* rather than a named, segmented primitive the way tabletop
"clocks" are [synthesis].

## Prep-Economy · IF

The cross-media prep-vs-payoff idea — budgeting how much branch/content to
pre-author against how much to leave procedural or templated — has a direct and
much-discussed IF analogue, framed as the economics of branching versus modular
(storylet/QBN) authoring. (The guide's IF authoring/tooling cluster was descoped;
this is the light cross-media reflection, not a tooling deep-dive.)

- **Pure branching has a punishing prep curve.** Short's standing critique is that
  combinatorially branching narrative "punishes [authors] for writing new content
  because it commits them to writing yet more content down the line" — each
  forward branch obligates more downstream branches, so pre-authored cost grows
  exponentially with depth [4]. This is the IF statement of "all payoff is
  pre-paid, and the bill compounds" [synthesis].
- **Storylets are explicitly the move to amortise that prep cost.** Short argues
  the value of storylets is "the robust ability to add things later, the
  possibility of making stories interlock in interesting ways, [and] the design
  discipline of generalizing about how your narrative space works" [8]. Reusable,
  recombinable modules let one authored unit pay off in many states, lowering the
  pre-authored content needed per unit of player-visible variety [synthesis].
- **But the saving is conditional — under-using state wastes the prep budget.**
  Short warns that if you build storylets but give each a unique single-use flag
  (a "time cave" in disguise), "you're not getting most of the value of using
  storylets" [8]. So IF's prep economy has the same trap as the tabletop one:
  the budget only pays off if the pre-authored units are *generalised* enough to
  recombine; bespoke one-shots collect no interest [synthesis].
- **Tooling can shift the budget rather than eliminate it.** Short notes
  systems like Versu/Character Engine "use tooling to make it easier to author
  explicit branching elements embedded in a larger procedural flow" — i.e. you
  pay some prep into procedural machinery that then generates variation, moving
  cost from hand-authored branches to reusable procedural rules [4]. That is the
  IF face of the prep-vs-procedural slider the cross-media idea describes
  [synthesis].

**Net:** IF authors do treat the pre-author-vs-procedural/modular split as a
genuine design discipline — branching = maximal prep, storylets/QBN = amortised
prep via recombination, procedural tooling = prep shifted into rules — and the
core warning (generalise your modules or the prep is wasted) is the cross-media
prep-economy idea in IF clothing [synthesis].

## Sources

[1] Choice of Games, "Important ChoiceScript Commands and Techniques."
https://www.choiceofgames.com/make-your-own-games/important-choicescript-commands-and-techniques/ (accessed 2026-06)

[2] Choice of Games, "A Taxonomy of Choices: Establishing Character" (2017).
https://www.choiceofgames.com/2017/12/a-taxonomy-of-choices-establishing-character/ (accessed 2026-06)

[3] Sam Kabo Ashwell, "Standard Patterns in Choice-Based Games" (These Heterogenous Tasks, 2015).
https://heterogenoustasks.wordpress.com/2015/01/26/standard-patterns-in-choice-based-games/ (accessed 2026-06)

[4] Emily Short, "Beyond Branching: Quality-Based, Salience-Based, and Waypoint Narrative Structures" (2016).
https://emshort.blog/2016/04/12/beyond-branching-quality-based-and-salience-based-narrative-structures/ (accessed 2026-06)

[5] Fallen London Wiki, "Menaces (Guide)."
https://fallenlondon.wiki/wiki/Menaces_(Guide) (accessed 2026-06)

[6] Emily Short, storylet definition and Fallen London menace reference, "Storylets: You Want Them" (2019).
https://emshort.blog/2019/11/29/storylets-you-want-them/ (accessed 2026-06)

[7] UTM Game Design Techniques Wiki, "Creating Timed Response and Countdown Timer in Twine"; Twine Cookbook, SugarCube timed passages.
https://utm-game-design-techniques.fandom.com/wiki/Creating_Timed_Response_and_Countdown_Timer_in_Twine ; https://twinery.org/cookbook/timedpassages/sugarcube/sugarcube_timedpassages.html (accessed 2026-06)

[8] Emily Short, "Storylets: You Want Them" (2019) — authoring economics / modular reuse.
https://emshort.blog/2019/11/29/storylets-you-want-them/ (accessed 2026-06)
