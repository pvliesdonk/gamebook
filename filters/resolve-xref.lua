-- ============================================================
-- resolve-xref.lua (Typst + EPUB only). Resolves inter-article cross-links.
--
-- Quarto rewrites inter-document `.qmd` links for HTML but leaves cross-
-- directory relative links raw for single-file formats (quarto-cli#13287), so
-- they become dead links in the PDF and EPUB. This filter rewrites every
-- `*.qmd` link target to `#xref-<stem>` (the target file's basename), which the
-- Typst writer emits as `link(<xref-stem>)` and the EPUB writer resolves to the
-- right chapter file + anchor.
--
-- The matching anchor is injected at source by scripts/xref_anchors.py, which
-- appends `[]{#xref-<stem>}` to each article/exemplar Silhouette/Profile line
-- (both the link target and the anchor key off the file stem, so they stay in
-- step). The `xref-` prefix keeps these anchors in their own namespace so they
-- never collide with the chapter heading id Quarto already assigns from the
-- title slug (which would be a duplicate-label error in Typst when the slug
-- equals the stem). Frontmatter-titled chapters have no body heading to attach
-- to, which is why the anchor is injected in the source rather than here. The
-- HTML wiki is left to Quarto's own (working) resolver.
-- ============================================================
if not (FORMAT:match("typst") or FORMAT:match("epub")) then
  return {}
end

function Link(el)
  local path = el.target:match("^([^#]*%.qmd)$")
  if not path then
    return nil
  end
  local stem = path:match("([^/]+)%.qmd$")
  if stem then
    el.target = "#xref-" .. stem
  end
  return el
end
