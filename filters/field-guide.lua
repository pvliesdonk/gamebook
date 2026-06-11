-- ============================================================
-- field-guide.lua (Typst / print) — prepares the source for the
-- print theme:
--   * injects the per-chapter family state (#fg-set-family)
--   * the Silhouette line  -> #fg-silhouette[...] (label stripped)
--   * the lead paragraph   -> #fg-lead[...] (drop cap)
--   * drops the Sources and "Referenced by" sections (web artifacts;
--     a consolidated bibliography appendix is a separate, later job)
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

-- print-only sections that should not appear in the bound book
local DROP_SECTIONS = { ["Sources"] = true, ["Referenced by"] = true }

local function wrap(inlines, open, close)
  table.insert(inlines, 1, pandoc.RawInline("typst", open))
  table.insert(inlines, pandoc.RawInline("typst", close))
end

-- strip a leading "Silhouette:" label from the silhouette line, whether the
-- line is wholly emphasised or the label is a bare leading Str
local function strip_label(inlines)
  if #inlines >= 1 and inlines[1].t == "Emph" then
    inlines[1].content = strip_label(inlines[1].content)
    return inlines
  end
  if #inlines >= 1 and inlines[1].t == "Str" then
    if inlines[1].text == "Silhouette:" then
      table.remove(inlines, 1)
      if inlines[1] and inlines[1].t == "Space" then table.remove(inlines, 1) end
    else
      inlines[1].text = inlines[1].text:gsub("^Silhouette:%s*", "")
    end
  end
  return inlines
end

function Pandoc(doc)
  -- 1. drop the Sources / Referenced-by sections (level-2 to next level-2)
  local kept, dropping = {}, false
  for _, b in ipairs(doc.blocks) do
    if b.t == "Header" and b.level == 2 then
      dropping = DROP_SECTIONS[stringify(b)] == true
    end
    if not dropping then kept[#kept + 1] = b end
  end
  doc.blocks = kept

  -- 2. silhouette (label stripped) + lead drop cap
  local sil
  for i, b in ipairs(doc.blocks) do
    if b.t == "Para" and stringify(b):match("^%s*Silhouette:") then sil = i; break end
  end
  if sil then
    doc.blocks[sil].content = strip_label(doc.blocks[sil].content)
    wrap(doc.blocks[sil].content, "#fg-silhouette[", "]")
    for i = sil + 1, #doc.blocks do
      if doc.blocks[i].t == "Para" then
        wrap(doc.blocks[i].content, "#fg-lead[", "]")
        break
      end
    end
  end

  -- 3. per-chapter family state
  local fam = doc.meta.family and FAMILY_ID[stringify(doc.meta.family)]
  if fam then
    table.insert(doc.blocks, 1, pandoc.RawBlock("typst", '#fg-set-family("' .. fam .. '")'))
  end
  return doc
end
