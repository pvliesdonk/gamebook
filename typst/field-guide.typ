// ============================================================
// Field Guide to Narrative & Game Design — Typst print theme
// The bound-book face. Licensed Adobe faces (desktop licence):
// Adobe Jenson Pro (reading & display), Cronos Pro (labels),
// Letter Gothic Std (data / provenance).
// This file (include-in-header) holds the inks, type-setting,
// headings, callouts, the silhouette/drop-cap and the page
// furniture builders. The page itself is in partials/page.typ.
// ============================================================
#import "@preview/droplet:0.3.1": dropcap

// --- Inks (shared with the web tokens) ----------------------
#let ink       = rgb("#2c2824")
#let ink-deep  = rgb("#1a1a1a")
#let ink-muted = rgb("#6b6155")
#let ink-faint = rgb("#968b7c")
#let paper     = rgb("#fafafa")
#let amber     = rgb("#c07840")
#let amber-ink = rgb("#7f4a20")
#let rule-soft = rgb("#ddd6c8")
#let rule      = rgb("#c2b9a7")
#let moss      = rgb("#44502c")
#let slate     = rgb("#2f4a50")
#let clay      = rgb("#863a23")

// --- Type families: licensed primary face, free OFL fallback ---------------
// The Adobe Font Folio faces are a desktop licence (gitignored, not shipped).
// When they are absent (CI, public builds, anyone without the licence), Typst
// falls back per glyph to the bundled OFL faces under assets/fallback/:
// EB Garamond (serif), Source Sans 3 (sans), Courier Prime (mono). Every font
// reference in the theme uses these lists, never a bare family name.
#let fg-serif = ("Adobe Jenson Pro", "EB Garamond")
#let fg-sans  = ("Cronos Pro", "Source Sans 3")
#let fg-mono  = ("Letter Gothic Std", "Courier Prime")

#let fam = (
  structure: oklch(46%,   0.072, 264deg),
  puzzles:   oklch(67.5%, 0.074, 198deg),
  story:     oklch(59.5%, 0.110, 22deg),
  players:   oklch(70.5%, 0.076, 132deg),
  space:     oklch(62.5%, 0.072, 58deg),
  systems:   oklch(53%,   0.084, 344deg),
)
#let fam-label = (
  structure: "Structure & Pacing",
  puzzles:   "Puzzles, Clues & Information",
  story:     "Story, Character & Voice",
  players:   "Players & Social Dynamics",
  space:     "Space, Props & Materiality",
  systems:   "Systems & Mechanics",
)
#let fam-order = ("structure", "puzzles", "story", "players", "space", "systems")

#let fg-family = state("fg-family", "structure")
#let fg-set-family(f) = fg-family.update(f)
#let fg-article = counter("fg-article")
// True once we are inside the family parts (set by the first part divider);
// front matter (index) and anything before the parts stays plain + unnumbered.
#let fg-in-body = state("fg-in-body", false)
// True only at a primer chapter heading (set/cleared around it by the filter).
#let fg-primer-flag = state("fg-primer-flag", false)
// Raised by the Lua filter on unnumbered family back-matter (the per-family
// Works & References credits page): rendered, but never numbered, so its opener
// and side tab show no (stale) article number.
#let fg-unnumbered = state("fg-unnumbered", false)
// True inside the Exemplars part (the gazetteer): its chapters are profiles, not
// family articles, so they get the exemplar opener (amber rule + gazetteer
// kicker) and the gazetteer running head, but no family number or thumb-tabs.
#let fg-gazetteer = state("fg-gazetteer", false)

#let kicker(s, c: ink-muted, size: 8.5pt) = text(
  font: fg-sans, size: size, weight: "semibold", fill: c, tracking: 1.2pt,
)[#upper(s)]

// --- Body type-setting (the reading measure) ----------------
#set text(fill: ink, font: fg-serif, size: 10.5pt, number-type: "old-style")
#set par(justify: true, leading: 0.68em, spacing: 1.0em, first-line-indent: 0pt)
#show raw: set text(font: fg-mono)  // code / verbatim uses the mono face + fallback

// --- The Silhouette: the italic subhead lead under the title -
#let fg-silhouette(body) = block(below: 1.0em, above: 0.3em)[
  #set text(font: fg-serif, size: 13.5pt, fill: ink)
  #body
]

// --- The lead paragraph: a two-line drop cap ----------------
#let fg-lead(body) = dropcap(
  height: 2, gap: 6pt, hanging-indent: 0pt,
  transform: letter => text(font: fg-serif, weight: "semibold", fill: ink-deep)[#letter],
  body,
)

