# Phase 0 — Repository and Build Skeleton: Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Stand up a Quarto book project that renders cleanly to both Typst PDF and HTML wiki from placeholder content, with all stubs tracked in GitHub issues.

**Architecture:** Single `_quarto.yml` defines a book with two output formats (HTML and Typst PDF). All renderable content lives under `content/`. Supporting files (`docs/`, `research/`, `scripts/`, `templates/`) are outside the rendered tree. A `pre-render` hook wires the backlinks script from day one even though it is a stub.

**Tech Stack:** Quarto 1.9, Typst 0.14, Python 3, GitHub CLI (`gh`)

---

## File map

| File | Action | Purpose |
|------|--------|---------|
| `_quarto.yml` | Create | Book config: both output formats, pre-render hook, chapter list |
| `_brand.yml` | Create | Placeholder brand tokens (accent, serif body) |
| `CLAUDE.md` | Create | Project conventions for agents and contributors |
| `content/index.qmd` | Create | "How to use this guide" placeholder |
| `content/primers/index.qmd` | Create | Primers section placeholder |
| `content/entries/index.qmd` | Create | Entries section placeholder |
| `content/keys/index.qmd` | Create | Keys section placeholder |
| `content/exemplars/index.qmd` | Create | Exemplars section placeholder |
| `content/specimens/index.qmd` | Create | Style specimens section placeholder |
| `docs/decisions.md` | Create | Decision register extracted from plan.md |
| `docs/style-guide.md` | Create | Stub: section headers only |
| `docs/term-registry.md` | Create | Stub: section headers only |
| `docs/concept.md` | Move from root | Reference document |
| `docs/plan.md` | Move from root | Add SUPERSEDED header |
| `templates/entry.qmd` | Create | Entry template stub |
| `templates/primer.qmd` | Create | Primer template stub |
| `templates/exemplar.qmd` | Create | Exemplar template stub |
| `templates/specimen.qmd` | Create | Specimen template stub |
| `templates/typst-template.typ` | Create | Typst template stub (not wired in until Phase 6) |
| `scripts/backlinks.py` | Create | Stub: scans content/, prints count, exits 0 |
| `research/.gitkeep` | Create | Track empty research dir |
| `.gitignore` | Create | Ignore Quarto build output |

---

## Task 1: GitHub milestones

**Files:** none (GitHub only)

- [ ] Create milestones for Phase 0 through Phase 7:

```bash
for i in 0 1 2 3 4 5 6 7; do
  gh milestone create "Phase $i" --repo pvliesdonk/gamebook
done
```

- [ ] Assign existing phase issues to their milestones. Get milestone numbers first:

```bash
gh api repos/pvliesdonk/gamebook/milestones --jq '.[] | [.number, .title] | @tsv'
```

The output will show milestone numbers. Issues #1–#8 map to Phase 0–7 milestones. Assign each:

```bash
# Replace MILESTONE_N with the actual milestone number for each phase
gh issue edit 1 --milestone "Phase 0" --repo pvliesdonk/gamebook
gh issue edit 2 --milestone "Phase 1" --repo pvliesdonk/gamebook
gh issue edit 3 --milestone "Phase 2" --repo pvliesdonk/gamebook
gh issue edit 4 --milestone "Phase 3" --repo pvliesdonk/gamebook
gh issue edit 5 --milestone "Phase 4" --repo pvliesdonk/gamebook
gh issue edit 6 --milestone "Phase 5" --repo pvliesdonk/gamebook
gh issue edit 7 --milestone "Phase 6" --repo pvliesdonk/gamebook
gh issue edit 8 --milestone "Phase 7" --repo pvliesdonk/gamebook
```

- [ ] Verify assignments:

```bash
gh issue list --repo pvliesdonk/gamebook
```

Expected: all 8 issues show their milestone.

---

## Task 2: Stub issues for Phase 1

**Files:** none (GitHub only)

Create the six stub-tracking issues. Each is assigned to the milestone where the stub gets filled in.

- [ ] Create stub issues:

