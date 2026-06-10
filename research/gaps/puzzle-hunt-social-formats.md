# Puzzle-Hunt Social Formats — Phase 3 gap research

> Phase 3 Task 4 research note. Corpus-silent cells: Faction-Design·Puzzle-Hunt,
> Host-Roles·Puzzle-Hunt, Cooperative-vs-Adversarial·Puzzle-Hunt, Spectator·Puzzle-Hunt,
> Mixed-Ability·Puzzle-Hunt. Provenance: [researched] (cited) · [synthesis]. Not rendered.

## Faction Design & Asymmetric Objectives · Puzzle-Hunt

The mainstream puzzle-hunt tradition (MIT Mystery Hunt, DASH, Galactic Puzzle Hunt) is
near-uniformly **single-objective and parallel**: every team chases the same goal (find
the coin, solve the meta) and competition is expressed only as a leaderboard or a race to
the coin. Designed asymmetric objectives — different teams pursuing structurally different
win conditions — are essentially **not attested inside the puzzle-hunt format itself**
[synthesis, from the absence of such structures in the cited hunt write-ups].

Where faction/asymmetric structure *is* attested is in the adjacent **ARG** medium, not in
puzzle hunts proper. Ingress (Niantic) splits its entire playerbase into two standing
factions — the Enlightened and the Resistance — who compete to capture the same real-world
portals, i.e. **symmetric objective, opposed sides** rather than asymmetric goals [researched, 1].
ARG design guidance treats player-vs-player competition as a deliberate accommodation of the
"Killer"/competitive Bartle type: "pitting players against each other" via "player-to-player
trivia competitions or single player mini-games, the results of which might allow the ability
to reduce or stop other players' progress" [researched, 2]. That is the closest documented
analog to faction design, and it lives in the ARG layer wrapped *around* puzzles, not in the
puzzle-solving mechanic.

**Takeaway for the matrix:** Faction-design with genuinely asymmetric objectives is an
ARG/large-game pattern, weakly-to-not attested in the puzzle-hunt format. Hunts borrow
faction *flavor* (team identity, theme) far more often than faction *mechanics* (opposed or
asymmetric win conditions) [synthesis].

## Host Roles & the Host-Cannot-Play Problem · Puzzle-Hunt

The host-cannot-play problem is **structurally institutionalized** in the MIT Mystery Hunt:
the hunt "is organized and created by the team that won the event the previous year, ensuring
that no hunt will be won (or run) consecutively by the same people" [researched, 3]. Winning
is therefore self-limiting — the prize is "the honor of writing the hunt the next year,"
which removes the winners from competition during their construction year [researched, 3].
This makes the verifier/host role a whole *team* for a whole *year*, not a single GM.

The workload is the dominant theme in organizer reflections: the Hunt "costs tens of thousands
of person-hours to produce, and it is free … a miracle that the Hunt happens at all"
[researched, 4]. Crucially, **writing skill ≠ solving skill**: "The skill set to win Hunt is
not the same as the skill set to write Hunt … that still leaves all the time estimation,
organization, theming, and tech required to make the Hunt tick" [researched, 5]. The tension
is acute enough that top teams form **inter-team succession agreements** — e.g. teammate and
Galactic agreed that if either won they would help the other write — because a team strong
enough to win may not *want* (or be staffed) to spend the next year hosting instead of solving
[researched, 5].

For smaller self-run hunts (DASH) the host-cannot-play problem is handled differently: hint
delivery and answer-verification are offloaded to an app (ClueKeeper), so a site needs only a
light-touch volunteer rather than a present GM who knows all answers [researched, 6]. The
operator-workload axis thus scales with how much verification is automated vs. human
[synthesis].

## Cooperative vs Adversarial Formats · Puzzle-Hunt

In the **format-design** sense (not mere leaderboard racing), puzzle hunts sit firmly on the
**cooperative** end. The unit of play is the team solving *together*; adversarial pressure is
almost entirely external (the clock, the coin race) rather than designed into puzzle mechanics
[synthesis]. DASH even bakes in **inter-team cooperation**: its first puzzle is "solved in
collaboration with another team; each team that solves it gets the base score," plus an unscored
icebreaker requiring teams to cooperate [researched, 6]. That is the opposite of an adversarial
format — a deliberate coop-between-rivals on-ramp.

Genuinely adversarial *format* design — teams able to block, sabotage, or steal from each other
— is again an **ARG/game-layer** import, not native to hunts: ARG design explicitly lists
mini-games "which might allow the ability to reduce or stop other players' progress" [researched, 2].
So the coop-vs-competitive axis for hunts reads: **cooperative within team** (always),
**competitive between teams** (leaderboard/race, common), **adversarial between teams**
(mechanical interference, rare and ARG-derived) [synthesis].

## Spectator-Friendly Design · Puzzle-Hunt

