import subprocess, sys, textwrap

def run(matrix, tmp, expected_rows=2):
    p = tmp / "m.md"; p.write_text(matrix)
    return subprocess.run([sys.executable, "research/check_matrix.py", str(p), str(expected_rows)],
                          capture_output=True, text=True)

HEADER = "| family | article | IF | Live | Tabletop | Puzzle-Hunt |\n|-|-|-|-|-|-|\n"

def test_passes_when_complete(tmp_path):
    m = HEADER + "| F | A | ● | ◐ | – | ? |\n| F | B | ○ | – | ● | ● |\n"
    r = run(m, tmp_path, 2)
    assert r.returncode == 0, r.stdout + r.stderr

def test_fails_on_blank_cell(tmp_path):
    m = HEADER + "| F | A | ● | | – | ? |\n| F | B | ○ | – | ● | ● |\n"
    r = run(m, tmp_path, 2)
    assert r.returncode != 0
    assert "A" in r.stdout

def test_fails_on_wrong_row_count(tmp_path):
    m = HEADER + "| F | A | ● | ○ | – | ? |\n"
    r = run(m, tmp_path, 2)
    assert r.returncode != 0
    assert "row count" in r.stdout.lower()