```bash
gh issue create --repo pvliesdonk/gamebook \
  --title "Finalise brand tokens in _brand.yml" \
  --milestone "Phase 1" \
  --body "## What this issue tracks

\`_brand.yml\` was created in Phase 0 with placeholder tokens. This issue tracks settling the final values.

## Deliverables
- [ ] Accent colour confirmed (currently \`#c07840\`)
- [ ] Body serif confirmed (currently Georgia)
- [ ] Colour mode confirmed (monochrome + warm accent)
- [ ] All tokens marked SETTLED in \`docs/decisions.md\` item #6

## Scope boundary
Does not include the Typst template (tracked separately in the Phase 6 issue)."

gh issue create --repo pvliesdonk/gamebook \
  --title "Write LLM style guide (docs/style-guide.md)" \
  --milestone "Phase 1" \
  --body "## What this issue tracks

\`docs/style-guide.md\` was created in Phase 0 as a stub with section headers only. This issue tracks writing the full content.

## Deliverables
- [ ] Voice section: neutral body, light authorial in judgement and primers
- [ ] Register split: readable head vs scannable body
- [ ] Provenance marker format: corpus / researched (with citation) / synthesis
- [ ] Language conventions: en-GB, no em-dashes
- [ ] Marked SETTLED in \`docs/decisions.md\` item #14

## Scope boundary
Does not include Vale configuration (separate issue)."

gh issue create --repo pvliesdonk/gamebook \
  --title "Build canonical term registry (docs/term-registry.md)" \
  --milestone "Phase 1" \
  --body "## What this issue tracks

\`docs/term-registry.md\` was created in Phase 0 as a stub. This issue tracks building the initial vocabulary.

## Deliverables
- [ ] One canonical term per mechanism, aliases listed
- [ ] Initial vocabulary covers the corpus mechanisms
- [ ] Marked SETTLED in \`docs/decisions.md\` item #13

## Scope boundary
The registry grows as entries are written; this issue covers only the initial vocabulary pass."

gh issue create --repo pvliesdonk/gamebook \
  --title "Finalise content-type templates (templates/*.qmd)" \
  --milestone "Phase 1" \
  --body "## What this issue tracks

Template stubs in \`templates/\` (entry, primer, exemplar, specimen) were created in Phase 0 with frontmatter placeholders only. This issue tracks filling them in.

## Deliverables
- [ ] \`templates/entry.qmd\`: full frontmatter schema and anatomy sections
- [ ] \`templates/primer.qmd\`: structure and frontmatter
- [ ] \`templates/exemplar.qmd\`: stat-block fields and frontmatter
- [ ] \`templates/specimen.qmd\`: lookup matrix fields and frontmatter
- [ ] All templates marked SETTLED in \`docs/decisions.md\` items #11 and #12

## Scope boundary
Frontmatter schema and structure only — no prose content."

gh issue create --repo pvliesdonk/gamebook \
  --title "Implement backlinks injection (scripts/backlinks.py)" \
  --milestone "Phase 5" \
  --body "## What this issue tracks

\`scripts/backlinks.py\` was created in Phase 0 as a stub that scans \`content/\` and exits 0. This issue tracks the real implementation.

## Deliverables
- [ ] Scan all \`.qmd\` files for \`[[wiki-link]]\` syntax
- [ ] Build a backlink map: for each target, which files link to it
- [ ] Inject a 'Referenced by' section into each linked .qmd at build time
- [ ] Build still passes (\`quarto render\`) after implementation

## Scope boundary
Does not change \`_quarto.yml\` — the pre-render hook is already wired."

gh issue create --repo pvliesdonk/gamebook \
  --title "Build custom Typst template (templates/typst-template.typ)" \
  --milestone "Phase 6" \
  --body "## What this issue tracks

\`templates/typst-template.typ\` was created in Phase 0 as a stub. Quarto currently uses its default Typst template. This issue tracks building and wiring the custom template.

## Deliverables
- [ ] Custom \`.typ\` file implements the brand (monochrome + warm accent, serif body)
- [ ] \`_quarto.yml\` \`typst:\` format section updated to reference the template
- [ ] PDF output renders correctly with the custom template
- [ ] Both outputs still build without errors

## Scope boundary
Does not change the HTML output or \`_brand.yml\`."
```

