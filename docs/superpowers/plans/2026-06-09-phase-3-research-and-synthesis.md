# Phase 3 — Research and Synthesis Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Produce the cross-media matrix, gap research notes (with citations), the genre-conventions router, and the playtesting/quality/verification primer — research material for every Phase-2 gap-list item, plus a boardgame keep/cut finding — without writing entry prose.

**Architecture:** Mechanically scaffold a *mechanism × media* matrix from the Phase-2 outline (cells marked ● where a feeding note proves a medium), then a hands-on judgment pass resolves the blanks to ○ (gap) / – (N/A) / ? and surfaces the boardgame diagnostic (Gate C1). Synthesis gaps are filled by cross-linking; the few true gaps + the two synthesis notes use the `deep-research` skill. A completeness check enforces the matrix has no unresolved cells. Two human gates mirror Phase 2 (C1 assessed-matrix, C2 milestone).

**Tech Stack:** Python 3 (matrix scaffold + check), the `obsidian-vault-mcp` tools (`get_similar`, `search`, `read`), the `deep-research` skill, the Phase-2 artifacts (`docs/outline.md`, `research/corpus-snapshot.json`).

**Governing stance:** synthesis-first. The corpus is mature; only corpus-silent cells get external research. The boardgame finding may recommend revising the Phase-2 outline — that is allowed (exploratory stance).

**Spec:** `docs/superpowers/specs/2026-06-09-phase-3-research-and-synthesis-design.md`

---

## File map

| File | Responsibility | Created in |
|------|----------------|-----------|
| `research/build_matrix.py` | Scaffold the matrix from outline feeds → pillar, marking ● | Task 0 |
| `research/cross-media-matrix.md` | The matrix (article × IF/Live/Tabletop/Puzzle-Hunt) + boardgame finding | Tasks 0, 2 |
| `research/check_matrix.py` + `research/test_check_matrix.py` | Completeness check: all outline articles present, no unresolved cells | Task 1 |
| `research/gaps/<slug>.md` | One research note per agreed gap (cross-link or researched), provenance-tagged | Tasks 3, 4 |
| `research/gaps/genre-conventions-router.md` | Genre router synthesis | Task 4 |
| `research/gaps/playtesting-quality-verification.md` | Process primer (cross-media) | Task 4 |

---

## Task 0: Scaffold the cross-media matrix

**Files:**
- Create: `research/build_matrix.py`
- Create (generated): `research/cross-media-matrix.md`

- [ ] **Step 1: Write `research/build_matrix.py`**

```python
#!/usr/bin/env python3
"""Scaffold research/cross-media-matrix.md from docs/outline.md + corpus-snapshot.json.

For each family article, mark a medium ● when one of the article's feed notes comes from
that pillar (paths encode the pillar). Remaining cells are left blank ('') for the Phase-3
judgment pass to resolve to o (gap) / - (N/A) / ? (review). Articles with no corpus feed
(e.g. the genre router) get all-blank rows. Unmatched feed tokens are reported as warnings.
"""
import json, re, pathlib

PILLAR = {"Interactive Fiction": "IF", "Live Game Design": "Live",
          "Tabletop": "Tabletop", "Puzzle Hunts": "Puzzle-Hunt"}
MEDIA = ["IF", "Live", "Tabletop", "Puzzle-Hunt"]

snap = json.loads(pathlib.Path("research/corpus-snapshot.json").read_text())
base2pillar = {}
for n in snap:
    seg = n["path"].split("/")[1]          # the pillar segment
    base2pillar[n["path"].split("/")[-1][:-3]] = PILLAR.get(seg)  # basename w/o .md -> pillar

def norm(tok):
    tok = re.sub(r"\*\([^)]*\)\*", "", tok)         # drop *(split)* / *(map)* markers
    tok = tok.replace("`", "").replace("*", "").strip()
    return tok[:-3] if tok.endswith(".md") else tok

