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
