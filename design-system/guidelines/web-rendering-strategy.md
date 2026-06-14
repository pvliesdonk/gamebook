# Web Rendering Strategy — build the website from scratch

> **Decision (2026-06-11):** The public website is **built from scratch** as a
> bespoke app, using this design system as its blueprint. Quarto/Typst remains
> the **PDF / canonical-content** pipeline; it does **not** render the website.

## Why Quarto cannot be the website

Quarto emits a **fixed shell** — a top navbar, a left chapter sidebar, and a
single-column content well. The Field Guide's web face is a different product:

- a **masthead** with the guide wordmark + global search (the Gazetteer entry),
- a **family taxonomy rail** (six families A–F, each its own ink) — not a
  flat chapter list,
- **part/family landing pages** that integrate the primer as the opener, then
  index the part's numbered articles,
- a **two-column ArticleView** with a sticky right margin (illustration plate,
  exemplar stat-block, provenance), and
- the **Gazetteer** — a faceted browse across all entries (family colour, media
  icon, genre tag, free-text search).

None of that is themeable Quarto chrome; it is an application. So the website is
implemented directly, and **this design system's `ui_kits/wiki/` is the literal
blueprint** for it — not an aspiration.

## Division of labour

| Concern | Owner |
|---|---|
| Canonical content (`.qmd` body + frontmatter) | the `gamebook` repo |
| **PDF / print edition** | **Quarto → Typst** (themed with `tokens/`; see `ui_kits/print/`) |
| **Website** | **bespoke app, built from scratch** (blueprint: `ui_kits/wiki/`) |
| Brand foundations (tokens, fonts, voice, components) | **this design system** |

Content is authored **once** in `.qmd`. Both renderers read the same source: the
PDF via Quarto/Typst, the website via the bespoke build's own `.qmd`
frontmatter+body parser.

## What the website build must reproduce (from `ui_kits/wiki/`)

Read these files as the spec; they are React recreations, but the **structure,
layout, and brand behaviour** are the requirement, not the framework choice.

- `WikiShell.jsx` — masthead + family rail + view routing (part / article / Gazetteer).
- `PartView.jsx` — family landing: primer-as-opener, then the article index, family-accented.
- `ArticleView.jsx` — two-column read: drop-cap lead, `## The Mechanism → ## Where this fits → ## Sources → ## Referenced by` skeleton, sticky right margin (plate + exemplar + provenance), media badge, `[provenance]` tags.
- `BrowseView.jsx` — the Gazetteer: faceted, searchable index of every entry.
- `data.js` — the shape of an entry (`family`, `number`, `taxon`, `silhouette`, `media`, `facets`, `body[]`, `backlinks[]`, `exemplar`). Map `.qmd` frontmatter onto this.

### Brand rules the website inherits (non-negotiable)
- Link `styles.css`; author against the semantic tokens.
- **Family = colour** via `data-family="structure|puzzles|story|players|space|systems"` (re-skins the amber accent); **media = icon**; **genre = text tag**.
- **Family identifier is a letter A–F; article identifier is a number** (they must never collide on the same control — see the bleed-tab rule).
- Callouts map from Quarto fenced divs: `callout-note`→Specimen, `callout-warning`→Hazard, `callout-tip`→Field Note.
- Type: Jenson (optical) / Cronos / Letter Gothic. Provenance markers inline at the end of the clause they justify.

## Implementation notes for the website build

- **Framework is the builder's call** (Astro, Eleventy, SvelteKit, a small React/Vite SSG…). The design system is renderer-agnostic; only the *consumption* differs. The `_ds_bundle.js` React components are a **reference implementation** — re-implement in the chosen stack if it isn't React, lifting the exact markup/styles.
- **Reuse the foundations directly**: `styles.css`, `tokens/`, `assets/fonts/`. Do not re-derive colours or type.
- **Fonts — licensing:** the self-hosted OTFs are **Adobe Font Folio desktop** licences — correct for the **PDF**. For the **public website** swap the `@font-face src` to the **Adobe Fonts web** project for the same families (Jenson / Cronos), or a web-licensed equivalent. Do not ship the desktop OTFs on the public site.
- **Illustrations:** `IllustrationPlate` slots take generated ink-linework plates via `src` (see `guidelines/illustration-style.md`). Frameless in print, mounted-frame on the web.

## Status of `ui_kits/wiki/` in this design system

It is the **blueprint / north star** for the website — a high-fidelity brand
recreation of the target web product, **not** a drop-in renderer and **not**
something Quarto produces. Treat it as the source of truth for layout, wayfinding,
and brand behaviour when building the real site.
