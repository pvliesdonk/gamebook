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
