# Phase 2 — Outline and Coverage Map Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Produce a human-approved, corpus-grounded outline of the field guide, a coverage map from every vault note to planned articles, a gap list for Phase 3, and frontmatter-only article stubs — without writing any prose.

**Architecture:** A five-stage clustering pipeline with two hard human gates. Stage 0 inventories the vault corpus. Stage 1 clusters one *calibration family* by hand to lock the pattern (Gate A). Stage 2 fans the locked pattern out to the remaining five families via one capable subagent each. Stage 3 reconciles cross-family overlaps and consolidates the four planning artifacts, enforced by a mechanical completeness check (Gate B). Stage 4 emits stubs. Clustering is driven by the vault's own signals (folder structure, link graph, semantic similarity) under a cite-real-paths anti-invention contract.

**Tech Stack:** Quarto (HTML/Typst/EPUB), Python 3 (check script), the `obsidian-vault-mcp` tools (`list_documents`, `list_folders`, `get_most_linked`, `get_backlinks`, `get_orphan_notes`, `get_similar`, `search`, `read`, `embeddings_status`, `build_embeddings`), the `Agent` tool for fan-out.

**Governing stance:** Per the spec's "Working stance" section, every Phase 1 "settled" decision is a revisable hypothesis. Each clustering task has an explicit output channel for *proposed revisions to Phase 1 decisions*. The hard rule is surface-and-propose; never silently bend or silently force a fit.

**Spec:** `docs/superpowers/specs/2026-06-09-phase-2-outline-and-coverage-design.md`

---

## File map

| File | Responsibility | Created in |
|------|----------------|-----------|
| `templates/article.qmd` | The article content-type template (renamed from `entry.qmd`) | Task 0 |
| `content/articles/index.qmd` | Articles part landing page (renamed from `content/entries/`) | Task 0 |
| `scripts/check_coverage.py` | Mechanical completeness check: every manifest note appears in the coverage map exactly once | Task 1 |
| `research/corpus-manifest.md` | Stage 0 ground truth: one row per vault note | Task 1 |
| `docs/outline.md` | Family → group → article tree + primers/keys/exemplars/specimens sections | Tasks 2, 3, 4 |
| `docs/coverage-map.md` | Note-centric disposition table (merge/split/drop/new) | Tasks 2, 3, 4 |
| `docs/gap-list.md` | Articles/primers needing Phase 3 research | Task 4 |
| `content/articles/<family>/<slug>.qmd` | Frontmatter-only article stubs | Task 5 |

Family slugs (fixed): `structure-pacing`, `puzzles-clues-information`, `story-character-voice`, `players-social-dynamics`, `space-props-materiality`, `systems-mechanics`.

---

## Task 0: Retire the "entry" vocabulary

Mechanical rename so production infrastructure stops saying "entry" before we build article infra on top of it. Blast radius was verified in the spec.

**Files:**
- Rename: `templates/entry.qmd` → `templates/article.qmd`
- Rename: `content/entries/` → `content/articles/`
- Modify: `_quarto.yml` (lines with `part: "Entries"` and `content/entries/index.qmd`)
- Modify: `content/articles/index.qmd` (was `content/entries/index.qmd` — reword)
- Modify: `content/keys/index.qmd` (reword "entry frontmatter")

- [ ] **Step 1: Rename the template and the content directory with git**

```bash
git mv templates/entry.qmd templates/article.qmd
git mv content/entries content/articles
```

- [ ] **Step 2: Update `_quarto.yml`**

Change the Entries part to:

```yaml
    - part: "Articles"
      chapters:
        - content/articles/index.qmd
```

- [ ] **Step 3: Reword `content/articles/index.qmd`**

```markdown
---
title: "Articles"
---

*Placeholder — articles written in Phase 4 and Phase 5.*

The main reference: one article per design mechanism, grouped by functional family.
```

- [ ] **Step 4: Reword the stray mention in `content/keys/index.qmd`**

