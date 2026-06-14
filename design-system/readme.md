# The Field Guide to Narrative & Game Design — Design System

A design system for **The Field Guide to Narrative & Game Design**: a Quarto
book — published two ways from one source — about how games and interactive
stories actually work. Its subjects are *atmosphere, puzzles, social contracts,*
and *storytelling*. Its conceit is naturalist: every idea is a **specimen**,
pinned, numbered, and described as if collected in the field.

The guide has **two faces**, and this system dresses both:
- a **web wiki** — connected, searchable, cross-linked;
- a **print edition** — bound, paginated, printerly (Typst → PDF).

> **Two faces, two renderers.** The **print edition is Quarto → Typst**. The
> **website is a bespoke app built from scratch** — Quarto's fixed shell cannot
> produce the masthead, family rail, two-column article, or Gazetteer, so
> `ui_kits/wiki/` is the **blueprint** for that site, not Quarto output. See
> **`guidelines/web-rendering-strategy.md`** for the decision and division of labour.

> One ink, one serif, one paper. The brand's discipline is its restraint: this
> is pigment on a page, never pixels on a screen.

---

## Sources

This system was synthesised from the book's own repository. The reader is
encouraged to explore it to build designs with greater fidelity:

- **GitHub — `pvliesdonk/gamebook`** (private): the Quarto source. The brand is
  settled in `_brand.yml` (paper `#fafafa`, ink `#1a1a1a`, accent `#c07840`,
  Georgia body). Voice and structure live in `docs/concept.md`,
  `docs/style-guide.md`, `docs/decisions.md`, and the article/primer templates
  under `templates/` and `content/`. Prose is enforced by Vale rules in
  `styles/`.

> Nothing from the repo is bundled here verbatim; the sample corpus in the UI
> kits (`ui_kits/wiki/data.js`) is representative, not the real content.

---

## Content fundamentals

How the guide is written — match this voice in any copy you produce.

- **Register: the seasoned field naturalist.** Knowledgeable, precise, a little
  wry; never breathless, never a hype-deck. Sentences are confident and
  declarative. *"Dread is built, not summoned."*
- **Person: "the player," "the designer," "the reader" — third person.** The
  guide addresses the craft, not the customer. Avoid "you" except in a direct
  Field Note aside; never "we."
- **The Silhouette.** Every entry opens with a single italic line that captures
  the idea's *jizz* — its shape recognised at a glance. *"The unspoken promise
  that every locked door has a findable key."* Write these as aphorisms, not
  summaries.
- **Three annotation voices**, set as *printed asides* — never tinted docs
  boxes with a coloured left-border:
  - **The Specimen** — a real example, observed in the wild (a named game), set
    as a mounted, framed plate with an optional engraving slot.
  - **The Field Note** — applied advice, a penned marginal aside with a manicule
    (☞) run-in label, in italic.
  - **The Hazard** — a failure mode, a printed caution under a hatched clay rule
    with a double-dagger (‡) run-in label.