Hunts handle partial and passive participants along a spectrum. **Drop-in / mixed-pace
teammates** are absorbed by the parallel-open structure: a well-run hunt keeps "~15–20 puzzles
open at a given time" so a slower or late solver can pick up an independent puzzle rather than
blocking the team's critical path [researched, 7]. **Remote partial participants** are
increasingly first-class: Brown Puzzlehunt provides "fully remote-accessible versions of all
physical puzzles," and MIT Mystery Hunt 2026 "can be played through by a fully remote team,
with the exception of events and runarounds," with a livestreamed kickoff [researched, 8].

For a true **audience following a live solve**, tooling exists but is still a bolt-on rather
than a native hunt feature: PuzzleMe offers a "spectator mode" giving organizers a spectate-page
URL "to watch puzzles being solved in real-time and share it with an audience via projecting on
a large screen or streaming it online" [researched, 9]. Culmination livestreams (e.g. AWS Quest
streaming the final assembly) are the dominant spectator pattern — **finales are spectated,
mid-hunt solving generally is not** [researched, 8; synthesis].

## Mixed-Ability Groups & Universal Design · Puzzle-Hunt

Hunt design has a well-articulated "no-one-left-behind" philosophy, though it is framed more as
**ability-of-team** than disability accessibility. The core principles from Mystery Hunt design
reflection: "Small teams of undergrads are … the heart of the hunt"; "As many teams as possible
should reach a satisfying completion point"; and a deliberately reachable interaction so even
non-finishing teams get closure (31 of 54 teams reached the Jabberwock interaction in the cited
year) [researched, 7]. Redundancy is structural rather than per-puzzle: keeping many puzzles open
gives each solver an entry point matching their strength, and release is throttled so large teams
can't win on manpower alone — "Being on campus should be an advantage" without that advantage
becoming domination [researched, 7].

The **"everyone contributes"** goal is best served by *format diversity*: blending puzzle types
(logic, wordplay, physical, photo, observation) so different abilities each find a foothold, and
assigning rotating roles (navigator, documentarian, solver) so all members are active
[researched, 10]. DASH's explicit **Standard vs Expert tracks** are the canonical mixed-ability
accommodation — same hunt, Expert teams "figure out what they need to do with fewer explicit
instructions," Standard teams get instructions, so a mixed-experience crowd self-sorts without
splitting the event [researched, 6].

True **universal/disability** design (multi-sensory clue encoding, screen-reader-safe puzzles,
redundant solution paths so no single sense is load-bearing) is the least-attested cell: it
appears as an aspiration in accessibility-research literature on mixed-ability teamwork
[researched, 11] more than as documented hunt practice [synthesis]. This is a genuine gap —
hunt culture has "no-one-left-behind" for *skill*, but only an emerging, mostly-undocumented
practice for *sensory/physical access*.

## Sources

[1] Alternate reality game — Wikipedia (Ingress two-faction structure). https://en.wikipedia.org/wiki/Alternate_reality_game (accessed 2026-06)
[2] Alternate Reality Game Design: Story And Player Types — eLearning Industry. https://elearningindustry.com/alternate-reality-game-design-story-player-types (accessed 2026-06)
[3] MIT Mystery Hunt — Wikipedia (winning team writes next hunt; coin; team sizes). https://en.wikipedia.org/wiki/MIT_Mystery_Hunt (accessed 2026-06)
[4] On the MIT Mystery Hunt 2026 — CJ Quines, Infinite Ascent (person-hours, free production). https://blog.cjquines.com/post/mystery-hunt-2026/ (accessed 2026-06)
[5] MIT Mystery Hunt 2026 — Alex Irpan (write-skill ≠ solve-skill; teammate/Galactic succession agreement). https://www.alexirpan.com/2026/01/29/mh-2026.html (accessed 2026-06)
[6] DASH — Frequently Asked Questions (Standard/Expert tracks, team size, ClueKeeper hints, inter-team first puzzle). https://playdash.org/faq.php (accessed 2026-06)
[7] A Mystery Hunt Design Philosophy — Colossus of Rhode (parallel-open puzzles, satisfying completion point, small-team heart). https://colossusofrhode.com/2014/01/29/a-mystery-hunt-design-philosophy/ (accessed 2026-06)
[8] Defense of the In-Person MIT Mystery Hunt / remote-play notes — ebroder.net and Brown Puzzlehunt info (remote-accessible puzzles, livestreamed kickoff). https://ebroder.net/posts/defense-of-in-person-mystery-hunt/ ; https://www.brownpuzzlehunt.com/info (accessed 2026-06)
[9] Spectator Mode for Contests — PuzzleMe / Amuse Labs (live spectate URL, streaming). https://amuselabs.com/docs/contests/spectator-mode/ (accessed 2026-06)
[10] How to Run Competitive Team Games That Stay Inclusive — The Big Smoke Events (format diversity, rotating roles for mixed contribution). https://www.thebigsmokeevents.com/2026/03/31/how-to-run-competitive-team-games-that-stay-inclusive-even-with-mixed-personalities/ (accessed 2026-06)
[11] Understanding How Accessibility Practices Impact Teamwork in Mixed-Ability Teams (arXiv) — accessibility as a shaping mechanism in mixed-ability collaboration. https://arxiv.org/pdf/2602.04015 (accessed 2026-06)