- [ ] Verify all stub issues were created:

```bash
gh issue list --repo pvliesdonk/gamebook --limit 20
```

Expected: 14 open issues total (8 phase issues + 6 stub issues).

---

## Task 3: Directory skeleton and file moves

**Files:** `research/.gitkeep`, moves of `concept.md` and `plan.md`

- [ ] Create all directories and the gitkeep:

```bash
mkdir -p content/primers content/entries content/keys content/exemplars content/specimens
mkdir -p docs/superpowers/specs docs/superpowers/plans
mkdir -p templates scripts research
touch research/.gitkeep
```

- [ ] Move concept.md to docs/:

```bash
git mv concept.md docs/concept.md
```

- [ ] Move plan.md to docs/ and add SUPERSEDED header. First move:

```bash
git mv plan.md docs/plan.md
```

- [ ] Then prepend the SUPERSEDED notice to `docs/plan.md`. Open the file and add these lines at the very top, before any existing content:

```markdown
> **SUPERSEDED** — This document seeded the project. Work is now tracked in
> GitHub issues #1–#8 (one per phase). Milestones group issues by phase.
> Do not update this file; it is kept for historical reference only.

---

```

- [ ] Commit:

```bash
git add -A
git commit -m "Move concept and plan to docs/, add SUPERSEDED notice to plan.md"
```

---

## Task 4: `.gitignore`

**Files:** Create `.gitignore`

- [ ] Create `.gitignore` with this exact content:

```
# Quarto build output
_book/
.quarto/
*_files/

# Quarto freeze (regenerate on render)
_freeze/

# OS
.DS_Store
```

- [ ] Commit:

```bash
git add .gitignore
git commit -m "Add .gitignore for Quarto build output"
```

---

## Task 5: `_brand.yml`

**Files:** Create `_brand.yml`

- [ ] Create `_brand.yml` with this exact content:

```yaml
# DRAFT — placeholder tokens, to be settled in Phase 1 (see docs/decisions.md #6)
# Tracked in GitHub: "Finalise brand tokens in _brand.yml"

color:
  palette:
    accent: "#c07840"   # warm amber — provisional
  foreground: "#1a1a1a"
  background: "#fafafa"

typography:
  base:
    family: Georgia
  headings:
    family: Georgia
```

- [ ] Commit:

```bash
git add _brand.yml
git commit -m "Add _brand.yml placeholder tokens"
```

---

## Task 6: `scripts/backlinks.py`

**Files:** Create `scripts/backlinks.py`

- [ ] Create `scripts/backlinks.py` with this exact content:

```python
#!/usr/bin/env python3
"""
Backlinks injection stub.

Phase 5 implementation will scan content/ for [[wiki-links]] and inject
'Referenced by' sections. See GitHub issue: Implement backlinks injection.
"""
import pathlib

content_dir = pathlib.Path("content")
qmd_files = list(content_dir.rglob("*.qmd"))
print(f"backlinks: scanned {len(qmd_files)} .qmd file(s) — no-op (stub)")
```

- [ ] Verify it runs without error:

```bash
cd /mnt/code/gamebook && python3 scripts/backlinks.py
```

Expected output: `backlinks: scanned 0 .qmd file(s) — no-op (stub)`

- [ ] Commit:

```bash
git add scripts/backlinks.py
git commit -m "Add backlinks.py stub wired to pre-render hook"
```

---

## Task 7: `_quarto.yml`

**Files:** Create `_quarto.yml`

- [ ] Create `_quarto.yml` with this exact content:

```yaml
project:
  type: book
  pre-render: python3 scripts/backlinks.py

book:
  title: "Field Guide to Narrative & Game Design"
  author: "—"
  chapters:
    - content/index.qmd
    - part: "Primers"
      chapters:
        - content/primers/index.qmd
    - part: "Entries"
      chapters:
        - content/entries/index.qmd
    - part: "Keys"
      chapters:
        - content/keys/index.qmd
    - part: "Exemplars"
      chapters:
        - content/exemplars/index.qmd
    - part: "Style Specimens"
      chapters:
        - content/specimens/index.qmd

format:
  html:
    theme:
      - cosmo
      - brand
  typst: default
```

