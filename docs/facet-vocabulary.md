# Facet vocabulary (controlled) — the keys axes

The article `facets` were coined **free-form** during writing (Phase-5 decision D2) to avoid the
blind spots a fixed tag list would impose. At keys time (#54) they were **clustered into the
controlled vocabularies below and the controlled tags were forced back onto the 116 articles**
(#63). This file is the canonical registry of the browse axes; the keys generator
(`scripts/keys.py`) reads the article facets directly.

**Key-generation rule:** a tag that covers **fewer than 2 articles** stays on its article (it is
accurate) but is **not** rendered as a browse entry — a one-article key is not a lookup.

## `media` — the four faces (already controlled)
`interactive-fiction` · `live-game` · `tabletop` · `puzzle-hunt`

These four faces are the **article** `media` facet: they drive the cross-media matrix
and the By-Medium key, and the whole guide is framed around them. Adding a face here
means re-auditing every article (tracked as issue #65), so the set is closed.

**Exemplar-only label:** an *exemplar* profile's singular `medium` field may additionally
take **`video-game`** for digital single-player games (The Witness, Baba Is You, Blue
Prince) that illustrate guide mechanisms but sit outside the four craft-traditions. This is
a gazetteer label only — it is **not** a fifth face, is consumed by nothing automated (keys
read article `media`, not exemplar `medium`), and must never be added to an article's `media`.

## `effects` — what a mechanism is *for* (18)
| term | gloss |
|---|---|
| immersion | feeling present in a believable, coherent world |
| credibility | the fiction, world and characters hold together as plausible |
| tension | sustained dramatic pressure, stakes, dread |
| catharsis | earned emotional payoff, closure, resonance |
| discovery | earned discovery, deduction, the click of a reveal |
| surprise | genuine surprise, the twist, wonder |
| agency | choices feel real and authored by the player |
| mastery | skill, strategic depth, growing competence |
| trust | players/solvers trust the system, the GM, each other |
| suspicion | productive distrust, paranoia, exposure to betrayal |
| legibility | the player can read the situation; learnable, comprehensible |
| belonging | everyone included, has a role; the group's social fabric |
| reach | opens to a wider audience; accessible, more occasions |
| safety | play stays within consented bounds; protected, graceful exit |
| momentum | forward drive, controlled pacing, sustained engagement |
| tactility | hands-on payoff of real objects; keepsakes; table-feel |
| replayability | rewards return visits; fresh runs, variety |
| operability | runner-side: sustainable to run, resilient, no burnout |

## `problems` — the failure mode a mechanism addresses (16)
| term | gloss |
|---|---|
| immersion-break | the spell snaps — non-diegetic intrusion, pasted-on theme, dissonance |
| exclusion | players sidelined, idle, eliminated, locked out — watching not playing |
| domination | one player/team controls the table or outcome (alpha-play, quarterbacking, runaway) |
| degenerate-play | collapses to one line — solved game, dominant strategy, analysis paralysis |
| false-agency | choices that don't matter — railroading, illusory branches |
| pacing-failure | drags, sags, stalls, spikes, or never climbs |
| dead-end | a hard stop with no path forward — bottleneck, single point of failure |
| unsolvability | a challenge that can't fairly be solved — unverifiable, pixel-hunt, ungated |
| unfairness | outcomes the player can't earn or trust — luck spikes, GM fiat, unearned twists |
| safety-failure | play harms participants — unsafe pressure, missing consent, uncontained bleed |
| flat-character | people in the fiction lack life — interchangeable, unmotivated, monoculture |
| prose-failure | the writing fails — info-dump, told-not-shown, on-the-nose, author intrusion |
| voice-drift | tone/register/voice/canon/world-state slip out of consistency |
| disorientation | the audience loses the thread — can't track state, space, structure, ending |
| content-cost | authoring/prep/reset burden outweighs payoff; burnout; single-use waste |
| coordination-failure | group machinery seizes — can't coordinate, isolate, or lack a counterpart |

## `components` — the concrete parts, by kind (10 buckets)
The specific part (e.g. `dice`, `cipher-key`) lives in the article's prose; the facet records its
**bucket**, which is the browse axis.

| bucket | gloss |
|---|---|
| physical-parts | tangible game pieces — dice, cards, tokens, board, miniatures, decks |
| paper-artefacts | documents/handouts/reference texts — clue-text, codex, map, story-bible, feelie |
| procedures-and-protocols | run-time routines — hint systems, debrief, calibration, reset, verification |
| locks-and-concealment | locks, containers, caches, ciphers/inks that gate or conceal |
| electronics-and-digital | powered/networked/scannable — QR/NFC, app, screen, sensor, timer, server |
| structural-primitives | abstract graph/flow — node, branch, gate, hub, bottleneck, thread, clock |
| state-and-resource-trackers | quantified state + resolution dials — flag, meter, track, win-condition, skill-check |
| narrative-primitives | craft abstractions of story/voice — beat, scene, POV, trope, oracle, reveal |
| set-dressing-and-environment | sensory/spatial environment — lighting, soundscape, scent, props, costume |
| roles-and-social-frame | people-parts + the social/safety contract — faction, hidden-role, safety-tool, gm-role |

## `genre` — the fiction (13) — split from the old conflated axis
`mystery` (incl. detective/crime/cosy/noir) · `horror` · `sci-fi` · `fantasy` · `historical` ·
`adventure` · `heist` · `thriller` · `literary` · `drama` · `romance` · `comedy` · `childrens-ya`

## `format` — the played form (14, new axis) — split from genre
`escape-room` · `outdoor-hunt` · `legacy-game` · `eurogame` · `wargame` · `abstract` ·
`social-deduction` · `party` · `cooperative` · `solo` · `sandbox` · `immersive` · `puzzle` · `strategy`
*(Sparse: only 6 cover ≥2 articles; the rest sit on single articles and are excluded from the key by
the threshold.)*
