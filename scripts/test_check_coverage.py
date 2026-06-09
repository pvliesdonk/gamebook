# scripts/test_check_coverage.py
import subprocess, sys, textwrap

def run(manifest, coverage, tmp):
    m = tmp / "manifest.md"; c = tmp / "coverage.md"
    m.write_text(manifest); c.write_text(coverage)
    return subprocess.run([sys.executable, "scripts/check_coverage.py", str(m), str(c)],
                          capture_output=True, text=True)

MANIFEST = textwrap.dedent("""\
    | path | title |
    |------|-------|
    | IF/a.md | A |
    | IF/b.md | B |
""")

def test_passes_when_every_note_is_covered(tmp_path):
    coverage = textwrap.dedent("""\
        | note path | disposition |
        |-----------|-------------|
        | IF/a.md | merge |
        | IF/b.md | drop |
    """)
    r = run(MANIFEST, coverage, tmp_path)
    assert r.returncode == 0, r.stdout + r.stderr

def test_fails_and_names_uncovered_note(tmp_path):
    coverage = textwrap.dedent("""\
        | note path | disposition |
        |-----------|-------------|
        | IF/a.md | merge |
    """)
    r = run(MANIFEST, coverage, tmp_path)
    assert r.returncode != 0
    assert "IF/b.md" in r.stdout

def test_fails_on_note_covered_twice(tmp_path):
    coverage = textwrap.dedent("""\
        | note path | disposition |
        |-----------|-------------|
        | IF/a.md | merge |
        | IF/a.md | split |
        | IF/b.md | drop |
    """)
    r = run(MANIFEST, coverage, tmp_path)
    assert r.returncode != 0
    assert "IF/a.md" in r.stdout
