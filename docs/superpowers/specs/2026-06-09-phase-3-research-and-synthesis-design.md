# Phase 3 — Research and Synthesis for Gap-Flagged Items: Design

> **Status:** design approved in brainstorming 2026-06-09; awaiting written-spec review
> before an implementation plan (`writing-plans`).
> **Closes (when executed):** issue #4 (Phase 3 milestone).
> **Governed by** the project's exploratory stance: settled decisions (incl. the Phase-2
> outline) are revisable on evidence — this phase is explicitly allowed to send findings
> back up (e.g. cut a weakly-integrated article/family).

## Context

Phase 2 is complete (merged to `main`, issue #3 closed): a 116-article outline across 6
families, a check-verified coverage map (all 234 corpus notes dispositioned), a 32-profile
Exemplars gazetteer, 24 style specimens, and 8 primers. The Phase-2 gap list
(`docs/gap-list.md`) is deliberately thin — the corpus is mature, so most articles are
`corpus`-backed.

Phase 3 (issue #4) produces **research notes and captured sources** for every gap-list item —
research material, **not** entry prose (prose stays gated until Phase 4). The headline
deliverable issue #4 names is the **cross-pillar concept maps for tabletop and puzzle hunts**
(the corpus has a Live↔IF concordance but never built tabletop/hunt ones).

## Working stance

Synthesis-first. The corpus already cross-connects much of the four media pillars (Phase-2
fan-out merged cross-media notes into shared functional articles). Phase 3 *completes* the
under-connected pillars and makes the cross-media web explicit; it does **not** re-research
what the corpus already holds. External research is reserved for cells the corpus is genuinely
silent on.

## Goals

- A single **cross-media matrix** mapping every article to the media it manifests in, which
  satisfies both named cross-pillar items and re-validates IF/Live.
- **Research notes + footnote-ready citations** for every genuine gap the matrix surfaces.
- Two synthesis notes: the **Genre Conventions router** and the **Playtesting, Quality &
  Verification primer**.
- A **boardgame-integration finding** (keep/cut recommendation) that falls out of the matrix.

## Non-goals

- **No entry prose.** Output is research notes/sources only (Phase 4 writes prose).
- **No exhaustive cell-by-cell external research.** Synthesis cells (manifestation exists
  elsewhere in corpus) are resolved by cross-linking, not researching.
- **No outline rewrite** — though the boardgame finding may *recommend* one for human decision.

## Decisions taken in this brainstorm

(Provisional, like everything else — strong working defaults.)

1. **Scope: strict gap-list** (issue #4's items only). Thin-but-corpus-backed articles are
   strengthened later, *when written* (Phase 4/5), where the need is concrete.
2. **Form: one unified cross-media matrix** (not two per-pillar concordances). It covers
   tabletop *and* puzzle-hunt *and* re-validates IF/Live in one artifact, feeds the `media`
   facet/Keys, and its empty cells *are* the research gaps.
3. **Boardgame design is in scope for cross-mapping** — and the matrix is its **diagnostic**:
   if its rows connect to nothing outside Tabletop, that isolation is the argument to cut it
   from the guide. Evidence decides.
4. **Two human gates** (C1 assessed-matrix, C2 milestone), mirroring Phase 2's rhythm.

## Deliverables and artifacts (all in `research/`, not rendered)

| Artifact | Shape |
|----------|-------|
| `research/cross-media-matrix.md` | Rows = 116 articles (grouped by family); columns = IF · Live · Tabletop · Puzzle-Hunt. Cells: **●** corpus-backed · **○** gap (should manifest, no corpus note) · **–** N/A · **?** needs review. |
| `research/gaps/<slug>.md` (one per agreed gap) | Short research note + footnote-ready citations, provenance-tagged (`corpus`/`researched`/`synthesis`). |
| `research/gaps/genre-conventions-router.md` | Synthesis distilled from the 7 genre articles (comparative table: genre × reader-contract × dominant-mechanic × key adaptation). |
| `research/gaps/playtesting-quality-verification.md` | The process primer, generalising `testing_interactive_fiction`, `quality_standards_if`, `research_and_verification` to cross-media, with citations. |
| Boardgame-integration finding | A section in the matrix doc: keep / cut / rescope recommendation, evidence-backed, for human decision. |

## The cross-media matrix

### Build (mechanical scaffold + judgment pass)

- **Scaffold** (`research/build_matrix.py`): parse `docs/outline.md` for each article's feed
  basenames; map each basename → its corpus full path (via `research/corpus-snapshot.json`) →
  pillar (paths encode pillar: `Interactive Fiction/` → IF, `Live Game Design/` → Live,
  `Tabletop/` → Tabletop, `Puzzle Hunts/` → Puzzle-Hunt). Mark **●** in every medium a feeding
  note comes from. Emit the matrix with the remaining cells blank for the judgment pass.
- **Judgment pass** (hands-on): resolve every blank cell to **○ / – / ?**, using vault
  similarity (`get_similar`, hybrid `search`) to check whether a cross-medium manifestation
  already exists in the corpus under another note (→ **○** with a cross-link = synthesis) vs.
  is genuinely absent (→ **○** = needs external research) vs. is N/A (**–**).

### Verification

- A small **check script** (`research/check_matrix.py`) verifies the matrix is complete: all
  116 article rows present (cross-checked against the outline) and **zero unresolved blanks**.
  This is the mechanical-verification analog of `scripts/check_coverage.py`.

### Boardgame diagnostic

- After the matrix is marked, scan the boardgame-design articles. A row that is **●** only in
  Tabletop and **–** elsewhere is an isolated mechanism. If the boardgame cluster is broadly
  isolated, surface a **keep/cut/rescope** finding (evidence: the matrix rows) for the human.

## Execution

- **Scaffold + judgment pass: hands-on** (the analytical core; the boardgame diagnosis lives
  here).
- **Gap-filling splits two ways:**
  - *Synthesis cells* — manifestation exists elsewhere in corpus → record the cross-link in a
    gap note; no external research.
  - *True-gap cells* — corpus silent → **external research via the `deep-research` skill**
    (web sources, adversarial verification, citations). Expected to be few, concentrated in
    tabletop & puzzle-hunt.
- **Genre router**: pure synthesis from the 7 genre articles.
- **Process primer**: generalisation of the 3 IF process notes + light external research where
  the cross-media claim needs a non-IF source.
- **Provenance** (`corpus`/`researched`/`synthesis`) tagged on every claim.

## Gate definitions

- **Gate C1 (assessed matrix — internal):** human reviews the fully-marked matrix *before* gap
  research. Confirms which **○** cells are worth researching vs. waving off as **–**; makes the
  **boardgame keep/cut/rescope** decision; approves the synthesis-vs-research split.
- **Gate C2 (Phase 3 milestone, issue #4):** research notes + citations exist for every agreed
  gap; genre router and process primer notes done; matrix complete and check passes; boardgame
  finding resolved.

## Failure modes this design addresses

- *Cross-pillar work treated as from-scratch* → matrix scaffolds from Phase-2 feeds; only the
  blanks need work.
- *Researching cells the human would reject* → Gate C1 confirms the gap set before research.
- *Over-researching a mature corpus* → synthesis-vs-true-gap split; external research only for
  corpus-silent cells.
- *A weakly-integrated tradition silently carried* → the boardgame diagnostic forces an
  explicit keep/cut decision on evidence.
- *Unverifiable claims* → footnote-ready citations + provenance tags; `deep-research` for
  external items.