rows, warnings = [], []
fam, in_fam = None, False
for line in pathlib.Path("docs/outline.md").read_text().splitlines():
    m = re.match(r"^## Family \d+: (.+)$", line)
    if m:
        fam, in_fam = m.group(1).strip(), True; continue
    if line.startswith("## ") and not line.startswith("## Family"):
        in_fam = False; continue
    if in_fam:
        a = re.match(r"^- \*\*(.+?)\*\*(.*)$", line)
        if not a:
            continue
        title = a.group(1).strip()
        rest = a.group(2)
        pills = set()
        if "←" in rest:
            for tok in rest.split("←", 1)[1].split(","):
                t = norm(tok)
                if t in base2pillar and base2pillar[t]:
                    pills.add(base2pillar[t])
                elif t and not t.lower().startswith(("synthesis", "gap")):
                    warnings.append(f"{title}: unmatched feed token '{t}'")
        rows.append((fam, title, pills))

out = ["# Cross-Media Matrix — mechanism × medium",
       "",
       "> Phase 3. ● corpus-direct (feeding note from that medium) · ◐ corpus cross-link"
       " (manifestation under another note — synthesis) · ○ true gap (corpus silent — research)"
       " · – N/A · ? review. ● cells scaffolded by `research/build_matrix.py`; blanks resolved"
       " in the judgment pass. [synthesis]",
       "",
       "| family | article | " + " | ".join(MEDIA) + " |",
       "|--------|---------|" + "|".join(["---"] * len(MEDIA)) + "|"]
for fam, title, pills in rows:
    cells = ["●" if m in pills else "" for m in MEDIA]
    out.append(f"| {fam} | {title} | " + " | ".join(cells) + " |")
out += ["", f"Total article rows: {len(rows)}."]
pathlib.Path("research/cross-media-matrix.md").write_text("\n".join(out) + "\n")
print(f"Wrote research/cross-media-matrix.md with {len(rows)} rows.")
for w in warnings:
    print("WARN:", w)
```

- [ ] **Step 2: Run the scaffold and sanity-check the row count**

Run: `python3 research/build_matrix.py`
Expected: `Wrote research/cross-media-matrix.md with 116 rows.` and few/no `WARN:` lines.
If the row count ≠ 116 (the Phase-2 article total) or there are many WARN lines, the outline
feed format drifted — inspect and fix `build_matrix.py`'s `norm()` or the outline, re-run.

- [ ] **Step 3: Commit**

```bash
git add research/build_matrix.py research/cross-media-matrix.md
git commit -m "feat: scaffold cross-media matrix from Phase-2 outline (refs #4)"
```

---

## Task 1: Matrix completeness check (TDD)

**Files:**
- Create: `research/check_matrix.py`
- Test: `research/test_check_matrix.py`

- [ ] **Step 1: Write the failing test `research/test_check_matrix.py`**

```python
import subprocess, sys, textwrap

def run(matrix, tmp, expected_rows=2):
    p = tmp / "m.md"; p.write_text(matrix)
    return subprocess.run([sys.executable, "research/check_matrix.py", str(p), str(expected_rows)],
                          capture_output=True, text=True)

HEADER = "| family | article | IF | Live | Tabletop | Puzzle-Hunt |\n|-|-|-|-|-|-|\n"

def test_passes_when_complete(tmp_path):
    m = HEADER + "| F | A | ● | ◐ | – | ? |\n| F | B | ○ | – | ● | ● |\n"
    r = run(m, tmp_path, 2)
    assert r.returncode == 0, r.stdout + r.stderr

def test_fails_on_blank_cell(tmp_path):
    m = HEADER + "| F | A | ● | | – | ? |\n| F | B | ○ | – | ● | ● |\n"
    r = run(m, tmp_path, 2)
    assert r.returncode != 0
    assert "A" in r.stdout

def test_fails_on_wrong_row_count(tmp_path):
    m = HEADER + "| F | A | ● | ○ | – | ? |\n"
    r = run(m, tmp_path, 2)
    assert r.returncode != 0
    assert "row count" in r.stdout.lower()
```

- [ ] **Step 2: Run the test to verify it fails**

Run: `python3 -m pytest research/test_check_matrix.py -v`
Expected: FAIL — `research/check_matrix.py` does not exist.

- [ ] **Step 3: Write `research/check_matrix.py`**

```python
#!/usr/bin/env python3
"""Assert the cross-media matrix is complete: expected row count, and every media cell is
one of ● ○ – ? (no blanks). Usage: check_matrix.py <matrix.md> <expected_rows>"""
import sys

VALID = {"●", "◐", "○", "–", "?"}

