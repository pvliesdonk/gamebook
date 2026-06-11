-- ============================================================
-- field-guide.lua — Field Guide design-system rendering (HTML)
-- Renders four brand affordances that live in the source as plain
-- markdown, so the prose stays clean and Vale-checkable:
--   1. provenance marks  [corpus]/[researched]/[synthesis] -> mono tags
--   2. the Silhouette    *Silhouette: ...*  -> .fg-silhouette lead
--   3. media badges       media: frontmatter -> neutral-ink pill row
--   4. per-family accent  family: frontmatter -> data-family on <main>
-- HTML only; every other format passes through untouched (the Typst
-- face gets the same affordances from its own template).
-- ============================================================

if not (FORMAT:match('html')) then
  return {}
end

local stringify = pandoc.utils.stringify

local FAMILY_ID = {
  ["Structure & Pacing"]            = "structure",
  ["Puzzles, Clues & Information"]  = "puzzles",
  ["Story, Character & Voice"]      = "story",
  ["Players & Social Dynamics"]     = "players",
  ["Space, Props & Materiality"]    = "space",
  ["Systems & Mechanics"]           = "systems",
}

local MEDIA = {
  ["interactive-fiction"] = { label = "Interactive Fiction", icon = "if" },
  ["live-game"]           = { label = "Live Game",           icon = "live" },
  ["tabletop"]            = { label = "Tabletop",            icon = "tabletop" },
  ["puzzle-hunt"]         = { label = "Puzzle-hunt",         icon = "hunt" },
}

-- Phosphor Thin glyphs (MIT), viewBox 0 0 256 256, currentColor fill.
local ICON = {
  ["if"]   = '<path d="M232,52H160a36,36,0,0,0-32,19.54A36,36,0,0,0,96,52H24a4,4,0,0,0-4,4V200a4,4,0,0,0,4,4H96a28,28,0,0,1,28,28,4,4,0,0,0,8,0,28,28,0,0,1,28-28h72a4,4,0,0,0,4-4V56A4,4,0,0,0,232,52ZM96,196H28V60H96a28,28,0,0,1,28,28V209.4A35.94,35.94,0,0,0,96,196Zm132,0H160a35.94,35.94,0,0,0-28,13.41V88a28,28,0,0,1,28-28h68Z"/>',
  live     = '<path d="M220,48v55.78c0,35-9.4,68-26.48,92.92C176.13,222.05,152.86,236,128,236s-48.13-13.95-65.52-39.29C45.4,171.83,36,138.83,36,103.79V48a12,12,0,0,1,16.34-11.2C66.66,42.38,95.53,51.7,128,51.7s61.34-9.32,75.66-14.88A12,12,0,0,1,220,48Zm-8,0a4,4,0,0,0-5.44-3.74C191.72,50,161.77,59.7,128,59.7S64.28,50,49.44,44.27A4.14,4.14,0,0,0,48,44a3.87,3.87,0,0,0-2.23.7A4,4,0,0,0,44,48v55.77C44,172.28,81.68,228,128,228s84-55.72,84-124.21Z"/>',
  tabletop = '<path d="M192,36H64A28,28,0,0,0,36,64V192a28,28,0,0,0,28,28H192a28,28,0,0,0,28-28V64A28,28,0,0,0,192,36Zm20,156a20,20,0,0,1-20,20H64a20,20,0,0,1-20-20V64A20,20,0,0,1,64,44H192a20,20,0,0,1,20,20ZM100,92a8,8,0,1,1-8-8A8,8,0,0,1,100,92Zm36,36a8,8,0,1,1-8-8A8,8,0,0,1,136,128Zm36-36a8,8,0,1,1-8-8A8,8,0,0,1,172,92Zm-72,72a8,8,0,1,1-8-8A8,8,0,0,1,100,164Zm72,0a8,8,0,1,1-8-8A8,8,0,0,1,172,164Z"/>',
  hunt     = '<path d="M231.22,148.09,189.6,53.41a3.94,3.94,0,0,0-.83-1.22,28,28,0,0,0-39.6,0A4,4,0,0,0,148,55V84H108V55a4,4,0,0,0-1.17-2.83,28,28,0,0,0-39.6,0,3.94,3.94,0,0,0-.83,1.22L24.78,148.09A44,44,0,1,0,108,168V92h40v76a44,44,0,1,0,83.22-19.91ZM64,204a36,36,0,1,1,36-36A36,36,0,0,1,64,204Zm0-80a43.78,43.78,0,0,0-22.66,6.3L73.4,57.35a20,20,0,0,1,26.6-.59v86A44,44,0,0,0,64,124Zm92-67.23a20,20,0,0,1,26.6.59l32.06,72.94A43.92,43.92,0,0,0,156,142.74ZM192,204a36,36,0,1,1,36-36A36,36,0,0,1,192,204Z"/>',
}

-- 1 · provenance marks -----------------------------------------------------
function Str(el)
  local kind = el.text:match("^%[(corpus)%]$")
            or el.text:match("^%[(researched)%]$")
            or el.text:match("^%[(synthesis)%]$")
  if kind then
    return pandoc.RawInline("html",
      '<span class="prov prov-' .. kind .. '">[' .. kind .. ']</span>')
  end
  return nil
end

-- 2 · the Silhouette -------------------------------------------------------
local silhouette_done = false
function Para(el)
  if silhouette_done then return nil end
  if stringify(el):match("^%s*Silhouette:") then
    silhouette_done = true
    return pandoc.Div(el, pandoc.Attr("", { "fg-silhouette" }))
  end
  return nil
end

-- 3 + 4 · media badges and per-family accent scope -------------------------
local function media_row(meta)
  if not meta.media then return nil end
  local pills = {}
  for _, v in ipairs(meta.media) do
    local m = MEDIA[stringify(v)]
    if m then
      local svg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor" aria-hidden="true">'
        .. (ICON[m.icon] or "") .. '</svg>'
      pills[#pills + 1] = '<span class="media-badge">' .. svg .. m.label .. '</span>'
    end
  end
  if #pills == 0 then return nil end
  return pandoc.RawBlock("html",
    '<div class="media-badges" aria-label="Media">' .. table.concat(pills) .. '</div>')
end

local function family_script(meta)
  if not meta.family then return nil end
  local id = FAMILY_ID[stringify(meta.family)]
  if not id then return nil end
  -- Scope the accent to this article's <main> only; the masthead/sidebar
  -- keep the amber brand spine. No-JS readers fall back to amber.
  return pandoc.RawBlock("html",
    '<script>(function(){var s=document.currentScript,'
    .. 'm=s&&s.closest?s.closest("main"):null;'
    .. '(m||document.querySelector("main"))&&(m||document.querySelector("main"))'
    .. '.setAttribute("data-family","' .. id .. '");})();</script>')
end

function Pandoc(doc)
  local badges = media_row(doc.meta)
  if badges then table.insert(doc.blocks, 1, badges) end
  local fam = family_script(doc.meta)
  if fam then doc.blocks[#doc.blocks + 1] = fam end
  return doc
end