Note: `author: "—"` is required — the default Typst template (orange-book) fails to compile if author is absent or an empty string.

- [ ] Commit:

```bash
git add _quarto.yml
git commit -m "Add _quarto.yml: book config with HTML and Typst outputs"
```

---

## Task 8: `content/` placeholder `.qmd` files

**Files:** Create six `.qmd` files under `content/`

- [ ] Create `content/index.qmd`:

```markdown
---
title: "How to Use This Guide"
---

*Placeholder — content written in Phase 4.*

This guide is organised by design function. Use the Keys section to navigate by
the effect you want to create, the problem you are hitting, or the component you
are holding.
```

- [ ] Create `content/primers/index.qmd`:

```markdown
---
title: "Primers"
---

*Placeholder — primers written in Phase 4 and Phase 5.*

Short orientation pieces on the big terrain features of narrative and game design.
```

- [ ] Create `content/entries/index.qmd`:

```markdown
---
title: "Entries"
---

*Placeholder — entries written in Phase 4 and Phase 5.*

The main reference: one entry per design mechanism, grouped by functional family.
```

- [ ] Create `content/keys/index.qmd`:

```markdown
---
title: "Keys"
---

*Placeholder — keys generated from entry frontmatter in Phase 2 onwards.*

Routers from intent to mechanism: by effect or feeling, by problem, by component.
```

- [ ] Create `content/exemplars/index.qmd`:

```markdown
---
title: "Exemplars"
---

*Placeholder — exemplar profiles written in Phase 5 and Phase 6.*

Profiles of real works as consistent stat blocks, cross-linked to the mechanisms
they illustrate.
```

- [ ] Create `content/specimens/index.qmd`:

```markdown
---
title: "Style Specimens"
---

*Placeholder — style specimens assembled in Phase 6.*

Prose specimens with a point-of-view by register by rhythm lookup matrix.
```

- [ ] Commit:

```bash
git add content/
git commit -m "Add content/ placeholder .qmd files"
```

---

## Task 9: `docs/decisions.md`

**Files:** Create `docs/decisions.md`

- [ ] Create `docs/decisions.md` with this exact content (extracted from `docs/plan.md`):

```markdown
# Decision Register

Each item is `proposed`, `draft`, or `settled`, with the date it was settled.

**Rule for agents:** Only rely on items marked `settled`. Treat `draft` items as
open — do not build on them. If a `draft` item blocks your work, stop and ask.

| # | Decision | State | Settled | Note |
|---|----------|-------|---------|------|
| 1 | Form: naturalist field guide, single expandable entries | settled | — | |
| 2 | Spine: design function, medium as tag | settled | — | family list is #3 |
| 3 | Functional-family taxonomy (six-family strawman) | **draft** | | to be designed in Phase 1 |
| 4 | Output: Quarto single-source, Typst PDF + HTML wiki | settled | — | |
| 5 | Backlinks injected at build from the guide's own graph | settled | — | |
| 6 | Brand: one `_brand.yml` drives both faces | settled | — | tokens draft — see stub issue |
| 7 | Split pipeline (separate web renderer) as fallback | **draft** | | trigger: pilot web output disappoints |
| 8 | Graph view for the wiki | proposed | | phase-six nice to have |
| 9 | Consistency: LLM style guide primary, thin Vale backstop | settled | — | |
| 10 | Repo: independent, new; corpus = point-in-time input | settled | — | |
| 11 | Entry template / anatomy | **draft** | | Phase 1 — see stub issue |
| 12 | Frontmatter schema and routing facets (keys) | **draft** | | Phase 1 — see stub issue |
| 13 | Canonical term registry | **draft** | | Phase 1 — see stub issue |
| 14 | Voice: neutral body, light authorial in judgement and primers | **draft** | | confirm in style guide |
| 15 | Provenance markers (corpus / researched / synthesis) | settled | — | format draft — see style guide |
| 16 | Primer set and count | **draft** | | Phase 2 |
| 17 | PDF scope: curated over exhaustive | settled | — | curation by frontmatter flag |
| 18 | Illustrations / diagrams | proposed | | parked, possibly phase two |
```

