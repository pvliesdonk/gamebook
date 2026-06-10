# Phase 4 — Pilot Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: use superpowers:subagent-driven-development or
> superpowers:executing-plans to implement task-by-task. Steps use checkbox (`- [ ]`) syntax.
>
> **Gating:** Phase 4 writes the guide's first **prose**. Task 0 is infrastructure (no prose) and
> may run at Phase-4 start; **Tasks 1+ are gated** — begin only when the human opens Phase 4.
> Branch off `main` first (as Phases 2–3 did). Two hard gates: **D1** (model + template checkpoint,
> after one article) and **D2** (pilot acceptance, milestone).

**Goal:** Take the **Puzzles, Clues & Information** family (14 articles) through the full pipeline —
to built, accepted, provenance-tagged prose — selecting the Phase-5 writing model by a controlled
bake-off and ratifying the article template against real drafts, so the family is written once to a
locked template and voice.

**Architecture:** A terminology sweep removes production-side "entry" (keeping it as the display
label). One representative article (**Cluing & Fairness**) is written three ways (Opus 4.8, Sonnet
4.6, Gemini 3 Pro) from an identical brief; the human picks the model and ratifies/​revises the
template at **Gate D1**. The chosen model then writes the remaining 13 articles + the family primer
to the settled template; keys, backlinks, and both build outputs follow; the human accepts at
**Gate D2**.

