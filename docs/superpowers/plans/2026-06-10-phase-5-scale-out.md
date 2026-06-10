# Phase 5 — Scale-Out Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: superpowers:subagent-driven-development /
> executing-plans. Phase 5 writes guide prose — **gated**; begin only on an explicit human
> "start Phase 5". **One family per session**, each on its own branch off `main`, merged at its
> review gate (five merges total). Run the families in size order.

**Goal:** Write the five remaining families (102 articles + 7 primers) to the locked Phase-4
patterns, each delivered as a reviewed, merged unit.

**Architecture:** Repeat the Phase-4 per-family pipeline five times. De-fingerprinting is folded
into each writing subagent (write → `vale` → self-fix → clean). Anchor-article-first per family,
then fan out. Review gate + merge to `main` per family.

**Tech stack:** Opus writing subagents (with Vale access), `quarto render` (HTML + Typst PDF),
`vale content/`, `scripts/backlinks.py`, the Phase-3 cross-link/gap/router notes, the de-fingerprinted
Puzzles family as the reference.

**Governing stance:** locked patterns (`docs/phase-4-pattern-lock.md`); per-family reviewable units;
facets free-form (assess per family, reconcile later at keys, #54); the corpus stays a point-in-time
input ([[corpus-one-way-valve]]).

**Spec:** `docs/superpowers/specs/2026-06-10-phase-5-scale-out-design.md` (decision-complete; Q1–Q4
resolved).

---

## Family order (smallest first)

1. **Space, Props & Materiality** — 12 articles — #48
2. **Structure & Pacing** — 18 — #44
3. **Players & Social Dynamics** — 20 — #47
4. **Systems & Mechanics** — 24 — #49
5. **Story, Character & Voice** — 28 — #46

---

## The per-family loop (run once per family, in order)

> Substitute `<family>` (dir slug), `<#issue>`, and the family's cross-link note
> `research/gaps/cross-links-<family>.md` throughout.

- [ ] **F0 — Branch.** From up-to-date `main`: `git checkout -b phase-5-<family>`.

- [ ] **F1 — Anchor article + light check (Q3).** Write **one** central, cross-media article for the
  family (see specifics below). The writing agent (Opus) reads the Puzzles reference
  (`content/articles/puzzles-clues-information/cluing-and-fairness.qmd`), `docs/style-guide.md`,
  `templates/article.qmd`, `docs/term-registry.md`, the family cross-link note (its section), and the
  article's feeding corpus notes; harvests `## Research Basis` + researches gap cells; writes to the
  stub; then runs `vale <file>` and **self-fixes to Vale-clean**. **Present the anchor to the human**;
  adjust the brief if anything is off before fanning out.

- [ ] **F2 — Fan out the rest.** One Opus subagent per remaining article, same procedure as F1, each
  returning **Vale-clean** (ai-tells, NoForwardRefs, Provenance, NoEmDash) with provenance + real
  external sources, inline cross-refs, ≤2 callouts, "Where this fits" close. Dispatch in batches;
  mechanical sweep after each batch (provenance present, links resolve, callouts ≤2, em-dash 0).

- [ ] **F3 — Term-registry pass.** Add the family's canonical mechanism terms + sub-terms to
  `docs/term-registry.md`; remove any `<!-- TERM-FLAG -->` once resolved.

- [ ] **F4 — Facet assessment (D2).** Record the facet values the family coined; note clusters /
  near-synonyms for the eventual keys reconciliation (#54). No controlled vocabulary enforced.

- [ ] **F5 — Primer(s).** For each primer the family owns (specifics below): **duplication check
  first (Q2)** — confirm it does not duplicate an existing article; resolve/rename/drop if it does;
  then write it to `templates/primer.qmd`, Vale-clean.

- [ ] **F6 — Wire + backlinks + build + lint.** Add the family's articles + primer(s) to
  `_quarto.yml`; `python3 scripts/backlinks.py`; `quarto render` (HTML + Typst PDF) clean;
  `vale content/` clean.

- [ ] **GATE F — family review (HARD STOP).** Present the built family. Human reviews voice / depth /
  template fit / cross-media / provenance / build-lint. On acceptance: merge `phase-5-<family>` to
  `main` (`--no-ff`), push, **close #<issue>**, delete the branch. This merge is the per-session
  boundary; the next family starts a fresh run from updated `main`.

---

## Per-family specifics

| Family | Anchor article (F1) | Primer(s) (F5, dup-check first) | Special handling |
|---|---|---|---|
| **Space, Props & Materiality** (#48) | Theme, Immersion & Sensory Environment | **Making It Real** (the material layer; replaced "Diegesis & the Magic Circle") | Family is physical-craft; lean on the cross-link note's Tabletop-gap research. |
| **Structure & Pacing** (#44) | Branching Narrative Craft | Structure & Branching Topologies; Pacing & Tension Curves | IF-heavy home pillar; many ◐ to Live/Tabletop/Hunt. |
| **Players & Social Dynamics** (#47) | Trust, Conformity & Social Pressure | The Social Contract & Safety | Safety/consent material — handle with care. |
| **Systems & Mechanics** (#49) | Mechanical Resolution Types | Resolution & Randomness | **Boardgame Appendix 6Z** (Mechanism Vocabulary, Euro vs Ameritrash, Deckbuilders) is **Tabletop-only** per the Gate-C1 rescope — write scoped as the reference appendix. |
| **Story, Character & Voice** (#46) | Character Voice | **Diegesis & the Magic Circle** (its natural home) | **Genre block:** the 7 genre articles write from `research/gaps/genre-conventions-router.md`; the map-article **"A Taxonomy of Genre Conventions"** is where the **map-variant template is validated** (Q3 carry-over; see the `<!-- TEMPLATE-NOTE -->` in `a-taxonomy-of-puzzles.qmd`). |

**Cross-cutting primers to place deliberately (with dup-check):**
- **Information Architecture** primer — **overlaps the Information Architecture *article*** (Puzzles,
  written). Resolve at first encounter: broaden into orientation, rename, or drop. Do **not** write a
  duplicate.
- **Playtesting, Quality & Verification** primer — cross-cutting process piece; uses the Phase-3
  research note `research/gaps/playtesting-quality-verification.md`. Place in whichever family run is
  convenient (or a short standalone primer step), once the dup-check is clear.

---

## Self-review notes

- **Spec coverage:** D1 de-fingerprinting → F1/F2 self-fix; D2 facets → F4; D3 per-family gate →
  GATE F; D4 order → family order. Primer dup-check (Q2) → F5. Anchor check (Q3) → F1. One family per
  session (Q4) → the merge gate boundary.
- **Verification is mechanical where possible:** Vale-clean per article (self-fix) and per family
  (F6); provenance + link greps after each batch; `quarto render` both outputs; coverage map
  unaffected.
- **Gates are hard stops:** one human review + merge per family; the fifth (Story) merging completes
  the Phase-5 milestone (#6) and opens Phase 6 (Assembly: keys #54, exemplars, specimens, design).
- **Known risks carried in:** de-fingerprinting cost at scale (measure on Space, the first family;
  tune the brief if self-fix is expensive); the two ambiguous primers; the map-variant validation in
  Story.
