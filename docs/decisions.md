# Decision Register

Each item is `proposed`, `draft`, or `settled`, with the date it was settled.

**Rule for agents:** Only rely on items marked `settled`. Treat `draft` items as
open — do not build on them. If a `draft` item blocks your work, stop and ask.

| # | Decision | State | Settled | Note |
|---|----------|-------|---------|------|
| 1 | Form: naturalist field guide, single expandable entries | settled | — | |
| 2 | Spine: design function, medium as tag | settled | — | family list is #3 |
| 3 | Functional-family taxonomy (Structure, Puzzles, Story, Social, Space, Systems) | settled | 2026-06-06 | Refined into 6 distinct engineering disciplines. |
| 4 | Output: Quarto single-source, Typst PDF + HTML wiki | settled | — | |
| 5 | Backlinks injected at build from the guide's own graph | settled | — | |
| 6 | Brand: one `_brand.yml` drives both faces | settled | 2026-06-06 | Warm amber accent, Georgia serif. |
| 7 | Split pipeline (separate web renderer) as fallback | **draft** | | trigger: pilot web output disappoints |
| 8 | Graph view for the wiki | proposed | | phase-six nice to have |
| 9 | Consistency: LLM style guide primary, thin Vale backstop | settled | 2026-06-06 | Vale + ai-tells + pre-commit configured. |
| 10 | Repo: independent, new; corpus = point-in-time input | settled | — | |
| 11 | Article template / anatomy (Head, Body, Judgement call-outs) | settled | 2026-06-06 | Production noun "article"; "entry" is the rendered display label (Phase 4). Template provisional pending Phase-4 pilot. |
| 12 | Frontmatter schema and routing facets (keys) | settled | 2026-06-06 | Added `genre` facet 2026-06-09 (Phase 2): genre is a cross-cutting lens like media, not a family. |
| 13 | Canonical term registry | settled (initial) | 2026-06-06 | Seeded; living document mandate in GEMINI.md |
| 14 | Voice: neutral body, Mentor call-outs, Practitioner head | settled | 2026-06-06 | Defined in style-guide.md. Uses en-NL/Metric conventions. Phase-4 D1: added "Readability (plain by default)" directive. |
| 15 | Provenance markers (corpus / researched / synthesis) | settled | 2026-06-06 | Phase-4 D1: provenance ≠ citation. Vault is never cited; factual claims resolve to a real external source. Originally a per-article `## Sources` list; superseded by the per-family credits apparatus (#21), which moved the verification trail to a web-only "Research basis". See style-guide.md. |
| 16 | Primer set and count | settled | 2026-06-09 | 8 primers (Phase 2 outline): Structure & Branching Topologies; Pacing & Tension Curves; The Fairness Contract; Information Architecture; Diegesis & the Magic Circle; The Social Contract & Safety; Resolution & Randomness; Playtesting, Quality & Verification. |
| 17 | PDF scope: curated over exhaustive | settled | — | Curation by frontmatter flag. Implemented (#67): `pdf: false` on a content file excludes it from the Typst PDF only; the HTML wiki stays complete. `scripts/curate.py` (pre-render) lists the flagged titles; `filters/field-guide.lua` (typst-only) drops those chapters. Default is the full edition (nothing excluded). Caveat: excluding a chapter leaves any in-PDF references to it (e.g. a gazetteer index entry) as dead links. |
| 18 | Illustrations / diagrams | proposed | | parked, possibly phase two |
| 19 | Licensing & contribution policy | settled | 2026-06-13 | Author credit "Compiled by Peter van Liesdonk". Content (content/, docs/, research/, rendered book) under CC BY-NC 4.0; build scaffolding (scripts/, filters/, partials/, templates/, build config) under MIT. See LICENSE, LICENSE-CODE. CONTRIBUTING.md carries a licence-grant CLA: contributors retain copyright, grant the maintainer a perpetual licence including the right to relicense. LICENSE/LICENSE-CODE are kept verbatim (so GitHub/Licensee detect CC-BY-NC-4.0 and MIT); the content/code scope lives in NOTICE and README. Licensed commercial fonts are third-party, gitignored, and not redistributed (supply locally). Going public additionally requires purging the fonts from git history. |
| 21 | Credits apparatus: per-family Works & References | settled | 2026-06-13 | Replaces per-article `## Sources` (#15) and the parked references-appendix generator (#61). One `content/credits/<family>.qmd` per family part (an unnumbered back-matter chapter), built from what each article's **prose actually engages**: **Works discussed** (a ludography of games/films/books/experiences named in the text, credited; exemplars linked) plus **References** (authored texts the prose invokes). Both print. A web-only **Research basis** (`content-hidden when-format="typst"`) keeps the consulted-but-uncited trail. Credit facts are grounded from a real source (exemplar profile, the article's own sources, or a verified URL), never from model training data. Vale scopes `content/credits/*.qmd` like the glossary (Terms/Spelling/Repetition off; em-dash ban kept). |
| 20 | Style Specimens gallery scrapped | settled | 2026-06-13 | Cut on grounds of fit, not length: it would be the only single-medium (IF), sample-prose, synthesis-authored section in a cross-media mechanism guide. The prose-craft articles (Prose Patterns & Point of View, Voice & Register Consistency, Character Voice, Dialogue Craft, Exposition & Subtext) already cover the craft. The 24 `style-exemplars/*` corpus notes remain in the vault, unsurfaced. Supersedes the "Style Specimen gallery" destination recorded in the frozen `coverage-map.md` (which stays frozen). Phase 6 galleries reduce to the Exemplars gazetteer only. |
