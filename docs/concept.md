# Field Guide to Narrative & Game Design — Concept

> This document describes how the project is **envisioned**. It is intent, not specification.
> Where something is a working proposal rather than a settled decision, it is marked **DRAFT**
> and tracked in the decision register (see `plan.md`). Nothing here is binding until the
> corresponding register entry is marked SETTLED.

## What this is

A naturalist field guide to the craft of narrative and game design. The intent is a book you
consult rather than read end to end: you are making a game, a puzzle, an escape room, a piece of
interactive fiction, and you thumb through it for inspiration, or you look up a specific mechanism
when you hit a problem. The same source produces two faces: a curated printed edition (PDF) and a
complete, browsable wiki.

It is a **new authored synthesis**, derived from but independent of the existing
`Narrative & Game Design` corpus in the Obsidian vault. The corpus supplies breadth of topic and a
strong starting base. It is expected that additional research and synthesis beyond the corpus will
be needed, and that is fine, that is part of the work.

## What it is not

- **Not the corpus reformatted.** The corpus is written to be retrieved by an LLM: dense, bullet
  heavy, terse. This guide is a different product with a different register, not a re-skin.
- **Not an exhaustive encyclopedia.** It does not aim for one chapter per source note. Many notes
  merge into one entry, some split, some are dropped. If a compromise is forced, a curated guide
  beats an exhaustive one.
- **Not a linear textbook.** There is no expectation that anyone reads it cover to cover.

## The form

The unit is a single **expandable entry**. Each entry carries both registers itself rather than
splitting them into separate layers:

- a short **readable head** you skim while thumbing for inspiration, and
- a fuller **scannable body** you drop into when you want to read up on the mechanism.

In the wiki the body can be collapsed; in the PDF it prints in full. This dissolves the earlier
"two layer" idea: the layers live inside the entry.

## The spine

Organisation is by **design function**, not by medium. A mechanism such as pacing, cluing, or the
aha moment lives in exactly one place and notes how it manifests across media. **Medium**
(interactive fiction, live game, tabletop, puzzle hunt) is demoted to a **tag**: a filter in the
wiki, a badge on the entry, a thumb tab in print. This avoids filing the same cross media idea in
four places.

The functional families are the load-bearing taxonomy and are **DRAFT**. A strawman to shoot at,
not a proposal:

> **DRAFT — functional families:** Structure & Pacing; Puzzles, Clues & Information;
> Story, Character & Voice; Players & Social Dynamics; Space, Props & Materiality;
> Systems & Mechanics. Plus the Exemplars gazetteer. (A style-specimen gallery was
> originally envisioned but scrapped; see decision #20.)

## The skeleton (envisioned)

1. **How to use this guide.** Orientation. The "parts of a bird" page.
2. **Primers.** A small set (DRAFT count, think 5 to 8) of short pieces on the big terrain features
   (for example structure and pacing, the fairness contract, diegesis and the magic circle,
   branching topologies). Dip in, not read through. Lighter than full survey essays.
3. **Keys.** The browse-for-inspiration engine. Routers from intent to mechanism: by effect or
   feeling you want to create, by problem you are hitting, by component you are holding. Generated
   from entry frontmatter facets, not hand maintained. Live filters in the wiki, decision tables in
   the PDF.
4. **Entries**, grouped by functional family. The species accounts. Distilled from the corpus,
   extended by research where needed.
5. **Exemplars gazetteer.** Profiles of real works (for example Blades in the Dark, The Crystal
   Maze, the MIT Mystery Hunt) as consistent stat blocks, cross-linked to the mechanisms they show
   off.
6. **Index and glossary.**

   *(A style-specimen gallery was originally listed here as a seventh part, a register by
   rhythm lookup matrix of prose "colour plates", but was scrapped; see decision #20.)*

## Entry anatomy (envisioned)

A working template for the central content type, to be settled in the plan:

- Name, aliases and synonyms (designers name the same mechanism differently; aliases matter for
  lookup).
- One line gloss.
- Family, and "appears in" media badges.
- **What it does** (readable head).
- **How it works** (scannable body).
- **When to reach for it, and when not** (the design judgement a working designer actually wants).
- **In the wild** (examples, mostly already in the corpus).
- **Pairs with / confusable with** (the cross-reference trigger layer).
- Sources (footnotes; the corpus already cites properly).
- **Provenance marker** per claim.

## Provenance principle

Because the guide adds research and synthesis on top of the corpus, the seams must be visible. Each
claim is marked as one of: drawn from the corpus, newly researched (with citation), or author
synthesis or opinion. This protects rigour and keeps the material safe to reuse in public writing
later.

## Voice

Neutral in the entry body. Light authorial in the "when to reach for it" judgement and in the
primers, matching the existing blog register (someone who has built the practice, not a textbook
narrator). **DRAFT** until confirmed against the style guide.

## Output model

One markdown source, two renderers, via Quarto:

- **PDF edition.** Curated, designed. Drawn from the source by a frontmatter selection flag, not a
  second copy. Rendered with Typst (custom template) for typographic quality without the
  maintainability cost of a bespoke LaTeX class.
- **Wiki.** The complete living guide. Every entry, primer, key and profile, plus
  backlinks ("referenced by") computed from the guide's own internal link graph at build time. An
  optional graph view is a later nice to have.

A single brand definition (monochrome with a warm accent, serif body) drives both faces.

"Readable" is not only a primer property: even a short entry carries a readable head before its
scannable tail, so nothing is forced into a long essay to be worth reading.

## Relationship to the corpus

The guide is a **sibling** to the corpus, in its own independent repository. The corpus is a
point-in-time research input, consulted while authoring, never a build dependency. The two diverge
by design as research is added. They are different products, not two copies of the same
information, so the single-source-of-truth rule is satisfied within the guide repo and the
duplication that the rule forbids does not occur.
