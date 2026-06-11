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

#let kicker(s, c: ink-muted, size: 8.5pt) = text(
  font: "Cronos Pro", size: size, weight: "semibold", fill: c, tracking: 1.2pt,
)[#upper(s)]

// --- Body type-setting (the reading measure) ----------------
#set text(fill: ink, font: "Adobe Jenson Pro", size: 10.5pt, number-type: "old-style")
#set par(justify: true, leading: 0.68em, spacing: 1.0em, first-line-indent: 0pt)

// --- The Silhouette: the italic subhead lead under the title -
#let fg-silhouette(body) = block(below: 1.0em, above: 0.3em)[
  #set text(font: "Adobe Jenson Pro", size: 13.5pt, fill: ink)
  #body
]

// --- The lead paragraph: a two-line drop cap ----------------
#let fg-lead(body) = dropcap(
  height: 2, gap: 6pt, hanging-indent: 0pt,
  transform: letter => text(font: "Adobe Jenson Pro", weight: "semibold", fill: ink-deep)[#letter],
  body,
)

// --- Headings (54/33/22/17 type scale, scaled for print) ----
// Level 1 = the article opener: family rule, roman №, kicker, title.
#show heading.where(level: 1): it => {
  pagebreak(weak: true)
  fg-article.step()
  context {
    let f = fg-family.get()
    let c = fam.at(f, default: amber)
    let n = fg-article.display("I")
    block(width: 100%, above: 0pt, below: 0.9em, breakable: false)[
      #line(length: 100%, stroke: 2pt + c)
      #v(0.55em, weak: true)
      #box(text(font: "Letter Gothic Std", size: 9pt, fill: c)[№ #n])
      #h(0.7em)
      #box(kicker(fam-label.at(f, default: "")))
      #v(0.4em, weak: true)
      #text(font: "Adobe Jenson Pro", size: 21pt, weight: "semibold", fill: ink-deep)[#it.body]
    ]
  }
}
#show heading.where(level: 2): set text(font: "Adobe Jenson Pro", size: 15pt, fill: ink-deep, weight: "semibold")
#show heading.where(level: 3): set text(font: "Adobe Jenson Pro", size: 12.5pt, fill: ink-deep, weight: "semibold")
#show heading.where(level: 4): set text(font: "Adobe Jenson Pro", size: 11pt, fill: ink-muted, weight: "semibold", style: "italic")
#show heading.where(level: 2): set block(above: 1.5em, below: 0.7em)
#show heading.where(level: 3): set block(above: 1.1em, below: 0.5em)

// --- Links, code, provenance --------------------------------
#show link: set text(fill: amber-ink)
#show raw: set text(font: "Letter Gothic Std")
#show regex("\[corpus\]"): it => text(font: "Letter Gothic Std", size: 0.82em, fill: ink-muted, it)
#show regex("\[researched\]"): it => text(font: "Letter Gothic Std", size: 0.82em, fill: slate, it)
#show regex("\[synthesis\]"): it => text(font: "Letter Gothic Std", size: 0.82em, fill: amber-ink, it)

// --- Tables -------------------------------------------------
#show table.cell.where(y: 0): set text(font: "Cronos Pro", size: 0.82em, weight: "semibold", fill: ink-muted)
#set table(
  stroke: (x, y) => (bottom: if y == 0 { 2pt + amber } else { 0.5pt + rule-soft }),
  inset: (x: 8pt, y: 6pt),
)
#show quote.where(block: true): set text(fill: ink-muted, style: "italic")
#show footnote.entry: it => { set text(font: "Letter Gothic Std", size: 8pt, fill: ink-muted); it }

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
      #block(below: 0.5em)[#text(font: "Cronos Pro", size: 8.5pt, weight: "semibold", fill: voice, tracking: 1pt)[#mark #h(0.35em) #upper(label)]]
    ]
    #show heading: h => block(below: 0.45em, above: 0em)[
      #text(font: "Cronos Pro", size: 8.5pt, weight: "semibold", fill: voice, tracking: 1pt)[#mark #h(0.35em) #upper(h.body)]
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
  let p = counter(page).get().first()
  if p <= 1 { return }
  let f = fg-family.get()
  let lbl = fam-label.at(f, default: "The Field Guide")
  let num = text(font: "Letter Gothic Std", size: 8pt, fill: ink-muted)[#p]
  set text(size: 8pt)
  let row = if calc.odd(p) { [#kicker("The Field Guide") #h(1fr) #num] }
            else { [#num #h(1fr) #kicker(lbl)] }
  block(width: 100%, stroke: (bottom: 0.5pt + rule), inset: (bottom: 4pt))[#row]
}

#let fg-tabs() = context {
  let p = counter(page).get().first()
  if p <= 1 { return }
  let active = fg-family.get()
  let recto = calc.odd(p)
  let tabs = stack(dir: ttb, spacing: 3pt, ..fam-order.enumerate().map(pair => {
    let i = pair.at(0)
    let f = pair.at(1)
    let on = f == active
    box(
      width: if on { 24pt } else { 14pt }, height: 28pt, fill: fam.at(f),
      radius: if recto { (left: 2pt) } else { (right: 2pt) },
      align(center + horizon, text(font: "Letter Gothic Std", size: 7.5pt, fill: white)[#(i + 1)]),
    )
  }))
  place(if recto { top + right } else { top + left }, dy: 3.0cm, tabs)
}
