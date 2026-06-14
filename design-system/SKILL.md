---
name: field-guide-design
description: Use this skill to generate well-branded interfaces and assets for The Field Guide to Narrative & Game Design — a naturalist-style book/wiki about atmosphere, puzzles, social contracts and storytelling. Use for production work or throwaway prototypes, mocks and slides. Contains the brand's colours, type, fonts, voice, components and UI kits.
user-invocable: true
---

# Field Guide to Narrative & Game Design — design skill

Read `readme.md` first — it holds the full brand: content voice, visual
foundations, iconography, and an index of every file. Then explore the tokens,
components and UI kits.

## Two faces, two renderers (read before building the product)
The Field Guide ships as **two surfaces from one `.qmd` source**:
- **Print / PDF** → **Quarto → Typst**, themed with `tokens/` (see `ui_kits/print/`).
- **Website** → a **bespoke app, built from scratch** — Quarto's fixed
  navbar+sidebar shell **cannot** produce it. `ui_kits/wiki/` is the **blueprint**
  for that site, not Quarto output and not a drop-in. **Full decision +
  division-of-labour: `guidelines/web-rendering-strategy.md` — read it before
  implementing any web rendering.**

## What this brand is
A naturalist *field guide* to game and narrative design. Every idea is a pinned
**specimen** — numbered, filed under a taxon, opened with a one-line italic
**Silhouette**. Warm cream paper, near-black ink, one settled amber accent,
Georgia serif throughout. Pigment on a page, never pixels on a screen.

## Non-negotiables
- **Palette:** paper `#fafafa` / ink `#1a1a1a` / amber `#c07840` (brand spine),
  plus **six value-laddered family inks** (Indigo · Teal · Garnet · Moss · Umber ·
  Plum) — colour the article by its family via `data-family="…"`. No gradients,
  no glow, near-zero shadow, crisp 2–4px corners. Colour = family, icon = media,
  text = genre. Family colours print colour but stay separable in greyscale.
- **Type:** Adobe Jenson Pro for all reading & display (routed by optical size:
  Caption / Text / Subhead / Display); Cronos Pro for taxonomic labels & UI;
  Letter Gothic Std for provenance markers & data. All self-hosted.
- **Voice:** third person ("the player," "the designer"), confident and dry.
  Open entries with an italic Silhouette. Mark claims with provenance
  (`[corpus]`/`[researched]`/`[synthesis]`). No emoji. Avoid em-dashes in body.
- **Signatures:** the 2px family-coloured top-rule on every plate; the bleed
  tabs (per-family thumb-index); the three callout voices (Specimen plate / Field
  Note / Hazard band); ink-linework illustration plates (see
  `guidelines/illustration-style.md`).

## How to work
- Link `styles.css` and author against the semantic tokens.
- For React, load `_ds_bundle.js` and read components from
  `window.FieldGuideDesignSystem_df43d1` (`Button`, `Callout`, `EntryCard`,
  `MediaBadge`, `ProvenanceMark`, `SearchInput`, `FilterChip`, `StatBlock`,
  `Backlinks`, `Silhouette`, `Tag`).
- For **visual artifacts** (slides, mocks, throwaway prototypes), copy the
  assets/tokens you need out and produce static HTML the user can open.
- For **production code**, copy assets and follow the rules here to design as a
  brand expert.

If invoked with no brief, ask what they want to build, ask a few focused
questions, then act as an expert designer — outputting HTML artifacts *or*
production code as the need dictates.