Change `*Placeholder — keys generated from entry frontmatter in Phase 2 onwards.*` to
`*Placeholder — keys generated from article frontmatter in Phase 2 onwards.*`

- [ ] **Step 5: Verify no production "entry/entries" remains**

Run: `grep -rniE "entr(y|ies)" _quarto.yml index.qmd content/ scripts/ templates/`
Expected: no matches. (The *published* label decision is deferred and lives only in the spec under `docs/superpowers/`, which is not scanned here.)

- [ ] **Step 6: Verify the book still builds**

Run: `quarto render --to html`
Expected: build succeeds; `_book/` regenerates with an "Articles" part.

- [ ] **Step 7: Commit**

```bash
git add -A
git commit -m "refactor: adopt 'article' production vocabulary, retire 'entry' (refs #3)"
```

---

## Task 1: Corpus inventory + completeness check (Stage 0)

Produce the ground-truth manifest of every Narrative & Game Design note, and the mechanical check that Stage 3 will run against it. Build the check first so the manifest's format is pinned by what the check parses.

**Files:**
- Create: `scripts/check_coverage.py`
- Create: `research/corpus-manifest.md`
- Test: `scripts/test_check_coverage.py`

- [ ] **Step 1: Write the failing test for the completeness check**

```python
# scripts/test_check_coverage.py
import subprocess, sys, textwrap, pathlib

def run(manifest, coverage, tmp):
    m = tmp / "manifest.md"; c = tmp / "coverage.md"
    m.write_text(manifest); c.write_text(coverage)
    return subprocess.run([sys.executable, "scripts/check_coverage.py", str(m), str(c)],
                          capture_output=True, text=True)

MANIFEST = textwrap.dedent("""\
    | path | title |
    |------|-------|
    | IF/a.md | A |
    | IF/b.md | B |
""")

def test_passes_when_every_note_is_covered(tmp_path):
    coverage = textwrap.dedent("""\
        | note path | disposition |
        |-----------|-------------|
        | IF/a.md | merge |
        | IF/b.md | drop |
    """)
    r = run(MANIFEST, coverage, tmp_path)
    assert r.returncode == 0, r.stdout + r.stderr

def test_fails_and_names_uncovered_note(tmp_path):
    coverage = textwrap.dedent("""\
        | note path | disposition |
        |-----------|-------------|
        | IF/a.md | merge |
    """)
    r = run(MANIFEST, coverage, tmp_path)
    assert r.returncode != 0
    assert "IF/b.md" in r.stdout

def test_fails_on_note_covered_twice(tmp_path):
    coverage = textwrap.dedent("""\
        | note path | disposition |
        |-----------|-------------|
        | IF/a.md | merge |
        | IF/a.md | split |
        | IF/b.md | drop |
    """)
    r = run(MANIFEST, coverage, tmp_path)
    assert r.returncode != 0
    assert "IF/a.md" in r.stdout
```

- [ ] **Step 2: Run the test to verify it fails**

Run: `python3 -m pytest scripts/test_check_coverage.py -v`
Expected: FAIL — `scripts/check_coverage.py` does not exist yet.

- [ ] **Step 3: Implement the completeness check**

