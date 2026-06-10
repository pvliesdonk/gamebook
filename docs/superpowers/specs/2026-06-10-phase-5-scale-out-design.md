# Phase 5 — Scale-Out Writing (Design Spec)

> **DRAFT — 2026-06-10.** For human review before a Phase 5 plan is written. Phase 5 writes the
> bulk of the guide's prose; nothing proceeds without explicit approval (CLAUDE.md gate rule).
> Issue: **#6** (Phase 5 milestone). Builds entirely on the **locked Phase-4 patterns**:
> `docs/phase-4-pattern-lock.md`.

## Goal

Write the **five remaining functional families** to the patterns the Phase-4 pilot locked: **102
articles** and the **7 remaining primers**, each family delivered and reviewed as its own unit.
This is the largest content phase (~7× the pilot). On completion the guide has its full article set
and primer set, ready for Phase 6 (Assembly: keys, exemplars, specimens, design).

## Context

Phase 4 proved the pipeline on Puzzles, Clues & Information (14 articles + "The Fairness Contract"
primer, merged). Phase 5 repeats that pipeline five times. Everything needed is in hand:

- **`docs/phase-4-pattern-lock.md`** — the authoritative how-to-write-a-family.
- **The Puzzles family is the cross-family gold standard.** New articles are written to match it,
  especially `content/articles/puzzles-clues-information/cluing-and-fairness.qmd`.
- **Phase-3 cross-link notes for every family** (`research/gaps/cross-links-<family>.md`) — each
  article's cross-media manifestations, pre-sourced.
- **Genre router** (`research/gaps/genre-conventions-router.md`) feeds Story's 7 genre articles;
  the **process-primer research** (`research/gaps/playtesting-quality-verification.md`) feeds the
  Playtesting primer; the gap-research notes cover the families' corpus-silent (○) cells.
- Term registry (seeded, grows per family), backlinks (`scripts/backlinks.py`), Vale config +
  the `NoForwardRefs` guard, the de-fingerprinting workflow.

## Settled decisions (2026-06-10)

- **D1 — De-fingerprinting is folded into writing, not a separate pass.** Each writing subagent has
  **Vale access** and must leave its article **Vale-clean** (ai-tells, NoForwardRefs, Provenance,
  NoEmDash) before returning: write → `vale <file>` → self-fix → clean. The **brief and the worked
  examples** (the de-fingerprinted Puzzles family) do most of the work upstream: the brief
  explicitly tells the model to avoid verb tricolons, vary sentence structure, use plain
  transitions, and skip LLM-favourite vocabulary. Measure on the first family whether the upstream
  reduction is enough that self-fix is cheap.
- **D2 — Facets stay free-form.** Articles coin facet values as needed (as Puzzles did). After each
  family, a light **facet assessment** records clusters and near-synonyms for later reduction, but
  no controlled vocabulary is enforced now. Full reconciliation is deferred to keys generation
  (#54): clustering later is safer than prematurely fixing a vocabulary and forgetting needed values.
- **D3 — Review gate per family.** Each family is a hard-stop review unit (five gates). The
  Phase-5 milestone is met when the fifth family passes.
- **D4 — Smallest family first.** Order: **Space, Props & Materiality (12) → Structure & Pacing (18)
  → Players & Social Dynamics (20) → Systems & Mechanics (24) → Story, Character & Voice (28).**
  Smallest-first confirms the patterns generalise beyond Puzzles quickly and cheaply.

## The per-family loop

Each family runs on **its own branch off `main`**, merged to `main` at its gate (Q1 — five merges).
In the D4 order:

1. **Anchor article first (Q3).** Write **one** representative article for the family, self-Vale-clean,
   and eyeball it before fanning out. Cheap insurance against family-specific surprises (a new
   article type, a thin corpus area, a voice mismatch). Adjust the brief if needed, then:
2. **Fan out the rest.** One writing subagent per remaining article (Opus). Each agent:
   reads the Puzzles **reference article** + `docs/style-guide.md` + `templates/article.qmd` +
   `docs/term-registry.md` + the article's section of the family **cross-link note** + its feeding
   corpus notes; **harvests** the corpus `## Research Basis` and **researches** the gap cells;
   writes to the stub; then runs **Vale and self-fixes to clean**. Anti-fingerprint guidance and the
   citation/callout/cross-ref policies are in the brief (per D1 and the pattern-lock doc).
3. **Term-registry pass** for the family (batched, as in Phase 4).
4. **Facet assessment** (D2): note the facet values coined; flag clusters for the eventual keys work.
5. **Primer(s)** for the family — **duplication check first (Q2):** before writing any primer, confirm
   it does not duplicate an existing *article* of the same/overlapping name (resolve, rename, or drop);
   then write it. See primer mapping below.
6. **Backlinks rebuild** (`scripts/backlinks.py`) + wire the family into `_quarto.yml`.
7. **Build + Vale** both outputs clean.
8. **Family review gate (HARD STOP)** — human reviews voice/depth/accuracy; on acceptance the family
   **branch merges to `main`** (`--no-ff`) and its tracking issue closes. The merge gate is the
   natural per-session boundary (Q4): one family per run.

### Families and their tracking issues
Space #48 · Structure #44 · Players #47 · Systems #49 · Story #46. (Puzzles #45 closed — done in
Phase 4.)

