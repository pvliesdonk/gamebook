# Phase 4 Pattern Lock — how to write a family

> Settled by the Phase-4 pilot (Puzzles, Clues & Information, 14 articles + primer), Gate D1.
> This is the authority for Phase 5 scale-out. Everything below was tested on the pilot and
> either held or was revised in response to real drafts. Source decisions: `docs/decisions.md`
> (#11 template, #14 voice, #15 provenance), `docs/style-guide.md`, `templates/article.qmd`.

## Writing model

**Opus** writes the articles. Bake-off result (one article, `Cluing & Fairness`, written three ways
from an identical brief): **Opus** strongest on content/depth; **Sonnet** more readable but thinner
and it broke the no-em-dash rule; **Gemini 3 Pro** far too terse (likely a prompt/CLI-context
artefact, not the model). Opus's register runs technical, so the **"Readability (plain by default)"**
directive in the style guide is mandatory to pull it toward accessibility.

## Article anatomy (revised template, #11)

Silhouette → readable head (1–3 paras, evocative, no headers/bullets) → `## The Mechanism`
(diagnostic headers, reflective prose, data-dense lists → tables) → **callouts, sparing** →
`## Where this fits` (two paragraphs: **The bigger picture** + **Next steps**) → `## Sources`.

Two structures from the original concept were **removed at D1** because they read as bolted-on
metadata and made articles feel un-actionable:

- **No "Interactions" connector block.** Cross-references live **inline in the body**, linked where
  another mechanism becomes of import to the reader. Disambiguation ("X, unlike Y") happens in the
  prose where it arises, not in a list. The closing `## Where this fits` carries the forward
  pointers.
- **No rote "Design Judgement" section.** See callouts.

## Callouts (the rule that bit us)

A fixed Specimen + Field-Note + Hazard trio in every article turned callouts into wallpaper. Locked
policy:

- **At most two callouts per article**, only when a point genuinely warrants being pulled from the
  prose. No fixed order or position.
- **Aim for one Specimen** (a real-world example), placed wherever it fits naturally.
- Field Note / Hazard are optional flavours; use one only if it is a standout. Otherwise weave the
  judgement into the prose.

## Voice

Practitioner head (evocative), engineer body (precise, **not academic**), Mentor callouts. en-GB
spelling, en-NL/metric, 24-hour clock, **no em-dashes**. No marketing fluff, no summary-recap
conclusion, no bullet-dumping in prose.

## Sourcing & provenance (the citation model)

- Every claim tagged `[corpus]` / `[researched]` / `[synthesis]`.
- **Provenance is not a citation.** Every *factual* `[corpus]`/`[researched]` claim must resolve to a
  **real external source** in `## Sources`. **The vault is never cited.**
- **Harvest first:** the feeding corpus notes carry a `## Research Basis` of real sources — pull
  those in. **Research the gaps** where a note has none (e.g. the IF genre notes). Downgrade to
  `[synthesis]` only for genuine opinion.
- Pilot result: 7–14 real external sources per article.

## Terminology

- Production noun **article**; rendered display label **entry** (Q2). Use "article" in all briefs.
- Canonical terms from `docs/term-registry.md` only; do not coin. Flag a genuinely missing term with
  `<!-- TERM-FLAG: ... -->` and do a **batched registry pass at the family's end** (not per article).

## Build & tooling

- `quarto render` produces HTML + **Typst PDF** cleanly with default Typst (custom template #14 not
  needed yet). Wire each family's articles + its primer into `_quarto.yml` chapters.
- **Backlinks**: implemented (`scripts/backlinks.py`, #13). Idempotent pre-render injection of a
  `## Referenced by` block; do not hand-edit the `<!-- BACKLINKS -->` block.
- **Keys**: deferred to Phase 6 assembly (#54). Not built in the pilot.
- **Vale**: now lints `.qmd` (it did **not** before — `.vale.ini` only scoped `*.md`). Keep the
  `styles/config/vocabularies/Gamebook/accept.txt` list current as new proper nouns appear.

## The big Phase-5 cost: de-fingerprinting

The single largest surprise. Opus prose, though it reads well, carries a heavy LLM fingerprint that
the project's own `ai-tells` gate flags hard: the 14 drafts started with **~340 ai-tells findings**,
overwhelmingly **VerbTricolon** (three-part parallel structures), plus formal transitions, overused
vocabulary, emphatic copulas. Clearing them was a real per-article editing pass.

**Implication for Phase 5 planning:** either (a) budget an explicit de-fingerprinting editing pass
per family (a subagent per article that runs `vale <file>` and iterates to clean — this worked), or
(b) bake "vary structure, avoid three-part parallel lists, plain transitions" into the writing brief
to shrink the cleanup. Recommend doing both: stronger brief **and** a verify-and-fix pass, because
the writing model will not self-suppress the fingerprint.

## Workflow that worked (recommended for Phase 5)

1. Write **one reference article first**, get it accepted (voice, template, sourcing), and point all
   subsequent agents at it as the gold standard.
2. **Fan out** the rest as per-article subagents (`model: opus`) with a strong brief: read the
   reference + style guide + template + term registry + the article's cross-link/research notes +
   its feeding corpus notes; harvest + research sources; write to the stub.
3. **Batch and review** (the pilot used batches of ~4–5) with a mechanical sweep after each:
   provenance present, links resolve, no em-dashes, callout policy, both builds.
4. **Batched term-registry pass**, then **de-fingerprinting pass** to Vale-clean, then build + lint.

## Open follow-ups carried out of the pilot

- #50 feed Phase-3 research back to the vault (one-way valve).
- #53 upgrade citations from web pointers to primary sources (cleanup phase).
- #54 keys generation + facet-vocabulary decision (Phase 6 assembly).
- Q3 map-variant template validation: `a-taxonomy-of-puzzles.qmd` carries a `<!-- TEMPLATE-NOTE -->`
  recording three accommodations (load-bearing table, specimen-as-thesis, link-dense close).
