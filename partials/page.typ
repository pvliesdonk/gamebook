// Field Guide — the bound page. Replaces Quarto's default page.typ.
// A book trim with mirrored margins for the gutter; warm paper,
// running head and bleed tabs from typst/field-guide.typ.
#set page(
  width: 6.5in,
  height: 9.25in,
  margin: (inside: 0.95in, outside: 0.72in, top: 0.85in, bottom: 0.9in),
  binding: left,
  numbering: "1",
  fill: paper,
  header: fg-header(),
  background: fg-tabs(),
)
