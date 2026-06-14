# Field Guide Design System

The brand source of truth for both faces of the guide, exported from Claude
Design and vendored here: tokens, guidelines, reference components, and the
print/web UI-kit blueprints. It is **reference material, not rendered** into the
book.

## Layout

- `tokens/` — CSS custom properties (colours, family inks, type, spacing). Author against these.
- `styles.css` — the linked stylesheet over the semantic tokens.
- `guidelines/` — brand docs and live cards (HTML/MD): palette, type, callouts, bleed tabs, the print article-tags and back-matter specs, illustration style, and `web-rendering-strategy.md`.
- `components/` — reference React components (`.jsx` + `.d.ts` + `.prompt.md`) and `_ds_bundle.js` (the `window.FieldGuideDesignSystem_*` runtime).
- `ui_kits/print/`, `ui_kits/wiki/` — the print and website blueprints.
- `assets/icons/` — design-system icon sources (the repo's own glyphs live under the top-level `assets/icons/`).
- `_ds_manifest.json`, `_adherence.oxlintrc.json` — the manifest and adherence lint rules.

## How the repo uses it

- **PDF (Quarto → Typst)** themes against these tokens (`typst/field-guide.typ`, `partials/`). The article specimen line (#70) and the exemplar field-record (#71) follow `guidelines/print-article-tags.md` and the back-matter spec.
- **Website** — `guidelines/web-rendering-strategy.md` settles that the public site is a **bespoke app built from scratch** (decision #7; tracked by #62), using `ui_kits/wiki/` as the blueprint. Quarto/Typst stays the PDF pipeline; a themed-Quarto-HTML interim is #73.

## Not included

The licensed commercial fonts shipped in the original bundle (Adobe Jenson Pro,
Cronos Pro, Letter Gothic Std, Garamond Premier Pro, Arno Pro) are **not
redistributable** and are excluded (see the repo `NOTICE`). The PDF builds with
the bundled OFL fallbacks under `assets/fallback/`. The bundle's PDF copies and
screenshots are also omitted.
