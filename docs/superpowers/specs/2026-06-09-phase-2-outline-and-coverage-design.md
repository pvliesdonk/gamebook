# Phase 2 — Outline and Coverage Map: Design

> **Status:** design approved in brainstorming 2026-06-09; awaiting written-spec
> review before an implementation plan is drawn up (`writing-plans`).
> **Closes (when executed):** issue #3 (Phase 2 milestone).

## Context

Phase 1 is complete and its spine decisions are `settled` (`docs/decisions.md`):
taxonomy (#3), entry template/anatomy (#11), frontmatter schema + facets (#12),
term registry seeded (#13), voice/style guide (#14), provenance markers (#15). The
Phase 0 build skeleton renders to HTML + Typst + EPUB.

A prior coding agent produced a `docs/outline.md` that self-declared
"SCAFFOLDING APPROVED" with no human sign-off, invented a "Sub-part" layer absent
from the concept and settled decisions, referenced federated files that were never
created, and delivered **none** of Phase 2's three real artifacts (entry list,
coverage map, gap list). It was a plausible top-down table of contents never
grounded in the 238-note corpus it is meant to distill. That file has been removed.
Phase 2 starts from a clean, pre-Phase-2 state: no Phase 2 decision is settled.

## Working stance: exploration, not execution

We are still discovering what a field guide *could look like*. Nothing here is
truly frozen — including the Phase 1 "settled" decisions (article template, facet
schema, family boundaries). Treat them as the current best hypotheses and strong
defaults to work from, not constraints to force the corpus into. The pipeline below
is a vehicle for discovering the guide's shape, not an assembly line stamping a
predetermined one.

Consequences for how Phase 2 runs:

- **Deviations are allowed and expected.** If clustering reveals that the
  three-facet schema, the article template, the group layer, or even a family edge
  does not fit the material, that is a *finding*, not a violation.
- **Surface and propose; never silently bend.** When something does not fit, flag
  it, propose the improvement, and — if accepted — update the decision register.
  The forbidden move is quietly forcing the fit (the prior agent's failure) or
  quietly deviating without a record.
- **Improvement suggestions are part of the deliverable.** The main thread and the
  clustering agents actively note "this would work better as X" along the way, not
  only the mechanical artifacts. A Phase 2 output is allowed to include "proposed
  revisions to Phase 1 decisions."
- The gates and the grounding contract stay — not to lock the design, but to keep
  exploration honest and visible.

## Goals

- A human-approved **outline** grounded in the actual corpus.
- A **coverage map** classifying every corpus note (merge / split / drop / new).
- A **gap list** of articles and primers needing research beyond the corpus.
- **Frontmatter-only stubs** for every approved article.
- Settle decision #16 (primer set and count).

## Non-goals

- **No prose.** Article bodies are gated until Phase 4. Stubs are frontmatter only.
- **No research.** Filling gaps is Phase 3 (issue #4); Phase 2 only *identifies* them.
- **No 1:1 note↔article mapping.** Many notes synthesize into one article; some
  split; some drop. The relationship is many-to-many.

## Decisions taken in this brainstorm

(Provisional, like everything else — strong working defaults, revisable on evidence.)

1. **Methodology: corpus-grounded (bottom-up clustering meets top-down families).**
   The article list is *discovered* by clustering corpus notes within each family;
   the act of assigning notes to clusters *is* the coverage map. Structure follows
   evidence, not the reverse.
2. **Production noun: "article."** The word "entry" biases an LLM toward a
   sentence-or-paragraph treatment, collapsing the multi-page depth we want. Every
   schema field, template, registry line, and Phase 4/5 writing prompt says
   **article**. ("chapter" is rejected — it implies linear cover-to-cover reading,
   which the concept explicitly disclaims.) The final *published* label (Entry /
   Article / Account) is deferred to a post-processing rename pass in a later phase.
3. **Three-level hierarchy, discovered not imposed:** Family → group → article. The
   middle "group" layer earns its place from corpus size (as a field guide splits
   "birds" into "European birds" before reaching a species). It is allowed to emerge
   from clustering; it is not pre-stamped.
4. **Scale: emergent, with a calibration family.** No fixed article-count band. The
   first family is clustered end-to-end and reviewed; its granularity becomes the
   reference density for the other five, so emergence stays consistent across
   families.
5. **Two human gates inside Phase 2** (Gate A after the calibration family, Gate B
   = the milestone gate). No artifact is "approved" without the human in the loop.

## The pipeline

```
Stage 0  Corpus inventory            → research/corpus-manifest.md
Stage 1  Calibration family          → one family's Family→group→article tree
         ── GATE A (human) ── lock granularity, grouping, format, note→article calls
Stage 2  Fan-out (remaining 5)       → per-family trees, calibration as reference
Stage 3  Reconcile + consolidate     → outline, coverage-map, gap-list, primers
         ── GATE B (human) ── milestone gate: approve outline + map + gaps + primers
Stage 4  Stub generation             → frontmatter-only article stubs
```

### Stage 0 — Corpus inventory

Check `embeddings_status`; build embeddings if absent (semantic search must be
available downstream). Enumerate every Narrative & Game Design note via
`list_documents` / `list_folders`. Emit `research/corpus-manifest.md`: one row per
note — `path | title | current category | tentative family | size | graph role`.
Graph role (hub / leaf / orphan) comes from `get_most_linked` and
`get_orphan_notes`. This manifest is the ground truth the completeness check (Stage
3) runs against.

### Stage 1 — Calibration family (pilot of the method)

Suggested family: **Puzzles, Clues & Information** (well-bounded, corpus-rich).
Done **in the main thread, no delegation**, so the human watches every note→article
call as it is made. Cluster its notes into a Family → group → article tree using the
three corpus signals (below). Each proposed article carries: working title,
one-line scope/silhouette, feeding corpus-note paths, seeded facets where evident,
provenance hint (corpus-backed vs. `gap`).

**GATE A.** Human reviews granularity, the grouping layer, the artifact format, and
the note→article assignments — and equally, whether the article template / facet
schema actually fit what the corpus contains (proposed revisions welcome here). The
accepted pattern becomes the working reference for fan-out (revisable if a later
family contradicts it). Nothing downstream proceeds until accepted.

### Stage 2 — Fan-out (remaining five families)

One capable subagent per family (Sonnet/Opus — judgement work, never Haiku), each
handed the locked calibration family as a worked example and the same hard output
contract. Same per-article output as Stage 1. The calibration family is the density
reference, keeping granularity consistent across families.

### Stage 3 — Reconcile and consolidate

- Resolve cross-family mechanisms (e.g. Progress Clock spans Family 1/6): one home,
  cross-references elsewhere. Dedup. Finalize the global article list.
- Derive the **primer list** (settles #16) from the families and big terrain
  features (concept suggests ~5–8).
- Decide which **Keys / exemplar profiles / style specimens** carry over.
- Consolidate the **coverage map** (every note → disposition) and **gap list**.
- Run the **completeness check**: every manifest note appears in the coverage map
  exactly once; orphans explicitly accounted for. Any note appearing nowhere is
  reported as an error, never silently dropped.

**GATE B (milestone gate).** Human approves outline + coverage map + gap list +
primer list. On approval, flip decision #16 to `settled` with the date.

### Stage 4 — Stub generation

Only after Gate B. Mechanically emit one frontmatter-only `.qmd` stub per approved
article (settled schema: title, aliases, family, media, facets, provenance), facets
seeded where the clustering makes them obvious and blank otherwise, with a `STUB`
notice and no prose body. Stub-to-issue tracking granularity is an open
sub-decision (see below).

## Execution model — clustering signals and anti-invention contract

**Clustering is driven by three corpus signals, reconciled — not invented:**

1. **Existing folder/category structure** — the corpus's 30+ subcategories are a
   human-curated first-pass grouping; the natural seed for the "group" layer.
2. **Link graph** — `get_most_linked` (article-centre candidates),
   `get_backlinks` / `get_outlinks` (merge candidates around a hub),
   `get_orphan_notes` (nothing silently dropped).
3. **Semantic similarity** — `get_similar` and hybrid `search` find related notes
   *across* folders, catching cross-cutting mechanisms instead of burying them.

An article proposal is where the three signals agree; disagreement is a flag for
review, not a guess.

**Output contract every clustering step obeys:**

- Every proposed article lists the **real vault note paths** that feed it; the main
  thread spot-checks a sample against the vault before anything reaches the human.
- An article with **no corpus base is allowed but must be tagged `gap`** with a
  one-line justification. It may never appear corpus-backed when it is not.
- **No prose. No facets beyond what the notes support.** Output is structured
  (tables), so it stays auditable.
- **Completeness is enforced** at Stage 3 against the Stage 0 manifest.

This makes an ungrounded structure impossible to deliver invisibly: agents propose
from real signals citing real paths, the main thread verifies against the vault, the
human approves at the gates.

## Artifacts and formats

| Artifact | Path | Shape |
|----------|------|-------|
| Corpus manifest | `research/corpus-manifest.md` | row/note: path, title, category, tentative family, size, graph role |
| Outline | `docs/outline.md` (rebuilt) | Family → group → article tree; each article: title, one-line scope, media tags, provenance hint, `gap` flag; plus Primers / Keys / Exemplars / Specimens sections |
| Coverage map | `docs/coverage-map.md` | *note-centric* table: note path, disposition (merge/split/drop/new), target article(s), rationale |
| Gap list | `docs/gap-list.md` | item, type (article/primer), family, why it is a gap, research direction — feeds Phase 3 (#4) |
| Stubs | `content/articles/<family>/<slug>.qmd` | frontmatter only (settled schema), seeded facets, `STUB` notice, no prose |

## Production vocabulary changes (entry → article)

Keeping "entry" in production infrastructure undercuts decision 2. Contained
blast radius (verified):

- `templates/entry.qmd` → `templates/article.qmd`
- `content/entries/` → `content/articles/` (placeholder `index.qmd` reworded)
- `_quarto.yml`: `part: "Entries"` → `part: "Articles"`, path updated
- `content/keys/index.qmd`: reword "entry frontmatter" → "article frontmatter"

The *published* part label remains a later cosmetic decision (the rename pass); this
change is purely the production-time vocabulary.

## Open sub-decisions (resolve in writing-plans)

- **Stub-to-issue granularity.** CLAUDE.md's stub convention says each stub has a
  corresponding open issue. One issue per article (~dozens) is excessive;
  recommendation is per-family (or per-group) tracking issues under the Phase 4/5
  milestones. To be decided when the plan is written.
- **Which family is the calibration family** if not Puzzles, Clues & Information.

## Gate definitions

- **Gate A (internal):** human accepts the calibration family's article tree —
  granularity, grouping layer, artifact format, and note→article assignments.
- **Gate B (Phase 2 milestone, issue #3):** human approves the outline, coverage
  map, gap list, and primer list; stubs exist for the full approved outline;
  decision #16 flipped to `settled`.

## Failure modes this design addresses

- *Ungrounded top-down structure* → corpus-signal-driven clustering + cite-real-paths
  contract + main-thread verification.
- *Fake self-approval* → two explicit human gates; calibration family proven before
  fan-out.
- *Silent note loss* → completeness check against the Stage 0 manifest; orphans
  surfaced.
- *LLM under-writing* → "article" production noun; depth deferred to Phase 4 but the
  vocabulary primed now.
- *Inconsistent granularity under "let it emerge"* → calibration family as the
  density reference for all others.
