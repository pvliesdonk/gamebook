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
  -- A Sources/Referenced-by section runs from its level-2 header up to the
  -- next *boundary*: another header, a Div, or a part. We must stop there so
  -- the drop never eats the following chapter's title, silhouette, or the
  -- part divider that begins the next family.
  local function is_boundary(b)
    return b.t == "Header" or b.t == "Div"
      or (b.t == "RawBlock" and b.text ~= nil and b.text:find("#part", 1, true) ~= nil)
  end
  local kept, i = {}, 1
  while i <= #doc.blocks do
    local b = doc.blocks[i]
    if b.t == "Header" and b.level == 2 and DROP[stringify(b)] then
      i = i + 1
      while i <= #doc.blocks and not is_boundary(doc.blocks[i]) do i = i + 1 end
    else
      kept[#kept + 1] = b
      i = i + 1
    end
  end
  doc.blocks = kept

  -- 1b. Mark each level-1 heading for the print theme. The article counter is
  -- stepped here (before the heading) so the opener and the page furniture all
  -- see it; primer chapters (the `.primer` class) get a flag instead and are
  -- never numbered. Front/back-matter chapters step the counter harmlessly
  -- (it is reset at the first family part and never shown for them).
  local marked = {}
  for _, b in ipairs(doc.blocks) do
    if b.t == "Header" and b.level == 1 then
      local is_primer = false
      for _, c in ipairs(b.classes) do if c == "primer" then is_primer = true end end
      if is_primer then
        marked[#marked + 1] = pandoc.RawBlock("typst", "#fg-primer-flag.update(true)")
        marked[#marked + 1] = b
        marked[#marked + 1] = pandoc.RawBlock("typst", "#fg-primer-flag.update(false)")
      else
        marked[#marked + 1] = pandoc.RawBlock("typst", "#fg-article.step()")
        marked[#marked + 1] = b
      end
    else
      marked[#marked + 1] = b
    end
  end
  doc.blocks = marked

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
