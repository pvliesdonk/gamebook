The field guide's three annotation voices, set as **printed asides** — not tinted docs admonitions. Two forms: **inline** (in the text column) and **sidebar** (a boxed aside for a print margin or screen rail).

```jsx
{/* inline */}
<Callout kind="fieldnote">Reveal the lock before the key.</Callout>
<Callout kind="hazard">The guess-the-verb wall.</Callout>
<Callout kind="specimen" title="Return of the Obra Dinn">
  Every death is its own locked diorama — observed, not invented.
</Callout>

{/* boxed sidebar — drop into a print outer margin or a screen rail */}
<Callout kind="hazard" sidebar>The jump-scare treadmill.</Callout>
```

- `fieldnote` — penned run-in aside: manicule (☞) + small-caps label, italic serif.
- `hazard` — printed caution: symmetric solid clay rules top and bottom.
- `specimen` — quiet text-first note with a moss top-rule and "Specimen" kicker. **Reads complete with no image.** Set `plate` only for the rare inset illustration; full plates belong at article/primer level via `IllustrationPlate`.
- `sidebar` — any voice as a self-contained box (2px voice top-rule + hairline), sized for a print margin column or a rail. `title` overrides the label / names the specimen.

No background fills, no chunky left-borders. These read as printed book asides.

**Maps to the book's Quarto callouts:** `::: {.callout-note}` + `### The Specimen` → `kind="specimen"`; `::: {.callout-warning}` + `### The Hazard` → `kind="hazard"`; `::: {.callout-tip}` + `### The Field Note` → `kind="fieldnote"`.
