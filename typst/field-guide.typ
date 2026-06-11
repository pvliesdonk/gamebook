// ============================================================
// Field Guide to Narrative & Game Design — Typst print theme
// The bound-book face. Licensed Adobe faces (desktop licence):
// Adobe Jenson Pro (reading & display), Cronos Pro (labels),
// Letter Gothic Std (data / provenance). Shares the wiki inks and
// type scale; adds the printerly grammar (opener rule + roman
// catalogue number, running heads, the three callout voices,
// per-family colour). Injected via include-in-header.
// ============================================================

// --- Inks (shared with the web tokens) ----------------------
#let ink       = rgb("#2c2824")
#let ink-deep  = rgb("#1a1a1a")
#let ink-muted = rgb("#6b6155")
#let paper     = rgb("#fafafa")
#let amber     = rgb("#c07840")
#let amber-ink = rgb("#7f4a20")
#let rule-soft = rgb("#ddd6c8")
#let rule      = rgb("#c2b9a7")
#let moss      = rgb("#44502c")   // Specimen
#let slate     = rgb("#2f4a50")   // Field Note / researched
#let clay      = rgb("#863a23")   // Hazard

// --- Family inks (exact oklch from families.css) ------------
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

// --- Per-chapter family state (set by the Lua filter) -------
#let fg-family = state("fg-family", "structure")
#let fg-set-family(f) = fg-family.update(f)
#let fg-article = counter("fg-article")

// A small-caps taxonomic label
#let kicker(s, c: ink-muted) = text(
  font: "Cronos Pro", size: 8.5pt, weight: "semibold", fill: c, tracking: 1.2pt,
)[#upper(s)]

// --- Page: warm paper, running heads, bleed tabs ------------
#set text(fill: ink, font: "Adobe Jenson Pro", number-type: "old-style")
#set page(
  fill: paper,
  // Bleed tabs: a per-family thumb-index at the outer edge. The active
  // family's tab is wider; greyscale value (laddered oklch) is the failsafe.
  background: context {
    let p = counter(page).get().first()
    if p <= 1 { return }
    let active = fg-family.get()
    place(top + right, dy: 3.2cm)[
      #stack(dir: ttb, spacing: 3pt, ..fam-order.enumerate().map(pair => {
        let i = pair.at(0)
        let f = pair.at(1)
        let on = f == active
        box(
          width: if on { 26pt } else { 15pt }, height: 30pt,
          fill: fam.at(f), radius: (left: 2pt),
          align(center + horizon, text(
            font: "Letter Gothic Std", size: 8pt, fill: white,
          )[#(i + 1)]),
        )
      }))
    ]
  },
  header: context {
    let p = counter(page).get().first()
    if p <= 1 { return }
    let f = fg-family.get()
    let lbl = fam-label.at(f, default: "The Field Guide")
    let num = text(font: "Letter Gothic Std", size: 8pt, fill: ink-muted)[#p]
    set text(size: 8pt)
    let line-content = if calc.odd(p) {
      [#kicker("The Field Guide") #h(1fr) #num]
    } else {
      [#num #h(1fr) #kicker(lbl)]
    }
    block(width: 100%, stroke: (bottom: 0.5pt + rule), inset: (bottom: 4pt))[#line-content]
  },
)

// --- Headings -----------------------------------------------
// Level 1 = the article opener: family top-rule, roman № and a
// taxonomic kicker above the title.
#show heading.where(level: 1): it => {
  fg-article.step()
  context {
    let f = fg-family.get()
    let c = fam.at(f, default: amber)
    let n = fg-article.display("I")
    block(width: 100%, above: 1.4em, below: 0.9em, breakable: false)[
      #line(length: 100%, stroke: 2pt + c)
      #v(0.55em, weak: true)
      #box(text(font: "Letter Gothic Std", size: 9pt, fill: c)[№ #n])
      #h(0.7em)
      #box(kicker(fam-label.at(f, default: "")))
      #v(0.35em, weak: true)
      #text(font: "Adobe Jenson Pro", size: 1.95em, weight: "semibold", fill: ink-deep)[#it.body]
    ]
  }
}
#show heading.where(level: 2): set text(font: "Adobe Jenson Pro", fill: ink-deep, weight: "semibold")
#show heading.where(level: 3): set text(font: "Adobe Jenson Pro", fill: ink-deep, weight: "semibold")
#show heading.where(level: 4): set text(font: "Adobe Jenson Pro", fill: ink-muted, weight: "semibold", style: "italic")

// --- Links: amber ink ---------------------------------------
#show link: set text(fill: amber-ink)

// --- Raw / inline code: Letter Gothic data register ---------
#show raw: set text(font: "Letter Gothic Std")

// --- Provenance marks: mono, voice-coloured -----------------
#show regex("\[corpus\]"): it => text(font: "Letter Gothic Std", size: 0.82em, fill: ink-muted, it)
#show regex("\[researched\]"): it => text(font: "Letter Gothic Std", size: 0.82em, fill: slate, it)
#show regex("\[synthesis\]"): it => text(font: "Letter Gothic Std", size: 0.82em, fill: amber-ink, it)

// --- Tables: small-caps Cronos heads on a 2px amber rule ----
#show table.cell.where(y: 0): set text(font: "Cronos Pro", size: 0.82em, weight: "semibold", fill: ink-muted)
#set table(
  stroke: (x, y) => (bottom: if y == 0 { 2pt + amber } else { 0.5pt + rule-soft }),
  inset: (x: 8pt, y: 6pt),
)

// --- Block quotes: amber-ruled italic inset -----------------
#show quote.where(block: true): set text(fill: ink-muted, style: "italic")

// --- Footnotes: the field-logbook register ------------------
#show footnote.entry: it => {
  set text(font: "Letter Gothic Std", size: 8pt, fill: ink-muted)
  it
}

// ============================================================
// CALLOUTS — the three printed voices. Redefine Quarto's #callout
// to render a voice aside (top-rule + small-caps kicker), and
// bypass the figure reassembly so no "Note N:" prefix is added.
// Voice is read from the in-body heading (The Specimen / Hazard /
// Field Note), matching the house convention.
// ============================================================
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
    width: 100%, breakable: false, above: 1em, below: 1em,
    fill: white, radius: 2pt,
    stroke: (top: 2pt + voice, rest: 0.5pt + rule-soft),
    inset: (x: 12pt, top: 9pt, bottom: 12pt),
  )[
    // Quarto carries "### The Specimen/Hazard/Field Note" as the title; render
    // it as the voice kicker. Any in-body heading also becomes a kicker.
    #if label != "" and label != "Callout" [
      #block(below: 0.5em)[#text(font: "Cronos Pro", size: 8.5pt, weight: "semibold", fill: voice, tracking: 1pt)[#mark #h(0.35em) #upper(label)]]
    ]
    #show heading: h => block(below: 0.45em, above: 0em)[
      #text(font: "Cronos Pro", size: 8.5pt, weight: "semibold", fill: voice, tracking: 1pt)[#mark #h(0.35em) #upper(h.body)]
    ]
    #set text(size: 0.95em)
    #body
  ]
}

#show figure: it => {
  if type(it.kind) == str and it.kind.starts-with("quarto-callout") {
    it.body
  } else {
    it
  }
}
