#!/usr/bin/env python3
"""Generate the combined Glossary & Index (pre-render step).

One A-to-Z reference that merges a glossary (canonical terms with a one-line
definition and a link to the article that covers them) with an index (every alias
interleaved alphabetically, redirecting to its canonical term). It is built from
the canonical term registry (docs/term-registry.md, the naming authority, decision
#13) so it never drifts: add a term or alias there and it appears here.

Terms are matched to articles by a normalised title (ignoring a leading "The" and
punctuation), so registry "Aha Moment" links to the "The Aha Moment" article. A
term with no matching article is still defined; it just carries no link.

Run from the repo root (wired as a Quarto pre-render alongside backlinks.py,
keys.py, curate.py).
"""
import re
import pathlib

ROOT = pathlib.Path(__file__).resolve().parent.parent
OUT = ROOT / "content" / "glossary.qmd"
ROW = re.compile(r"^\|([^|]+)\|([^|]+)\|([^|]+)\|([^|]+)\|\s*$")
TITLE_RE = re.compile(r'^title:\s*"?(.*?)"?\s*$', re.M)


def norm(s: str) -> str:
    s = s.strip().lower()
    s = re.sub(r"^the\s+", "", s)
    s = s.replace("&", " and ")
    s = re.sub(r"[^a-z0-9]+", " ", s)
    return s.strip()


def sort_key(s: str) -> str:
    return re.sub(r"^the\s+", "", s.strip().lower())


def article_index() -> dict:
    """normalised title -> relative link from content/ (e.g. articles/fam/slug.qmd)."""
    idx = {}
    for q in sorted(ROOT.glob("content/articles/*/*.qmd")):
        m = TITLE_RE.search(q.read_text(encoding="utf-8")[:400])
        title = m.group(1).strip() if m else q.stem
        idx[norm(title)] = f"articles/{q.parent.name}/{q.stem}.qmd"
    return idx


def parse_registry() -> list:
    """Each table row -> (term, [aliases], family, notes)."""
    rows = []
    for line in (ROOT / "docs/term-registry.md").read_text(encoding="utf-8").splitlines():
        m = ROW.match(line)
        if not m:
            continue
        term, aliases, family, notes = (c.strip() for c in m.groups())
        if term == "Canonical term" or set(term) <= set("-: "):
            continue  # header / separator
        alist = [] if aliases in ("—", "-", "") else [a.strip() for a in aliases.split(",") if a.strip()]
        rows.append((term, alist, family, notes))
    return rows


def main() -> None:
    arts = article_index()
    entries = {}  # sort_key -> (display_first_letter, markdown line); dedup by sort_key

    def link_for(term):
        return arts.get(norm(term))

    for term, aliases, _family, notes in parse_registry():
        link = link_for(term)
        head = f"**[{term}]({link})**" if link else f"**{term}**"
        entries.setdefault(sort_key(term), f"{head}: {notes}")
        for alias in aliases:
            tgt = f"see [{term}]({link})" if link else f"see {term}"
            entries.setdefault(sort_key(alias), f"*{alias}*: {tgt}")

    lines = [
        "---",
        'title: "Glossary & Index"',
        "---",
        "",
        "An alphabetical reference to the mechanisms in this guide and the other "
        "names they go by. A bold entry links to the article that covers it; an "
        "italic entry redirects an alias to its canonical term.",
        "",
    ]
    last_letter = None
    for key in sorted(entries):
        letter = key[0].upper() if key and key[0].isalpha() else "#"
        if letter != last_letter:
            lines += ["", f"## {letter}", ""]
            last_letter = letter
        lines.append(f"{entries[key]}\n")

    OUT.write_text("\n".join(lines) + "\n", encoding="utf-8")
    print(f"glossary: {len(entries)} entries across the A-Z reference")


if __name__ == "__main__":
    main()
