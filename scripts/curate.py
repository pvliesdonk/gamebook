#!/usr/bin/env python3
"""Collect the documents flagged out of the curated PDF (pre-render step).

Decision #17: the PDF is a curated edition, the HTML wiki is complete. Curation is
by a per-document frontmatter flag: `pdf: false` excludes a file from the Typst PDF
while leaving it in the wiki. Absent or `pdf: true` means included (the default).

This writes the *titles* of the excluded documents to `filters/_pdf-exclude.txt`
(one per line). The Typst Lua filter (`filters/field-guide.lua`) reads that list and
drops those chapters from the merged book. The filter is typst-only, so the HTML
build always renders everything regardless of this list.

Titles are the key because the merged-book filter sees rendered headings, not file
paths. Article/exemplar/primer titles are unique in this project; the script fails
loudly if a flagged title collides, so an ambiguous drop can never happen silently.

Run from the repo root (wired as a Quarto pre-render alongside backlinks.py / keys.py).
"""
import re
import sys
import pathlib

import yaml

ROOT = pathlib.Path(__file__).resolve().parent.parent
OUT = ROOT / "filters" / "_pdf-exclude.txt"
FM_RE = re.compile(r"^---\n(.*?)\n---", re.S)


def frontmatter(path: pathlib.Path) -> dict:
    m = FM_RE.match(path.read_text(encoding="utf-8"))
    if not m:
        return {}
    return yaml.safe_load(m.group(1)) or {}


def main() -> None:
    excluded: dict[str, pathlib.Path] = {}
    for q in sorted(ROOT.glob("content/**/*.qmd")):
        fm = frontmatter(q)
        if fm.get("pdf") is False:
            title = (fm.get("title") or q.stem).strip()
            if title in excluded:
                sys.exit(
                    f"curate: two pdf:false documents share the title {title!r} "
                    f"({excluded[title]} and {q}); titles must be unique to drop safely."
                )
            excluded[title] = q

    OUT.write_text("".join(t + "\n" for t in sorted(excluded)), encoding="utf-8")
    print(f"curate: {len(excluded)} document(s) excluded from the PDF" +
          (": " + ", ".join(sorted(excluded)) if excluded else " (full edition)"))


if __name__ == "__main__":
    main()