// --- The specimen line: lead effect · problem, then quiet media glyphs ------
// Surfaced on the printed opener under the silhouette (see the design system's
// guidelines/print-article-tags.md). Effect leads in neutral ink, problem in the
// family ink; present media show as small ghosted glyphs (count signals span).
// `family` is the family key; the data is injected after the silhouette by
// scripts/specimen_tags.py and rendered by the Lua filter (.specimen-line div).
#let fg-media-order = ("if", "live", "tabletop", "hunt")
#let fg-tags(effect: none, problem: none, media: (), family: none) = {
  if effect == none and problem == none { return }
  let accent = fam.at(family, default: amber-ink)
  block(above: 0.55em, below: 0.95em, breakable: false)[
    #set text(font: fg-sans, size: 8.5pt, weight: "semibold", tracking: 0.55pt)
    #grid(
      columns: (auto, 1fr, auto),
      align: (left + horizon, center + horizon, right + horizon),
      column-gutter: 0.9em,
      box[
        #if effect != none [#text(fill: ink-muted)[#upper(effect)]]
        #if effect != none and problem != none [#h(0.45em)#text(fill: ink-faint)[·]#h(0.45em)]
        #if problem != none [#text(fill: accent)[#upper(problem)]]
      ],
      line(length: 100%, stroke: 0.5pt + rule-soft),
      box(inset: (bottom: 1pt))[
        #for m in fg-media-order {
          if m in media {
            box(baseline: 2pt, image("assets/icons/media/" + m + "-thin.svg", height: 8pt))
            h(0.45em)
          }
        }
      ],
    )
  ]
}

// --- The exemplar field-record: a glyph-led key/value specimen ---------------
// Used on gazetteer/exemplar openers (the design system's StatBlock / the
// print-back-matter field-record). Each row is a (glyph, value) pair; the glyph
// (Phosphor Thin, assets/icons/field/<glyph>-thin.svg) replaces the text label.
// Two columns, capped to the body measure, set under the Profile line. The data
// is injected by scripts/exemplar_record.py and rendered by the Lua filter.
#let fg-record(rows) = {
  if rows.len() == 0 { return }
  // A band, not a card: amber top rule + faint bottom rule, no fill (per the
  // design system's .fr2 field-record). Two columns, glyph + serif value, the
  // glyph nudged to sit on the first line; long values wrap under the value.
  block(above: 0.85em, below: 1.05em, breakable: false, width: 100%,
    stroke: (top: 1.5pt + amber, bottom: 0.75pt + rule),
    inset: (top: 7pt, bottom: 8pt))[
    #grid(
      columns: (1fr, 1fr), column-gutter: 22pt, row-gutter: 5pt,
      ..rows.map(((glyph, value)) => grid(
        columns: (auto, 1fr), column-gutter: 6pt, align: (left + top, left + top),
        box(inset: (top: 2.2pt), image("assets/icons/field/" + glyph + "-thin.svg", height: 9.5pt)),
        text(font: fg-serif, size: 10pt, fill: ink)[#value],
      )),
    )
  ]
}

// --- Headings (54/33/22/17 type scale, scaled for print) ----
// Level 1 = chapter opener. The article counter is stepped by the Lua filter
// (before the heading), and primer chapters carry fg-primer-flag; here we only
// read those and render. Three kinds: a primer, a numbered article, or plain
// front/back matter.
#show heading.where(level: 1): it => context {
  pagebreak(weak: true)
  let f = fg-family.get()
  let c = fam.at(f, default: amber)
  // an opener with a family rule, a left mark, the taxon kicker and the title
  let opener(mark) = block(width: 100%, above: 0pt, below: 0.9em, breakable: false)[
    #line(length: 100%, stroke: 2pt + c)
    #v(0.55em, weak: true)
    #box(text(font: fg-mono, size: 9pt, fill: c)[#mark])
    #h(0.7em)
    #box(kicker(fam-label.at(f, default: "")))
    #v(0.4em, weak: true)
    #text(font: fg-serif, size: 21pt, weight: "semibold", fill: ink-deep)[#it.body]
  ]
  if fg-primer-flag.get() {
    opener[Primer]
  } else if fg-in-body.get() and fg-unnumbered.get() {
    // family back-matter (Works & References): family rule and kicker, no number
    block(width: 100%, above: 0pt, below: 0.9em, breakable: false)[
      #line(length: 100%, stroke: 2pt + c)
      #v(0.55em, weak: true)
      #box(kicker(fam-label.at(f, default: "")))
      #v(0.4em, weak: true)
      #text(font: fg-serif, size: 21pt, weight: "semibold", fill: ink-deep)[#it.body]
    ]
  } else if fg-in-body.get() {
    opener[№ #fg-article.get().first()]
  } else if fg-gazetteer.get() {
    // exemplar profile: article-style opener, amber rule + gazetteer kicker, no number
    block(width: 100%, above: 0pt, below: 0.9em, breakable: false)[
      #line(length: 100%, stroke: 2pt + amber)
      #v(0.55em, weak: true)
      #box(kicker("Exemplar · The Gazetteer"))
      #v(0.4em, weak: true)
      #text(font: fg-serif, size: 21pt, weight: "semibold", fill: ink-deep)[#it.body]
    ]
  } else {
    // front / back matter: a plain title, no rule / number / kicker
    block(width: 100%, above: 0pt, below: 0.8em, breakable: false)[
      #text(font: fg-serif, size: 21pt, weight: "semibold", fill: ink-deep)[#it.body]
    ]
  }
}
#show heading.where(level: 2): set text(font: fg-serif, size: 15pt, fill: ink-deep, weight: "semibold")
#show heading.where(level: 3): set text(font: fg-serif, size: 12.5pt, fill: ink-deep, weight: "semibold")
#show heading.where(level: 4): set text(font: fg-serif, size: 11pt, fill: ink-muted, weight: "semibold", style: "italic")
#show heading.where(level: 2): set block(above: 1.5em, below: 0.7em)
#show heading.where(level: 3): set block(above: 1.1em, below: 0.5em)
#show heading: set par(justify: false)  // display headings ragged, never justified

