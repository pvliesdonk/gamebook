-- ============================================================
-- strip-provenance.lua (ALL formats). Provenance markers ([corpus],
-- [researched], [synthesis]) are internal tracking (decision #15): they stay in
-- the source as the verification record but must never appear in any rendered
-- output. Pandoc parses each bare tag as a single Str token, so we drop those
-- tokens (and the space that preceded them) from every inline sequence. A tag
-- fused to punctuation (e.g. "[corpus].") keeps the punctuation.
-- Registered at the top level of _quarto.yml so it runs for HTML, Typst and EPUB.
-- ============================================================

local function strip(s)
  s = s:gsub("%[corpus%]", "")
  s = s:gsub("%[researched%]", "")
  s = s:gsub("%[synthesis%]", "")
  return s
end

function Inlines(inlines)
  local out = {}
  for _, el in ipairs(inlines) do
    if el.t == "Str" then
      local t = strip(el.text)
      if t == "" then
        -- the token was nothing but a tag: drop it and its leading space
        if #out > 0 and out[#out].t == "Space" then table.remove(out) end
      else
        el.text = t
        out[#out + 1] = el
      end
    else
      out[#out + 1] = el
    end
  end
  return out
end
