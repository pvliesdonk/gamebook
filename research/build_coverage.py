#!/usr/bin/env python3
"""Generate docs/coverage-map.md from research/corpus-snapshot.json + reconcile rules.

Phase 2 / Stage 3 (reconcile). Each of the 234 corpus notes is dispositioned to
exactly one destination: a functional family, the Exemplars gazetteer, the Style
Specimen gallery, or drop. Article-level assignment lives in docs/outline.md; this
map records the note -> destination disposition and is verified by
scripts/check_coverage.py against the manifest. Built from the Gate-A calibration +
Stage-2 fan-out + the human reconcile decisions (2026-06-09):
 - GM-less games + script formats -> Exemplars; authority mechanics -> Systems
 - genre kept in Story; faction-clocks -> Systems; theatrical-wrapper -> Space
 - route-backs (rashomon, progressive-revelation, bot-distribution) -> Puzzles
 - IF production/tooling cluster -> Systems (provisional, flagged for Gate B)
"""
import json, pathlib

HERE = pathlib.Path(__file__).parent
notes = json.loads((HERE / "corpus-snapshot.json").read_text())
PREFIX = "Narrative & Game Design/"

def base(p): return p.split("/")[-1]
def cat(folder): return folder[len(PREFIX):] if folder.startswith(PREFIX) else folder

# --- destination sets keyed by basename ---
EXEMPLAR_NAMED = {
    "mit-mystery-hunt.md", "dash-and-galactic-puzzle-hunts.md", "cicada-3301-and-secret-hunts.md",
    "baron-munchausen-and-the-storytelling-tradition.md", "fiasco-and-the-playset-model.md",
    "microscope-kingdom-and-fractal-collaboration.md", "ten-candles-and-physical-timer-mechanics.md",
    "the-quiet-year-and-map-as-narrative.md", "letter-writing-rpgs.md",
    "jubensha.md", "megagames.md", "murder-mystery-party.md",
}
# per-basename overrides (destination differs from subcategory default)
OVERRIDE = {
    # IF narrative-structure -> not Structure
    "moral_dilemma_chains.md": "Story, Character & Voice",
    "cascading_disaster_patterns.md": "Story, Character & Voice",
    "heist_and_caper_patterns.md": "Story, Character & Voice",
    "romance_and_relationships.md": "Story, Character & Voice",
    "rashomon_patterns.md": "Puzzles, Clues & Information",
    "pressure_cooker_patterns.md": "Players & Social Dynamics",
    # IF craft-foundations -> not Systems
    "diegetic_design.md": "Story, Character & Voice",
    "audio_visual_integration.md": "Story, Character & Voice",
    # IF audience-and-access (no clean default)
    "audience_targeting.md": "Story, Character & Voice",
    "accessibility_guidelines.md": "Players & Social Dynamics",
    "localization_considerations.md": "Systems & Mechanics",
    # escape-room -> not Puzzles
    "structural-patterns.md": "Structure & Pacing",
    "branching-in-escape-rooms.md": "Structure & Pacing",
    "pacing-and-difficulty-curves.md": "Structure & Pacing",
    "theme-and-immersion.md": "Space, Props & Materiality",
    # hybrid-analog-digital -> not Space
    "llm-as-npc.md": "Story, Character & Voice",
    "bot-distribution.md": "Puzzles, Clues & Information",
    "web-app-gating.md": "Systems & Mechanics",
    "game-state-and-answer-checking.md": "Systems & Mechanics",
    # immersive -> not Players
    "artefact-design.md": "Space, Props & Materiality",
    "immersive-theatre-lessons.md": "Space, Props & Materiality",
    "theatrical-wrapper-design.md": "Space, Props & Materiality",
    "progressive-revelation.md": "Puzzles, Clues & Information",
    # scavenger -> not Puzzles
    "finale-design.md": "Structure & Pacing",
    "community-and-player-trust.md": "Players & Social Dynamics",
    "physical-vs-digital-puzzle-artefacts.md": "Space, Props & Materiality",
    # solo-journaling -> not Story
    "oracle-design.md": "Systems & Mechanics",
    "bookend-rituals.md": "Players & Social Dynamics",
    # campaign-design -> not Structure
    "faction-clocks-and-progress.md": "Systems & Mechanics",
    "dungeon-design.md": "Space, Props & Materiality",
    # ttrpg-foundations -> not Systems
    "session-zero.md": "Players & Social Dynamics",
    # ttrpg-gm-craft -> not Players
    "npc-craft.md": "Story, Character & Voice",
    "pacing-in-sessions.md": "Structure & Pacing",
    "encounter-design.md": "Systems & Mechanics",
}
SUBCAT_DEFAULT = {
    "Interactive Fiction/narrative-structure": "Structure & Pacing",
    "Interactive Fiction/prose-and-language": "Story, Character & Voice",
    "Interactive Fiction/world-and-setting": "Story, Character & Voice",
    "Interactive Fiction/emotional-design": "Story, Character & Voice",
    "Interactive Fiction/genre-conventions": "Story, Character & Voice",
    "Interactive Fiction/craft-foundations": "Systems & Mechanics",
    "Interactive Fiction/scope-and-planning": "Structure & Pacing",
    "Live Game Design/corpus/escape-room-design": "Puzzles, Clues & Information",
    "Live Game Design/corpus/group-dynamics": "Players & Social Dynamics",
    "Live Game Design/corpus/hybrid-analog-digital": "Space, Props & Materiality",
    "Live Game Design/corpus/immersive-and-live-action": "Players & Social Dynamics",
    "Live Game Design/corpus/production-and-props": "Space, Props & Materiality",
    "Live Game Design/corpus/puzzle-design": "Puzzles, Clues & Information",
    "Live Game Design/corpus/scavenger-and-treasure-hunts": "Puzzles, Clues & Information",
    "Puzzle Hunts/corpus": "Puzzles, Clues & Information",
    "Tabletop/corpus/boardgame-design": "Systems & Mechanics",
    "Tabletop/corpus/boardgame-genres": "Systems & Mechanics",
    "Tabletop/corpus/digital-puzzle-games": "Puzzles, Clues & Information",
    "Tabletop/corpus/gmless-storytelling-games": "Systems & Mechanics",
    "Tabletop/corpus/solo-journaling-rpgs": "Story, Character & Voice",
    "Tabletop/corpus/ttrpg-campaign-design": "Structure & Pacing",
    "Tabletop/corpus/ttrpg-foundations": "Systems & Mechanics",
    "Tabletop/corpus/ttrpg-gm-craft": "Players & Social Dynamics",
    "Tabletop/corpus/ttrpg-system-design": "Systems & Mechanics",
}