// --- Links, code, provenance --------------------------------
#show link: set text(fill: amber-ink)
#show raw: set text(font: fg-mono)
#show regex("\[corpus\]"): it => text(font: fg-mono, size: 0.82em, fill: ink-muted, it)
#show regex("\[researched\]"): it => text(font: fg-mono, size: 0.82em, fill: slate, it)
#show regex("\[synthesis\]"): it => text(font: fg-mono, size: 0.82em, fill: amber-ink, it)

// --- Tables -------------------------------------------------
#show table.cell.where(y: 0): set text(font: fg-sans, size: 0.82em, weight: "semibold", fill: ink-muted)
#set table(
  stroke: (x, y) => (bottom: if y == 0 { 2pt + amber } else { 0.5pt + rule-soft }),
  inset: (x: 8pt, y: 6pt),
)
#show quote.where(block: true): set text(fill: ink-muted, style: "italic")
#show footnote.entry: it => { set text(font: fg-mono, size: 8pt, fill: ink-muted); it }

// --- Callouts: the three printed voices ---------------------
#let callout(
  body: [], title: "Callout", background_color: none, icon: none,
  icon_color: black, body_background_color: none,
) = {
  let probe = lower(content-to-string(body) + " " + content-to-string(title))
  let voice = if probe.contains("specimen") { moss }
    else if probe.contains("hazard") { clay }
    else if probe.contains("field note") { slate }
    else { amber }
  let mark = if voice == clay { "‡" } else if voice == slate { "☞" } else { "⁂" }
  let label = content-to-string(title).trim()
  block(
    width: 100%, breakable: false, above: 1.1em, below: 1.1em,
    fill: white, radius: 2pt, stroke: (top: 2pt + voice, rest: 0.5pt + rule-soft),
    inset: (x: 12pt, top: 9pt, bottom: 12pt),
  )[
    #if label != "" and label != "Callout" [
      #block(below: 0.5em)[#text(font: fg-sans, size: 8.5pt, weight: "semibold", fill: voice, tracking: 1pt)[#mark #h(0.35em) #upper(label)]]
    ]
    #show heading: h => block(below: 0.45em, above: 0em)[
      #text(font: fg-sans, size: 8.5pt, weight: "semibold", fill: voice, tracking: 1pt)[#mark #h(0.35em) #upper(h.body)]
    ]
    #set text(size: 0.96em)
    #body
  ]
}
#show figure: it => {
  if type(it.kind) == str and it.kind.starts-with("quarto-callout") { it.body } else { it }
}

// --- Page furniture (called from partials/page.typ) ---------
#let fg-header() = context {
  if not (fg-in-body.get() or fg-gazetteer.get()) { return }
  let p = counter(page).get().first()
  let f = fg-family.get()
  let lbl = if fg-gazetteer.get() { "Exemplars · The Gazetteer" } else { fam-label.at(f, default: "The Field Guide") }
  let num = text(font: fg-mono, size: 8pt, fill: ink-muted)[#p]
  set text(size: 8pt)
  let row = if calc.odd(p) { [#kicker("The Field Guide") #h(1fr) #num] }
            else { [#num #h(1fr) #kicker(lbl)] }
  block(width: 100%, stroke: (bottom: 0.5pt + rule), inset: (bottom: 4pt))[#row]
}

#let fg-tabs() = context {
  if not fg-in-body.get() { return }
  let p = counter(page).get().first()
  let active = fg-family.get()
  let recto = calc.odd(p)
  let tabs = stack(dir: ttb, spacing: 3pt, ..fam-order.enumerate().map(pair => {
    let i = pair.at(0)
    let f = pair.at(1)
    let on = f == active
    // inactive tabs show the family letter (A-F); the active tab shows the
    // current article number (falls back to the letter on divider pages).
    let n = fg-article.get().first()
    let lab = if on and n > 0 and not fg-unnumbered.get() { numbering("1", n) } else { numbering("A", i + 1) }
    box(
      width: if on { 24pt } else { 14pt }, height: 28pt, fill: fam.at(f),
      radius: if recto { (left: 2pt) } else { (right: 2pt) },
      align(center + horizon, text(font: fg-mono, size: 7.5pt, fill: white)[#lab]),
    )
  }))
  place(if recto { top + right } else { top + left }, dy: 3.0cm, tabs)
}