- [ ] Commit:

```bash
git add docs/decisions.md
git commit -m "Add docs/decisions.md extracted from plan.md"
```

---

## Task 10: `docs/style-guide.md` and `docs/term-registry.md` stubs

**Files:** Create two stub files

- [ ] Create `docs/style-guide.md`:

```markdown
# LLM Style Guide

> **STUB** — to be written in Phase 1. Tracked in GitHub: "Write LLM style guide".
> See `docs/decisions.md` item #14.

## Voice

## Register split: readable head vs scannable body

## Provenance markers

## Language conventions

## What to avoid
```

- [ ] Create `docs/term-registry.md`:

```markdown
# Canonical Term Registry

> **STUB** — to be built in Phase 1. Tracked in GitHub: "Build canonical term registry".
> See `docs/decisions.md` item #13.

One canonical term per mechanism. Aliases listed. Agents must use canonical terms
when writing entry prose.

## Registry

| Canonical term | Aliases | Family | Notes |
|----------------|---------|--------|-------|
```

- [ ] Commit:

```bash
git add docs/style-guide.md docs/term-registry.md
git commit -m "Add stub docs: style-guide.md and term-registry.md"
```

---

## Task 11: `templates/` stubs

**Files:** Create five template stubs

- [ ] Create `templates/entry.qmd`:

```markdown
---
# STUB — finalise in Phase 1. Tracked in GitHub: "Finalise content-type templates".
# See docs/decisions.md items #11 and #12.
title: ""
aliases: []          # other names designers use for this mechanism
family: ""           # functional family — settled in Phase 1 (decision #3)
media: []            # tags: interactive-fiction, live-game, tabletop, puzzle-hunt
effects: []          # routing facet: what effect does this mechanism create?
problems: []         # routing facet: what design problem does it solve?
components: []       # routing facet: what components does it require?
provenance: ""       # corpus | researched | synthesis
---

## What it does

<!-- readable head: 2-4 sentences -->

## How it works

<!-- scannable body -->

## When to reach for it — and when not

## In the wild

## Pairs with / confusable with

## Sources
```

- [ ] Create `templates/primer.qmd`:

```markdown
---
# STUB — finalise in Phase 1. Tracked in GitHub: "Finalise content-type templates".
title: ""
type: primer
---

<!-- Primers are short orientation pieces on a big terrain feature.
     Lighter than a survey essay; written to dip into, not read through. -->
```

- [ ] Create `templates/exemplar.qmd`:

```markdown
---
# STUB — finalise in Phase 1. Tracked in GitHub: "Finalise content-type templates".
title: ""
type: exemplar
medium: ""
year: ""
mechanisms: []    # links to entry slugs
---

## Overview

## Key mechanisms illustrated

## Stat block
```

- [ ] Create `templates/specimen.qmd`:

```markdown
---
# STUB — finalise in Phase 1. Tracked in GitHub: "Finalise content-type templates".
title: ""
type: specimen
register: ""   # e.g. instructional, atmospheric, terse
rhythm: ""     # e.g. staccato, flowing
---

## Specimen

## Point of view
```

- [ ] Create `templates/typst-template.typ`:

```typst
// STUB — custom Typst template, to be built in Phase 6.
// Tracked in GitHub: "Build custom Typst template".
// Currently not referenced in _quarto.yml; Quarto uses its default Typst output.
// Phase 6 will implement the brand (monochrome + warm accent, serif body)
// and wire this file into _quarto.yml under format.typst.
```

- [ ] Commit:

```bash
git add templates/
git commit -m "Add content-type template stubs"
```

---

## Task 12: `CLAUDE.md`

**Files:** Create `CLAUDE.md` at repo root

- [ ] Create `CLAUDE.md` with this exact content:

