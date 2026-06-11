// ============================================================
// Field Guide to Narrative & Game Design — Typst print theme
// The bound-book face. Uses the LICENSED Adobe faces (desktop
// licence held): Adobe Jenson Pro (reading & display), Cronos Pro
// (labels), Letter Gothic Std (data / provenance). Shares the
// wiki's inks and type scale; the page grammar is printerly.
// Injected via include-in-header, so it sets the document preamble.
// ============================================================

// --- Inks (shared with the web tokens) ----------------------
#let ink       = rgb("#2c2824")   // body
#let ink-deep  = rgb("#1a1a1a")   // headings
#let ink-muted = rgb("#6b6155")
#let paper     = rgb("#fafafa")
#let amber     = rgb("#c07840")
#let amber-ink = rgb("#7f4a20")
#let rule      = rgb("#c2b9a7")
#let moss      = rgb("#44502c")   // Specimen
#let slate     = rgb("#2f4a50")   // Field Note / researched
#let clay      = rgb("#863a23")   // Hazard

// --- Page: warm paper, generous measure ---------------------
#set page(fill: paper)
#set text(fill: ink, font: "Adobe Jenson Pro", number-type: "old-style")

// --- Headings: Jenson, ink, tight ---------------------------
#show heading: set text(font: "Adobe Jenson Pro", fill: ink-deep)
#show heading: it => block(above: 1.3em, below: 0.6em, it)

// --- Links: amber ink ---------------------------------------
#show link: set text(fill: amber-ink)

// --- Raw / inline code: the Letter Gothic data register -----
#show raw: set text(font: "Letter Gothic Std")

// --- Provenance marks: mono, voice-coloured -----------------
// [corpus] neutral ink, [researched] slate, [synthesis] amber.
#show regex("\[corpus\]"): it => text(font: "Letter Gothic Std", size: 0.82em, fill: ink-muted, it)
#show regex("\[researched\]"): it => text(font: "Letter Gothic Std", size: 0.82em, fill: slate, it)
#show regex("\[synthesis\]"): it => text(font: "Letter Gothic Std", size: 0.82em, fill: amber-ink, it)

// --- Tables: small-caps Cronos heads on a 2px amber rule ----
#show table.cell.where(y: 0): set text(
  font: "Cronos Pro", size: 0.82em, weight: "semibold", fill: ink-muted,
)
#set table(
  stroke: (x, y) => (
    bottom: if y == 0 { 2pt + amber } else { 0.5pt + rule },
  ),
  inset: (x: 8pt, y: 6pt),
)

// --- Block quotes: amber-ruled italic inset -----------------
#show quote.where(block: true): set text(fill: ink-muted, style: "italic")