- **Provenance is shown, not hidden.** Claims carry a mono marker:
  `[corpus]` (from the source vault), `[researched]` (external source),
  `[synthesis]` (the author's own argument). Honesty is a brand value.
- **Taxonomy everywhere.** Entries are numbered (`№ 14`, or roman in print),
  filed under a taxon (`Puzzles · Cluing & Information`), and tagged with facets.
- **Casing.** Title Case for entry titles; sentence case for body and Field
  Notes; UPPERCASE small-caps (Franklin) only for taxonomic labels and kickers.
- **No emoji. No exclamatory marketing.** Em-dashes are avoided in body prose
  per the house Vale rule (`NoEmDash`) — use commas, colons, or parentheses.
  Examples are specific and named; never "various games show…".

### Source structure (from the live book)

The Quarto source (`pvliesdonk/gamebook`) settled these conventions — match them
when recreating or extending article views:

- **Article frontmatter** (YAML):
  ```yaml
  title: "Cluing & Fairness"
  aliases: ["Fair Play", "Clue Construction"]
  family: "Puzzles, Clues & Information"
  media: [interactive-fiction, live-game, tabletop, puzzle-hunt]
  facets:
    effects: [earned-discovery, solver-trust]
    problems: [unsolvable-puzzle, dead-end]
    components: [clue-text, answer-key]
    genre: [mystery, detective]
  provenance: "researched"   # article-level honesty tag
  ```
- **The Silhouette** is the first line of the body, italic:
  `*Silhouette: The contract that says a solver who pays attention can get there.*`
- **Section skeleton:** `## The Mechanism (How it works)` with `###` subsections →
  `## Where this fits` (a **The bigger picture** run and a **Next steps** run of
  cross-links) → `## Sources` (a real bibliography) → an auto-generated
  `## Referenced by` block between `<!-- BACKLINKS:START/END -->` markers
  (written by `scripts/backlinks.py` at pre-render — never hand-edited).
- **Callouts are Quarto fenced divs**, mapped to the brand voices:
  `::: {.callout-note}` + `### The Specimen` (moss), `::: {.callout-warning}` +
  `### The Hazard` (clay), `::: {.callout-tip}` + `### The Field Note` (slate).
- **Inline provenance** markers sit at the end of the clause they justify:
  `…the answer is reachable. [corpus]`
- **Cross-links** are `[Title](slug.qmd)` within a family, `[Title](../family/slug.qmd)` across.
- **Six families** ship as `content/articles/<family>/`; **Story, Character &
  Voice** exists in the source but is the one family not yet wired into the book
  TOC. Each family part opens with a **primer** — the realized five are
  *The Shape of Time* (Structure), *The Fairness Contract* (Puzzles),
  *The Social Contract & Safety* (Players), *Making It Real* (Space),
  *The Engine Room* (Systems).

---

## Visual foundations

- **Palette — limited, earthy, settled.** Warm cream **paper** (`#fafafa`,
  `#f5f1e9`, `#ece5d7`) under near-black **ink** (`#1a1a1a` warming to `#2c2824`).
  A single settled **amber** accent (`#c07840`) is the **brand spine** — masthead,
  home, logo, any cross-family view. See `tokens/colors.css`.
- **Family wayfinding — six inks, one per family.** The guide has six families
  (Structure & Pacing · Puzzles · Story · Players · Space · Systems); each owns
  one earthy ink — **Indigo · Teal · Garnet · Moss · Umber · Plum**. Inside an
  article a `data-family="…"` scope **remaps the accent** to that family's ink, so
  the top-rule, kicker, links and active states re-skin with no per-component
  change (one scoped remap of the amber tokens cascades through every semantic
  alias). The six are **value-laddered** (oklch L 0.46→0.66) so they print colour
  in the PDF yet stay separable as six grey steps in B&W — essential for the
  **bleed tabs** (per-family thumb-index, with the family number as failsafe).
  See `tokens/families.css`.
- **Three facets, three channels.** Family is carried by **colour**, media
  (IF/live/tabletop/hunt) by **icon**, genre by a **text** tag — never the same
  channel twice, so they never collide. Media badges are therefore neutral ink.
- **Type — serif-forward, editorial, optical.** **Adobe Jenson Pro** (Font
  Folio) carries all reading and display, routed by **optical size** to the
  master cut for it: Caption (fine print), Text (body), Subhead (leads,
  silhouettes, H4, Display titles & drop caps). **Cronos Pro**
  (humanist sans, also optical) sets the taxonomic chrome — small-caps labels,
  kickers, chips, UI — and shares Jenson's calligraphic DNA so the two sit
  together without a seam. **Letter Gothic Std** (typewriter mono) carries
  provenance markers and stat-block data, giving them a field-logbook /
  specimen-tag register. Body uses **oldstyle figures**; generous reading
  measure (~64ch), 1.62 line-height. All faces are self-hosted — no font CDN.
- **Backgrounds.** Flat warm paper. No gradients, no photographic hero washes,
  no texture overlays. Depth comes from hairline rules and the occasional gutter
  shadow on a bound page — not from colour fields.
- **Borders & rules.** Hairlines in warm greys (`#ddd6c8`, `#c2b9a7`). The
  signature is the **2px amber top-rule** that opens every plate and entry card.
  Table heads sit on a 2px rule; everything else is 1px.
- **Corners — crisp.** Radii are tiny (2–4px) because print does not round.
  Pills (999px) are reserved for media badges and filter chips.
- **Shadow — almost none.** Cards are flat with a hairline border; on hover an
  entry card lifts with a faint warm shadow (`--shadow-raised`). Bound pages get
  a soft inner gutter shadow. There is no glassmorphism, no glow.
- **Cards.** Paper-white fill, 1px hairline, 2px amber top-rule, 4px radius. The
  whole card is the click target; hover raises it gently.
- **Motion — restrained.** 120–200ms, a single paper ease
  (`cubic-bezier(0.2,0,0.2,1)`). Colour and shadow transitions only; no bounce,
  no slide-in theatrics, no infinite loops. The page behaves like paper.
- **Hover / press.** Hover darkens amber or warms a paper surface; the active
  facet tints amber with a check. Focus shows a 2px amber ring on a paper halo.
- **Imagery vibe.** Warm, archival, hand-collected. Where real imagery is used it
  should read like a plate in an old natural-history book — never glossy stock.

---

## Iconography

The brand was historically near-iconless; this system gives it a small,
disciplined **line-icon set** plus an **illustration-plate** system, so the
pages read like an illustrated field book rather than a docs site.

- **Icons: Phosphor Thin, inlined.** The source guide ships no icon set, so we
  use **Phosphor** (MIT) at the **Thin** weight and inline a curated subset into
  the `Icon` component (no CDN at runtime). Its delicate filled-line cut sits with
  the Jenson serif and the family rule instead of looking like app chrome; always
  `currentColor`.
  - *Wayfinding/UI:* `search` `arrow-right` `arrow-left` `corner-down-right`
    `check` `feather` (the wordmark glyph) `map` `list`.
  - *The six families:* `structure` (waypoints), `puzzles` (key), `story` (open
    book), `players` (handshake), `space` (box), `systems` (cog).
  - *The four media:* `if` (book), `live` (masks), `tabletop` (dice), `hunt`
    (puzzle). `MediaBadge` carries the medium's icon in **neutral ink** — colour
    belongs to the family, so media never uses it.
- **Illustration plates.** `IllustrationPlate` is a mounted naturalist engraving
  frame. Until real art is generated it renders a labelled *"plate — engraving to
  come"* placeholder over a faint hatched ground, with a figure number and italic
  caption; pass `src` to drop in the finished engraving. Every major entry,
  browse feature and section opener can carry one — this is the brand's answer to
  bare pages. **Plates are placeholders by design; generate engravings in a
  matching style and wire them in via `src`.**
- **Printer's ornaments.** A few monochrome glyphs do typographic duty: the
  asterism (⁂) marks a plate, the manicule (☞) opens a Field Note, the double
  dagger (‡) opens a Hazard. Set in the running font, ink-coloured.
- **No emoji, ever.** Not in content, not in UI. If a new UI icon is needed,
  add another Phosphor Thin glyph to `Icon` — do not mix sets.

---

## Index — what's in this system

**Foundations** (`tokens/`, specimens in `guidelines/cards/`)
- `styles.css` — the single entry point consumers link.
- `tokens/colors.css` · `families.css` · `typography.css` · `spacing.css` · `fonts.css` · `base.css`
- Specimen cards: Paper & Ink, Amber, Botanical Inks (callout/plate tones), The
  Six Families, Family Accent in the Article, Three Facets/Three Channels · Jenson
  Optical Sizes, Type Scale, Cronos Labels, Mono · Spacing Scale, Radii & Lift ·
  Callouts, Plate Identity, Bleed Tabs.

**Components** (`components/`) — 14 primitives, five groups
- *core/* — `Button`, `Tag`, `MediaBadge`, `ProvenanceMark`
- *content/* — `Silhouette`, `EntryCard`, `StatBlock`, `Backlinks`
- *feedback/* — `Callout` (Specimen plate · Field Note · Hazard band)
- *forms/* — `SearchInput`, `FilterChip`
- *media/* — `Icon` (Phosphor Thin line set), `IllustrationPlate` (engraving frame)

**UI kits** (`ui_kits/`)
- *wiki/* — **BLUEPRINT for the from-scratch website** (Gazetteer browse + part page + Article reading view). Not Quarto output; see `guidelines/web-rendering-strategy.md`.
- *print/* — the Typst/PDF bound spread (this one **is** the real renderer).

**Guidelines** (`guidelines/`)
- *web-rendering-strategy.md* — **read first for web**: why the site is built from scratch, and which files feed PDF vs website.
- `illustration-style.md` — the ink-linework plate brief (generator prompt skeleton, colour/print rules, placement).
- `illustration-directions.html` — the three-treatment comparison study (decision aid).

**Meta**
- `SKILL.md` — portable Agent-Skill manifest.
- `readme.md` — this file.

---

## Using it

Consumers link one file:

```html
<link rel="stylesheet" href="styles.css">
```

…then author against the semantic tokens (`--text-body`, `--surface-card`,
`--amber`, `--specimen`…) and mount components from
`window.FieldGuideDesignSystem_df43d1` after loading `_ds_bundle.js`. Prefer the
semantic aliases over raw inks so a future re-theming stays cheap. To accent a
view by family, set `data-family="structure|puzzles|story|players|space|systems"`
on its container — the amber accent re-skins to that family's ink.
