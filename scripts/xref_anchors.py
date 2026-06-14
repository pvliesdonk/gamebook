#!/usr/bin/env python3
"""Pre-render: inject a stable stem anchor on each article/exemplar.

Quarto rewrites inter-document `.qmd` links to their rendered target for HTML,
but leaves cross-directory relative links raw for single-file formats (PDF and
EPUB) (quarto-cli#13287), so the inter-article cross-references become dead
links there. filters/resolve-xref.lua rewrites those links to `#xref-<stem>`;
this script provides the matching target by appending an empty anchor span
`[]{#xref-<stem>}` to each article's Silhouette / exemplar's Profile line.

Why the Silhouette/Profile line: these chapters take their title from the YAML
frontmatter, so there is no body heading to carry an id, and the merged
single-file document has lost the source filename, so the anchor cannot be
injected by a Pandoc filter. The Silhouette/Profile line is the first body
block of every article and exemplar. Appending the span after the closing `*`
keeps it outside the emphasis, so filters/field-guide.lua still recognises the
line and strips the label; the empty span adds no visible output and rides
inside `#fg-silhouette[...]` as the Typst label (and as a plain anchor in EPUB).

The `xref-` prefix keeps these anchors in their own namespace, so they never
collide with the chapter heading id Quarto assigns from the title slug (which
would be a duplicate-label error in Typst when the slug equals the stem).

Idempotent: a line already carrying the correct `{#xref-stem}` anchor is left
untouched; an older unprefixed `{#stem}` anchor is migrated. Keys are pdf:false
(dropped from both single-file editions together with their internal links), so
they need no anchor.
"""
import pathlib
import re

DIRS = [pathlib.Path("content/articles"), pathlib.Path("content/exemplars")]
LEAD = re.compile(r"^(\*(?:Silhouette|Profile):.*\*)(?:\[\]\{#[^}]*\})?[ \t]*$")


def main() -> int:
    injected = 0
    for base in DIRS:
        for path in sorted(base.rglob("*.qmd")):
            anchor = f"[]{{#xref-{path.stem}}}"
            lines = path.read_text(encoding="utf-8").splitlines(keepends=True)
            changed = False
            for i, line in enumerate(lines):
                m = LEAD.match(line.rstrip("\n"))
                if not m:
                    continue
                desired = m.group(1) + anchor
                if m.group(0).rstrip() == desired:
                    break  # already correct
                newline = "\n" if line.endswith("\n") else ""
                lines[i] = desired + newline
                changed = True
                break
            if changed:
                path.write_text("".join(lines), encoding="utf-8")
                injected += 1
    print(f"xref_anchors: injected anchors into {injected} files")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
