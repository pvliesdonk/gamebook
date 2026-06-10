# LLM Style Guide

> **SETTLED** — 2026-06-06. This guide governs the voice, register, and navigational interactions for all authored content.
> See `docs/decisions.md` item #14.

> **Terminology register.** Production noun: **article** (what we write, and what we ask agents to write). Rendered display label: **entry** (the field-guide term shown in the built HTML/PDF output). Use "article" in all instructions and drafting.

## Voice & Persona

The guide uses a **Practitioner-Mentor** voice.

- **The Practitioner (The "Head"):** Evocative, observational, and slightly authorial. It is the voice of a naturalist in the field.
- **The Engineer (The "Body"):** Objective, precise, and structural. It handles complexity with "Layered Reflection" rather than simple density.
- **The Mentor (The "Call-outs"):** Experiential, opinionated, and advisory.

**Readability (plain by default).** Write so a designer new to the medium can follow it on first read. The Engineer body is *precise, not academic*: prefer the plain word over the technical one, unpack jargon the first time it appears (or avoid it), and keep sentences short-to-medium. Depth comes from clear reasoning, not dense vocabulary or nested clauses. If a sentence needs two readings to parse, split it. (Locked at the Phase-4 pilot, Gate D1.)

## Register Split

### The Readable Head (The "Spark")
- **Purpose:** Immediate inspiration and the "Silhouette" of the mechanism.
- **Style:** Evocative prose. Imagine describing a species' jizz (general impression).
- **The Silhouette:** Every article starts with a single-line **Silhouette** definition (e.g., *Silhouette: A high-frequency loop for building competence*).
- **Constraints:** 1-3 short paragraphs. **No headers, no bullet points.**

### The Scannable Body (The "Blueprint")
- **Purpose:** Technical depth and implementation detail.
- **Style:** Reflective prose with **Diagnostic Headers** (e.g., `## The Trigger (Detection)`).
- **Navigation:** Use "Portals" in the margins (on wiki) or sidebars (in PDF) to link to Exemplars.
- **Constraints:** No bullet points in the primary prose flow. **Data-dense lists must be moved to Tables or Insets.**

## Cross-References (Connectors) — inline, in context

Articles are not islands, but their links belong **in the prose, where the reader needs them**, not collected in a relational appendix. (Revised at the Phase-4 pilot, Gate D1: the old four-bucket "Interactions" section read as bolted-on metadata and made the article feel un-actionable.)

- **Link inline.** Wherever another mechanism becomes genuinely *of import to the reader at that point*, link it right there with a real markdown link to the sibling file: e.g. "...this is about whether each clue is sound, not the *order* they arrive, which is [Clue Sequencing & Chains](clue-sequencing-and-chains.qmd)." All 116 stubs exist, so links resolve now (to stubs) and fill in later; the backlink graph populates from them. Exemplars/primers link the same way.
- **Disambiguation in context, not as a list.** Distinguish a look-alike mechanism *in the prose* where the confusion would arise, not in a "Confusable With" bucket.
- **No relational metadata lists.** There is no "Pairs Well With / Common Transitions / Implementation Interlocks" section. Those relationships are expressed inline, or in the closing.

Every article closes with one short **"Where this fits"** section: two paragraphs, prose not lists. **The bigger picture** (how the mechanism sits in its family / the wider design landscape: what it depends on, what depends on it) and **Next steps** (what a designer practically reaches for next, with inline links). This is orientation, not a summary recap.

## Call-outs (sparing, to highlight the exceptional)

Call-outs exist to make the eye **stop** at something genuinely notable. They are not a structural scaffold. (Revised at the Phase-4 pilot, Gate D1: every article ending in a rote "Design Judgement" section of one tip plus one warning made call-outs into wallpaper and defeated their purpose.)

- **At most two call-outs per article**, and only when a point genuinely warrants being pulled out of the prose (not something that belongs in the regular flow).
- **No fixed "Design Judgement" section, no fixed order or position.** A call-out sits wherever its point lands. Judgement that does not warrant a box is woven into the prose.
- **Aim for one Specimen per article**, placed naturally (not always after The Mechanism).
- Flavours, used where warranted: `::: {.callout-note}` **The Specimen** (a real-world example "in the wild"), `::: {.callout-tip}` **The Field Note** (standout mentor advice), `::: {.callout-warning}` **The Hazard** (a standout failure mode).

## Language & Regional Conventions

- **Language:** en-GB (e.g., *colour*, *mechanised*, *optimise*).
- **Region:** en-NL (Continental/Metric).
    - Use Metric units (mm, cm, m).
    - Use 24-hour clock.
    - Use A-series paper sizes (A4, A5) as the default for physical props.
- **Punctuation:** No em-dashes (—). Use colons, parentheses, or separate sentences to maintain a crisp, field-guide rhythm.
- **Terminology:** Always use the canonical term from `docs/term-registry.md`.

## Provenance Markers

Tag claims at the end of the load-bearing sentence or paragraph:
- `[corpus]` — From the Obsidian vault.
- `[researched]` — New material with a footnote citation.
- `[synthesis]` — Authorial synthesis or opinion.

### Provenance is not a citation (locked at Gate D1)

Provenance records *where we found it*; it is not a source. **The vault/corpus is never cited as a source** — it is an internal research input, not a public reference.

- Every **factual** claim (tagged `[corpus]` or `[researched]`) must resolve to a **real external source** in the article's `## Sources`.
- **Harvest first.** Each feeding corpus note carries its own sources — usually a `## Research Basis` section (e.g. `cluing-principles.md` cites *Puzzlecraft*, the MIT puzzle-writing guides, Evan Chen's guides). Pull those into the article's Sources and cite them directly.
- **Research the gaps.** Where a corpus note has no source for a claim (some notes, e.g. the IF genre notes, have only internal See-Also), find a real citation. Only downgrade to `[synthesis]` if the claim is genuinely authorial opinion, not a fact.
- `[synthesis]` claims need no citation.

## What to Avoid (Negative Style)

- **No Marketing Fluff:** (e.g., "unleash," "revolutionary").
- **No Conclusion Blocks:** No empty summary/recap that restates what was just said. (The "Where this fits" close is allowed and expected: it is forward-looking orientation — bigger picture + next steps — not a recap.)
- **No Bullet-Dumping:** Use structured, reflective prose instead of fragmented lists.