def main(path, expected_rows):
    rows, bad = 0, []
    for line in open(path, encoding="utf-8"):
        line = line.rstrip("\n")
        if not line.startswith("|"):
            continue
        cells = [c.strip() for c in line.strip("|").split("|")]
        if len(cells) < 6 or cells[0] in ("family", "") or set(cells[1]) <= set("-"):
            continue                     # header / separator
        rows += 1
        for m, c in zip(["IF", "Live", "Tabletop", "Puzzle-Hunt"], cells[2:6]):
            if c not in VALID:
                bad.append(f"{cells[1]} [{m}]: '{c}'")
    ok = True
    if bad:
        ok = False
        print(f"UNRESOLVED CELLS ({len(bad)}):")
        for b in bad: print(f"  {b}")
    if rows != int(expected_rows):
        ok = False
        print(f"ROW COUNT mismatch: found {rows}, expected {expected_rows}")
    if ok:
        print(f"OK: {rows} rows, all cells resolved.")
    return 0 if ok else 1

if __name__ == "__main__":
    sys.exit(main(sys.argv[1], sys.argv[2]))
```

- [ ] **Step 4: Run the test to verify it passes**

Run: `python3 -m pytest research/test_check_matrix.py -v`
Expected: 3 passed.

- [ ] **Step 5: Commit**

```bash
git add research/check_matrix.py research/test_check_matrix.py
git commit -m "feat: cross-media matrix completeness check (refs #4)"
```

---

## Task 2: Judgment pass + boardgame diagnostic (hands-on)

Resolve every blank cell; surface the boardgame finding. Judgment work — verification is the
completeness check plus Gate C1.

**Files:**
- Modify: `research/cross-media-matrix.md`

- [ ] **Step 1: Resolve every blank cell**

For each article row, for each blank (non-●) cell, use `get_similar` on the article's feed
notes and hybrid `search` on the mechanism to decide a single glyph:
- **◐** — the mechanism manifests in this medium and the corpus already covers it under
  *another* note (a cross-link → synthesis, not new research). Record which note in the Task 3
  synthesis note, not in the cell.
- **○** — the mechanism *should* manifest here but the corpus is silent → true gap (research).
- **–** — genuinely N/A for this medium (e.g. physical reset has no IF manifestation).
- **?** — unsure; leave for Gate C1 discussion.

Every cell ends as exactly one glyph (●/◐/○/–/?) so the completeness check can validate it.

- [ ] **Step 2: Add the boardgame-integration finding**

Append a `## Boardgame integration finding` section to the matrix file: list the
boardgame-design articles (Systems group 6G/6H/6I from the outline) with their row marks. If
they are ● only in Tabletop and – elsewhere, state the isolation explicitly and give a
**keep / cut / rescope** recommendation with the evidence (the rows). If they cross-connect,
say so and recommend keep.

- [ ] **Step 3: Run the completeness check**

Run: `python3 research/check_matrix.py research/cross-media-matrix.md 116`
Expected: `OK: 116 rows, all cells resolved.` Fix any `UNRESOLVED CELLS` (every media cell must
be exactly one of ●/◐/○/–/?) and re-run until OK.

- [ ] **Step 4: Commit**

```bash
git add research/cross-media-matrix.md
git commit -m "feat: judgment pass on cross-media matrix + boardgame finding (refs #4)"
```

---

## GATE C1 — assessed matrix (HARD STOP)

- [ ] **Stop and present the marked matrix + boardgame finding to the human.** Do not start gap research until accepted.

Present: the matrix; the tally of **◐** (synthesis cross-links) vs **○** (true gaps needing
research); the boardgame keep/cut/rescope recommendation. **Human decides:** which **○** cells
are worth researching vs. downgrading to **–**; the boardgame fate; confirms the **◐**
cross-links are acceptable. Apply the boardgame decision before/within Task 5.

---

## Task 3: Synthesis gap notes (cross-link notes)

For every **◐** cell, record the cross-link so it is captured for writing.

**Files:**
- Create: `research/gaps/<slug>.md` (grouped sensibly — one note may cover several related cross-links)

- [ ] **Step 1: Write one synthesis note per cross-link cluster**

Each note states: the mechanism (article), the medium it newly maps to, the corpus note(s)
that supply the manifestation, and a one-line synthesis of how it manifests there. Tag each
claim `[corpus]` or `[synthesis]`. No external citations needed (the corpus is the source).

- [ ] **Step 2: Verify every gap note carries a provenance tag**

