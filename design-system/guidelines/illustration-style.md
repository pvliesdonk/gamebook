# Illustration Style — The Field Guide

The guide's illustrations are **plates**: single naturalist subjects rendered as
**ink linework**, in the tradition of an antique field guide or scientific
engraving. This file is the brief for generating or commissioning them.

## The one rule

**Ink line on bare paper.** Hatching and stipple build tone; there is no
painterly shading, no photographic realism, no flat vector fills. If a plate
could be printed from a single engraved copper plate in one ink, it is right.

## Subject

One subject per plate, centred, observed as a specimen — not a scene. A
mechanism, an object, a creature-as-metaphor, a diagram-creature. Examples that
fit the families:

- *Structure & Pacing* → a branching frond, a tide chart, a clockwork escapement
- *Puzzles* → a pinned moth mid-dissection, a key cross-section, a cipher wheel
- *Story* → a cut-open seed-pod of nested chambers, a mask, a quill
- *Players* → clasped hands, a ring of chairs, a deck of marked cards
- *Space & Props* → a lockbox exploded into parts, a wax seal, a folded map
- *Systems* → a gear train, a dice-mechanism, a flow of tokens

## Technique (the generator prompt skeleton)

> *"Antique scientific engraving / woodcut illustration of **[subject]**,
> black ink linework on aged cream paper, fine cross-hatching and stipple for
> shading, single specimen centred with generous margin, naturalist field-guide
> plate, no colour, no background scene, high line detail, 19th-century botanical
> /entomological plate style, etched line, monochrome."*

Tune toward **etching/engraving** (fine, controlled, parallel hatching) rather
than loose pen-sketch. Keep line weight in a narrow range so plates sit together.

## Output spec

- **Monochrome ink** on transparent or cream ground. Deliver as the bare
  illustration — **no drawn frame, border, or caption** (the layout adds those).
- **One ink, value via hatch.** Colour is added *by the system*, never baked
  into the art: a plate may be tinted to its family ink, but it must read in
  pure black on white too (see "Colour & print" below).
- **Resolution:** vector (SVG) preferred; else ≥2000px on the long edge, PNG with
  alpha so the paper shows through.
- **Margin:** ~12–15% breathing space around the subject inside the image.

## Colour & print

The book is colour in PDF and must survive greyscale printing, so illustrations
follow the same discipline as the rest of the system:

- Art is authored **monochrome**. To colour-key a plate to its family, tint the
  ink to that family's `--fam-*` ink (e.g. `IllustrationPlate tone="amber"`
  inside a `data-family` scope picks up the family). Because the family inks are
  **value-laddered**, a tinted plate still separates in greyscale.
- Never rely on hue to carry meaning inside a plate — the linework and hatching
  must read with no colour at all.

## Placement

- **Screen (wiki):** mounted in a framed `IllustrationPlate` (gutter + hairline)
  in the article margin, in browse features, and inside Specimen callouts.
- **Print (PDF):** **frameless** — the engraving sits directly on the page over
  bare paper (`IllustrationPlate framed={false}`), with a figure number and
  italic caption beneath. No drawn box.

## Until the plates exist

`IllustrationPlate` renders a hatched **"plate — engraving to come"** placeholder.
Generate art to this brief, then drop it in via `IllustrationPlate src="…"`; every
slot in the wiki and print kits is already wired to receive it.

## Reference

The source repo's intended look is naturalist/field-guide; see
`pvliesdonk/gamebook` `_brand.yml` and `docs/concept.md`. Pair generated plates
with the brand's warm cream paper (`--paper-warm`) so the white of the art melts
into the page rather than sitting on a bright rectangle.