def destination(n):
    p, folder, b, c = n["path"], n["folder"], base(n["path"]), cat(n["folder"])
    if b == "README.md" or folder == PREFIX + "Live Game Design":
        return "drop", "pillar overview / navigation / meta — superseded by the functional family structure"
    if c.endswith("style-exemplars"):
        return "Style Specimen gallery", "prose specimen for the style gallery"
    if c.endswith("/exemplars"):
        return "Exemplars gazetteer", "profile of a real work"
    if b in EXEMPLAR_NAMED:
        return "Exemplars gazetteer", "specific named work/format -> exemplar profile (mechanisms covered by family articles)"
    if b in OVERRIDE:
        return OVERRIDE[b], "routed by function (cross-family handoff)"
    if c in SUBCAT_DEFAULT:
        return SUBCAT_DEFAULT[c], "primary functional home"
    return "UNASSIGNED", "NO RULE"

rows, counts = [], {}
for n in sorted(notes, key=lambda x: x["path"]):
    dest, why = destination(n)
    counts[dest] = counts.get(dest, 0) + 1
    disp = "drop" if dest == "drop" else "merge"
    rows.append(f"| {n['path']} | {disp} | {dest} | {why} |")

out = [
    "# Coverage Map — corpus note -> disposition",
    "",
    "> Phase 2 / Stage 3. Every manifest note appears exactly once (enforced by",
    "> `scripts/check_coverage.py`). Destination = functional family / Exemplars gazetteer",
    "> / Style Specimen gallery / drop. Article-level assignment is in `docs/outline.md`.",
    "> Generated by `research/build_coverage.py`. [synthesis]",
    "",
    "Disposition: `merge` folds the note into its destination; `drop` = not carried",
    "(rationale required). `split` notes (feeding 2+ articles) are recorded at",
    "article level in the outline.",
    "",
    "| note path | disposition | destination | rationale |",
    "|-----------|-------------|-------------|-----------|",
    *rows, "",
    "## Destination tallies",
    "",
    *[f"- {d}: {counts[d]}" for d in sorted(counts)],
    f"- **total: {sum(counts.values())}**",
]
(pathlib.Path("docs/coverage-map.md")).write_text("\n".join(out) + "\n")
print(f"Wrote docs/coverage-map.md with {len(rows)} notes.")
for d in sorted(counts):
    print(f"  {counts[d]:3d}  {d}")
