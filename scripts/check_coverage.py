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
