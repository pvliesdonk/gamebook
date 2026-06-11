// ============================================================
// Field Guide book template — replaces @preview/orange-book.
// Owns the page (via partials/page.typ), the cover, the contents,
// the part dividers (family plates + contents list) and the back
// matter. Chapters get the field-guide opener (typst/field-guide.typ).
// ============================================================

#let fg-primer-name = (
  structure: "The Shape of Time",
  puzzles:   "The Fairness Contract",
  story:     "Making It Matter",
  players:   "The Social Contract & Safety",
  space:     "Making It Real",
  systems:   "The Engine Room",
)
#let fg-part-count = counter("fg-part-count")

// Sections unnumbered — the design numbers articles (the opener's №).
#set heading(numbering: none)

// --- Cover --------------------------------------------------
#let fg-cover() = page(header: none, footer: none, background: none, numbering: none, fill: paper)[
  #set align(center)
  #set par(justify: false)
  #v(3fr)
  #text(font: "Cronos Pro", size: 12pt, fill: amber-ink, tracking: 4pt)[THE FIELD GUIDE TO]
  #v(0.9em)
  #text(font: "Adobe Jenson Pro", size: 40pt, weight: "semibold", fill: ink-deep)[Narrative &\ Game Design]
  #v(1.4em)
  #box(stack(dir: ltr, spacing: 0pt, ..fam-order.map(f => box(width: 1.3cm, height: 7pt, fill: fam.at(f)))))
  #v(1fr)
  #text(font: "Cronos Pro", size: 9pt, fill: ink-muted, tracking: 2pt)[A NATURALIST FIELD GUIDE · SIX DESIGN DISCIPLINES]
  #v(2.2fr)
]

// --- Contents -----------------------------------------------
#let fg-toc() = page(header: none, footer: none, background: none, numbering: none, fill: paper)[
  #set par(justify: false)
  #text(font: "Adobe Jenson Pro", size: 26pt, weight: "semibold", fill: ink-deep)[Contents]
  #v(1.2em)
  #context {
    let last = none
    for art in query(heading.where(level: 1)) {
      let loc = art.location()
      if not fg-in-body.at(loc) { continue }
      let f = fg-family.at(loc)
      let c = fam.at(f, default: amber)
      let num = fg-article.at(loc).first()
      let pg = counter(page).at(loc).first()
      if f != last {
        block(above: 1.1em, below: 0.5em)[
          #text(font: "Cronos Pro", size: 10pt, weight: "semibold", fill: c, tracking: 1.2pt)[#upper(fam-label.at(f))]
          #h(0.6em)
          #text(font: "Adobe Jenson Pro", size: 10pt, style: "italic", fill: ink-muted)[Primer · #fg-primer-name.at(f, default: "")]
        ]
        last = f
      }
      block(below: 0.35em)[
        #box(width: 1.6em)[#text(font: "Letter Gothic Std", size: 8.5pt, fill: c)[#num]]
        #text(size: 10pt)[#art.body]
        #box(width: 1fr, inset: (x: 4pt), repeat[#text(fill: ink-faint)[.]#h(3pt)])
        #text(font: "Letter Gothic Std", size: 8.5pt, fill: ink-muted)[#pg]
      ]
    }
  }
]

// --- Part dividers ------------------------------------------
// Quarto emits #part[<label>] before each part's first chapter. Family
// labels are the family names; the back-matter labels (Keys/Exemplars/
// Style Specimens) are not, and get a plain appendix divider.
#let part(title) = {
  let s = content-to-string(title)
  let id = none
  for (k, v) in fam-label.pairs() { if v == s { id = k } }

  if id == none {
    // Back matter: leave article mode; plain appendix divider.
    fg-in-body.update(false)
    pagebreak(weak: true)
    block(width: 100%, above: 3cm, below: 1.2em, breakable: false)[
      #set par(justify: false)
      #text(font: "Cronos Pro", size: 11pt, fill: ink-muted, tracking: 2pt)[APPENDIX]
      #v(0.45em, weak: true)
      #line(length: 100%, stroke: 2pt + ink-muted)
      #v(0.55em, weak: true)
      #text(font: "Adobe Jenson Pro", size: 30pt, weight: "semibold", fill: ink-deep)[#title]
    ]
    return
  }

  fg-family.update(id)
  fg-in-body.update(true)
  fg-part-count.step()
  context { if fg-part-count.get().first() == 1 { fg-article.update(0) } }
  let c = fam.at(id, default: amber)
  let pnum = fam-order.position(x => x == id) + 1

  // A full-page family plate: part letter, family name, primer name, and
  // the family's contents list.
  page(header: fg-header(), background: fg-tabs(), fill: paper)[
    #set par(justify: false)
    #v(1.6cm)
    #text(font: "Letter Gothic Std", size: 12pt, fill: c)[Part #numbering("A", pnum)]
    #v(0.5em, weak: true)
    #line(length: 100%, stroke: 3pt + c)
    #v(0.6em, weak: true)
    #text(font: "Adobe Jenson Pro", size: 34pt, weight: "semibold", fill: ink-deep)[#title]
    #v(0.25em)
    #text(font: "Adobe Jenson Pro", size: 15pt, style: "italic", fill: ink-muted)[Primer · #fg-primer-name.at(id, default: "")]
    #v(1.8em)
    #text(font: "Cronos Pro", size: 9pt, weight: "semibold", fill: ink-muted, tracking: 1.2pt)[CONTENTS]
    #v(0.6em)
    #context {
      for art in query(heading.where(level: 1)) {
        let loc = art.location()
        if fg-in-body.at(loc) and fg-family.at(loc) == id {
          block(below: 0.4em)[
            #box(width: 1.7em)[#text(font: "Letter Gothic Std", size: 9pt, fill: c)[#fg-article.at(loc).first()]]
            #text(size: 11pt)[#art.body]
          ]
        }
      }
    }
  ]
}
#let chapter(..a) = none
#let appendices(..a) = none

// Quarto per-chapter figure-counter resets (preserve crossref numbering).
#show heading.where(level: 1): it => {
  counter(figure.where(kind: "quarto-float-fig")).update(0)
  counter(figure.where(kind: "quarto-float-tbl")).update(0)
  counter(figure.where(kind: "quarto-float-lst")).update(0)
  counter(figure.where(kind: "quarto-callout-Note")).update(0)
  counter(figure.where(kind: "quarto-callout-Warning")).update(0)
  counter(figure.where(kind: "quarto-callout-Caution")).update(0)
  counter(figure.where(kind: "quarto-callout-Tip")).update(0)
  counter(figure.where(kind: "quarto-callout-Important")).update(0)
  counter(math.equation).update(0)
  it
}

// Front matter: the cover and the contents, then the body flows.
#fg-cover()
#fg-toc()
