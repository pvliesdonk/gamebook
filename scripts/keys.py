#!/usr/bin/env python3
"""Generate the Keys router pages from article facets (pre-render step).

Keys let a reader come at the guide by intent — by the effect they want, the
problem they face, the component they hold, the genre/format, or the medium —
and land on the matching articles. They are generated from the controlled
`facets` in every article's frontmatter (never hand-maintained); the controlled
vocabulary and glosses live in docs/facet-vocabulary.md.

Rule: a value that covers fewer than THRESHOLD articles is *not* a browse entry
(a one-article key is not a lookup). Such tags stay on their articles.

Run from the repo root (wired as a Quarto pre-render alongside backlinks.py).
"""
import re
import pathlib
from collections import defaultdict

import yaml

ROOT = pathlib.Path(__file__).resolve().parent.parent
THRESHOLD = 2

# axis facet key -> (page filename stem, page title, one-line intro)
AXES = [
    ("effects",    "effects",    "By Effect",    "Find an article by the effect or feeling you want to create."),
    ("problems",   "problems",   "By Problem",   "Find an article by the problem you are hitting."),
    ("components", "components", "By Component", "Find an article by the kind of component you are working with."),
    ("genre",      "genre",      "By Genre",     "Find an article by fictional genre."),
    ("format",     "format",     "By Format",    "Find an article by the form of the game or production."),
    ("media",      "media",      "By Medium",    "Find an article by medium."),
]
FAMILY_DIR = {
    "structure-pacing": "Structure & Pacing",
    "puzzles-clues-information": "Puzzles, Clues & Information",
    "story-character-voice": "Story, Character & Voice",
    "players-social-dynamics": "Players & Social Dynamics",
    "space-props-materiality": "Space, Props & Materiality",
    "systems-mechanics": "Systems & Mechanics",
}


def parse_glosses():
    """term -> gloss, parsed from the markdown tables in docs/facet-vocabulary.md."""
    text = (ROOT / "docs/facet-vocabulary.md").read_text(encoding="utf-8")
    glosses = {}
    for line in text.splitlines():
        m = re.match(r"^\|\s*([a-z0-9-]+)\s*\|\s*(.+?)\s*\|$", line)
        if m and m.group(1) not in ("term",):
            glosses[m.group(1)] = m.group(2).strip()
    return glosses


def read_articles():
    arts = []
    for q in sorted(ROOT.glob("content/articles/*/*.qmd")):
        fm = yaml.safe_load(re.match(r"^---\n(.*?)\n---", q.read_text(encoding="utf-8"), re.S).group(1))
        fam_dir = q.parent.name
        arts.append({
            "title": fm.get("title", q.stem),
            "family": FAMILY_DIR.get(fam_dir, fam_dir),
            "rel": f"../articles/{fam_dir}/{q.stem}.qmd",
            "facets": fm.get("facets") or {},
            "media": fm.get("media") or [],
        })
    return arts


def gather(arts, facet):
    by_value = defaultdict(list)
    for a in arts:
        values = a["media"] if facet == "media" else (a["facets"].get(facet) or [])
        for v in values:
            by_value[v].append(a)
    return by_value


def write_page(stem, title, intro, by_value, glosses):
    # pdf: false -- keys are live browse filters in the wiki; in a linear PDF they
    # are static link-lists that re-order the TOC, so they are web-only (decision #17).
    lines = ["---", f'title: "Keys · {title}"', "pdf: false", "---", "", intro, ""]
    kept = {v: arts for v, arts in by_value.items() if len(arts) >= THRESHOLD}
    for v in sorted(kept, key=lambda v: (-len(kept[v]), v)):
        arts = kept[v]
        lines.append(f"## {v}")
        if glosses.get(v):
            lines.append(f"*{glosses[v]}*")
        lines.append("")
        for a in sorted(arts, key=lambda a: (a["family"], a["title"])):
            lines.append(f"- [{a['title']}]({a['rel']}) · {a['family']}")
        lines.append("")
    (ROOT / f"content/keys/{stem}.qmd").write_text("\n".join(lines), encoding="utf-8")
    return len(kept)


def write_index():
    lines = ["---", 'title: "Keys"', "pdf: false", "---", "", "Routers from intent to mechanism: find an article by the effect you want, the problem you face, the component you hold, the genre or format you are working in, or the medium.", ""]
    for _, stem, t, intro in AXES:
        lines.append(f"- [{t}]({stem}.qmd) — {intro[0].lower() + intro[1:]}")
    (ROOT / "content/keys/index.qmd").write_text("\n".join(lines) + "\n", encoding="utf-8")


def main():
    glosses = parse_glosses()
    arts = read_articles()
    write_index()
    for facet, stem, title, intro in AXES:
        n = write_page(stem, title, intro, gather(arts, facet), glosses)
        print(f"  keys/{stem}.qmd: {n} browse values (>= {THRESHOLD} articles)")


if __name__ == "__main__":
    main()
