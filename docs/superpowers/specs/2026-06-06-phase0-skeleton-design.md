# Phase 0 — Repository and Build Skeleton: Design Spec

**Date:** 2026-06-06
**Closes:** Issue #1
**Gate:** Empty shell builds cleanly to both Typst PDF and HTML wiki outputs.

---

## Directory layout

```
_quarto.yml
_brand.yml
CLAUDE.md
content/
  index.qmd
  primers/
    index.qmd
  entries/
    index.qmd
  keys/
    index.qmd
  exemplars/
    index.qmd
  specimens/
    index.qmd
docs/
  decisions.md          ← decision register extracted from plan.md
  style-guide.md        ← stub (section headers only)
  term-registry.md      ← stub (section headers only)
  concept.md            ← moved from repo root
  plan.md               ← moved from repo root; SUPERSEDED header added
  superpowers/
    specs/              ← design specs (this file)
templates/
  entry.qmd             ← stub (frontmatter schema placeholder)
  primer.qmd            ← stub
  exemplar.qmd          ← stub
  specimen.qmd          ← stub
  typst-template.typ    ← stub (pass-through, replaced in Phase 6)
research/
  .gitkeep
scripts/
  backlinks.py          ← stub (scans content/, prints count, exits 0)
```

`plan.md` and `concept.md` move from root to `docs/`. `plan.md` gets a SUPERSEDED notice at the top pointing to GitHub issues #1–#8.

---

## Quarto configuration (`_quarto.yml`)

- **Project type:** `quarto book` (not website) — enforces chapter order, proper PDF flow.
- **HTML output:** `format: html`, theme stub; `_brand.yml` tokens apply via Quarto brand integration.
- **PDF output:** `format: typst`, pointing at `templates/typst-template.typ` stub.
- **Chapter list:** the six `content/*/index.qmd` placeholders only; Phase 2 fills in the real outline.
- **Pre-render hook:** `python3 scripts/backlinks.py` wired from day one.

Quarto 1.9 + Typst 0.14 are the pinned tool versions.

---

## Brand (`_brand.yml`)

Placeholder tokens only — all marked DRAFT, to be settled in Phase 1/6:

- **Accent colour:** `#c07840` (warm amber)
- **Body font:** Georgia (serif)
- **Monospace stack:** system monospace
- **Colour mode:** monochrome with warm accent

---

## Backlinks script stub (`scripts/backlinks.py`)

- Walks `content/`, counts `.qmd` files, prints a status line.
- Writes nothing.
- Exits 0 so the build passes.
- The Phase 5 implementation fills in the real logic; no changes to `_quarto.yml` needed.

---

## CLAUDE.md (repo root)

Documents conventions for any agent or contributor:

- **Phase/gate system:** do not write entry prose or primers before Phase 4; do not proceed past a gate without human approval.
- **Decision register:** only rely on items marked SETTLED in `docs/decisions.md`; treat DRAFT items as open.
- **Stub convention:** every stub file has a corresponding GitHub issue assigned to the milestone where it gets filled in. Check open issues before assuming something is final.
- **Build commands:** `quarto preview` (local), `quarto render` (full build).
- **Directory layout:** renderable content lives under `content/`; `research/` and `docs/` are never rendered; `templates/` holds content-type templates.
- **Provenance markers:** every claim in a finished entry is tagged as one of: corpus / researched (with citation) / synthesis.

---

## GitHub milestones and stub issues

**Milestones:** One per phase (Phase 0–7). Existing issues #1–#8 are assigned to their respective milestone.

**Stub issues created in Phase 0** (each assigned to the milestone where the stub gets filled in):

| Stub | Issue title | Milestone |
|------|-------------|-----------|
| `_brand.yml` placeholder tokens | Finalise brand tokens | Phase 1 |
| `templates/typst-template.typ` | Build custom Typst template | Phase 6 |
| `docs/style-guide.md` | Write LLM style guide | Phase 1 |
| `docs/term-registry.md` | Build canonical term registry | Phase 1 |
| `templates/entry.qmd` etc. | Finalise content-type templates | Phase 1 |
| `scripts/backlinks.py` | Implement backlinks injection | Phase 5 |

---

## What Phase 0 does NOT do

- No entry prose, primer prose, or any guide content.
- No taxonomy decisions — the six-family strawman remains DRAFT.
- No final brand tokens.
- No real backlinks logic.
- No exemplar or specimen content.
