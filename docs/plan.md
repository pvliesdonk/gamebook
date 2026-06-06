> **SUPERSEDED** — This document seeded the project. Work is now tracked in
> GitHub issues #1–#8 (one per phase). Milestones group issues by phase.
> Do not update this file; it is kept for historical reference only.

---

# Field Guide to Narrative & Game Design — High-Level Plan

> Companion to `concept.md`. This plan governs **sequence**, not content. It deliberately contains
> no entry content, no taxonomy decisions treated as final, and no prose. Its main purpose is to
> make clear what must happen **before** any writing begins.

## For the executing agent — read first

This project's value is mostly editorial, and the failure mode is rushing to write. To be explicit:

- **Do not write entry prose, primers, or any guide content until Phase 4.** Prose is gated.
- **Do not invent the taxonomy, templates, or vocabulary.** They are decided with the human in
  Phase 1 and recorded in the decision register. Until an item is SETTLED there, treat it as open.
- **Do not scaffold hundreds of entry files** speculatively. Stubs are created only in Phase 2,
  from an approved outline.
- **Do not pull from the vault at build time.** The corpus is a research input, not a dependency.
- **Honour the gates.** Each phase has an exit gate. Do not begin a phase until the previous gate
  is met. When in doubt, stop and ask the human.

The early phases feel slow because they are decision and infrastructure work. That is intended.

## Phases

### Phase 0 — Repository and build skeleton
Stand up the independent repo and a Quarto book project that renders an empty placeholder to **both**
the Typst PDF and the HTML wiki. Create `_brand.yml`, the directory layout, the decision register
file (extract it from this plan), and empty stubs for the style guide and term registry. Add a
build-time backlinks-injection script (stub is fine) and local preview.
**Gate:** the empty shell builds cleanly to both outputs.

### Phase 1 — Foundations (decisions and conventions)
Settle, with the human, everything currently DRAFT: the functional-family taxonomy; the per-content-type
templates (entry, primer, exemplar profile, style specimen); the entry frontmatter schema including the
routing facets that drive the keys (effects, problems, components, media, aliases, provenance); the
canonical **term registry** (initial vocabulary, one canonical term per mechanism with aliases); the
**LLM style guide** (voice, head-versus-body register split, provenance markers, en-GB, no em-dashes);
and the thin Vale config (term-consistency check, optional AI-tells net).
**Gate:** taxonomy, templates, schema, style guide and term registry are all marked SETTLED in the
register. Nothing downstream proceeds on a DRAFT spine.

### Phase 2 — Outline and mapping
Determine the outline without writing content: which families, which entries within them, the primer
list, the keys, which exemplar profiles and style specimens carry over. Produce a **coverage map** from
corpus notes to planned entries (merge, split, drop, new), and a **gap list** of entries needing research
beyond the corpus. Entry stubs (frontmatter only, no prose) may be created here.
**Gate:** human-approved outline, coverage map and gap list.

### Phase 3 — Research and synthesis
For gap-flagged entries and primers, do the research, capturing sources as footnotes and tagging
provenance. Build the missing cross-pillar concept maps (tabletop and puzzle hunts are currently
unmapped). Output is research notes and source material, **not** final prose.
**Gate:** research notes and captured sources exist for every gap-flagged item.

### Phase 4 — Pilot (one family, end to end)
Take a **single** functional family through the whole pipeline: entries written to template (head and
body), its primer, keys populated from facets, backlinks rendering, both outputs building, Vale clean,
and voice reviewed by the human. This is the first prose written, and only for one family. Lock the
patterns: voice, depth, template fit, build quirks. Define explicit accept criteria here.
**Gate:** the human accepts the pilot family against the accept criteria.

### Phase 5 — Scale-out writing
Apply the locked pattern family by family, each family a reviewable unit. Loop: write, Vale, rebuild
backlinks, human review.
**Gate:** per-family human review.

### Phase 6 — Assembly, curation and design
Curate the PDF edition via the frontmatter selection flag, build the proper custom Typst template,
render the keys as decision tables (PDF) and filters (wiki), assemble the galleries and the
index and glossary. Optional graph view for the wiki.
**Gate:** a curated PDF edition and a complete wiki build.

### Phase 7 — Polish and release
Full link and backlink audit, consistency pass, accessibility within current Typst limits, publish the
wiki (self-hosted), produce the PDF edition.

## Decision register (seed — extract to its own file in Phase 0)

Each item is `proposed`, `draft`, or `settled`, with the date it was settled. The executing agent may
only rely on `settled` items. Strawmen travel as `draft`.

| # | Decision | State | Note |
|---|----------|-------|------|
| 1 | Form: naturalist field guide, single expandable entries | settled | |
| 2 | Spine: design function, medium as tag | settled (principle) | the family list itself is #3 |
| 3 | Functional-family taxonomy (six-family strawman) | **draft** | to be designed in Phase 1 |
| 4 | Output: Quarto single-source, Typst PDF + HTML wiki | settled | |
| 5 | Backlinks injected at build from the guide's own graph | settled | |
| 6 | Brand: one `_brand.yml` drives both faces | settled | tokens DRAFT |
| 7 | Split pipeline (separate web renderer) as fallback | **draft** | trigger: pilot web output disappoints |
| 8 | Graph view for the wiki | proposed | phase-two nice to have |
| 9 | Consistency: LLM style guide primary, thin Vale backstop | settled | |
| 10 | Repo: independent, new; corpus = point-in-time input | settled | |
| 11 | Entry template / anatomy | **draft** | Phase 1 |
| 12 | Frontmatter schema and routing facets (keys) | **draft** | Phase 1 |
| 13 | Canonical term registry | **draft** | Phase 1 |
| 14 | Voice: neutral body, light authorial in judgement and primers | **draft** | confirm in style guide |
| 15 | Provenance markers (corpus / researched / synthesis) | settled (principle) | format DRAFT |
| 16 | Primer set and count | **draft** | Phase 2 |
| 17 | PDF scope: curated over exhaustive | settled | curation by frontmatter flag |
| 18 | Illustrations / diagrams | proposed | parked, possibly phase two |

## Out of scope for the planning chat
Content of any kind, final taxonomy, final vocabulary, and any prose. Those are produced inside the
phases above, behind their gates.
