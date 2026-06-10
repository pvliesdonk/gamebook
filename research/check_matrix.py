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
