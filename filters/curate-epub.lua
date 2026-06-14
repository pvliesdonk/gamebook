-- ============================================================
-- curate-epub.lua (EPUB only). Makes the EPUB match the curated PDF:
--   1. drops the chapters flagged pdf:false (the keys; titles in
--      filters/_pdf-exclude.txt, written by scripts/curate.py);
--   2. drops web-only blocks (the credits "Research basis", the index Keys
--      note). Quarto treats EPUB like HTML for content-visibility, so those
--      `content-hidden unless-format="html"` blocks are NOT hidden; it strips
--      the content-hidden class but leaves the Div, so we match the surviving
--      directive attribute or the "Research basis" heading.
-- The HTML wiki keeps everything (this filter is epub-only).
-- ============================================================
if not FORMAT:match("epub") then
  return {}
end

local stringify = pandoc.utils.stringify

-- 2. Web-only Divs. Pandoc applies element filters recursively, so this catches
-- them wherever they sit.
function Div(el)
  if el.attributes["unless-format"] or el.attributes["when-format"]
      or el.attributes["data-unless-format"] or el.attributes["data-when-format"] then
    return {}
  end
  -- the print specimen-line tags (scripts/specimen_tags.py) are Typst-only
  -- apparatus rendered by field-guide.lua; their custom attributes (effect,
  -- problem, media, family) are invalid XHTML, so drop them from the EPUB.
  for _, c in ipairs(el.classes) do
    if c == "specimen-line" then
      return {}
    end
  end
  local first = el.content and el.content[1] or nil
  if first and first.t == "Header" and first.level == 2 and stringify(first) == "Research basis" then
    return {}
  end
  -- the index "How to Use" page's web-only Keys note (no heading, no surviving
  -- attribute), matched by its distinctive phrasing
  if stringify(el):find("route you to articles", 1, true) then
    return {}
  end
  return nil
end

-- 1. Drop the pdf:false chapters (run after the Div pass, on the merged book).
function Pandoc(doc)
  local set, f = {}, io.open("filters/_pdf-exclude.txt", "r")
  if not f then return doc end
  for line in f:lines() do
    local t = line:gsub("^%s+", ""):gsub("%s+$", "")
    if t ~= "" then set[t] = true end
  end
  f:close()
  if next(set) == nil then return doc end
  local kept, i = {}, 1
  while i <= #doc.blocks do
    local b = doc.blocks[i]
    if b.t == "Header" and b.level == 1 and set[stringify(b)] then
      i = i + 1
      while i <= #doc.blocks and not (doc.blocks[i].t == "Header" and doc.blocks[i].level == 1) do
        i = i + 1
      end
    else
      kept[#kept + 1] = b
      i = i + 1
    end
  end
  doc.blocks = kept
  return doc
end
