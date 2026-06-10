# Phase 4 — Pilot: One Functional Family End-to-End (Design Spec)

> **DRAFT — 2026-06-10.** For human review before a Phase 4 plan is written. Phase 4 is the
> first phase that writes guide **prose**; nothing here proceeds without explicit approval
> (CLAUDE.md gate rule). Issue: **#5** (Phase 4 milestone).

## Goal

Take **one** functional family through the complete pipeline — from stubs to built, accepted,
provenance-tagged prose — to **lock the writing patterns** (voice, depth, template fit, build
behaviour, model choice) before Phase 5 scales out the remaining five families. This is the
highest-leverage gate in the project: every article written afterward inherits what Phase 4 locks.

## Context

Phases 0–3 built scaffolding: skeleton, settled taxonomy (#3), 116 article stubs across 6
families, coverage map (234 corpus notes mapped), the 8-primer set (#16), and — from Phase 3 —
the cross-media matrix plus per-family cross-link notes and 31 gap-research notes. **Every Puzzles
article already has its cross-media manifestations documented** (`research/gaps/cross-links-puzzles-clues-information.md`)
and the corpus is mature for this family. The raw material to write is in hand; Phase 4 is about
*how* to write it well and consistently.

## Governing stance

1. **Still exploratory.** We are discovering what this field guide should be. The outline is
   effectively frozen, but **the article template (#11) is provisional** — Phase 4 is its first
   real stress test, and revising it based on the first drafts is an *expected, sanctioned*
   outcome, not a failure (see [§ The template is provisional](#the-article-template-is-provisional)).
   Governed by the exploratory-stance principle: surface-and-propose, never silently bend a
   settled decision.
2. **Production noun is "article," never "entry."** Phase 2 settled this (spec decision 2:
   "article" avoids the dictionary-definition bias "entry" triggers in an LLM). The word choice
   materially changes what an agent produces. Every agent-facing instruction, brief, and issue in
   Phase 4 says **article**. **"Entry" survives only as the rendered *display label*** (the
   naturalist-field-guide flavour term in the built output — resolved Q2). Residual production-side
   "entry" in agent-consulted docs is swept first
   (see [§ Terminology hygiene](#terminology-hygiene-point-1)).
3. **The writing model is an output, not an assumption.** Phase 4 selects the model that will
   write Phase 5 by a controlled bake-off, not by default
   (see [§ The model bake-off](#the-model-bake-off-point-2)).

## Pilot family — recommendation: **Puzzles, Clues & Information**

14 articles (mid-small: smaller than Players 20 / Systems 24 / Story 28; comparable to Structure
18; slightly larger than Space 12). Recommended because it best balances *fast iteration* against
*surfacing the hard cases*:

- **Cross-media-rich.** Nearly every row carries ◐ cross-links across IF / Tabletop / Puzzle-Hunt
  with ● Live — it exercises the matrix → cross-link → prose path that Phase 5 depends on, and
  tests how an article weaves four media without becoming a list.
- **Flagship concepts.** "Cluing & Fairness," "The Aha Moment," "Information Architecture" are
  load-bearing ideas with strong corpus coverage and a settled primer ("The Fairness Contract",
  #16) — so the family also pilots the **primer ↔ article** relationship.
- **Template-stressing variety.** It contains a standard deep article, a `*(map)*` article
  ("A Taxonomy of Puzzles"), and tightly-confusable pairs ("Cluing & Fairness" vs "Clue
  Sequencing & Chains") that exercise the *Confusable With* connector hardest.
- **Self-contained.** Puzzles is less entangled with the safety/social material, so a pilot here
  is unlikely to need cross-family decisions mid-flight.

*(Confirmed Q1, 2026-06-10. Smaller alternative considered and declined: Space, Props &
Materiality, 12.)*

## Terminology hygiene (point 1)

**Resolved Q2: two registers, deliberately.** "Article" is the **production noun** (what agents are
asked to write); "Entry" survives as the **rendered display label** (the naturalist-field-guide term
in the built HTML/PDF). The job is to make this split deliberate, not accidental drift — so the sweep
fixes *production-side* "entry" while *preserving* the display/conceptual usage, and states the
distinction once in the style guide. This is a Phase 4 pre-task, **before** any drafting:

**Sweep to "article" (production / agent-facing):**
- `docs/style-guide.md` — the unit-structure instructions ("Every entry starts…", "Entries are not
  islands… every entry must include…", "The entry ends…") → "article". **Add one line** stating the
  register split: *production noun = "article"; rendered display label = "entry".*
- `docs/term-registry.md` — "as entries are written" / "writing entry prose" → "articles" / "article
  prose".
- `docs/decisions.md` **#11** — "Entry template / anatomy" → **"Article template / anatomy"** (it is
  the production template agents copy).
- **Issue #5** body — "Entries for the pilot family…" → "Articles…".

**Preserve "entry" (display / conceptual — leave as-is):**
- `docs/decisions.md` **#1** ("naturalist field guide, single expandable entries") — the high-level
  *form* decision; "entry" is the conceptual/published unit here.
- `docs/concept.md` — the foundational vision doc; "entry" is the conceptual unit and the eventual
  display label.
- The **rendered output** label itself (wiki/PDF) stays "Entry".

*Historical records left untouched:* `docs/plan.md`, the Phase 0 spec/plan.

## The model bake-off (point 2)

Before writing the family, write **one representative article three ways** and compare. Only the
model varies — same brief, same sources, same template, same accept criteria — so the comparison
is fair.

- **Bake-off article:** **Cluing & Fairness**
  (`content/articles/puzzles-clues-information/cluing-and-fairness.qmd`). It is flagship,
  cross-media (◐ IF · ● Live · ◐ Tabletop · ◐ Puzzle-Hunt), has rich corpus + Phase-3 sources, ties
  to the "Fairness Contract" primer, and exercises every template part (Silhouette, readable head,
  diagnostic-header body, Specimen / Field Note / Hazard call-outs, all four connectors,
  provenance, Sources). *(Resolved Q3: the `*(map)*` article type, e.g. "A Taxonomy of Puzzles", is a **separate template variant validated later** — not in this bake-off, which pilots the standard deep article only.)*
- **Three contestants, one shared brief** ([Appendix A](#appendix-a--shared-article-brief-cluing--fairness)):
  - **Claude Opus 4.8** — in Claude Code.
  - **Claude Sonnet 4.6** — in Claude Code.
  - **Gemini 3 Pro** — in the **Gemini CLI** (a different coding-agent CLI; no shared context with
    this session, so it gets a fully self-contained issue:
    [Appendix B](#appendix-b--self-contained-issue-for-the-gemini-3-pro-run)).
- **Output:** three drafts of the same article, kept side by side (e.g.
  `research/bakeoff/cluing-and-fairness.{opus,sonnet,gemini}.qmd`, never overwriting the real stub
  until a winner is chosen).
- **Comparison rubric** ([Appendix C](#appendix-c--bake-off-comparison-rubric)) scores each draft;
  the **human** picks the writing model at **Gate D1**.

## The article template is provisional (point 3)

Decision #11 (article anatomy) is settled-but-provisional for Phase 4. The current anatomy
(`templates/article.qmd`): Silhouette → readable head → `## The Mechanism` (diagnostic-header
body) → Specimen call-out → `## Design Judgement` (Field Note + Hazard) → `## Interactions`
(Confusable With / Pairs Well With / Common Transitions / Implementation Interlocks) → Sources.

**Things the first drafts are expected to pressure-test** (any may trigger a template revision):

- Does the **readable head → scannable body** split hold for a *puzzle* mechanism, or do puzzles
  want a worked example earlier?
- Are **all four connectors** load-bearing for every article, or optional per article?
- Does **four-media cross-coverage** fit the single-body shape, or does it need a dedicated
  "Across Media" inset/section so the ◐ material has a home?
- Do the call-out flavours (Specimen / Field Note / Hazard) match what the prose actually needs?

**How revision is handled:** the bake-off drafts are read *as evidence about the template*, not
only about the models. If the template needs to change, that change is proposed and the human
ratifies it at **Gate D1** (updating `templates/article.qmd` + #11) **before** the rest of the
family is written — so the family is written once, to a settled template.

## Deliverables (the full pilot family)

Per issue #5, scoped to Puzzles:

- [ ] **14 articles** written to the (possibly revised) template — readable head + scannable body,
      every claim provenance-tagged, `[researched]` claims with footnote citations, canonical
      terms only, en-GB / en-NL-metric, **no em-dashes**.
- [ ] **Primer** for the family — "The Fairness Contract" (#16) — written.
- [ ] **Keys** populated from the articles' frontmatter facets (effects / problems / components /
      genre / media).
- [ ] **Backlinks** rendering correctly across the family (the guide's own graph).
- [ ] **Both outputs build clean** — `quarto render` to Typst PDF **and** HTML wiki, no errors.
- [ ] **Vale + ai-tells** pass clean on the family.
- [ ] **Accept criteria** ([§ below](#accept-criteria)) defined explicitly and signed off.
- [ ] **Pattern lock doc** — voice depth, template fit, build quirks, chosen model documented for
      Phase 5.

## Accept criteria

The pilot is accepted when a human confirms, against written criteria:

1. **Voice.** Practitioner head (evocative Silhouette + spark), neutral/engineer body, Mentor
   call-outs — per #14 and the style guide. Reads like the naturalist field guide, not an
   encyclopaedia or a blog.
2. **Depth.** Body carries genuine implementation insight (the "Layered Reflection"), not a padded
   definition. A practitioner could act on it.
3. **Template fit.** The anatomy holds for all 14 (or has been revised at D1 and then holds).
4. **Cross-media.** The ◐ manifestations are woven in usefully, sourced from the Phase-3
   cross-link notes, without the article becoming a four-column list.
5. **Provenance.** Every load-bearing claim tagged corpus / researched / synthesis; every
   `[researched]` claim has a citation. (Mechanically greppable.)
6. **Build & lint.** Both outputs build; Vale clean; backlinks + keys resolve.

## Gates

Mirroring Phase 3's two-gate shape (C1 assessment → C2 milestone):

### Gate D1 — model & template checkpoint *(HARD STOP, after the bake-off article only)*

Present the three Cluing & Fairness drafts + the rubric scores. **Human decides:** (a) which model
writes Phase 4/5; (b) whether the article template holds or is revised (ratify any change to
`templates/article.qmd` + #11 now); (c) confirms the accept criteria. **No further articles are
written until D1 passes** — this prevents writing 14 articles to a template or model that then
changes.

### Gate D2 — pilot acceptance *(HARD STOP, milestone)*

Present the full built family (14 articles + primer + keys + backlinks, both outputs building,
Vale clean) against the accept criteria. **Human accepts**; patterns are locked and the
pattern-lock doc is written. On approval the work merges, **closes #5**, and Phase 5 may begin.

## Build & tooling

`quarto render` (HTML wiki + Typst PDF), `vale content/` + markdownlint, backlinks injection
(`scripts/backlinks.py` — note: tracked as open issue #13; if not yet implemented, backlinks
delivery may surface as a Phase 4 dependency). Branch off `main` first (as Phases 2–3 did);
spec → plan → execute → gates.

## Resolved decisions (2026-06-10)

- **Q1 — Pilot family:** ✅ **Puzzles, Clues & Information** (Space/Props declined).
- **Q2 — "Entry":** ✅ kept as the **rendered display label**; "article" stays the production noun.
  Terminology sweep scoped accordingly (see [§ Terminology hygiene](#terminology-hygiene-point-1)).
- **Q3 — Map-type articles:** ✅ **separate template variant, validated later** — not in this
  bake-off (which pilots the standard deep article only).
- **Q4 — Bake-off article:** ✅ **Cluing & Fairness**.
- **Q5 — Model set:** ✅ **Opus 4.8 + Sonnet 4.6 + Gemini 3 Pro**.

---

## Appendix A — Shared article brief (Cluing & Fairness)

*The identical brief handed to all three models. Embed verbatim into each run (the Gemini issue in
Appendix B wraps this).*

**Task.** Write the full article **"Cluing & Fairness"** for the *Field Guide to Narrative & Game
Design*, filling the stub at
`content/articles/puzzles-clues-information/cluing-and-fairness.qmd` (keep its frontmatter; fill
the body; complete the facets from the content).

**This is an ARTICLE, not an "entry."** Write a deep, readable mechanism account — not a dictionary
definition.

**Anatomy (follow `templates/article.qmd` exactly):**
- *Silhouette* — one evocative line (a species "jizz").
- *Readable head* — 1–3 short paragraphs, evocative prose, **no headers, no bullets**: what cluing
  *feels* like and why fairness is the contract.
- `## The Mechanism` — scannable body in reflective prose under **diagnostic headers** (e.g.
  `## The Fairness Contract`, `## Clue Density`); **no bullets in the prose flow**; move any
  data-dense list into a table or inset.
- `::: {.callout-note}` **The Specimen** — a real game observation. Tag `[corpus]` or `[researched]`.
- `## Design Judgement` with `::: {.callout-tip}` **The Field Note** (Mentor advice) and
  `::: {.callout-warning}` **The Hazard** (failure modes, e.g. the unfair late-clue, the
  single-point-of-failure clue).
- `## Interactions` — **Confusable With** (esp. vs *Clue Sequencing & Chains*), **Pairs Well With**,
  **Common Transitions**, **Implementation Interlocks**.
- `## Sources` — footnote citations for every `[researched]` claim.

**Cross-media.** This mechanism is ● Live, and manifests as ◐ in IF, Tabletop, and Puzzle-Hunt.
Weave those manifestations in (don't list them mechanically). Use the documented cross-links:
- IF — fair-play clue placement, rule of three (`Interactive Fiction/genre-conventions/mystery_conventions.md`).
- Tabletop — the Alexandrian **Three Clue Rule** / node-based design (`Tabletop/corpus/ttrpg-foundations/prep-economy.md`).
- Puzzle-Hunt — "every clue does work," MIT cluing conventions (`Live Game Design/corpus/puzzle-design/cluing-principles.md`).
- Full cross-link list: `research/gaps/cross-links-puzzles-clues-information.md` (this article's section).

**Voice & rules (`docs/style-guide.md`, decision #14):** Practitioner head, engineer body, Mentor
call-outs. en-GB spelling, en-NL/metric, 24-hour clock. **No em-dashes** (use colons/parentheses/
separate sentences). **No marketing fluff, no concluding summary block, no bullet-dumping.**

**Terminology:** use only canonical terms from `docs/term-registry.md`. If a needed term is
missing, flag it (do not silently coin one).

**Provenance (mandatory, decision #15):** tag every load-bearing claim `[corpus]` (from the
Obsidian vault), `[researched]` (new — with a footnote citation), or `[synthesis]` (your synthesis).
Never fabricate a citation; if a claim has no source, mark it `[synthesis]` or cut it.

**Deliverable:** the completed `cluing-and-fairness.qmd` (for the bake-off, write to
`research/bakeoff/cluing-and-fairness.<model>.qmd` instead, so the stub is untouched until a
winner is chosen). Do not edit any other file.

## Appendix B — Self-contained issue for the Gemini 3 Pro run

*File this as a GitHub issue and run it in the Gemini CLI. It must stand alone (the Gemini agent
has none of this session's context).*

> **Title:** Phase 4 bake-off — write "Cluing & Fairness" article (Gemini 3 Pro run)
>
> **Mandate.** You are a writing agent for the *Field Guide to Narrative & Game Design* (repo:
> `pvliesdonk/gamebook`). Produce **one article draft** for a model bake-off. You are **not** to
> merge, edit other files, change the build, or touch the corpus snapshot/manifest. Work on a
> branch off `main`; open a PR or leave the draft for review (do not self-merge).
>
> **Task.** Write the article **"Cluing & Fairness"** following the **Shared article brief**
> (Appendix A of `docs/superpowers/specs/2026-06-10-phase-4-pilot-design.md` — reproduced in full
> in this issue). Read the named source files (repo `research/gaps/cross-links-puzzles-clues-information.md`
> and `templates/article.qmd`, `docs/style-guide.md`, `docs/term-registry.md`; corpus notes are in
> the Obsidian vault if available, otherwise rely on the cross-link note + your own `[researched]`
> sourcing with citations).
>
> **Hard rules.** It is an **article**, not an "entry." Canonical terms only. Every claim
> provenance-tagged (`[corpus]`/`[researched]` with citation/`[synthesis]`). No em-dashes. en-GB +
> en-NL/metric. No fabricated citations.
>
> **Deliverable.** A single file `research/bakeoff/cluing-and-fairness.gemini.qmd` containing the
> full article (frontmatter copied from the stub, body + facets filled). Nothing else changed.
>
> **Definition of done.** The file exists, follows the template anatomy, weaves the four media,
> carries provenance tags + a Sources section, and uses canonical terminology. A human will score
> it against the bake-off rubric alongside the Opus and Sonnet drafts.
>
> *(Paste Appendix A verbatim beneath this line so the issue is self-contained.)*

## Appendix C — Bake-off comparison rubric

Score each draft 1–5 per axis; the human weights and decides. The rubric doubles as a first draft
of the Phase 4 **accept criteria**.

| Axis | What "5" looks like |
|---|---|
| **Spark (head)** | Silhouette + 1–3 paragraphs that genuinely make you want to use the mechanism; no headers/bullets. |
| **Body depth** | Reflective, layered implementation insight under diagnostic headers; a practitioner could act on it. |
| **Voice fit (#14)** | Practitioner head / engineer body / Mentor call-outs, distinct and consistent; field-guide register. |
| **Template fit** | All anatomy parts present and load-bearing; or a *principled* deviation that argues for a template change. |
| **Cross-media weave** | The ◐ IF/Tabletop/Puzzle-Hunt manifestations are integrated meaningfully, not listed. |
| **Provenance discipline** | Every claim tagged; `[researched]` claims carry real citations; no fabrication. |
| **Terminology** | Canonical terms throughout; missing terms flagged not coined. |
| **Mechanics** | No em-dashes; en-GB/metric; Vale-clean; builds in both outputs. |
| **Confusable-With** | Cleanly distinguishes Cluing & Fairness from Clue Sequencing & Chains. |

**Outcome of D1:** the winning model + a ratified (held or revised) template + a tightened accept
criteria set.
