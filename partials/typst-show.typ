// ============================================================
// Field Guide book template — replaces @preview/orange-book.
// Quarto's default book typst-show hands the page to orange-book
// (A4, academic headers, 2.1.1 numbering, its own TOC). We take it
// over: the page comes from partials/page.typ (book trim, mirrored
// margins, running head, bleed tabs); chapters get the field-guide
// opener; sections are unnumbered (the opener's roman № is the
// catalogue mark). Cover, designed TOC and richer part dividers
// come in the next increment.
// ============================================================

// Sections unnumbered — the design numbers articles (the opener's №),
// not subsections.
#set heading(numbering: none)

// Part dividers. Quarto emits #part[<family name>] before each primer
// (our part labels are the family names). Render a family plate and set
// the family state so the divider page and following articles colour
// correctly.
#let fg-part-count = counter("fg-part-count")
#let part(title) = {
  let s = content-to-string(title)
  let id = "structure"
  for (k, v) in fam-label.pairs() { if v == s { id = k } }
  fg-family.update(id)
  fg-in-body.update(true)
  fg-part-count.step()
  // Reset the article counter at the first part so article № starts at 1
  // (front-matter chapters before the parts also step it).
  context { if fg-part-count.get().first() == 1 { fg-article.update(0) } }
  let c = fam.at(id, default: amber)
  let num = fam-order.position(x => x == id) + 1
  pagebreak(weak: true)
  block(width: 100%, above: 3.2cm, below: 1.4em, breakable: false)[
    #set par(justify: false)
    #text(font: "Letter Gothic Std", size: 11pt, fill: c)[Part #numbering("A", num)]
    #v(0.5em, weak: true)
    #line(length: 100%, stroke: 3pt + c)
    #v(0.6em, weak: true)
    #text(font: "Adobe Jenson Pro", size: 34pt, weight: "semibold", fill: ink-deep)[#title]
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
