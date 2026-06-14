# Wiki UI Kit — The Field Guide (web edition) · **BLUEPRINT**

> **This is the blueprint for a website that must be built from scratch.**
> Quarto (the book's toolchain) emits a fixed navbar + chapter-sidebar shell and
> **cannot** produce this app — the masthead, family taxonomy rail, the
> two-column sticky-exemplar article, and the Gazetteer are bespoke. So this kit
> is the **literal spec** for the public website, not something Quarto renders and
> not a drop-in. See `guidelines/web-rendering-strategy.md` for the full decision.

A high-fidelity recreation of the **web** face of the Field Guide to Narrative &
Game Design — the connected, searchable vault a reader browses online. (The other
face is the bound Print Edition, which **is** Quarto/Typst; see `ui_kits/print/`.)

## Files
- `index.html` — mounts the app; open this.
- `data.js` — representative sample corpus (`window.WIKI_DATA`). Not the real
  content — enough entries to exercise every component and the cross-link graph.
- `WikiShell.jsx` — masthead + taxonomy nav rail + view router (`WikiApp`).
- `BrowseView.jsx` — the Gazetteer: big search, facet chips, plate grid.
- `ArticleView.jsx` — a single plate read in full: header, two-column body with
  callouts & provenance, floating exemplar stat-block, "Referenced by" register.

## Interactions
- Type in the Gazetteer search → entries filter live.
- Click facet chips → toggle filters.
- Click a plate → opens the article. "The Fairness Contract" is the fully
  written specimen; the rest are catalogued stubs.
- In an article, click a "Referenced by" link → navigates to that plate.
- Click the masthead wordmark → back to the Gazetteer.

## Composition
Built entirely from the design-system primitives — `SearchInput`, `FilterChip`,
`EntryCard`, `Silhouette`, `Callout`, `ProvenanceMark`, `StatBlock`, `Backlinks`,
`MediaBadge`, `Tag`. The kit adds only layout chrome (masthead, rail, grids), as
a UI kit should.
