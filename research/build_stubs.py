#!/usr/bin/env python3
"""Generate frontmatter-only article stubs from the approved docs/outline.md (Phase 2 / Task 5).

Parses the family sections (## Family N: ...) and their articles (- **Name**), and emits one
stub per article at content/articles/<family-slug>/<article-slug>.qmd using the settled schema
(title, aliases, family, media, facets incl. genre, provenance) + a STUB notice. No prose body.

Usage:
  python3 research/build_stubs.py --list       # print per-family article titles+slugs
  python3 research/build_stubs.py --generate    # write the stub files
"""
import re, sys, pathlib

OUTLINE = pathlib.Path("docs/outline.md")
ARTICLES = pathlib.Path("content/articles")

FAMILY_SLUG = {
    "Structure & Pacing": "structure-pacing",
    "Puzzles, Clues & Information": "puzzles-clues-information",
    "Story, Character & Voice": "story-character-voice",
    "Players & Social Dynamics": "players-social-dynamics",
    "Space, Props & Materiality": "space-props-materiality",
    "Systems & Mechanics": "systems-mechanics",
}
# per-family GitHub tracking issue (filled after issues are created); falls back to #3.
FAMILY_ISSUE = {
    "Structure & Pacing": 44,
    "Puzzles, Clues & Information": 45,
    "Story, Character & Voice": 46,
    "Players & Social Dynamics": 47,
    "Space, Props & Materiality": 48,
    "Systems & Mechanics": 49,
}

def slug(s):
    s = s.lower().replace("&", "and").replace("'", "").replace("’", "")
    s = re.sub(r"[^a-z0-9]+", "-", s).strip("-")
    return re.sub(r"-+", "-", s)

def parse():
    """Return list of (family_name, article_title). Only families 1-6; stops at galleries."""
    fam, out, in_fam = None, [], False
    for line in OUTLINE.read_text(encoding="utf-8").splitlines():
        m = re.match(r"^## Family \d+: (.+)$", line)
        if m:
            fam = m.group(1).strip(); in_fam = True; continue
        if line.startswith("## ") and not line.startswith("## Family"):
            in_fam = False; continue          # left the family block (Exemplars/Primers/etc.)
        if in_fam:
            a = re.match(r"^- \*\*(.+?)\*\*", line)
            if a:
                out.append((fam, a.group(1).strip()))
    return out

def stub(title, family, issue):
    return f"""---
title: "{title}"
aliases: []
family: "{family}"
media: []
facets:
  effects: []
  problems: []
  components: []
  genre: []
provenance: ""
---

<!-- STUB — Phase 2 outline. Prose gated until Phase 4. Tracked in #{issue}. -->
"""

def main():
    arts = parse()
    if "--list" in sys.argv:
        from collections import defaultdict
        g = defaultdict(list)
        for fam, t in arts:
            g[fam].append(t)
        for fam in FAMILY_SLUG:
            print(f"\n## {fam}  ({len(g[fam])})")
            for t in g[fam]:
                print(f"- [ ] {slug(t)}  ({t})")
        print(f"\nTOTAL family articles: {len(arts)}")
        return
    if "--generate" in sys.argv:
        n = 0
        for fam, title in arts:
            fslug = FAMILY_SLUG[fam]
            d = ARTICLES / fslug
            d.mkdir(parents=True, exist_ok=True)
            (d / f"{slug(title)}.qmd").write_text(
                stub(title, fam, FAMILY_ISSUE.get(fam, 3)), encoding="utf-8")
            n += 1
        print(f"Wrote {n} article stubs under {ARTICLES}/")
        return
    print("pass --list or --generate")

if __name__ == "__main__":
    main()
