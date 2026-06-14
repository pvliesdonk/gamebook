// ============================================================
// Field Guide book template — replaces @preview/orange-book.
// Owns the page (via partials/page.typ), the cover, the contents,
// the part dividers and the back matter. Chapter openers live in
// typst/field-guide.typ.
//
// Everything here reads from the document: parts are string labels
// (the family names), the primer is the part's first chapter (a
// `.primer` heading the filter flags), articles are the numbered
// chapters. Nothing about the primers is hardcoded.
// ============================================================

#let fg-part-count = counter("fg-part-count")

#set heading(numbering: none)

// A dotted leader for the contents. Built inline at each use — a single
// reused `1fr` box breaks Typst's contents layout.
#let fg-leader() = box(width: 1fr, inset: (x: 4pt), repeat[#text(fill: ink-faint)[.]#h(3pt)])

// --- Printed cover (full-bleed image; PDF only) -------------
// The designed cover art fills the page edge to edge. A stand-in until the
// final cover lands; swap assets/cover.png to replace it. fit:"cover" bleeds
// to the trim (the art carries its own inner frame, so the small overscan is
// safe); switch to "contain" if the whole frame must show.
#let fg-cover-image() = page(
  header: none, footer: none, background: none, numbering: none,
  margin: 0pt, fill: paper,
)[
  #image("assets/cover.png", width: 100%, height: 100%, fit: "cover")
]

// --- Title page ---------------------------------------------
#let fg-cover() = page(header: none, footer: none, background: none, numbering: none, fill: paper)[
  #set align(center)
  #set par(justify: false)
  #v(3fr)
  #text(font: fg-sans, size: 12pt, fill: amber-ink, tracking: 4pt)[THE FIELD GUIDE TO]
  #v(0.9em)
  #text(font: fg-serif, size: 40pt, weight: "semibold", fill: ink-deep)[Narrative &\ Game Design]
  #v(1.4em)
  #box(stack(dir: ltr, spacing: 0pt, ..fam-order.map(f => box(width: 1.3cm, height: 7pt, fill: fam.at(f)))))
  #v(1fr)
  #text(font: fg-sans, size: 9pt, fill: ink-muted, tracking: 2pt)[A NATURALIST FIELD GUIDE · SIX DESIGN DISCIPLINES]
$if(by-author)$
  #v(1.1em)
  #text(font: fg-sans, size: 9.5pt, fill: ink-deep, tracking: 1.5pt)[$for(by-author)$$it.name.literal$$sep$ · $endfor$]
$endif$
  #v(2.2fr)
]

// --- Colophon / imprint (the verso of the cover) ------------
// Print-only (this template is typst-only). Title and author read from metadata
// like the cover; the copyright line, licence, and typeface credits are fixed
// colophon furniture (Quarto's book schema has no copyright field).
#let fg-colophon() = page(header: none, footer: none, background: none, numbering: none, fill: paper)[
  #set par(justify: false, leading: 0.72em)
  #set text(font: fg-sans)
  #v(3cm)
  #text(size: 13pt, fill: ink-deep)[$title$]
$if(by-author)$
  #v(0.35em, weak: true)
  #text(size: 9.5pt, fill: ink-muted, tracking: 0.4pt)[$for(by-author)$$it.name.literal$$sep$, $endfor$]
$endif$
  #v(1fr)
  #set text(size: 8.5pt, fill: ink-muted)
  #block(below: 1em)[#text(size: 9.5pt, fill: ink-deep)[© 2026 Peter van Liesdonk]]
  #block(below: 1em)[This work is licensed under the Creative Commons Attribution-NonCommercial 4.0 International Licence (CC BY-NC 4.0): #link("https://creativecommons.org/licenses/by-nc/4.0/")[creativecommons.org/licenses/by-nc/4.0]. The build tooling that produces it is separately licensed under the MIT Licence.]
  #block[Set in Adobe Jenson Pro, Cronos Pro, and Letter Gothic Std. Built with Quarto and Typst.]
  #v(2.4cm)
]

