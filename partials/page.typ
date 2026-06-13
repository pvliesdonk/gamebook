// Field Guide — the bound page. Replaces Quarto's default page.typ.
// Royal octavo trim (6 x 9 in) with mirrored margins for the gutter; warm
// paper, running head and bleed tabs from typst/field-guide.typ.
#set page(
  width: 6in,
  height: 9in,
  margin: (inside: 0.95in, outside: 0.72in, top: 0.85in, bottom: 0.9in),
  binding: left,
  numbering: "1",
  fill: paper,
  header: fg-header(),
  background: fg-tabs(),
)
