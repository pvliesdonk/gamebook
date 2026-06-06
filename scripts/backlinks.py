#!/usr/bin/env python3
"""
Backlinks injection stub.

Phase 5 implementation will scan content/ for [[wiki-links]] and inject
'Referenced by' sections. See GitHub issue: Implement backlinks injection.
"""
import pathlib

content_dir = pathlib.Path("content")
qmd_files = list(content_dir.rglob("*.qmd"))
print(f"backlinks: scanned {len(qmd_files)} .qmd file(s) — no-op (stub)")