```python
# scripts/check_coverage.py
"""Assert every manifest note appears in the coverage map exactly once.

Both inputs are markdown pipe-tables whose first column is the note path.
A note path is any first-cell value containing '/' and ending in '.md'.
Header and separator rows are ignored automatically by that rule.
"""
import sys
from collections import Counter

def note_paths(md_path):
    paths = []
    for line in open(md_path, encoding="utf-8"):
        line = line.strip()
        if not line.startswith("|"):
            continue
        first = line.strip("|").split("|")[0].strip()
        if "/" in first and first.endswith(".md"):
            paths.append(first)
    return paths

def main(manifest_path, coverage_path):
    manifest = set(note_paths(manifest_path))
    coverage = note_paths(coverage_path)
    coverage_counts = Counter(coverage)
    coverage_set = set(coverage)

    missing = sorted(manifest - coverage_set)
    extra = sorted(coverage_set - manifest)
    duplicated = sorted(p for p, n in coverage_counts.items() if n > 1)

    ok = not (missing or extra or duplicated)
    if missing:
        print(f"UNCOVERED ({len(missing)}): notes in manifest, absent from coverage map:")
        for p in missing: print(f"  {p}")
    if extra:
        print(f"UNKNOWN ({len(extra)}): notes in coverage map, absent from manifest:")
        for p in extra: print(f"  {p}")
    if duplicated:
        print(f"DUPLICATED ({len(duplicated)}): notes appearing more than once in coverage map:")
        for p in duplicated: print(f"  {p} (x{coverage_counts[p]})")
    if ok:
        print(f"OK: all {len(manifest)} manifest notes covered exactly once.")
    return 0 if ok else 1

if __name__ == "__main__":
    sys.exit(main(sys.argv[1], sys.argv[2]))
```

- [ ] **Step 4: Run the test to verify it passes**

Run: `python3 -m pytest scripts/test_check_coverage.py -v`
Expected: 3 passed.

- [ ] **Step 5: Ensure vault embeddings are available**

Call the `embeddings_status` MCP tool. If embeddings are absent or stale, call `build_embeddings` and wait for completion. (Semantic clustering in later tasks depends on this.)

- [ ] **Step 6: Enumerate the corpus and build the manifest**

Use `list_folders` then `list_documents` to enumerate every note under the Narrative & Game Design corpus (~238 notes; the prior session counted 238 across Interactive Fiction, Live Game Design, Tabletop, Puzzle Hunts). Call `get_most_linked` and `get_orphan_notes` once each to obtain graph roles.

Write `research/corpus-manifest.md` with this exact header so the check script parses it (note path MUST be column 1):

```markdown
# Corpus Manifest — Narrative & Game Design

> Stage 0 ground truth (Phase 2). One row per vault note. [synthesis]
> Graph role: hub (in get_most_linked top tier) / orphan (in get_orphan_notes) / leaf (otherwise).

| note path | title | current category | tentative family | size | graph role |
|-----------|-------|------------------|------------------|------|------------|
| Interactive Fiction/.../foo.md | Foo | IF / narrative structure | Structure & Pacing | 1.2k | hub |
```

- [ ] **Step 7: Sanity-check the manifest**

Run: `grep -cE '^\| .*\.md ' research/corpus-manifest.md`
Expected: a count in the ballpark of the enumerated total (≈238). If it is far off, the enumeration missed a folder — re-run Step 6 before continuing.
Then `read` three random note paths from the manifest to confirm the paths resolve in the vault.

- [ ] **Step 8: Commit**

```bash
git add scripts/check_coverage.py scripts/test_check_coverage.py research/corpus-manifest.md
git commit -m "feat: corpus manifest and coverage completeness check (refs #3)"
```

---

## Task 2: Calibration family (Stage 1, hands-on)

Cluster ONE family by hand in the main thread to lock granularity and format. Default family: **Puzzles, Clues & Information** (well-bounded, corpus-rich). This task produces judgment artifacts, not deterministic output — its verification is the anti-invention contract plus Gate A.