Run: `grep -rL '\[\(corpus\|synthesis\|researched\)\]' research/gaps --include='*.md'`
Expected: no output (every note has at least one provenance tag).

- [ ] **Step 3: Commit**

```bash
git add research/gaps
git commit -m "feat: synthesis cross-link notes for matrix gaps (refs #4)"
```

---

## Task 4: True-gap research + the two synthesis notes

**REQUIRED SUB-SKILL:** use the `deep-research` skill for each true-gap item and for any
cross-media claim in the primer that needs a non-corpus source.

**Files:**
- Create: `research/gaps/<slug>.md` (one per **○** cell the human kept)
- Create: `research/gaps/genre-conventions-router.md`
- Create: `research/gaps/playtesting-quality-verification.md`

- [ ] **Step 1: Research each true-gap cell**

For each kept **○** cell, run `deep-research` on the specific question (how does that mechanism
manifest in that medium?). Write a research note + footnote-ready citations; tag claims
`[researched]` (with citation) / `[corpus]` / `[synthesis]`.

- [ ] **Step 2: Write the genre-conventions router**

`research/gaps/genre-conventions-router.md`: a comparative table (genre × reader-contract ×
dominant-mechanic × key adaptation) distilled from the 7 genre articles. Pure synthesis;
tag `[synthesis]`/`[corpus]`. No external research unless a contract claim needs a source.

- [ ] **Step 3: Write the playtesting/quality/verification primer**

`research/gaps/playtesting-quality-verification.md`: generalise `testing_interactive_fiction`,
`quality_standards_if`, `research_and_verification` from IF to cross-media (playtesting,
quality bars, research/provenance discipline). Use `deep-research` for any non-IF claim;
tag provenance per claim.

- [ ] **Step 4: Verify provenance + citations**

Run: `grep -rL '\[\(corpus\|synthesis\|researched\)\]' research/gaps --include='*.md'`
Expected: no output. Then confirm every `[researched]` claim has an accompanying citation
(spot-check: `grep -rl '\[researched\]' research/gaps` then read each — each must contain a
URL or full citation).

- [ ] **Step 5: Commit**

```bash
git add research/gaps
git commit -m "feat: true-gap research notes, genre router, process primer (refs #4)"
```

---

## Task 5: Apply the boardgame decision

Conditional on the Gate C1 verdict.

**Files (if cut/rescope):**
- Modify: `docs/outline.md`, `docs/coverage-map.md`
- Delete: the affected `content/articles/systems-mechanics/*.qmd` stubs

- [ ] **Step 1: Apply the decision**

- **Keep:** add a note to the matrix/outline recording the cross-links that justify keeping;
  no structural change.
- **Cut/rescope:** remove the affected boardgame articles from `docs/outline.md`; re-disposition
  their corpus notes in `docs/coverage-map.md` (e.g. → `drop` with rationale, or → Exemplars);
  delete the corresponding stub files; re-run `python3 scripts/check_coverage.py
  research/corpus-manifest.md docs/coverage-map.md` until it reports OK (still 234 notes).

- [ ] **Step 2: Commit**

```bash
git add -A
git commit -m "refactor: apply boardgame keep/cut decision from Phase-3 matrix (refs #4)"
```

---

## GATE C2 — Phase 3 milestone (HARD STOP)

- [ ] **Stop and present the full package to the human.**

Present: the complete matrix (check passing), the gap notes (synthesis + researched, all
provenance-tagged with citations), the genre router, the process primer, and the applied
boardgame decision. **Gate:** research notes + captured sources exist for every agreed gap-list
item; matrix complete; provenance/citations verified. On approval the work merges and **closes
issue #4**.

---

## Self-review notes

- **Spec coverage:** matrix → Tasks 0–2; gates → C1/C2; synthesis gaps → Task 3; true-gap
  research + genre router + primer → Task 4; boardgame finding → Task 2 (surfaced) + Task 5
  (applied). All spec deliverables map to a task.
- **Mechanical verification where possible:** `check_matrix.py` (completeness), provenance
  greps (Tasks 3/4), `check_coverage.py` re-run if boardgame notes move (Task 5).
- **Gates are hard stops:** C1 before any research (prevents researching rejected cells); C2 is
  the milestone.
- **Synthesis-first honoured:** Task 3 (cross-links, no research) is separated from Task 4
  (deep-research only for corpus-silent cells).