**Tech stack:** Quarto (`quarto render` → HTML wiki + Typst PDF), Vale + ai-tells + markdownlint,
`scripts/backlinks.py` (⚠ #13 — backlinks injection may be a stub; see Task 3), the Claude Code
Agent tool with model overrides (Opus/Sonnet drafts) + the **Gemini CLI** (Gemini draft), and the
Phase-3 outputs (`research/gaps/cross-links-puzzles-clues-information.md`, the cross-media matrix).

**Governing stance:** exploratory — the **article template (#11) is provisional** and may be revised
at D1 on the evidence of the drafts; "article" is the production noun, "entry" the display label
(resolved Q2); the writing **model is an output**, chosen at D1, not assumed.

**Spec:** `docs/superpowers/specs/2026-06-10-phase-4-pilot-design.md` (decision-complete; Q1–Q5
resolved). The **shared article brief is spec Appendix A**; the **Gemini run issue is spec
Appendix B**; the **bake-off rubric is spec Appendix C**.

---

## File map

| File | Responsibility | Task |
|------|----------------|------|
| `docs/style-guide.md`, `docs/term-registry.md`, `docs/decisions.md` | sweep production "entry" → "article"; add register-split note | 0 |
| GitHub issue **#5** | reword "Entries" → "Articles" in the body | 0 |
| `research/bakeoff/cluing-and-fairness.{opus,sonnet,gemini}.qmd` | three bake-off drafts (real stub untouched) | 1 |
| `templates/article.qmd` + decision #11 | template ratified or revised | Gate D1 |
| `content/articles/puzzles-clues-information/*.qmd` | the 14 family articles | 2 |
| `content/primers/the-fairness-contract.qmd` | family primer ("The Fairness Contract", #16) | 3 |
| `content/keys/*` | keys generated from article frontmatter facets | 3 |
| `docs/phase-4-pattern-lock.md` | locked patterns (voice, depth, template, model, build quirks) | 4 |

---

## Task 0: Terminology hygiene + bake-off scaffolding *(infrastructure — not prose)*

**Files:** `docs/style-guide.md`, `docs/term-registry.md`, `docs/decisions.md`; issue #5; create `research/bakeoff/`.

- [ ] **Step 1: Sweep production-side "entry" → "article"** (resolved Q2 — keep display/conceptual usage)
  - `docs/style-guide.md`: the three unit-structure sentences ("Every entry starts…", "Entries are
    not islands… every entry must include…", "The entry ends…") → "article(s)".
  - `docs/term-registry.md`: "as entries are written" / "writing entry prose" → "as articles are
    written" / "writing article prose".
  - `docs/decisions.md` **#11**: "Entry template / anatomy" → "Article template / anatomy". Leave
    **#1** ("single expandable entries") unchanged (conceptual form).
- [ ] **Step 2: State the register split once** — add to `docs/style-guide.md`: *"Production noun:
  **article** (what we write and ask agents to write). Rendered display label: **entry** (the
  field-guide term in the built output)."*
- [ ] **Step 3: Reword issue #5** body "Entries for the pilot family" → "Articles for the pilot
  family" (`gh issue edit 5`).
- [ ] **Step 4: Verify** — production docs no longer carry stray "entry" in the swept spots, display
  usage preserved:

  Run: `grep -inE '\bentr(y|ies)\b' docs/style-guide.md docs/term-registry.md`
  Expected: only the new register-split line (which defines the term); no instructional "entry".
- [ ] **Step 5: Scaffold** — create `research/bakeoff/` (working dir; gitignored or committed empty).
- [ ] **Step 6: Commit** — `git commit -m "refactor: production noun 'article'; keep 'entry' as display label (refs #5)"`

---

## Task 1: Model bake-off — three drafts of "Cluing & Fairness" *(gated prose)*

Write **one** article three ways from the **identical** spec Appendix A brief — only the model varies.
Drafts go to `research/bakeoff/`; the real stub is untouched until a winner is chosen at D1.

**Files (create):** `research/bakeoff/cluing-and-fairness.opus.qmd`, `.sonnet.qmd`, `.gemini.qmd`.

- [ ] **Step 1: Opus 4.8 draft** — dispatch a writing agent (Agent tool, `model: opus`) with spec
  Appendix A verbatim; output to `research/bakeoff/cluing-and-fairness.opus.qmd`.
- [ ] **Step 2: Sonnet 4.6 draft** — same brief, `model: sonnet`; output to `…sonnet.qmd`.
- [ ] **Step 3: Gemini 3 Pro draft** *(external CLI)* — file spec Appendix B as a GitHub issue, run it
  in the **Gemini CLI**, and place its output at `research/bakeoff/cluing-and-fairness.gemini.qmd`.
- [ ] **Step 4: Verify each draft** carries the full anatomy (Silhouette, head, `## The Mechanism`,
  Specimen/Field Note/Hazard, four connectors, Sources) and provenance tags:

  Run: `grep -lE '\[(corpus|researched|synthesis)\]' research/bakeoff/*.qmd` (expect all 3);
  spot-check each `[researched]` claim has a citation.
- [ ] **Step 5: Score** all three against spec Appendix C (the rubric); prepare the comparison for D1.

---

## GATE D1 — model & template checkpoint *(HARD STOP)*

- [ ] **Stop. Present the 3 drafts + rubric scores to the human.** Do not write any further article
  until D1 passes.

**Human decides:** (a) **which model** writes Phase 4/5; (b) whether the **article template holds or
is revised** — ratify any change to `templates/article.qmd` + decision #11 **now**; (c) confirms the
tightened **accept criteria**. The winning Cluing & Fairness draft becomes the basis for that
article's final file (Task 2). *(Rationale: never write 13 more articles to a model or template that
then changes.)*

---

## Task 2: Write the remaining Puzzles articles *(gated prose; post-D1)*

Using the **chosen model** and the **ratified template**, write the rest of the family. Each claim
provenance-tagged; `[researched]` claims cited; canonical terms only; no em-dashes; en-GB / en-NL.

**Files (fill stubs in `content/articles/puzzles-clues-information/`):**

- [ ] **Step 1: Finalise Cluing & Fairness** from the winning bake-off draft (apply any template
  revision); write to the real stub `cluing-and-fairness.qmd`.
- [ ] **Step 2: Write the other 13** (each to spec Appendix A discipline, sourced from the corpus +
  `research/gaps/cross-links-puzzles-clues-information.md` + Phase-3 gap notes where relevant):
  information-architecture, clue-sequencing-and-chains, a-taxonomy-of-puzzles *(map variant —
  validate its shape, flag if the standard template strains)*, search-observation-and-lateral-thinking,
  ciphers-and-codes, extraction-indexing-and-meta-puzzles, self-resolving-puzzles, the-aha-moment,
  teaching-through-play, hint-systems-and-recovery, puzzle-hunt-craft, treasure-and-scavenger-hunts,
  the-puzzle-hunt-and-arg-tradition.
- [ ] **Step 3: Complete frontmatter facets** (effects / problems / components / genre / media) for
  every article — these feed the keys (Task 3).
- [ ] **Step 4: Verify provenance** — every article has provenance tags; every `[researched]` claim
  carries a citation:

  Run: `grep -rL '\[\(corpus\|researched\|synthesis\)\]' content/articles/puzzles-clues-information --include='*.qmd'` (expect empty).
- [ ] **Step 5: Commit** — `git commit -m "feat: write Puzzles, Clues & Information articles (refs #5)"`

---

## Task 3: Primer, keys, and backlinks *(gated; post-D1)*

**Files:** `content/primers/the-fairness-contract.qmd`; `content/keys/*`; `scripts/backlinks.py` (⚠ #13).

- [ ] **Step 1: Write the family primer** "The Fairness Contract" (#16) to `templates/primer.qmd`
  anatomy — orientation voice, links to the family's load-bearing articles.
- [ ] **Step 2: Populate keys** from the articles' frontmatter facets (effects / problems /
  components / genre / media) per decision #12.
- [ ] **Step 3: Backlinks** — ensure backlinks render for the family. **If `scripts/backlinks.py` is
  still a stub (#13), this task surfaces #13 as a blocking dependency** — implement or descope with a
  human decision; do not silently ship broken backlinks.
- [ ] **Step 4: Commit** — `git commit -m "feat: Fairness Contract primer + keys + backlinks for pilot (refs #5)"`

---

## Task 4: Build, lint, and pattern-lock doc *(gated; post-D1)*

**Files:** `docs/phase-4-pattern-lock.md`.

- [ ] **Step 1: Build both outputs** — `quarto render` (HTML wiki + Typst PDF). Expected: no errors.
  Fix build quirks; **document each quirk** for the pattern-lock doc.
- [ ] **Step 2: Lint** — `vale content/articles/puzzles-clues-information content/primers/the-fairness-contract.qmd`
  and `markdownlint`. Expected: clean (ai-tells included).
- [ ] **Step 3: Write `docs/phase-4-pattern-lock.md`** — the locked patterns for Phase 5: chosen
  model, final template (held/revised), voice depth notes, cross-media weave pattern, provenance
  conventions, build quirks, Vale exceptions.
- [ ] **Step 4: Commit** — `git commit -m "feat: pilot build + lint clean; Phase 4 pattern-lock doc (refs #5)"`

---

## GATE D2 — pilot acceptance *(HARD STOP, milestone)*

- [ ] **Stop. Present the full built family to the human:** 14 articles + "The Fairness Contract"
  primer + keys + backlinks, both outputs building clean, Vale clean — against the D1-tightened
  accept criteria (voice, depth, template fit, cross-media weave, provenance, build/lint).

**Gate:** the human accepts; patterns are locked (the pattern-lock doc is the record). On approval the
work merges to `main` (`--no-ff`, mirroring Phases 2–3), **closes #5**, closes the Phase 4 milestone,
and Phase 5 (scale-out, issue #6) may begin.

---

## Self-review notes

- **Spec coverage:** terminology (point 1) → Task 0; model bake-off (point 2) → Task 1 + Gate D1;
  template-provisional (point 3) → Gate D1 ratification; the 14 articles + primer + keys + backlinks
  + build + accept → Tasks 2–4 + Gate D2. All spec deliverables map to a task.
- **Gates are hard stops:** D1 before writing the family (prevents rework against a changed
  model/template); D2 is the milestone.
- **Mechanical verification where possible:** terminology grep (Task 0), provenance greps (Tasks
  1/2), `quarto render` + Vale (Task 4).
- **Known dependency risk:** backlinks injection (#13) may be unimplemented — Task 3 surfaces it
  rather than shipping broken backlinks.
- **Fair bake-off:** identical brief (spec Appendix A) for all three models; only the model varies;
  map-type articles are out of the bake-off (resolved Q3) and flagged in Task 2 Step 2 if the
  template strains on "A Taxonomy of Puzzles".
