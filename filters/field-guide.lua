-- ============================================================
-- field-guide.lua (Typst / print). NOTE: for a Quarto typst BOOK this
-- filter runs once over the WHOLE merged document (all chapters), so it
-- must handle chapter boundaries itself.
--   * drops chapters flagged `pdf: false` (curated PDF, decision #17; the
--     HTML wiki keeps them since this filter is typst-only). The excluded
--     titles are listed in filters/_pdf-exclude.txt by scripts/curate.py.
--   * drops the legacy "Sources" and "Referenced by" sections (web artifacts).
--     Per-family credits now live in content/credits/<family>.qmd: their "Works
--     discussed" and "References" print, while the "Research basis" is web-only
--     (a content-hidden block Quarto strips for typst). Those credits pages are
--     unnumbered chapters, so they skip the article counter (see step 1b).
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

-- Titles to exclude from the curated PDF (one per line; written by curate.py).
-- Missing file (e.g. a build without the pre-render) -> exclude nothing.
local function read_excluded()
  local set, f = {}, io.open("filters/_pdf-exclude.txt", "r")
  if not f then return set end
  for line in f:lines() do
    local t = line:gsub("^%s+", ""):gsub("%s+$", "")
    if t ~= "" then set[t] = true end
  end
  f:close()
  return set
end

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

-- A part divider is a Div with class "quarto-book-part" (Quarto turns it into a
-- `#part[...]` call later, in the typst writer; at filter time it is still a Div).
-- Chapters are flat level-1 headings between these part Divs.
local function is_part_div(b)
  if b.t ~= "Div" then return false end
  for _, c in ipairs(b.classes) do if c == "quarto-book-part" then return true end end
  return false
end

function Pandoc(doc)
  -- 0. Curated PDF (decision #17): drop whole chapters flagged `pdf: false`.
  -- A chapter runs from its level-1 heading to the next chapter boundary (the next
  -- level-1 heading or the next part Div); level-2 sections and callout Divs inside
  -- it do NOT end it. The TOC and article numbering follow automatically, since
  -- both derive from the level-1 headings that remain.
  local excluded = read_excluded()
  if next(excluded) ~= nil then
    local function chapter_boundary(b)
      return (b.t == "Header" and b.level == 1) or is_part_div(b)
    end
    local kept0, i = {}, 1
    while i <= #doc.blocks do
      local b = doc.blocks[i]
      if b.t == "Header" and b.level == 1 and excluded[stringify(b)] then
        i = i + 1
        while i <= #doc.blocks and not chapter_boundary(doc.blocks[i]) do i = i + 1 end
      else
        kept0[#kept0 + 1] = b
        i = i + 1
      end
    end
    doc.blocks = kept0

    -- Drop any part divider left empty by those chapter drops: a part Div with no
    -- level-1 heading before the next part Div or the end of the book.
    local kept1, j = {}, 1
    while j <= #doc.blocks do
      local b = doc.blocks[j]
      if is_part_div(b) then
        local k, has_chapter = j + 1, false
        while k <= #doc.blocks and not is_part_div(doc.blocks[k]) do
          if doc.blocks[k].t == "Header" and doc.blocks[k].level == 1 then
            has_chapter = true
            break
          end
          k = k + 1
        end
        if has_chapter then kept1[#kept1 + 1] = b end
      else
        kept1[#kept1 + 1] = b
      end
      j = j + 1
    end
    doc.blocks = kept1
  end

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
      local is_primer, is_unnumbered = false, false
      for _, c in ipairs(b.classes) do
        if c == "primer" then is_primer = true end
        if c == "unnumbered" then is_unnumbered = true end
      end
      if is_primer then
        marked[#marked + 1] = pandoc.RawBlock("typst", "#fg-primer-flag.update(true)")
        marked[#marked + 1] = b
        marked[#marked + 1] = pandoc.RawBlock("typst", "#fg-primer-flag.update(false)")
      elseif is_unnumbered then
        -- Back-matter reference within a family (the per-family Works & References
        -- pages): rendered but never numbered, so the article counter and the
        -- glossary's 1..116 stay aligned. The flag tells the opener and side tab
        -- to show no (stale) article number.
        marked[#marked + 1] = pandoc.RawBlock("typst", "#fg-unnumbered.update(true)")
        marked[#marked + 1] = b
        marked[#marked + 1] = pandoc.RawBlock("typst", "#fg-unnumbered.update(false)")
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

  -- 3. Render the injected `.specimen-line` divs (scripts/specimen_tags.py) as
  -- the printed specimen line. Each carries effect/problem/media/family attrs and
  -- sits between the silhouette and the lead; replace it with a #fg-tags() call.
  local function tags_raw(div)
    local a = div.attributes or {}
    local function q(s) return (s == nil or s == "") and "none" or ('"' .. s .. '"') end
    local media = "()"
    if a.media and a.media ~= "" then
      local items = {}
      for m in a.media:gmatch("[^,%s]+") do items[#items + 1] = '"' .. m .. '"' end
      media = "(" .. table.concat(items, ", ") .. (#items == 1 and ",)" or ")")
    end
    return pandoc.RawBlock("typst",
      "#fg-tags(effect: " .. q(a.effect) .. ", problem: " .. q(a.problem)
      .. ", media: " .. media .. ", family: " .. q(a.family) .. ")")
  end
  local out = {}
  for _, b in ipairs(doc.blocks) do
    local is_tags = false
    if b.t == "Div" then
      for _, c in ipairs(b.classes) do if c == "specimen-line" then is_tags = true end end
    end
    out[#out + 1] = is_tags and tags_raw(b) or b
  end
  doc.blocks = out

  return doc
end
