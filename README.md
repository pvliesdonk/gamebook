# Field Guide to Narrative & Game Design

A naturalist-style field guide to the craft of narrative and game design, written
as a single source that renders to an HTML wiki and a bound Typst PDF. The guide
is organised by **design function** rather than by medium: articles are grouped
into six families, opened by primers, routed by intent-based keys, and illustrated
by a gazetteer of real-world exemplars.

Compiled by Peter van Liesdonk.

## Building

```bash
quarto preview            # local HTML preview with live reload
quarto render             # full build: HTML wiki + Typst PDF
quarto render --to html   # HTML only
quarto render --to typst  # PDF only
```

Build output goes to `_book/` (gitignored). See `CLAUDE.md` for the project
conventions and `docs/` for the style guide, decision register, and term registry.

## Layout

| Path | What it holds |
|------|---------------|
| `content/` | The work: articles, primers, keys, exemplars, specimens |
| `docs/` | Style guide, decision register, term registry, reference docs |
| `research/` | Research notes and the point-in-time corpus snapshot |
| `scripts/`, `filters/`, `partials/`, `templates/` | Build scaffolding |

## Licensing

This repository is content-first. The guide itself is the work; the tooling only
renders it.

- **The content** (`content/`, `docs/`, `research/`, and the rendered book) is
  licensed under [Creative Commons Attribution-NonCommercial 4.0 International
  (CC BY-NC 4.0)](https://creativecommons.org/licenses/by-nc/4.0/). See
  [`LICENSE`](LICENSE).
- **The build scaffolding** (`scripts/`, `filters/`, `partials/`, `templates/`,
  and the build configuration) is licensed under the MIT licence. See
  [`LICENSE-CODE`](LICENSE-CODE).

## Contributing

The repository is private and outside contributions are not actively solicited,
but if one is offered it is welcome. Contributions are accepted under the
licence-grant CLA in [`CONTRIBUTING.md`](CONTRIBUTING.md).
