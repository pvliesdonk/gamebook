# The Specimen Line — print article tags

The settled pattern for surfacing an article's tags on its **printed** opener.
Locked direction: **effect · problem lead, media recedes**, on one line under the
silhouette. See the live card *"Article Tags — The Specimen Line"*
(`guidelines/cards/print-article-tags.html`) for the visual.

## What shows on the page (and what does not)

| On the opener (the specimen line) | Reserved for the back-of-book **Keys** |
|---|---|
| **Lead effect** — first-listed `facets.effects` value, in ink | the full `effects` list |
| **Lead problem** — first-listed `facets.problems` value, in **family ink** | the full `problems` list |
| **Media** — the four faces as small ghosted glyphs (lit = present) | `components`, `genre`, `format` |

Rationale: the reader scans an opener for **intent** — what an article is *for* and what
it *fixes* — so `effect` and `problem` lead. `media` is supplementary (the family thumb-tab
already places the article), so it recedes to a quiet glyph cluster and never competes with
the title. The remaining axes are lookups, not page furniture; they live in the Keys.

The line costs **one line** of vertical space. It is omitted automatically when an article
has neither a lead effect nor a lead problem.

## Where it sits

Directly under the silhouette, above the drop-cap lead. It must **not** go in the outer
margin — the family bleed thumb-tabs (`fg-tabs`) already own that edge.

## Typst (drop into `typst/field-guide.typ`)

The Lua filter already has each article's frontmatter; pass the three values through to a
`#fg-tags(..)` raw block emitted right after the silhouette wrap (see `filters/field-guide.lua`,
step 2 — where `#fg-silhouette[..]` is wrapped, append the call). Inks reuse the theme
variables already defined at the top of `field-guide.typ` (`ink-soft`, `ink-faint`, `rule-soft`,
and the per-family `c` from `fam.at(f)`).

```typ
// --- The specimen line: lead effect · problem, then quiet media glyphs ----
// Present media only (no ghosted placeholders in print — the count signals span,
// and recolouring Phosphor SVGs per-state isn't worth it). Ship the four glyphs as
// monochrome SVGs under assets/icons/media/<face>-thin.svg (if · live · tabletop · hunt).
#let fg-media-order = ("if", "live", "tabletop", "hunt")
#let fg-tags(effect: none, problem: none, media: (), accent: amber-ink) = {
  if effect == none and problem == none { return }
  block(above: 0.55em, below: 0.95em, breakable: false)[
    #set text(font: "Cronos Pro", size: 8.5pt, weight: "semibold", tracking: 0.55pt)
    #grid(
      columns: (auto, 1fr, auto),
      align: (left + horizon, center + horizon, right + horizon),
      column-gutter: 0.9em,
      // left: EFFECT · PROBLEM (problem in family ink)
      box[
        #if effect != none [#text(fill: ink-soft)[#upper(effect)]]
        #if effect != none and problem != none [#h(0.45em) #text(fill: ink-faint)[·] #h(0.45em)]
        #if problem != none [#text(fill: accent)[#upper(problem)]]
      ],
      // middle: a short hairline
      line(length: 100%, stroke: 0.5pt + rule-soft),
      // right: the present media faces, small + muted
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
```

Call it from the level-1 opener (or right after the silhouette wrap in the filter):

```typ
#fg-tags(
  effect: "discovery",          // facets.effects.first()
  problem: "dead-end",          // facets.problems.first()
  media: ("if", "live", "tabletop", "hunt"),  // the article's media list
  accent: fam.at(f, default: amber-ink),       // family ink for the problem term
)
```

## Notes

- **First-listed = dominant.** The frontmatter lists are authored most-important-first, so
  `.first()` is the right pick. If that ever stops being true, the only change is which value
  the filter passes — the print code is unchanged.
- **Ghosting is screen-only.** The live card dims absent faces; in print, render present faces
  only (simpler, and a faint SVG variant per face isn't worth maintaining). The four-slot meter
  idea was rejected for the page — too much furniture for the value.
- **Colour.** Effect stays neutral ink; problem takes the family ink so the line ties to the
  part it sits in, exactly like the opener rule and the № mark.
