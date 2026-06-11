-- ============================================================
-- field-guide.lua (Typst / print) — marks structural elements in
-- the source so the print theme can style them:
--   * injects the per-chapter family state (#fg-set-family)
--   * wraps the Silhouette line   -> #fg-silhouette[...]
--   * wraps the lead paragraph    -> #fg-lead[...]  (drop cap)
-- Typst only; other formats pass through untouched.
-- ============================================================

if not FORMAT:match("typst") then
  return {}
end

local stringify = pandoc.utils.stringify

local FAMILY_ID = {
  ["Structure & Pacing"]           = "structure",
  ["Puzzles, Clues & Information"] = "puzzles",
  ["Story, Character & Voice"]     = "story",
  ["Players & Social Dynamics"]    = "players",
  ["Space, Props & Materiality"]   = "space",
  ["Systems & Mechanics"]          = "systems",
}

local function wrap(block, open, close)
  table.insert(block.content, 1, pandoc.RawInline("typst", open))
  table.insert(block.content, pandoc.RawInline("typst", close))
end

function Pandoc(doc)
  -- locate the Silhouette paragraph and the lead paragraph after it
  local sil
  for i, b in ipairs(doc.blocks) do
    if b.t == "Para" and stringify(b):match("^%s*Silhouette:") then sil = i; break end
  end
  if sil then
    wrap(doc.blocks[sil], "#fg-silhouette[", "]")
    for i = sil + 1, #doc.blocks do
      if doc.blocks[i].t == "Para" then
        wrap(doc.blocks[i], "#fg-lead[", "]")
        break
      end
    end
  end
  -- per-chapter family state
  local fam = doc.meta.family and FAMILY_ID[stringify(doc.meta.family)]
  if fam then
    table.insert(doc.blocks, 1, pandoc.RawBlock("typst", '#fg-set-family("' .. fam .. '")'))
  end
  return doc
end
