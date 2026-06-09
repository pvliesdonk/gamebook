#!/usr/bin/env python3
"""Generate research/corpus-manifest.md from research/corpus-snapshot.json.

Phase 2 / Stage 0. The snapshot is a point-in-time trim (path, title, folder)
of the vault's Narrative & Game Design corpus, taken via the obsidian-vault-mcp
`list_documents` tool on 2026-06-09. This generator assigns each note a
*tentative* family (a rough, reassignable first pass driven purely by the note's
media-organised subcategory — clustering will reassign by design function) and a
graph role drawn from the vault link graph (`get_most_linked`, `get_orphan_notes`).

Deviations from the plan's manifest schema, recorded deliberately:
- No `size` column: the MCP listing exposes no size and statting 234 remote notes
  is not worthwhile; the link graph already signals merge-vs-centre better than size.
"""
import json
import pathlib

HERE = pathlib.Path(__file__).parent
SNAPSHOT = HERE / "corpus-snapshot.json"
OUT = HERE / "corpus-manifest.md"

PREFIX = "Narrative & Game Design/"

# Exact post-prefix folder string -> tentative family (rough, reassignable).
FAMILY_BY_FOLDER = {
    "Interactive Fiction": "(pillar overview — reassign)",
    "Interactive Fiction/audience-and-access": "Players & Social Dynamics",
    "Interactive Fiction/craft-foundations": "Story, Character & Voice",
    "Interactive Fiction/emotional-design": "Story, Character & Voice",
    "Interactive Fiction/genre-conventions": "Story, Character & Voice",
    "Interactive Fiction/narrative-structure": "Structure & Pacing",
    "Interactive Fiction/prose-and-language": "Story, Character & Voice",
    "Interactive Fiction/scope-and-planning": "Structure & Pacing",
    "Interactive Fiction/style-exemplars": "(style specimen gallery)",
    "Interactive Fiction/world-and-setting": "Story, Character & Voice",
    "Live Game Design": "(pillar overview — reassign)",
    "Live Game Design/corpus/escape-room-design": "Puzzles, Clues & Information",
    "Live Game Design/corpus/exemplars": "(exemplar gazetteer)",
    "Live Game Design/corpus/group-dynamics": "Players & Social Dynamics",
    "Live Game Design/corpus/hybrid-analog-digital": "Space, Props & Materiality",
    "Live Game Design/corpus/immersive-and-live-action": "Players & Social Dynamics",
    "Live Game Design/corpus/production-and-props": "Space, Props & Materiality",
    "Live Game Design/corpus/puzzle-design": "Puzzles, Clues & Information",
    "Live Game Design/corpus/scavenger-and-treasure-hunts": "Puzzles, Clues & Information",
    "Puzzle Hunts": "(pillar overview — reassign)",
    "Puzzle Hunts/corpus": "Puzzles, Clues & Information",
    "Tabletop": "(pillar overview — reassign)",
    "Tabletop/corpus/boardgame-design": "Systems & Mechanics",
    "Tabletop/corpus/boardgame-genres": "Systems & Mechanics",
    "Tabletop/corpus/digital-puzzle-games": "Puzzles, Clues & Information",
    "Tabletop/corpus/exemplars": "(exemplar gazetteer)",
    "Tabletop/corpus/gmless-storytelling-games": "Players & Social Dynamics",
    "Tabletop/corpus/solo-journaling-rpgs": "Story, Character & Voice",
    "Tabletop/corpus/ttrpg-campaign-design": "Structure & Pacing",
    "Tabletop/corpus/ttrpg-foundations": "Systems & Mechanics",
    "Tabletop/corpus/ttrpg-gm-craft": "Players & Social Dynamics",
    "Tabletop/corpus/ttrpg-system-design": "Systems & Mechanics",
}

# Meta / process files (not design content) — tentative drop.
META_BASENAMES = {
    "_deep-research-prompts.md",
    "_narrow-search-questions.md",
    "_research-queue.md",
}

# Corpus hubs (backlink_count >= 13) from get_most_linked — article-centre candidates.
# Basenames are unique within the corpus; matched by filename.
HUB_BASENAMES = {
    "format-taxonomy.md", "branching_narrative_construction.md", "pacing_and_tension.md",
    "branching_narrative_craft.md", "system-vs-setting.md", "diegetic_design.md",
    "artefact-design.md", "prep-economy.md", "session-zero.md", "endings_patterns.md",
    "worldbuilding_patterns.md", "hint-systems.md", "trust-and-social-pressure.md",
    "murder-mystery-party.md", "information-architecture.md", "self-resolving-puzzles.md",
    "dialogue_craft.md", "failure-modes.md", "nordic-larp.md", "mystery_conventions.md",
    "cascading_disaster_patterns.md", "character_voice.md", "information-asymmetry.md",
    "moral_dilemma_chains.md", "nonlinear_structure.md", "structural-patterns.md",
    "theme-and-immersion.md", "clue-sequencing.md", "theme-mechanism-integration.md",
    "scene_sequel_in_interactive_fiction.md", "quality_standards_if.md", "conflict_patterns.md",
    "pacing-and-difficulty-curves.md", "jubensha.md", "Escape Room Design.md", "Puzzle Design.md",
}


def category(folder):
    return folder[len(PREFIX):] if folder.startswith(PREFIX) else folder


def tentative_family(folder, basename):
    if basename in META_BASENAMES:
        return "(meta — not content)"
    return FAMILY_BY_FOLDER.get(category(folder), "(unmapped — reassign)")


def graph_role(basename):
    if basename in META_BASENAMES:
        return "orphan"
    if basename in HUB_BASENAMES:
        return "hub"
    return "leaf"


def main():
    notes = json.loads(SNAPSHOT.read_text(encoding="utf-8"))
    rows = []
    unmapped = []
    for n in notes:
        basename = n["path"].split("/")[-1]
        fam = tentative_family(n["folder"], basename)
        if fam == "(unmapped — reassign)":
            unmapped.append(n["path"])
        rows.append((n["path"], n["title"], category(n["folder"]), fam, graph_role(basename)))

    lines = [
        "# Corpus Manifest — Narrative & Game Design",
        "",
        "> Stage 0 ground truth (Phase 2). One row per vault note, generated by",
        "> `research/build_manifest.py` from `research/corpus-snapshot.json`",
        "> (obsidian-vault-mcp listing, 2026-06-09). [synthesis]",
        ">",
        "> **Tentative family** is a rough first pass from each note's media-organised",
        "> subcategory; clustering reassigns by design function. **Graph role**: hub",
        "> (backlink_count >= 13 in get_most_linked), orphan (no links / meta file),",
        "> leaf otherwise. No `size` column (see generator docstring).",
        "",
        f"Total notes: {len(rows)}.",
        "",
        "| note path | title | category | tentative family | graph role |",
        "|-----------|-------|----------|------------------|------------|",
    ]
    for path, title, cat, fam, role in rows:
        safe_title = title.replace("|", "\\|")
        lines.append(f"| {path} | {safe_title} | {cat} | {fam} | {role} |")
    lines.append("")

    OUT.write_text("\n".join(lines), encoding="utf-8")
    print(f"Wrote {OUT} with {len(rows)} notes.")
    if unmapped:
        print(f"WARNING: {len(unmapped)} notes had unmapped subcategories:")
        for p in unmapped:
            print(f"  {p}")


if __name__ == "__main__":
    main()
