-- ============================================================
-- web-family.lua (HTML only). Wraps the document body in a Div carrying
-- data-family="<key>" from the chapter's `family` frontmatter, so the web theme
-- (theme/field-guide-web.scss) re-skins the amber accent to that family's ink
-- (design-system/tokens/families.css). For HTML the book renders each chapter
-- separately, so per-document frontmatter is available here. No-op for other
-- formats and for chapters without a recognised family (front/back matter).
-- ============================================================
if not FORMAT:match("html") then
  return {}
end

local NAME2KEY = {
  ["Structure & Pacing"] = "structure",
  ["Puzzles, Clues & Information"] = "puzzles",
  ["Story, Character & Voice"] = "story",
  ["Players & Social Dynamics"] = "players",
  ["Space, Props & Materiality"] = "space",
  ["Systems & Mechanics"] = "systems",
}

function Pandoc(doc)
  local fam = doc.meta.family and pandoc.utils.stringify(doc.meta.family) or nil
  local key = fam and NAME2KEY[fam] or nil
  if key then
    doc.blocks = { pandoc.Div(doc.blocks, pandoc.Attr("", {}, { ["data-family"] = key })) }
  end
  return doc
end