### Special cases to handle with extra care
- **Story's genre block:** the 7 genre articles are written from the **genre router**
  (`genre-conventions-router.md`); the map-article **"A Taxonomy of Genre Conventions"** is the
  place to **validate the map-variant template** (Q3 — see the `<!-- TEMPLATE-NOTE -->` in
  `a-taxonomy-of-puzzles.qmd` for the three accommodations a map article needs).
- **Boardgame reference appendix (Systems):** Appendix 6Z's 3 articles (Boardgame Mechanism
  Vocabulary, Euro vs Ameritrash, Deckbuilders) are Tabletop-only by the Gate-C1 rescope — write
  them, but scoped as the reference appendix, not cross-media.

## Primers (7 remaining)

Settled set is 8 (#16); "The Fairness Contract" is done. The remaining 7 map to families roughly as
below — **the mapping needs confirming in planning, and one overlap must be resolved:**

| Primer | Likely family |
|---|---|
| Structure & Branching Topologies | Structure & Pacing |
| Pacing & Tension Curves | Structure & Pacing |
| Information Architecture | Puzzles? (overlaps the *article* of the same name — **resolve**) |
| Diegesis & the Magic Circle | Story / Space |
| The Social Contract & Safety | Players & Social Dynamics |
| Resolution & Randomness | Systems & Mechanics |
| Playtesting, Quality & Verification | cross-cutting (process; uses the Phase-3 primer research) |

**Open item:** the "Information Architecture" *primer* collides with the Information Architecture
*article* (Puzzles family, already written). Decide whether the primer is broader orientation, gets
renamed, or is dropped, before writing it.

## Build & tooling

Same as Phase 4: `quarto render` (HTML + Typst PDF, default Typst); wire each family's articles +
primer into `_quarto.yml` chapters; backlinks rebuild per family; `vale content/` clean. Keep the
`styles/config/vocabularies/Gamebook/accept.txt` list current as new proper nouns appear (this will
grow a lot across five families).

## Gates

Five **family review gates** (D3), one per family in D4 order. The fifth passing **is** the Phase-5
milestone (#6 closes). Then Phase 6 (Assembly) and Phase 7 (Polish/release).

## Resolved (2026-06-10)

- **Q1 — Branch strategy:** ✅ **Branch per family, merged to `main` at its gate (five merges).**
- **Q2 — Primer duplication:** ✅ **Before writing every primer, check it does not duplicate an
  existing article** (resolve/rename/drop). Applies to the Information Architecture primer/article
  overlap and any other.
- **Q3 — Anchor-article check:** ✅ **Yes** — write one article per family first and eyeball it
  before fanning out.
- **Q4 — Compute scale:** ✅ **One family per session**, bounded naturally by the per-family merge
  gate.

---

## Appendix — sizing

| Family | Articles | Order | Issue |
|---|---|---|---|
| Space, Props & Materiality | 12 | 1 | #48 |
| Structure & Pacing | 18 | 2 | #44 |
| Players & Social Dynamics | 20 | 3 | #47 |
| Systems & Mechanics | 24 | 4 | #49 |
| Story, Character & Voice | 28 | 5 | #46 |
| **Total** | **102** | | |
