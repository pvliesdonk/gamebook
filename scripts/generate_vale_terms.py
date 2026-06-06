import re
import yaml
from pathlib import Path

registry_path = Path("docs/term-registry.md")
rule_path = Path("styles/Gamebook/Terms.yml")

content = registry_path.read_text()
# Find the table rows
# | Canonical term | Aliases | Family | Notes |
# |----------------|---------|--------|-------|
# | Aha Moment | Epiphany, Sudden Insight | Family 2 | ... |

rows = re.findall(r"^\| (.+?) \| (.+?) \|", content, re.MULTILINE)

# Skip header and separator
rows = rows[2:]

substitutions = {}
for canonical, aliases in rows:
    canonical = canonical.strip()
    if aliases.strip() == "—":
        continue
    alias_list = [a.strip() for a in aliases.split(",")]
    for alias in alias_list:
        if alias:
            substitutions[alias] = canonical

rule = {
    "extends": "substitution",
    "message": "Use canonical term '%s' instead of '%s'.",
    "level": "error",
    "ignorecase": True,
    "swap": substitutions
}

with open(rule_path, "w") as f:
    yaml.dump(rule, f, sort_keys=False)

print(f"Generated Vale rule at {rule_path}")
