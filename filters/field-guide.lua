-- ============================================================
-- field-guide.lua (Typst / print). NOTE: for a Quarto typst BOOK this
-- filter runs once over the WHOLE merged document (all chapters), so it
-- must handle chapter boundaries itself.
--   * drops the Sources and "Referenced by" sections (web artifacts;
--     a consolidated bibliography appendix is issue #61)
--   * the Silhouette line  -> #fg-silhouette[...] (label stripped)
--   * the lead paragraph   -> #fg-lead[...] (drop cap)
-- Family colouring is handled by the part dividers (typst-show.typ),
-- not here. Other formats pass through untouched.
-- ============================================================

if not FORMAT:match("typst") then
  return {}
end

local stringify = pandoc.utils.stringify
local DROP = { ["Sources"] = true, ["Referenced by"] = true }

local function wrap(inlines, open, close)
  table.insert(inlines, 1, pandoc.RawInline("typst", open))
  table.insert(inlines, pandoc.RawInline("typst", close))
end

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
  -- 1. Drop the Sources / Referenced-by sections. `dropping` resets at any
  -- chapter title (level 1) or non-drop level-2 header, so it never bleeds
  -- past a chapter boundary into the next article's title/silhouette.
  local kept, dropping = {}, false
  for _, b in ipairs(doc.blocks) do
    if b.t == "Header" and b.level <= 2 then
      dropping = (b.level == 2) and (DROP[stringify(b)] == true)
    end
    if not dropping then kept[#kept + 1] = b end
  end
  doc.blocks = kept

  -- 2. Wrap every Silhouette (label stripped) and its lead paragraph.
  local n = #doc.blocks
  for i = 1, n do
    local b = doc.blocks[i]
    if b.t == "Para" and stringify(b):match("^%s*Silhouette:") then
      b.content = strip_label(b.content)
      wrap(b.content, "#fg-silhouette[", "]")
      for j = i + 1, n do
        if doc.blocks[j].t == "Para" then
          wrap(doc.blocks[j].content, "#fg-lead[", "]")
          break
        end
      end
    end
  end
  return doc
end
