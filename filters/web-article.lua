-- ============================================================
-- web-article.lua (HTML only). Builds the design-system ArticleView for every
-- article/exemplar page (those carrying a `family`). It:
--   1. tags <body> with `family-<key>` so the accent re-skins (title included);
--   2. lays the content into a two-column grid: a reading well + a sticky right
--      margin holding the illustration plate (placeholder until art exists);
--   3. marks the lead paragraph for the drop cap;
--   4. renders the media badges (icon channel) under the title.
-- This is the web counterpart of the print field-guide.lua. Front/back matter
-- and the Gazetteer (no `family`) are left to Quarto's default layout.
-- ============================================================
if not FORMAT:match("html") then
  return {}
end

local stringify = pandoc.utils.stringify

local NAME2KEY = {
  ["Structure & Pacing"] = "structure",
  ["Puzzles, Clues & Information"] = "puzzles",
  ["Story, Character & Voice"] = "story",
  ["Players & Social Dynamics"] = "players",
  ["Space, Props & Materiality"] = "space",
  ["Systems & Mechanics"] = "systems",
}
local MEDIA = {
  ["interactive-fiction"] = "Interactive Fiction",
  ["live-game"] = "Live Game",
  ["tabletop"] = "Tabletop",
  ["puzzle-hunt"] = "Puzzle-hunt",
}

-- the Silhouette/Profile lead line: a paragraph opening with an emphasised
-- "Silhouette:" / "Profile:" run (it may carry a trailing xref anchor span).
local function is_silhouette(b)
  if b.t ~= "Para" or not b.content[1] or b.content[1].t ~= "Emph" then
    return false
  end
  local t = stringify(b.content[1])
  return t:match("^%s*Silhouette:") or t:match("^%s*Profile:")
end

-- strip the "Silhouette:" / "Profile:" label from the emphasised run
local function strip_label(emph)
  local inl = emph.content
  while inl[1] and inl[1].t == "Space" do table.remove(inl, 1) end
  if inl[1] and inl[1].t == "Str" then
    inl[1].text = inl[1].text:gsub("^Silhouette:$", ""):gsub("^Profile:$", "")
    if inl[1].text == "" then
      table.remove(inl, 1)
      while inl[1] and inl[1].t == "Space" do table.remove(inl, 1) end
    end
  end
end

local function add_body_class(meta, cls)
  local bc = meta["body-classes"]
  if bc == nil then
    meta["body-classes"] = pandoc.MetaInlines({ pandoc.Str(cls) })
  else
    meta["body-classes"] = pandoc.MetaInlines({ pandoc.Str(stringify(bc) .. " " .. cls) })
  end
  return meta
end

function Pandoc(doc)
  local fam = doc.meta.family and stringify(doc.meta.family) or nil
  local key = fam and NAME2KEY[fam] or nil
  if not key then
    return doc
  end

  -- 1. body accent class (covers the title block too)
  doc.meta = add_body_class(doc.meta, "family-" .. key .. " fg-article-page")

  -- 2. media badges (icon channel)
  local badges = {}
  if doc.meta.media then
    for _, mm in ipairs(doc.meta.media) do
      local code = stringify(mm)
      badges[#badges + 1] = '<span class="fg-media" data-media="' .. code .. '">'
        .. (MEDIA[code] or code) .. "</span>"
    end
  end

  -- 3. walk the blocks: strip + mark the silhouette, capture the plate caption,
  --    drop-cap the first prose paragraph after it.
  local caption, marked, seen_sil, dropped = "", {}, false, false
  for _, b in ipairs(doc.blocks) do
    if not seen_sil and is_silhouette(b) then
      strip_label(b.content[1])
      caption = stringify(b.content[1])
      marked[#marked + 1] = pandoc.Div({ b }, pandoc.Attr("", { "fg-silhouette" }))
      seen_sil = true
    elseif seen_sil and not dropped and b.t == "Para" then
      marked[#marked + 1] = pandoc.Div({ b }, pandoc.Attr("", { "fg-lead" }))
      dropped = true
    else
      marked[#marked + 1] = b
    end
  end

  -- 4. compose the two-column grid: reading well + sticky plate margin
  local aside = pandoc.RawBlock("html", table.concat({
    '<aside class="fg-margin">',
    '<figure class="fg-plate fg-plate--placeholder">',
    '<div class="fg-plate-frame"><span class="fg-plate-glyph">\u{2042}</span>',
    '<span class="fg-plate-note">PLATE \u{00B7} ENGRAVING TO COME</span></div>',
    (caption ~= "" and ('<figcaption class="fg-plate-cap">' .. caption .. "</figcaption>") or ""),
    "</figure>",
    "</aside>",
  }, ""))
  local well = pandoc.Div(marked, pandoc.Attr("", { "fg-well" }))
  local grid = pandoc.Div({ well, aside }, pandoc.Attr("", { "fg-article-grid" }, { ["data-family"] = key }))

  local out = {}
  if #badges > 0 then
    out[#out + 1] = pandoc.RawBlock("html", '<div class="fg-media-row">' .. table.concat(badges, "") .. "</div>")
  end
  out[#out + 1] = grid
  -- Quarto reads body-classes from the source frontmatter, not filter-set meta,
  -- so apply the accent + article-page classes to <body> client-side (covers the
  -- title block, which sits outside the content grid).
  out[#out + 1] = pandoc.RawBlock("html",
    "<script>document.body.classList.add('fg-article-page','family-" .. key .. "');</script>")
  doc.blocks = out
  return doc
end