// --- Contents -----------------------------------------------
#let fg-toc() = page(header: none, footer: none, background: none, numbering: none, fill: paper)[
  #set par(justify: false)
  #text(font: fg-serif, size: 26pt, weight: "semibold", fill: ink-deep)[Contents]
  #v(1.2em)
  #context {
    let last = none
    for art in query(heading.where(level: 1)) {
      let loc = art.location()
      if not fg-in-body.at(loc) { continue }
      let f = fg-family.at(loc)
      let c = fam.at(f, default: amber)
      let pg = counter(page).at(loc).first()
      if f != last {
        block(above: 1.1em, below: 0.45em)[
          #text(font: fg-sans, size: 10pt, weight: "semibold", fill: c, tracking: 1.2pt)[#upper(fam-label.at(f))]
        ]
        last = f
      }
      if fg-primer-flag.at(loc) {
        block(below: 0.35em)[
          #box(width: 1.6em)[]
          #text(size: 10pt, style: "italic", fill: ink-muted)[#art.body #text(font: fg-sans, size: 8pt, tracking: 1pt)[· PRIMER]]
          #fg-leader()
          #text(font: fg-mono, size: 8.5pt, fill: ink-muted)[#pg]
        ]
      } else if fg-unnumbered.at(loc) {
        block(below: 0.35em)[
          #box(width: 1.6em)[]
          #text(size: 10pt, style: "italic", fill: ink-muted)[#art.body]
          #fg-leader()
          #text(font: fg-mono, size: 8.5pt, fill: ink-muted)[#pg]
        ]
      } else {
        block(below: 0.35em)[
          #box(width: 1.6em)[#text(font: fg-mono, size: 8.5pt, fill: c)[#fg-article.at(loc).first()]]
          #text(size: 10pt)[#art.body]
          #fg-leader()
          #text(font: fg-mono, size: 8.5pt, fill: ink-muted)[#pg]
        ]
      }
    }
  }
]

// --- Part dividers ------------------------------------------
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
      #text(font: fg-sans, size: 11pt, fill: ink-muted, tracking: 2pt)[APPENDIX]
      #v(0.45em, weak: true)
      #line(length: 100%, stroke: 2pt + ink-muted)
      #v(0.55em, weak: true)
      #text(font: fg-serif, size: 30pt, weight: "semibold", fill: ink-deep)[#title]
    ]
    return
  }

  fg-family.update(id)
  fg-in-body.update(true)
  fg-part-count.step()
  context { if fg-part-count.get().first() == 1 { fg-article.update(0) } }
  let c = fam.at(id, default: amber)
  let pnum = fam-order.position(x => x == id) + 1

  // A full-page family plate: part letter, family name, and the part's
  // contents (the primer first, then the numbered articles) read from the
  // actual chapter headings.
  page(header: fg-header(), background: fg-tabs(), fill: paper)[
    #set par(justify: false)
    #v(1.6cm)
    #text(font: fg-mono, size: 12pt, fill: c)[Part #numbering("A", pnum)]
    #v(0.5em, weak: true)
    #line(length: 100%, stroke: 3pt + c)
    #v(0.6em, weak: true)
    #text(font: fg-serif, size: 34pt, weight: "semibold", fill: ink-deep)[#title]
    #v(1.8em)
    #text(font: fg-sans, size: 9pt, weight: "semibold", fill: ink-muted, tracking: 1.2pt)[CONTENTS]
    #v(0.6em)
    #context {
      for art in query(heading.where(level: 1)) {
        let loc = art.location()
        if fg-in-body.at(loc) and fg-family.at(loc) == id {
          if fg-primer-flag.at(loc) {
            block(below: 0.4em)[
              #box(width: 1.7em)[]
              #text(size: 11pt, style: "italic", fill: ink-muted)[#art.body #text(font: fg-sans, size: 8pt, tracking: 1pt)[· PRIMER]]
            ]
          } else if fg-unnumbered.at(loc) {
            block(below: 0.4em)[
              #box(width: 1.7em)[]
              #text(size: 11pt, style: "italic", fill: ink-muted)[#art.body]
            ]
          } else {
            block(below: 0.4em)[
              #box(width: 1.7em)[#text(font: fg-mono, size: 9pt, fill: c)[#fg-article.at(loc).first()]]
              #text(size: 11pt)[#art.body]
            ]
          }
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

// Front matter: the printed cover, the title page, the colophon, the contents,
// then the body flows.
#fg-cover-image()
#fg-cover()
#fg-colophon()
#fg-toc()
