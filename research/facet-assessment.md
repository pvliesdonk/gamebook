# Facet assessment (Phase 5, per-family) — input to keys reconciliation (#54)

> Per Phase-5 decision D2: facets are coined free-form while writing; this note records the values
> coined per family and flags clusters / near-synonyms for the eventual controlled-vocabulary pass
> at keys generation (#54). **No controlled vocabulary is enforced during Phase 5.**

## Space, Props & Materiality (12 articles)

Distinct values coined: **effects 37, problems 44, components 61, genre 12.** Components sprawl
hardest (concrete props), genre is already near-controlled. Clusters to collapse at #54:

- **effects** — `tactile-payoff` / `tactile-belief` / `tactility` → *tactility*; `immersion` /
  `presence` / `presence-proof` / `sense-of-place` / `world-weight` / `belief` → *immersion/presence*;
  `discovery` / `exploration` / `earned-reveal` / `progressive-reveal` / `surprise` →
  *discovery/reveal*; `durability` / `reset-durability` / `run-consistency` / `run-to-run-consistency`
  → *run-consistency*.
- **problems** — `immersion-break` is the dominant shared value (6x); collapse `reset-overhead` /
  `reset-cost` / `slow-reset` / `no-reset` → *reset-cost*; `non-diegetic-screen` /
  `non-diegetic-hardware` → *non-diegetic-element*; `prop-breakage` / `prop-failure` /
  `weather-damage` → *durability-failure*.
- **components** — 61 distinct concrete props; these will cluster into families at #54 (locks,
  containers, paper artefacts, electronics, set-dressing channels) rather than collapse to synonyms.
- **genre** — `mystery` (11) / `heist` (9) / `horror` (7) / `historical` (5) / `fantasy` (4) /
  `sci-fi` (3) are the stable spine; `escape-room` / `outdoor-hunt` / `legacy-game` / `detective` /
  `adventure` / `treasure-hunt` are format tags that arguably belong on a separate axis, not genre.

**Carry-forward for #54:** consider splitting `genre` into *genre* (mystery/horror/…) vs *format*
(escape-room/legacy/outdoor-hunt). Components want a hierarchy, not a flat synonym map.

## Structure & Pacing (18 articles)

Distinct values: **effects 47, problems 50, components 68, genre 14.** Same free-form sprawl; the
sprawl is now visibly cross-family-comparable (Space and Structure share `genre` spine
mystery/horror/fantasy, confirming a controlled genre axis is viable at #54). Clusters to collapse:

- **effects** — `player-agency` / `felt-consequence` / `meaningful-choice` cluster around *agency*;
  `replay-value` / `replayability` (recurs from Space) → *replayability*; `structural-clarity` /
  `orientation` / `legibility` → *legibility*; `emotional-arc` / `catharsis` / `earned-closure` →
  *closure*.
- **problems** — `combinatorial-explosion` / `content-waste` / `scope-creep` → *content-cost*;
  `illusory-choice` / `false-agency` / `railroading` → *false-agency*; `middle-sag` / `anticlimax` /
  `pacing-drag` → *pacing-failure*; `reader-disorientation` / `unmappable` → *disorientation*.
- **components** — 68 distinct; structural primitives (`state-flag`, `choice-point`,
  `convergence-node`, `branch`, `bottleneck`, `hub`, `scene`, `beat`) form a clean **structural-graph
  vocabulary** that is more controlled than Space's prop sprawl. Likely the seed of a real component
  ontology at #54.
- **genre** — `mystery` / `adventure` / `fantasy` / `horror` / `romance` / `drama` spine; same
  format-vs-genre split issue flagged for Space recurs.

**Carry-forward:** the structural-graph component vocabulary (flag / node / branch / bottleneck /
hub / scene / beat) is stable across both Structure and the Puzzles family's Information Architecture
- a good candidate to fix early at #54. `replayability` and the genre spine recur across families.

## Systems & Mechanics (24 articles)

Distinct values: **effects 68, problems 69, components 87, genre 17.** Components widest (concrete
game parts: cards/dice/tokens/decks/clocks/playbooks). Clusters to collapse:

- **effects** — `felt-authorship` / `felt-meaning` / `felt-competence` / `shared-vocabulary` cluster
  around *legibility/agency*; `table-feel` / `dramatic-tension` recur from earlier families.
- **problems** — strong design-specific spine: `solved-game` / `dominant-strategy` /
  `degenerate-strategy` → *degenerate-play*; `ludonarrative-dissonance` / `pasted-on-theme` →
  *theme-mechanism-mismatch*; `swingy-outcomes` / `stalled-scene` recur from the Mechanical
  Resolution anchor.
- **components** — 87 distinct concrete parts (`cards`, `dice`, `tokens`, `clock`, `playbook`,
  `deck`, `market`, `bot-deck`); these want the same component hierarchy flagged for Space.
- **genre** — `sci-fi` / `fantasy` / `horror` / `historical` / `mystery` spine **plus `strategy`,
  `abstract`, `wargame`** (boardgame format/genre terms) — the format-vs-genre split is now
  confirmed across all five Phase-5 families and the Puzzles pilot.

## Cross-family summary (all 5 Phase-5 families + Puzzles pilot, for #54)

The free-form approach (D2) worked: ~6 families coined facets independently, and the clustering is
now visible without any controlled vocabulary having constrained the writing. Firm recommendations
for the keys reconciliation (#54):
1. **Split `genre` into two axes:** *genre* (mystery/horror/fantasy/sci-fi/historical/thriller) and
   *format* (escape-room / megagame / larp / jubensha / legacy / wargame / abstract). Flagged in
   every family.
2. **`effects` and `problems` cluster cleanly** to ~12-18 controlled values each; the per-family
   notes above list the merges.
3. **`components` needs a hierarchy, not a synonym map** - a 4-6 bucket ontology (dice/cards/tokens;
   paper artefacts; locks/containers; electronics; set-dressing; structural primitives like
   flag/node/clock) rather than a flat controlled list.

## Players & Social Dynamics (20 articles)

Distinct values: **effects 72, problems 73, components 71, genre 17** — the widest spread so far
(social/interpersonal concepts resist a tight controlled vocabulary). Clusters to collapse:

- **effects** — `table-trust` / `earned-trust` / `social-investment` → *trust*; `suspicion` /
  `paranoia` / `accusation-energy` → *suspicion*; `curb-cut-benefit` / `wider-audience` /
  `independent-play` → *inclusion-reach*; `vivid-play` / `genuine-tension` → *intensity*.
- **problems** — strong shared spine: `sidelined-players` / `idle-players` / `designed-exclusion` /
  `spectator-limbo` → *exclusion*; `unsafe-pressure` / `consent-failure` / `power-asymmetry` →
  *safety-failure*; `alpha-player-dominance` / `quarterbacking` → *domination*; `uneven-teams` /
  `bottleneck` → *coordination-failure*. **`exclusion` and `safety-failure` are the family's two
  load-bearing problem clusters** and worth promoting to controlled values at #54.
- **components** — `safety-tool` / `hint-system` / `win-condition` / `session-zero-agreement` /
  `hidden-role` / `control-team` are concrete social-design primitives; a controlled component set is
  plausible here.
- **genre** — same mystery/horror/thriller/historical/sci-fi/fantasy spine; the format-vs-genre
  split (escape-room, megagame, larp, jubensha as formats) recurs a third time — **the case for a
  separate `format` axis at #54 is now strong (flagged in all three families written so far).**