**Files:**
- Modify: `docs/outline.md` (create; add the calibration family subtree)
- Modify: `docs/coverage-map.md` (create; add this family's note rows)

- [ ] **Step 1: Gather the three clustering signals for the family**

For the family's manifest notes:
1. **Folder structure** — note the existing subcategories (seed for the `group` layer).
2. **Link graph** — for each `hub` note in this family, call `get_backlinks` and `get_outlinks` to see what clusters around it.
3. **Semantic similarity** — for representative notes, call `get_similar`; run hybrid `search` on the family's core mechanisms to catch cross-folder relatives.

- [ ] **Step 2: Cluster into a Family → group → article tree**

An article = where the three signals agree on a coherent mechanism. Where they disagree, mark it `?needs-review` rather than guessing. The `group` layer appears only where the family's size demands it. Record, per article: working title, one-line scope, feeding note paths, seeded facets where evident, provenance hint.

- [ ] **Step 3: Write the calibration subtree into `docs/outline.md`**

Create `docs/outline.md` with this structure (header + the one family):

```markdown
# Field Guide to Narrative & Game Design — Outline

> Phase 2 working outline. Production noun: **article**. Status: IN PROGRESS — not approved.
> Hierarchy: Family -> group (where size demands) -> article.

## Family 2: Puzzles, Clues & Information

### Group 2.x: <group name, if any>

- **<Article working title>** — <one-line scope>. media: [puzzle-hunt, live-game]. provenance: corpus | gap
  - feeds: `path/one.md`, `path/two.md`
  - facets: effects[…] problems[…] components[…]
```

- [ ] **Step 4: Write this family's rows into `docs/coverage-map.md`**

Create `docs/coverage-map.md` with the header the check script needs (note path = column 1):

```markdown
# Coverage Map — corpus note -> article disposition

> Phase 2. Every manifest note appears here exactly once. [synthesis]

| note path | disposition | target article(s) | rationale |
|-----------|-------------|-------------------|-----------|
| Puzzles/.../foo.md | merge | The Aha Moment | core example of the cognitive leap |
```

Disposition vocabulary: `merge` (folds into one article), `split` (feeds 2+ articles), `drop` (not carried; rationale required), `new` (article has no corpus base — must also appear on the gap list later).

- [ ] **Step 5: Run the anti-invention spot-check**

Pick 5 articles from the subtree. For each, `read` one cited note path and confirm the note genuinely supports that article. Confirm every `new`/`gap` article carries a one-line justification. Fix any article that cites a note it does not actually rest on.

- [ ] **Step 6: Capture proposed Phase 1 revisions (if any)**

If the template/facet schema/family edge did not fit cleanly, add a short `## Proposed revisions` note to the top of `docs/outline.md` describing the misfit and the proposed change. Do NOT edit `docs/decisions.md` yet — that happens only if the human accepts.

- [ ] **Step 7: Commit**

```bash
git add docs/outline.md docs/coverage-map.md
git commit -m "feat: calibration family clustering — Puzzles, Clues & Information (refs #3)"
```

---

## GATE A — human checkpoint (HARD STOP)

- [ ] **Stop and present the calibration family to the human.** Do not start Task 3 until accepted.

Present: the Family→group→article subtree, its coverage-map rows, the granularity (articles per group, notes per article), and any proposed Phase 1 revisions.

**Accept criteria (human decides):** granularity feels right; the `group` layer is pulling its weight; the artifact format is what they want to read; the note→article assignments are sound; any proposed schema/template revision is resolved (accepted → update `docs/decisions.md` and the template now, before fan-out; or rejected). The accepted result is the **working reference** for fan-out — revisable if a later family contradicts it.

---

## Task 3: Fan-out to the remaining five families (Stage 2)

Apply the locked pattern to the other five families via one capable subagent each. **REQUIRED SUB-SKILL:** use `superpowers:dispatching-parallel-agents`.

**Files:**
- Modify: `docs/outline.md` (append five family subtrees)
- Modify: `docs/coverage-map.md` (append their note rows)

- [ ] **Step 1: Dispatch one subagent per family**

Five families: Structure & Pacing; Story, Character & Voice; Players & Social Dynamics; Space, Props & Materiality; Systems & Mechanics. Use the `Agent` tool with `subagent_type: general-purpose`, model Sonnet or Opus (NEVER Haiku — this is judgement work). Give each agent this exact contract, with `<FAMILY>` filled in and the accepted calibration subtree pasted in as the worked example:

```
You are clustering one family of a game-design field guide from an existing
Obsidian vault corpus. Family: <FAMILY>.

INPUTS you must read first:
- research/corpus-manifest.md (filter to rows whose tentative family is <FAMILY>;
  also pull in any note your similarity searches show belongs here regardless of
  its tentative family).
- The worked example below — match its granularity and format exactly:
<PASTE ACCEPTED CALIBRATION SUBTREE>

METHOD — drive clustering from three vault signals, do not invent structure:
1. Folder/category structure (seed for the optional `group` layer).
2. Link graph: for hub notes call get_backlinks / get_outlinks.
3. Semantic: call get_similar on representative notes; hybrid `search` on core mechanisms.
An article is where the signals agree. Where they disagree, mark it ?needs-review.

HARD OUTPUT CONTRACT:
- Every article lists the REAL vault note paths that feed it (you must have read them).
- An article with no corpus base is allowed ONLY if tagged `gap` with a one-line reason.
  Never present a non-corpus article as corpus-backed.
- NO prose bodies. NO facets beyond what the notes support.
- If the template/facet schema/family edge does not fit, say so in a `proposed_revisions`
  field — do not force the fit and do not silently deviate.

RETURN exactly two markdown blocks:
1. An outline subtree in the worked-example format (## Family … / ### Group … / - **article**).
2. Coverage-map rows: | note path | disposition | target article(s) | rationale |
   covering every <FAMILY> note you were given (disposition ∈ merge/split/drop/new).
Plus a short `proposed_revisions:` list (empty if none). Return raw markdown only.
```

- [ ] **Step 2: Verify each returned subtree before merging**

For each family's return: spot-check 3 cited note paths with `read` to confirm they support their article. Confirm every note from that family's manifest slice appears in the returned coverage rows. Reject and re-dispatch any family whose output invents uncited articles or drops notes silently.

- [ ] **Step 3: Append verified subtrees to the planning files**

Append each family's subtree to `docs/outline.md` and its rows to `docs/coverage-map.md`. Collect all `proposed_revisions` into the `## Proposed revisions` section.

- [ ] **Step 4: Commit**

```bash
git add docs/outline.md docs/coverage-map.md
git commit -m "feat: cluster remaining five families (refs #3)"
```

---

## Task 4: Reconcile, consolidate, and run the completeness check (Stage 3)

**Files:**
- Modify: `docs/outline.md` (cross-family reconciliation, primers/keys/exemplars/specimens sections)
- Modify: `docs/coverage-map.md` (dedup after reconciliation)
- Create: `docs/gap-list.md`

- [ ] **Step 1: Resolve cross-family mechanisms**

Find mechanisms claimed by 2+ families (e.g. Progress Clock spans Family 1/6). Assign each a single home article; replace the duplicate(s) with a cross-reference note in the outline. Update the term registry (`docs/term-registry.md`) with any new canonical terms surfaced, per its living-document mandate.

- [ ] **Step 2: Derive the primer list (settles decision #16)**

From the families and big terrain features, propose ~5–8 primers (the concept's band). Add a `## Primers` section to `docs/outline.md`: each primer with a one-line scope and provenance hint. Add `## Keys`, `## Exemplars carried over`, `## Style specimens carried over` sections listing what carries from the corpus.

- [ ] **Step 3: Build the gap list**

Create `docs/gap-list.md` — every `new`/`gap`-tagged article and every gap-flagged primer:

```markdown
# Gap List — items needing research beyond the corpus (feeds Phase 3 / issue #4)

| item | type | family | why it is a gap | research direction |
|------|------|--------|-----------------|--------------------|
| <article title> | article | Systems & Mechanics | no corpus note covers diceless economies | survey PbtA/FitD economy designs |
```

- [ ] **Step 4: Run the completeness check (HARD verification)**

Run: `python3 scripts/check_coverage.py research/corpus-manifest.md docs/coverage-map.md`
Expected: `OK: all N manifest notes covered exactly once.`
If it reports UNCOVERED / UNKNOWN / DUPLICATED, fix the coverage map (add the missing disposition, remove the stray, or collapse the duplicate) and re-run until OK. Do NOT proceed to Gate B on a non-OK check.

- [ ] **Step 5: Commit**

```bash
git add docs/outline.md docs/coverage-map.md docs/gap-list.md docs/term-registry.md
git commit -m "feat: reconcile families, consolidate outline, gap list, primers (refs #3)"
```

---

## GATE B — Phase 2 milestone gate (HARD STOP)

- [ ] **Stop and present the full package to the human.** Do not start Task 5 until approved.

Present: complete `docs/outline.md`, `docs/coverage-map.md` (with the passing check output), `docs/gap-list.md`, and the primer list. Note the article count and any proposed Phase 1 revisions still open.

**On approval:** flip decision #16 (primer set and count) to `settled` with date 2026-06-09 in `docs/decisions.md`; commit that change. Then proceed to Task 5.

---

## Task 5: Stub generation (Stage 4)

Mechanically emit one frontmatter-only stub per approved article. Only after Gate B.

**Files:**
- Create: `content/articles/<family-slug>/<article-slug>.qmd` (one per article)
- Create/Modify: per-family GitHub tracking issues

- [ ] **Step 1: Decide stub tracking granularity and create issues**

Per the spec's open sub-decision, create **one GitHub tracking issue per family** (not per article) under the Phase 4/5 milestones, each listing that family's article slugs as checkboxes. Use the `writing-issues` skill. Record the issue number to reference in each stub's notice.

- [ ] **Step 2: Generate the stubs from the approved outline**

For each article, create `content/articles/<family-slug>/<article-slug>.qmd` with frontmatter from the settled schema, facets seeded from the coverage clustering where evident (blank otherwise), provenance blank, and a STUB notice. No prose body:

```markdown
---
title: "<Article working title>"
aliases: []
family: "<Family name>"
media: [<media tags from clustering>]
facets:
  effects: [<seeded or empty>]
  problems: [<seeded or empty>]
  components: [<seeded or empty>]
provenance: ""
---

<!-- STUB — Phase 2 outline. Prose gated until Phase 4. Tracked in #<family-issue>. -->
```

- [ ] **Step 3: Verify stub count matches the outline**

Run: `find content/articles -name '*.qmd' -not -name index.qmd | wc -l`
Expected: equals the number of articles listed in `docs/outline.md`. If it differs, an article was missed or duplicated — reconcile against the outline.

- [ ] **Step 4: Verify stubs are frontmatter-only and schema-valid**

Run: `grep -rL '^provenance:' content/articles --include='*.qmd' | grep -v index.qmd`
Expected: no output (every stub carries the schema's `provenance` key). Then confirm no stub has a prose body — stubs have no section headings, a prose body would:
Run: `grep -rl '^##' content/articles --include='*.qmd'`
Expected: no output (no article stub contains a `##` section heading).

- [ ] **Step 5: Verify the book still builds with stubs present**

Run: `quarto render --to html`
Expected: build succeeds.

- [ ] **Step 6: Commit**

```bash
git add content/articles
git commit -m "feat: frontmatter-only article stubs for approved outline (closes #3)"
```

---

## Self-review notes

- **Spec coverage:** Stage 0 → Task 1; calibration + Gate A → Task 2 + Gate A; fan-out → Task 3; reconcile + completeness + primers + Gate B → Task 4 + Gate B; stubs → Task 5; vocabulary rename → Task 0; exploratory stance → `proposed_revisions` channel in Tasks 2/3 and the Gate resolution steps. All spec deliverables map to a task.
- **Gates are hard stops:** Gate A and Gate B are their own checklist items between tasks; no downstream task may begin until the human accepts.
- **Anti-invention enforced mechanically where possible:** `check_coverage.py` (note-loss), stub count/schema greps (Task 5), cite-real-paths spot-checks (Tasks 2/3).
- **Open sub-decisions from the spec resolved here:** calibration family = Puzzles, Clues & Information (Task 2, revisable); stub-to-issue granularity = per-family (Task 5 Step 1).
