# Realising the Field Guide Design System — Analysis & Plan

> Status: **proposal for approval.** Nothing here is built yet. This supersedes the
> first attempt (PRs #58/#60), which was reversed as disapproved.

## 0. What went wrong the first time (the lesson)

Two failures, one of them process:

1. **Decoration, not realisation.** I layered brand tokens and a few injected elements
   (provenance marks, callout colours, bleed tabs) on top of Quarto's *default* HTML and
   Typst output. The foundation underneath — Quarto's `us-letter` article page, its
   navbar/sidebar shell, its centred title block, its default type-setting — was never
   replaced. The result reads as "Quarto standard with bolt-ons," which is exactly what it
   was. The design is a **bound book** and a **bespoke wiki app**; neither is Quarto-with-CSS.

2. **No feedback loop.** I produced two PRs' worth of work before showing a single rendered
   page. The wrong direction compounded silently.

**Working agreement for this effort:** small increments, each ending in a **rendered visual
artifact** (PNG of a page / screenshot of a screen) presented for approval. No phase scales
until its proof page is approved. No large silent builds.

---

## 1. The design system, precisely

The handoff bundle is not a colour palette — it is two finished **interfaces** plus shared
foundations. Grounding in the kit files (`ui_kits/`, `components/`, `tokens/`):

### Shared foundations (`tokens/`)
- Palette: warm paper / near-black ink / one amber spine, six **value-laddered family inks**
  (oklch, greyscale-separable), botanical callout inks.
- Type: an **optical serif system** (Jenson Caption/Text/Subhead/Display), Cronos for labels,
  Letter Gothic for data; the 54/33/22/17/12 scale; oldstyle figures; ~64ch measure, 1.62 leading.
- The three **callout voices** (Specimen / Field Note / Hazard) as *printed asides*, not boxes.
- Provenance marks, media badges (icon = medium, colour = family, text = genre), iconography
  (Phosphor Thin), illustration plates.

### The print edition (`ui_kits/print/`) — a bound book
A specific **trim** with **mirrored margins** (gutter), running heads (verso/recto), a designed
**cover**, **part-divider** pages (family plate + primer + numbered contents), article **openers**
(family rule + roman № + taxon kicker + title + drop-cap lead), the callout voices, **bleed tabs**
(per-family thumb index), an **exemplar plate** (stat-block), footnotes, a designed **TOC**.

### The web wiki (`ui_kits/wiki/`) — a bespoke app
- **WikiShell:** a slim masthead (feather wordmark + search) and a left **family taxonomy rail**
  (six families with coloured icons + counts) — *not* Quarto's chapter sidebar.
- **BrowseView (the Gazetteer):** big search, **facet chips**, a featured plate, and a responsive
  **grid of entry cards**. Quarto generates nothing like this.
- **ArticleView:** a `data-family`-scoped page — header (amber top-rule, № + taxon, provenance +
  media, title, Silhouette) over a **two-column** layout: reading column + a **sticky aside** with
  the **exemplar stat-block** and the **"Referenced by"** register.

---

## 2. The constraint (honest)

| | Quarto's ceiling | Verdict |
|---|---|---|
| **Typst / PDF** | The Typst template can be **fully replaced** (page partials, `article()` override). Trim, margins, type, cover, parts, TOC, openers, plates are all reachable. | **Quarto-Typst can become the design.** The right method is template takeover, not show-rules. |
| **HTML / wiki** | Quarto emits a fixed shell: top navbar, left chapter sidebar, single-column content, right TOC. SCSS can restyle surfaces and the article *reading* column can be pushed close to ArticleView. But the **masthead, family rail, two-column+sticky-aside, and the entire Gazetteer browse** are a bespoke app Quarto does not produce. | **Quarto-HTML cannot fully become the design.** It can approximate the reading page; it cannot be the app. |

This is not a surprise — your **decision register #7** ("Split pipeline / separate web renderer as
fallback — trigger: pilot web output disappoints") anticipated exactly this. That trigger has fired.

The design bundle **ships the web implementation** (`WikiShell/BrowseView/ArticleView` + components +
`data.js`) as React. The faithful path for the web is to *render our content into that*, not to
re-derive it in Quarto's shell.

---

## 3. Options per face

### PDF (low ambiguity)
**P — Take over the Typst template.** Custom `page.typ` (trim, mirrored margins, paper, running
heads, tabs), a custom `article()`/title partial (cover), per-`type` openers (article vs primer
part-divider), callout voices, exemplar plates, drop caps, designed TOC. One toolchain, one source.
*This is the plan; no real alternative.*

### Web (the real fork)
- **W1 — Push Quarto HTML hard.** Restyle navbar→masthead, sidebar→family rail, the reading column
  →ArticleView; cards via Quarto listings for browse. *Pros:* one toolchain, content stays in Quarto.
  *Cons:* the shell and the Gazetteer browse will **not** match; the two-column sticky-aside fights
  Quarto's layout. Honest ceiling: "clearly inspired by the design," not "is the design."
- **W2 — Separate web renderer (decision #7).** A small static build (e.g. Astro/Vite) consumes the
  Quarto content (frontmatter + rendered body HTML, or the `.qmd` directly) and mounts the design's
  own components. *Pros:* **faithful** — masthead, rail, Gazetteer, ArticleView, exemplar aside all
  exactly the design; `.qmd` stays the single source of truth; Quarto keeps doing the PDF.
  *Cons:* a second build step + a JS toolchain in the repo; a content-extraction layer to write.
- **W3 — Hybrid.** Quarto for the deep reading pages (themed hard, ~W1) + a bespoke landing/Gazetteer
  built as static HTML. *Pros:* less than W2. *Cons:* two article experiences that won't quite agree;
  most of W2's cost without its fidelity.

**My recommendation:** **P** for print, **W2** for web — it is the only path that actually *is* the
design for the wiki, it is what the bundle was built to enable, and it honours decision #7. But this
is your architecture call, so I want a **Phase-0 proof** to de-risk it before committing.

---

## 4. Phased plan (every phase ends in a visual artifact for your approval)

**Phase 0 — Foundation + one-page proof.** *(small)*
- Lock the open decisions (§5) and resolve decision #7 in the register.
- One shared **token source** → generated CSS vars + a Typst module (no drift between faces).
- Realise **one article** — *Cluing & Fairness* — fully to the design on **both** faces (PDF page
  + web ArticleView screen). **Deliver renders. Approve before anything scales.**

**Phase 1 — The reading experience at scale.** *(after P0 approval)*
- PDF: the bound-book foundation across all 116 articles + 6 primers (trim, margins, type, openers,
  callouts, footnotes, running heads, tabs). Deliver sample spreads.
- Web: ArticleView for every article (header, two-column, exemplar aside, backlinks). Deliver screens.

**Phase 2 — Navigation & shell.**
- Web: masthead, family taxonomy rail, the Gazetteer browse (search + facets + card grid).
- PDF: cover, part-divider pages, designed TOC. Deliver.

**Phase 3 — Components & polish.**
- Exemplar stat-blocks, illustration-plate placeholders, drop caps, the final 10%. Deliver.

Each phase = its own small PR, opened only after the prior phase's renders are approved.

---

## 5. Open decisions I need from you

1. **Web architecture:** W1 (push Quarto) / **W2 (separate renderer — recommended)** / W3 (hybrid)?
   Or: approve a Phase-0 proof of W2 before deciding?
2. **Fidelity bar:** pixel-faithful to the kit, or "unmistakably the design, minor screens approximated"?
3. **Toolchain:** is a second build step (a JS site for the web) acceptable, or is Quarto-only a hard line?
4. **Source of truth:** `.qmd` stays the single source for both faces (assumed yes)?
5. **Print trim:** propose **6.5 × 9.25 in**, mirrored margins. OK, or a trim you prefer?
6. **Fonts:** keep the split — licensed Adobe faces for print, free lookalikes for web (re-confirm)?

Once you answer §5 (or say "do the Phase-0 proof first"), I build only Phase 0 and bring you renders.