```markdown
# Field Guide to Narrative & Game Design — Project Conventions

## Phase and gate system

This project moves through eight phases (0–7). **Do not write entry prose, primers,
or any guide content before Phase 4.** Do not proceed past a phase gate without
explicit human approval.

Current phase status is tracked in GitHub milestones. Open issues on a milestone
show what is still outstanding before the gate can be declared met.

## Decision register

`docs/decisions.md` is the authority on settled decisions. Rules:

- **Only rely on items marked `settled`.** Items marked `draft` or `proposed` are
  open — do not build on them.
- If a draft item blocks your work, stop and ask rather than resolving it yourself.
- When a decision is settled, update the register: change the state to `settled`
  and record the date.

## Stub convention

Every file created as a stub has a corresponding open GitHub issue. Before assuming
a stub is final, check whether its issue is closed. Stub files are identifiable by
a `STUB` or `DRAFT` notice at the top of the file.

Do not fill in a stub unless its GitHub issue is assigned to you and the
corresponding phase is active.

## Build commands

```bash
quarto preview          # local preview with live reload (HTML only)
quarto render           # full build: HTML wiki + Typst PDF
quarto render --to html # HTML only
quarto render --to typst # PDF only
```

Build output goes to `_book/` (gitignored).

## Directory layout

```
content/        renderable guide content — entries, primers, keys, exemplars, specimens
docs/           decisions register, style guide, term registry, reference docs (not rendered)
research/       research notes and sources (not rendered)
scripts/        build-time scripts (backlinks injection)
templates/      content-type templates — copy when creating new entries
_quarto.yml     Quarto book config
_brand.yml      brand tokens (DRAFT until Phase 1)
```

## Provenance markers

Every claim in a finished entry must be tagged with one of:

- `corpus` — drawn from the Obsidian vault corpus
- `researched` — newly researched; a citation must accompany this marker
- `synthesis` — author synthesis or opinion

The corpus is a point-in-time research input. It is **not** a build dependency and
must never be imported or required at build time.

## Commit style

One logical change per commit. Reference the GitHub issue number in commits that
advance or close an issue (e.g. `feat: add entry template stub (closes #12)`).
```

- [ ] Commit:

```bash
git add CLAUDE.md
git commit -m "Add CLAUDE.md: project conventions for agents and contributors"
```

---

## Task 13: Verify the build

**Files:** none (verification only)

This is the Phase 0 gate check.

- [ ] Run the full build and confirm both outputs succeed:

```bash
cd /mnt/code/gamebook && quarto render
```

Expected output includes:
- `backlinks: scanned 6 .qmd file(s) — no-op (stub)` (from the pre-render hook)
- Lines like `[1/6] content/index.qmd` through `[6/6] content/specimens/index.qmd`
- `Output created: _book/index.html`
- `[typst]: Compiling index.typ to index.pdf...DONE`
- `Output created: _book/field-guide-to-narrative---game-design.pdf` (filename may vary)

- [ ] Confirm both output files exist:

```bash
ls _book/*.html _book/*.pdf
```

Expected: at least one `.html` and one `.pdf` file.

- [ ] If the build fails, check the error. Common causes:
  - Missing `author` field: add `author: "—"` to `_quarto.yml` under `book:`
  - Pre-render script path error: verify `scripts/backlinks.py` exists and runs with `python3 scripts/backlinks.py`
  - Chapter file not found: verify all six `content/*/index.qmd` files exist

---

## Task 14: Final commit and push

- [ ] Verify git status is clean:

```bash
git status
```

Expected: `nothing to commit, working tree clean`. If any files are untracked or modified, add and commit them before continuing.

- [ ] Push to GitHub:

```bash
git push
```

- [ ] Close issue #1:

```bash
gh issue close 1 --repo pvliesdonk/gamebook \
  --comment "Phase 0 gate met: empty shell builds cleanly to both Typst PDF and HTML wiki outputs."
```

- [ ] Verify the milestone shows progress:

```bash
gh api repos/pvliesdonk/gamebook/milestones --jq '.[] | select(.title == "Phase 0") | {title, open_issues, closed_issues}'
```

Expected: `open_issues: 0, closed_issues: 1`.
