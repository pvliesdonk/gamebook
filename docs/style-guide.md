# LLM Style Guide

> **SETTLED** — 2026-06-06. This guide governs the voice, register, and navigational interactions for all authored content.
> See `docs/decisions.md` item #14.

## Voice & Persona

The guide uses a **Practitioner-Mentor** voice.

- **The Practitioner (The "Head"):** Evocative, observational, and slightly authorial. It is the voice of a naturalist in the field.
- **The Engineer (The "Body"):** Objective, precise, and structural. It handles complexity with "Layered Reflection" rather than simple density.
- **The Mentor (The "Call-outs"):** Experiential, opinionated, and advisory.

## Register Split

### The Readable Head (The "Spark")
- **Purpose:** Immediate inspiration and the "Silhouette" of the mechanism.
- **Style:** Evocative prose. Imagine describing a species' jizz (general impression).
- **The Silhouette:** Every entry starts with a single-line **Silhouette** definition (e.g., *Silhouette: A high-frequency loop for building competence*).
- **Constraints:** 1-3 short paragraphs. **No headers, no bullet points.**

### The Scannable Body (The "Blueprint")
- **Purpose:** Technical depth and implementation detail.
- **Style:** Reflective prose with **Diagnostic Headers** (e.g., `## The Trigger (Detection)`).
- **Navigation:** Use "Portals" in the margins (on wiki) or sidebars (in PDF) to link to Exemplars.
- **Constraints:** No bullet points in the primary prose flow. **Data-dense lists must be moved to Tables or Insets.**

## Interaction Patterns (Connectors)

Entries are not islands; they are part of an ecosystem. Every entry must include these connectors:

- **Confusable With:** A "Comparison Plate" distinguishing the mechanism from look-alikes (e.g., *Dilemma vs. Choice*).
- **Pairs Well With:** Mechanisms that frequently "flock" together or support each other.
- **Common Transitions:** The "Transport" layer. Where a designer typically goes *after* this mechanism.
- **Implementation Interlocks:** The "Crunch." Which mechanical widgets (clocks, dice, PbtA moves) typically drive this effect.

## Call-out Flavours (Design Judgement)

Use Quarto call-out blocks for "Mentor" wisdom. They should be brief and action-oriented.

- `::: {.callout-note}` **The Specimen:** A specific observation of the mechanism "in the wild."
- `::: {.callout-tip}` **The Field Note:** Practical "Mentor" advice or hard-won wisdom.
- `::: {.callout-warning}` **The Hazard:** Known traps, failure modes, or "anti-patterns."

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

## What to Avoid (Negative Style)

- **No Marketing Fluff:** (e.g., "unleash," "revolutionary").
- **No Conclusion Blocks:** The entry ends when the information is complete.
- **No Bullet-Dumping:** Use structured, reflective prose instead of fragmented lists.
