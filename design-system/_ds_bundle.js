/* @ds-bundle: {"format":3,"namespace":"FieldGuideDesignSystem_df43d1","components":[{"name":"Backlinks","sourcePath":"components/content/Backlinks.jsx"},{"name":"EntryCard","sourcePath":"components/content/EntryCard.jsx"},{"name":"Silhouette","sourcePath":"components/content/Silhouette.jsx"},{"name":"StatBlock","sourcePath":"components/content/StatBlock.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"MediaBadge","sourcePath":"components/core/MediaBadge.jsx"},{"name":"ProvenanceMark","sourcePath":"components/core/ProvenanceMark.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Callout","sourcePath":"components/feedback/Callout.jsx"},{"name":"FilterChip","sourcePath":"components/forms/FilterChip.jsx"},{"name":"SearchInput","sourcePath":"components/forms/SearchInput.jsx"},{"name":"Icon","sourcePath":"components/media/Icon.jsx"},{"name":"IllustrationPlate","sourcePath":"components/media/IllustrationPlate.jsx"}],"sourceHashes":{"components/content/Backlinks.jsx":"eb5c41644d5a","components/content/EntryCard.jsx":"aefa16710e24","components/content/Silhouette.jsx":"d09a51ef1b4a","components/content/StatBlock.jsx":"b6534133ef5e","components/core/Button.jsx":"1400ef99110c","components/core/MediaBadge.jsx":"aae8e4be5343","components/core/ProvenanceMark.jsx":"f6bd775e1ab8","components/core/Tag.jsx":"a6c3d2d97497","components/feedback/Callout.jsx":"a2fa5fd8fc3f","components/forms/FilterChip.jsx":"c99224fe182d","components/forms/SearchInput.jsx":"948c653438bb","components/media/Icon.jsx":"9315eddc8e24","components/media/IllustrationPlate.jsx":"0785072637d6","ui_kits/print/PrintSpread.jsx":"01c3623aa9dc","ui_kits/wiki/ArticleView.jsx":"cad8efbdbd91","ui_kits/wiki/BrowseView.jsx":"82af9a4c4db5","ui_kits/wiki/PartView.jsx":"1ede6f579b20","ui_kits/wiki/WikiShell.jsx":"01184be3ff41","ui_kits/wiki/data.js":"d798c52beee6"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.FieldGuideDesignSystem_df43d1 = window.FieldGuideDesignSystem_df43d1 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/content/Silhouette.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Silhouette — the italic one-line "jizz" that opens every entry: the
 * shape of the idea recognised at a glance, before any detail. Sits
 * directly under the plate title, above the body.
 */
function Silhouette({
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("p", _extends({
    style: {
      fontFamily: 'var(--font-subhead)',
      fontStyle: 'italic',
      fontSize: 'var(--text-lg)',
      lineHeight: 1.32,
      color: 'var(--ink-soft)',
      margin: '0 0 var(--space-5)',
      maxWidth: 'var(--measure)'
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Silhouette });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Silhouette.jsx", error: String((e && e.message) || e) }); }

// components/content/StatBlock.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * StatBlock — the exemplar field-record: a titled specimen with a
 * mono key/value table of taxonomic data (medium, year, designer,
 * mechanism…). Used on exemplar/gazetteer entries. Each row is a
 * { label, value } pair.
 */
function StatBlock({
  title,
  subtitle,
  media,
  rows = [],
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-strong)',
      borderRadius: 'var(--radius-md)',
      overflow: 'hidden',
      maxWidth: 340
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '14px 16px 12px',
      borderBottom: '2px solid var(--rule-strong)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-subhead)',
      fontSize: 'var(--text-lg)',
      fontWeight: 700,
      color: 'var(--ink)',
      lineHeight: 1.2
    }
  }, title), subtitle && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-subhead)',
      fontStyle: 'italic',
      fontSize: 13,
      color: 'var(--ink-muted)',
      marginTop: 3
    }
  }, subtitle)), /*#__PURE__*/React.createElement("table", {
    style: {
      margin: 0,
      width: '100%',
      borderCollapse: 'collapse'
    }
  }, /*#__PURE__*/React.createElement("tbody", null, rows.map((r, i) => /*#__PURE__*/React.createElement("tr", {
    key: i
  }, /*#__PURE__*/React.createElement("td", {
    style: {
      fontFamily: 'var(--font-label)',
      fontSize: 10,
      fontWeight: 600,
      letterSpacing: '0.07em',
      textTransform: 'uppercase',
      color: 'var(--text-faint)',
      padding: '8px 14px',
      width: '38%',
      verticalAlign: 'top',
      borderBottom: i === rows.length - 1 ? 'none' : '1px solid var(--border-hairline)'
    }
  }, r.label), /*#__PURE__*/React.createElement("td", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      color: 'var(--ink-soft)',
      padding: '8px 14px',
      letterSpacing: '0.01em',
      lineHeight: 1.4,
      borderBottom: i === rows.length - 1 ? 'none' : '1px solid var(--border-hairline)'
    }
  }, r.value))))));
}
Object.assign(__ds_scope, { StatBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/StatBlock.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Button — the field guide's primary action control.
 * Crisp corners, Franklin label, restrained. Amber fill is the
 * one loud variant; most chrome uses quiet or ghost.
 */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  iconLeft = null,
  iconRight = null,
  onClick,
  type = 'button',
  ...rest
}) {
  const pad = {
    sm: '6px 12px',
    md: '9px 16px',
    lg: '12px 22px'
  }[size];
  const fs = {
    sm: 12,
    md: 13,
    lg: 14
  }[size];
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    fontFamily: 'var(--font-label)',
    fontWeight: 600,
    fontSize: fs,
    letterSpacing: '0.04em',
    textTransform: 'uppercase',
    lineHeight: 1,
    padding: pad,
    borderRadius: 'var(--radius-sm)',
    border: '1px solid transparent',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.45 : 1,
    transition: 'background var(--dur-fast) var(--ease-paper), color var(--dur-fast) var(--ease-paper), border-color var(--dur-fast) var(--ease-paper)',
    whiteSpace: 'nowrap'
  };
  const variants = {
    primary: {
      background: 'var(--amber)',
      color: 'var(--paper)',
      borderColor: 'var(--amber-deep)'
    },
    secondary: {
      background: 'var(--paper-pure)',
      color: 'var(--ink-soft)',
      borderColor: 'var(--border-strong)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--amber-ink)',
      borderColor: 'transparent'
    }
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    onClick: onClick,
    style: {
      ...base,
      ...variants[variant]
    },
    onMouseEnter: e => {
      if (disabled) return;
      if (variant === 'primary') e.currentTarget.style.background = 'var(--amber-deep)';
      if (variant === 'secondary') {
        e.currentTarget.style.background = 'var(--paper-warm)';
        e.currentTarget.style.borderColor = 'var(--ink-faint)';
      }
      if (variant === 'ghost') e.currentTarget.style.background = 'var(--amber-tint)';
    },
    onMouseLeave: e => {
      Object.assign(e.currentTarget.style, variants[variant]);
    }
  }, rest), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/ProvenanceMark.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const PROV = {
  corpus: {
    label: 'corpus',
    color: 'var(--prov-corpus)'
  },
  researched: {
    label: 'researched',
    color: 'var(--prov-researched)'
  },
  synthesis: {
    label: 'synthesis',
    color: 'var(--prov-synthesis)'
  }
};

/**
 * ProvenanceMark — the mono bracket-tag declaring where a claim comes
 * from: [corpus] (from the vault), [researched] (external source),
 * [synthesis] (author's own argument). The guide's honesty mechanism.
 */
function ProvenanceMark({
  kind = 'corpus',
  ...rest
}) {
  const p = PROV[kind] || PROV.corpus;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      letterSpacing: '0.02em',
      lineHeight: 1.3,
      padding: '2px 7px',
      borderRadius: 'var(--radius-xs)',
      border: '1px solid var(--border-hairline)',
      background: 'var(--paper-warm)',
      color: p.color,
      whiteSpace: 'nowrap',
      verticalAlign: 'baseline'
    }
  }, rest), "[", p.label, "]");
}
Object.assign(__ds_scope, { ProvenanceMark });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/ProvenanceMark.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Tag — a taxonomic label chip. The small-caps Franklin token used
 * for facets, mechanisms and topics. Quiet by default; `accent`
 * tints it amber for the active/selected state.
 */
function Tag({
  children,
  accent = false,
  size = 'md',
  ...rest
}) {
  const fs = size === 'sm' ? 10 : 11;
  const pad = size === 'sm' ? '2px 7px' : '3px 9px';
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      fontFamily: 'var(--font-label)',
      fontSize: fs,
      fontWeight: 600,
      letterSpacing: '0.07em',
      textTransform: 'uppercase',
      lineHeight: 1.4,
      padding: pad,
      borderRadius: 'var(--radius-xs)',
      border: '1px solid ' + (accent ? 'var(--amber-edge)' : 'var(--border-hairline)'),
      background: accent ? 'var(--amber-tint)' : 'var(--paper-warm)',
      color: accent ? 'var(--amber-ink)' : 'var(--text-muted)',
      whiteSpace: 'nowrap'
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Callout.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Callout — the field guide's three annotation voices, set as PRINTED
 * asides (never tinted docs admonitions). Two forms:
 *
 *   inline (default) — sits in the text column, each voice distinct:
 *     fieldnote : a penned run-in aside  — manicule, small-caps label, italic
 *     hazard    : a printed caution band — symmetric solid clay rules
 *     specimen  : a quiet text-first note — moss top-rule, "Specimen" kicker
 *   sidebar (sidebar) — a self-contained boxed aside for a PRINT margin
 *     or a screen rail: 2px voice top-rule + hairline box, label header.
 *
 * Plates live at article/primer level (use IllustrationPlate as a hero);
 * a specimen may OPT IN to a small inset plate via `plate`, but it is the
 * exception, not the rule — the specimen reads complete without one.
 *
 * `title`: for specimen, the specimen's name; for fieldnote/hazard, an
 * override of the run-in voice label.
 */
const VOICES = {
  fieldnote: {
    label: 'Field Note',
    ink: 'var(--slate-ink)',
    c: 'var(--slate)',
    edge: 'var(--slate-edge)',
    mark: '\u261E'
  },
  hazard: {
    label: 'Hazard',
    ink: 'var(--clay-ink)',
    c: 'var(--clay)',
    edge: 'var(--clay-edge)',
    mark: '\u2021'
  },
  specimen: {
    label: 'Specimen',
    ink: 'var(--moss-ink)',
    c: 'var(--moss)',
    edge: 'var(--moss-edge)',
    mark: '\u2042'
  }
};
function Rule({
  color
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: 0,
      borderTop: '2px solid ' + color
    },
    "aria-hidden": "true"
  });
}
function Callout({
  kind = 'specimen',
  title,
  plate = false,
  sidebar = false,
  children,
  ...rest
}) {
  const v = VOICES[kind] || VOICES.specimen;

  /* ---- SIDEBAR: boxed, self-contained — for print margins / rails ---- */
  if (sidebar) {
    return /*#__PURE__*/React.createElement("aside", _extends({
      style: {
        margin: 'var(--flow) 0',
        maxWidth: 'var(--measure-narrow)',
        background: 'var(--paper-pure)',
        border: '1px solid ' + v.edge,
        borderTop: '2px solid ' + v.c,
        borderRadius: 'var(--radius-xs)',
        padding: '13px 16px 15px',
        boxShadow: 'var(--shadow-plate)'
      }
    }, rest), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-label)',
        fontSize: 10.5,
        fontWeight: 700,
        letterSpacing: '0.09em',
        textTransform: 'uppercase',
        color: v.ink,
        marginBottom: 6
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: v.c,
        paddingRight: 4
      },
      "aria-hidden": "true"
    }, v.mark), title || v.label), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-serif)',
        fontSize: 14,
        lineHeight: 1.52,
        color: 'var(--ink-soft)'
      }
    }, children));
  }

  /* ---- INLINE: a penned run-in marginal aside ---- */
  if (kind === 'fieldnote') {
    return /*#__PURE__*/React.createElement("aside", _extends({
      style: {
        margin: 'var(--flow) 0',
        maxWidth: 'var(--measure-narrow)'
      }
    }, rest), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: 'var(--font-serif)',
        fontStyle: 'italic',
        fontSize: 16,
        lineHeight: 1.6,
        color: 'var(--ink-soft)',
        margin: 0
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontStyle: 'normal',
        fontFamily: 'var(--font-label)',
        fontWeight: 600,
        fontSize: 12,
        letterSpacing: '0.06em',
        textTransform: 'uppercase',
        color: v.ink,
        whiteSpace: 'nowrap'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: v.c,
        paddingRight: 3
      },
      "aria-hidden": "true"
    }, v.mark), title || v.label, "."), ' ', children));
  }

  /* ---- INLINE: a printed caution band, symmetric hatched rules ---- */
  if (kind === 'hazard') {
    return /*#__PURE__*/React.createElement("aside", _extends({
      style: {
        margin: 'var(--flow) 0',
        maxWidth: 'var(--measure-narrow)'
      }
    }, rest), /*#__PURE__*/React.createElement(Rule, {
      color: v.c
    }), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: 'var(--font-serif)',
        fontSize: 15,
        lineHeight: 1.55,
        color: 'var(--ink-soft)',
        margin: 0,
        padding: '10px 0'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-label)',
        fontWeight: 700,
        fontSize: 12,
        letterSpacing: '0.06em',
        textTransform: 'uppercase',
        color: v.ink,
        whiteSpace: 'nowrap'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: v.c,
        paddingRight: 3
      },
      "aria-hidden": "true"
    }, v.mark), title || v.label, "."), ' ', children), /*#__PURE__*/React.createElement(Rule, {
      color: v.c
    }));
  }

  /* ---- INLINE: specimen — quiet text-first note, plate is opt-in ---- */
  return /*#__PURE__*/React.createElement("figure", _extends({
    style: {
      margin: 'var(--flow) 0',
      maxWidth: 'var(--measure-narrow)',
      background: 'var(--paper-pure)',
      border: '1px solid var(--border-hairline)',
      borderTop: '2px solid ' + v.c,
      borderRadius: 'var(--radius-xs)',
      overflow: 'hidden'
    }
  }, rest), plate && /*#__PURE__*/React.createElement("div", {
    style: {
      height: 128,
      borderBottom: '1px solid var(--rule)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 7,
      background: 'repeating-linear-gradient(45deg, rgba(93,107,63,0.10) 0 1px, transparent 1px 8px), var(--paper-warm)'
    },
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 26,
      color: v.c,
      lineHeight: 1
    }
  }, v.mark), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-label)',
      fontSize: 9.5,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: 'var(--ink-faint)'
    }
  }, "Plate \xB7 engraving to come")), /*#__PURE__*/React.createElement("figcaption", {
    style: {
      padding: '12px 17px 15px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-label)',
      fontSize: 10,
      fontWeight: 700,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: v.ink
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      paddingRight: 4
    },
    "aria-hidden": "true"
  }, v.mark), v.label), title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-subhead)',
      fontSize: 19,
      fontWeight: 700,
      color: 'var(--ink)',
      margin: '4px 0 6px',
      lineHeight: 1.15
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 14.5,
      lineHeight: 1.5,
      color: 'var(--ink-soft)',
      marginTop: title ? 0 : 5
    }
  }, children)));
}
Object.assign(__ds_scope, { Callout });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Callout.jsx", error: String((e && e.message) || e) }); }

// components/media/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/*
 * Field Guide icon set — Phosphor (Thin weight), inlined so the bundle
 * is self-contained (no CDN at runtime). The thin filled-line cut sits
 * with Jenson far better than a uniform-stroke set; always currentColor.
 * Phosphor is MIT-licensed. Glyphs are viewBox 0 0 256 256, fill paths.
 * Add to PATHS to extend (copy the inner path from assets/thin/<name>-thin.svg).
 */
const PATHS = {
  // wayfinding / UI
  search: '<path d="M226.83,221.17l-52.7-52.7a84.1,84.1,0,1,0-5.66,5.66l52.7,52.7a4,4,0,0,0,5.66-5.66ZM36,112a76,76,0,1,1,76,76A76.08,76.08,0,0,1,36,112Z"/>',
  'arrow-right': '<path d="M218.83,130.83l-72,72a4,4,0,0,1-5.66-5.66L206.34,132H40a4,4,0,0,1,0-8H206.34L141.17,58.83a4,4,0,0,1,5.66-5.66l72,72A4,4,0,0,1,218.83,130.83Z"/>',
  'arrow-left': '<path d="M220,128a4,4,0,0,1-4,4H49.66l65.17,65.17a4,4,0,0,1-5.66,5.66l-72-72a4,4,0,0,1,0-5.66l72-72a4,4,0,0,1,5.66,5.66L49.66,124H216A4,4,0,0,1,220,128Z"/>',
  'corner-down-right': '<path d="M226.83,154.83l-48,48a4,4,0,0,1-5.66-5.66L214.34,156H128A100.11,100.11,0,0,1,28,56a4,4,0,0,1,8,0,92.1,92.1,0,0,0,92,92h86.34l-41.17-41.17a4,4,0,0,1,5.66-5.66l48,48A4,4,0,0,1,226.83,154.83Z"/>',
  check: '<path d="M226.83,74.83l-128,128a4,4,0,0,1-5.66,0l-56-56a4,4,0,0,1,5.66-5.66L96,194.34,221.17,69.17a4,4,0,1,1,5.66,5.66Z"/>',
  feather: '<path d="M236,80A60,60,0,0,0,133.59,37.56L63.52,106.83A11.9,11.9,0,0,0,60,115.31v75L29.17,221.17a4,4,0,0,0,5.66,5.66L65.66,196h75a12,12,0,0,0,8.48-3.51l0,0L218,122.83h0l.4-.4A59.63,59.63,0,0,0,236,80ZM139.23,43.23A52,52,0,0,1,213.5,116H145.66l41.17-41.17a4,4,0,1,0-5.66-5.66L116,134.34V66.19ZM68,115.31a4,4,0,0,1,1.16-2.81L108,74.1v68.24l-40,40Zm75.51,71.52a4,4,0,0,1-2.82,1.17h-67l64-64h68Z"/>',
  map: '<path d="M226.46,52.85a4,4,0,0,0-3.43-.73L160.47,67.76,97.79,36.42a4,4,0,0,0-2.76-.3l-64,16A4,4,0,0,0,28,56V200a4,4,0,0,0,5,3.88l62.56-15.64,62.68,31.34a4,4,0,0,0,2.76.3l64-16a4,4,0,0,0,3-3.88V56A4,4,0,0,0,226.46,52.85ZM100,46.47l56,28V209.53l-56-28ZM36,59.12l56-14V180.88l-56,14ZM220,196.88l-56,14V75.12l56-14Z"/>',
  list: '<path d="M220,128a4,4,0,0,1-4,4H40a4,4,0,0,1,0-8H216A4,4,0,0,1,220,128ZM40,68H216a4,4,0,0,0,0-8H40a4,4,0,0,0,0,8ZM216,188H40a4,4,0,0,0,0,8H216a4,4,0,0,0,0-8Z"/>',
  // the six families
  structure: '<path d="M160,108h48a12,12,0,0,0,12-12V48a12,12,0,0,0-12-12H160a12,12,0,0,0-12,12V68H128a20,20,0,0,0-20,20v36H68V112a12,12,0,0,0-12-12H24a12,12,0,0,0-12,12v32a12,12,0,0,0,12,12H56a12,12,0,0,0,12-12V132h40v36a20,20,0,0,0,20,20h20v20a12,12,0,0,0,12,12h48a12,12,0,0,0,12-12V160a12,12,0,0,0-12-12H160a12,12,0,0,0-12,12v20H128a12,12,0,0,1-12-12V88a12,12,0,0,1,12-12h20V96A12,12,0,0,0,160,108ZM60,144a4,4,0,0,1-4,4H24a4,4,0,0,1-4-4V112a4,4,0,0,1,4-4H56a4,4,0,0,1,4,4Zm96,16a4,4,0,0,1,4-4h48a4,4,0,0,1,4,4v48a4,4,0,0,1-4,4H160a4,4,0,0,1-4-4Zm0-112a4,4,0,0,1,4-4h48a4,4,0,0,1,4,4V96a4,4,0,0,1-4,4H160a4,4,0,0,1-4-4Z"/>',
  puzzles: '<path d="M218.14,161.93a4,4,0,0,0-3.86-.24,24,24,0,0,1-34.23-23.25,24,24,0,0,1,34.23-20.13A4,4,0,0,0,220,114.7V72a12,12,0,0,0-12-12H167a32,32,0,1,0-62.91-10.33A32.57,32.57,0,0,0,105,60H64A12,12,0,0,0,52,72v37a32,32,0,1,0-10.33,62.91A32.28,32.28,0,0,0,52,171v37a12,12,0,0,0,12,12H208a12,12,0,0,0,12-12V165.31A4,4,0,0,0,218.14,161.93ZM212,208a4,4,0,0,1-4,4H64a4,4,0,0,1-4-4V165.31a4,4,0,0,0-1.86-3.38,4,4,0,0,0-3.85-.24,24,24,0,0,1-34.24-20.13,24,24,0,0,1,34.24-23.25A4,4,0,0,0,60,114.7V72a4,4,0,0,1,4-4h46.69a4,4,0,0,0,3.62-5.71,24,24,0,0,1,20.13-34.24,24,24,0,0,1,23.25,34.24A4,4,0,0,0,161.31,68H208a4,4,0,0,1,4,4v37a32.57,32.57,0,0,0-10.33-.94A32,32,0,1,0,212,171Z"/>',
  story: '<path d="M232,52H160a36,36,0,0,0-32,19.54A36,36,0,0,0,96,52H24a4,4,0,0,0-4,4V200a4,4,0,0,0,4,4H96a28,28,0,0,1,28,28,4,4,0,0,0,8,0,28,28,0,0,1,28-28h72a4,4,0,0,0,4-4V56A4,4,0,0,0,232,52ZM96,196H28V60H96a28,28,0,0,1,28,28V209.4A35.93,35.93,0,0,0,96,196Zm132,0H160a35.94,35.94,0,0,0-28,13.41V88a28,28,0,0,1,28-28h68Z"/>',
  players: '<path d="M250.73,109.69l-25.53-51a12,12,0,0,0-16.1-5.37L182.88,66.38,129,52.14a3.92,3.92,0,0,0-2,0L73.12,66.38,46.9,53.27a12,12,0,0,0-16.1,5.37L5.27,109.69a12,12,0,0,0,5.37,16.1l27.29,13.65,55.75,39.82a3.87,3.87,0,0,0,1.35.62l64,16a4,4,0,0,0,3.8-1l55.54-55.54,27-13.5a12,12,0,0,0,5.37-16.1ZM199.73,146.64l-37.2-29.8a4,4,0,0,0-5.34.3c-19.49,19.64-41.34,17.11-55.29,8.2a4.07,4.07,0,0,1-1.85-3,3.91,3.91,0,0,1,1.11-3.21L145.62,76h35.91l29.6,59.21ZM12.21,116.32a4,4,0,0,1,.22-3L38,62.22h0A4,4,0,0,1,41.54,60a4,4,0,0,1,1.78.43l24,12L38.21,130.64l-24-12A4,4,0,0,1,12.21,116.32Zm146.56,71.25L97.71,172.3l-52.6-37.57L75.45,74,128,60.14,157.72,68H144a4,4,0,0,0-2.79,1.13l-45.7,44.33a12,12,0,0,0,2.06,18.62c19.88,12.71,44.13,10,62.66-6.81L194,152.33Zm85-71.25a4,4,0,0,1-2,2.32l-24,12L188.68,72.43l24-12A4,4,0,0,1,218,62.22l25.53,51.05A4,4,0,0,1,243.79,116.32ZM127.94,217a4,4,0,0,1-3.88,3,4.09,4.09,0,0,1-1-.12L81.38,209.45a4,4,0,0,1-1.36-.62L53.68,190a4,4,0,0,1,4.65-6.51l25.72,18.37,41,10.25A4,4,0,0,1,127.94,217Z"/>',
  space: '<path d="M221.76,69.66l-88-48.18a12,12,0,0,0-11.52,0l-88,48.18A12,12,0,0,0,28,80.18v95.64a12,12,0,0,0,6.24,10.52l88,48.18a11.95,11.95,0,0,0,11.52,0l88-48.18A12,12,0,0,0,228,175.82V80.18A12,12,0,0,0,221.76,69.66ZM126.08,28.5a3.94,3.94,0,0,1,3.84,0L216.67,76,128,124.52,39.33,76Zm-88,150.83A4,4,0,0,1,36,175.82V83.29l88,48.16v94.91Zm179.84,0-85.92,47V131.45l88-48.16v92.53A4,4,0,0,1,217.92,179.32Z"/>',
  systems: '<path d="M128,84a44,44,0,1,0,44,44A44.05,44.05,0,0,0,128,84Zm0,80a36,36,0,1,1,36-36A36,36,0,0,1,128,164Zm83.93-32.49q.13-3.51,0-7l15.83-19.79a4,4,0,0,0,.75-3.53A103.64,103.64,0,0,0,218,75.9a4,4,0,0,0-3-2l-25.19-2.8c-1.58-1.71-3.24-3.37-4.95-4.95L182.07,41a4,4,0,0,0-2-3A104,104,0,0,0,154.82,27.5a4,4,0,0,0-3.53.74L131.51,44.07q-3.51-.14-7,0L104.7,28.24a4,4,0,0,0-3.53-.75A103.64,103.64,0,0,0,75.9,38a4,4,0,0,0-2,3l-2.8,25.19c-1.71,1.58-3.37,3.24-4.95,4.95L41,73.93a4,4,0,0,0-3,2A104,104,0,0,0,27.5,101.18a4,4,0,0,0,.74,3.53l15.83,19.78q-.14,3.51,0,7L28.24,151.3a4,4,0,0,0-.75,3.53A103.64,103.64,0,0,0,38,180.1a4,4,0,0,0,3,2l25.19,2.8c1.58,1.71,3.24,3.37,4.95,4.95l2.8,25.2a4,4,0,0,0,2,3,104,104,0,0,0,25.28,10.46,4,4,0,0,0,3.53-.74l19.78-15.83q3.51.13,7,0l19.79,15.83a4,4,0,0,0,2.5.88,4,4,0,0,0,1-.13A103.64,103.64,0,0,0,180.1,218a4,4,0,0,0,2-3l2.8-25.19c1.71-1.58,3.37-3.24,4.95-4.95l25.2-2.8a4,4,0,0,0,3-2,104,104,0,0,0,10.46-25.28,4,4,0,0,0-.74-3.53Zm-9.85,49.95-24.67,2.74a4,4,0,0,0-2.55,1.32,76.2,76.2,0,0,1-6.48,6.48,4,4,0,0,0-1.32,2.55l-2.74,24.66a95.45,95.45,0,0,1-19.64,8.15l-19.38-15.51a4,4,0,0,0-2.5-.87h-.24a73.67,73.67,0,0,1-9.16,0,4,4,0,0,0-2.74.87l-19.37,15.5a95.33,95.33,0,0,1-19.65-8.13l-2.74-24.67a4,4,0,0,0-1.32-2.55,76.2,76.2,0,0,1-6.48-6.48,4,4,0,0,0-2.55-1.32l-24.66-2.74a95.45,95.45,0,0,1-8.15-19.64l15.51-19.38a4,4,0,0,0,.87-2.74,77.76,77.76,0,0,1,0-9.16,4,4,0,0,0-.87-2.74l-15.5-19.37A95.33,95.33,0,0,1,43.9,81.66l24.67-2.74a4,4,0,0,0,2.55-1.32,76.2,76.2,0,0,1,6.48-6.48,4,4,0,0,0,1.32-2.55l2.74-24.66a95.45,95.45,0,0,1,19.64-8.15l19.38,15.51a4,4,0,0,0,2.74.87,73.67,73.67,0,0,1,9.16,0,4,4,0,0,0,2.74-.87l19.37-15.5a95.33,95.33,0,0,1,19.65,8.13l2.74,24.67a4,4,0,0,0,1.32,2.55,76.2,76.2,0,0,1,6.48,6.48,4,4,0,0,0,2.55,1.32l24.66,2.74a95.45,95.45,0,0,1,8.15,19.64l-15.51,19.38a4,4,0,0,0-.87,2.74,77.76,77.76,0,0,1,0,9.16,4,4,0,0,0,.87,2.74l15.5,19.37A95.33,95.33,0,0,1,202.08,181.46Z"/>',
  // media (the four faces) — neutral ink, MediaBadge carries them
  if: '<path d="M232,52H160a36,36,0,0,0-32,19.54A36,36,0,0,0,96,52H24a4,4,0,0,0-4,4V200a4,4,0,0,0,4,4H96a28,28,0,0,1,28,28,4,4,0,0,0,8,0,28,28,0,0,1,28-28h72a4,4,0,0,0,4-4V56A4,4,0,0,0,232,52ZM96,196H28V60H96a28,28,0,0,1,28,28V209.4A35.94,35.94,0,0,0,96,196Zm132,0H160a35.94,35.94,0,0,0-28,13.41V88a28,28,0,0,1,28-28h68ZM160,92h40a4,4,0,0,1,0,8H160a4,4,0,0,1,0-8Zm44,36a4,4,0,0,1-4,4H160a4,4,0,0,1,0-8h40A4,4,0,0,1,204,128Zm0,32a4,4,0,0,1-4,4H160a4,4,0,0,1,0-8h40A4,4,0,0,1,204,160Z"/>',
  live: '<path d="M187,125.33a4,4,0,1,1-6,5.33c-3.4-3.8-10.72-6.66-17-6.66s-13.62,2.86-17,6.66a4,4,0,0,1-3,1.34,4,4,0,0,1-3-6.67c4.92-5.5,14.37-9.33,23-9.33S182.06,119.83,187,125.33Zm-78,5.33a4,4,0,1,0,6-5.33c-4.92-5.5-14.37-9.33-23-9.33s-18.06,3.83-23,9.33A4,4,0,0,0,72,132a4,4,0,0,0,3-1.34c3.4-3.8,10.72-6.66,17-6.66S105.62,126.86,109,130.66Zm50.3,34.74a40.89,40.89,0,0,1-62.64,0,4,4,0,0,0-6.09,5.2,48.92,48.92,0,0,0,74.82,0,4,4,0,0,0-6.09-5.2ZM220,48v55.78c0,35-9.4,68-26.48,92.92C176.13,222.05,152.86,236,128,236s-48.13-13.95-65.52-39.29C45.4,171.83,36,138.83,36,103.79V48a12,12,0,0,1,16.34-11.2C66.66,42.38,95.53,51.7,128,51.7s61.34-9.32,75.66-14.88A12,12,0,0,1,220,48Zm-8,0a4,4,0,0,0-5.44-3.74C191.72,50,161.77,59.7,128,59.7S64.28,50,49.44,44.27A4.14,4.14,0,0,0,48,44a3.87,3.87,0,0,0-2.23.7A4,4,0,0,0,44,48v55.77C44,172.28,81.68,228,128,228s84-55.72,84-124.21Z"/>',
  tabletop: '<path d="M192,36H64A28,28,0,0,0,36,64V192a28,28,0,0,0,28,28H192a28,28,0,0,0,28-28V64A28,28,0,0,0,192,36Zm20,156a20,20,0,0,1-20,20H64a20,20,0,0,1-20-20V64A20,20,0,0,1,64,44H192a20,20,0,0,1,20,20ZM100,92a8,8,0,1,1-8-8A8,8,0,0,1,100,92Zm36,36a8,8,0,1,1-8-8A8,8,0,0,1,136,128Zm36-36a8,8,0,1,1-8-8A8,8,0,0,1,172,92Zm-72,72a8,8,0,1,1-8-8A8,8,0,0,1,100,164Zm72,0a8,8,0,1,1-8-8A8,8,0,0,1,172,164Z"/>',
  hunt: '<path d="M231.22,148.09,189.6,53.41a3.94,3.94,0,0,0-.83-1.22,28,28,0,0,0-39.6,0A4,4,0,0,0,148,55V84H108V55a4,4,0,0,0-1.17-2.83,28,28,0,0,0-39.6,0,3.94,3.94,0,0,0-.83,1.22L24.78,148.09A44,44,0,1,0,108,168V92h40v76a44,44,0,1,0,83.22-19.91ZM64,204a36,36,0,1,1,36-36A36,36,0,0,1,64,204Zm0-80a43.78,43.78,0,0,0-22.66,6.3L73.4,57.35a20,20,0,0,1,26.6-.59v86A44,44,0,0,0,64,124Zm92-67.23a20,20,0,0,1,26.6.59l32.06,72.94A43.92,43.92,0,0,0,156,142.74ZM192,204a36,36,0,1,1,36-36A36,36,0,0,1,192,204Z"/>'
};

/**
 * Icon — a Phosphor Thin glyph, brand-tuned to sit with Jenson.
 * Inherits color via currentColor; size in px. Use for wayfinding,
 * the six families and the four media, never as decoration.
 */
function Icon({
  name,
  size = 18,
  label,
  style,
  strokeWidth,
  ...rest
}) {
  const glyph = PATHS[name] || PATHS.feather;
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 256 256",
    fill: "currentColor",
    role: label ? 'img' : undefined,
    "aria-label": label,
    "aria-hidden": label ? undefined : true,
    style: {
      display: 'inline-block',
      flexShrink: 0,
      verticalAlign: 'text-bottom',
      ...style
    },
    dangerouslySetInnerHTML: {
      __html: glyph
    }
  }, rest));
}

/** The icon names available in this build (for documentation/cards). */
Icon.names = Object.keys(PATHS);
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/media/Icon.jsx", error: String((e && e.message) || e) }); }

// components/content/Backlinks.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Backlinks — the "Referenced by" register at the foot of an entry: the
 * wiki's bidirectional links rendered as a labelled list of inbound
 * plates. Each link is { title, taxon?, href? }. This is the mechanism
 * that turns the guide from a book into a connected vault.
 */
function Backlinks({
  label = 'Referenced by',
  links = [],
  ...rest
}) {
  return /*#__PURE__*/React.createElement("section", _extends({
    style: {
      borderTop: '1px solid var(--border-hairline)',
      paddingTop: 'var(--space-4)',
      maxWidth: 'var(--measure)'
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-label)',
      fontSize: 11,
      fontWeight: 600,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: 'var(--text-faint)',
      marginBottom: 10
    }
  }, label, " ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--ink-faint)'
    }
  }, "\xB7 ", links.length)), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, links.map((l, i) => /*#__PURE__*/React.createElement("li", {
    key: i
  }, /*#__PURE__*/React.createElement("a", {
    href: l.href || '#',
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 10,
      textDecoration: 'none',
      padding: '6px 8px',
      marginLeft: -8,
      borderRadius: 'var(--radius-xs)',
      transition: 'background var(--dur-fast) var(--ease-paper)'
    },
    onMouseEnter: e => {
      e.currentTarget.style.background = 'var(--paper-warm)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.background = 'transparent';
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--amber-ink)',
      lineHeight: 0,
      marginTop: 3
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "corner-down-right",
    size: 14
  })), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 15,
      color: 'var(--ink-soft)'
    }
  }, l.title), l.taxon && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-label)',
      fontSize: 10,
      fontWeight: 600,
      letterSpacing: '0.06em',
      textTransform: 'uppercase',
      color: 'var(--text-faint)',
      marginLeft: 10
    }
  }, l.taxon)))))));
}
Object.assign(__ds_scope, { Backlinks });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Backlinks.jsx", error: String((e && e.message) || e) }); }

// components/core/MediaBadge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const MEDIA = {
  if: {
    label: 'Interactive Fiction',
    icon: 'if'
  },
  live: {
    label: 'Live Game',
    icon: 'live'
  },
  tabletop: {
    label: 'Tabletop',
    icon: 'tabletop'
  },
  hunt: {
    label: 'Puzzle-hunt',
    icon: 'hunt'
  }
};

/**
 * MediaBadge — a NEUTRAL pill marking which of the four media an entry
 * uses. Colour is the FAMILY channel, so media is carried by ICON +
 * label in plain ink (no per-medium colour). `solid` inverts it for
 * dark rails/headers.
 */
function MediaBadge({
  media = 'if',
  label,
  solid = false,
  ...rest
}) {
  const m = MEDIA[media] || MEDIA.if;
  const text = label || m.label;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      fontFamily: 'var(--font-label)',
      fontSize: 11,
      fontWeight: 600,
      letterSpacing: '0.05em',
      textTransform: 'uppercase',
      lineHeight: 1,
      padding: '4px 11px 4px 9px',
      borderRadius: 'var(--radius-pill)',
      border: '1px solid ' + (solid ? 'var(--ink-soft)' : 'var(--border-strong)'),
      background: solid ? 'var(--ink-soft)' : 'transparent',
      color: solid ? 'var(--paper)' : 'var(--ink-muted)',
      whiteSpace: 'nowrap'
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: m.icon,
    size: 13,
    strokeWidth: 1.75
  }), text);
}
Object.assign(__ds_scope, { MediaBadge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/MediaBadge.jsx", error: String((e && e.message) || e) }); }

// components/content/EntryCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * EntryCard — a single plate in a browse grid or "Referenced by" list.
 * Shows the entry number, taxon kicker, title, silhouette line, and a
 * row of facet tags. The amber top-rule marks it as a field-guide plate.
 */
function EntryCard({
  number,
  taxon,
  title,
  silhouette,
  tags = [],
  media,
  href = '#',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    style: {
      display: 'block',
      textDecoration: 'none',
      background: 'var(--surface-card)',
      border: '1px solid var(--border-hairline)',
      borderTop: '2px solid var(--amber)',
      borderRadius: 'var(--radius-md)',
      padding: '15px 18px 16px',
      transition: 'box-shadow var(--dur-base) var(--ease-paper), border-color var(--dur-fast) var(--ease-paper)'
    },
    onMouseEnter: e => {
      e.currentTarget.style.boxShadow = 'var(--shadow-raised)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.boxShadow = 'none';
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 10,
      marginBottom: 9
    }
  }, number != null && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      color: 'var(--amber-ink)',
      letterSpacing: '0.03em'
    }
  }, "\u2116 ", number), taxon && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-label)',
      fontSize: 10,
      fontWeight: 600,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: 'var(--text-faint)'
    }
  }, taxon), media && /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 'auto'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.MediaBadge, {
    media: media
  }))), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-subhead)',
      fontSize: 'var(--text-lg)',
      fontWeight: 600,
      color: 'var(--ink)',
      margin: '0 0 5px',
      lineHeight: 1.18
    }
  }, title), silhouette && /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-subhead)',
      fontStyle: 'italic',
      fontSize: 14,
      color: 'var(--ink-muted)',
      margin: '0 0 11px',
      lineHeight: 1.4
    }
  }, silhouette), tags.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      flexWrap: 'wrap'
    }
  }, tags.map(t => /*#__PURE__*/React.createElement(__ds_scope.Tag, {
    key: t,
    size: "sm"
  }, t))));
}
Object.assign(__ds_scope, { EntryCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/EntryCard.jsx", error: String((e && e.message) || e) }); }

// components/forms/FilterChip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * FilterChip — a toggle facet in the browse rail. Quiet outline when off,
 * amber-tinted with a check when on. Optional trailing count. This is how
 * a reader narrows the gazetteer by mechanism, medium or topic.
 */
function FilterChip({
  children,
  active = false,
  count,
  onClick,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    onClick: onClick,
    "aria-pressed": active,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 7,
      fontFamily: 'var(--font-label)',
      fontSize: 12,
      fontWeight: 600,
      letterSpacing: '0.04em',
      textTransform: 'uppercase',
      lineHeight: 1,
      padding: '7px 13px',
      borderRadius: 'var(--radius-pill)',
      cursor: 'pointer',
      border: '1px solid ' + (active ? 'var(--amber)' : 'var(--border-strong)'),
      background: active ? 'var(--amber-tint)' : 'var(--paper-pure)',
      color: active ? 'var(--amber-ink)' : 'var(--ink-muted)',
      transition: 'all var(--dur-fast) var(--ease-paper)'
    },
    onMouseEnter: e => {
      if (!active) {
        e.currentTarget.style.background = 'var(--paper-warm)';
        e.currentTarget.style.borderColor = 'var(--ink-faint)';
      }
    },
    onMouseLeave: e => {
      if (!active) {
        e.currentTarget.style.background = 'var(--paper-pure)';
        e.currentTarget.style.borderColor = 'var(--border-strong)';
      }
    }
  }, rest), active && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 13,
    strokeWidth: 2
  }), children, count != null && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 10,
      letterSpacing: 0,
      color: active ? 'var(--amber-ink)' : 'var(--text-faint)',
      opacity: 0.8
    }
  }, count));
}
Object.assign(__ds_scope, { FilterChip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/FilterChip.jsx", error: String((e && e.message) || e) }); }

// components/forms/SearchInput.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * SearchInput — the field guide's lookup field. A serif-set field with a
 * leading lens glyph and a quiet paper-white well; the way you enter the
 * vault. Controlled or uncontrolled.
 */
function SearchInput({
  value,
  defaultValue,
  placeholder = 'Search the guide…',
  onChange,
  size = 'md',
  ...rest
}) {
  const pad = size === 'lg' ? '13px 16px 13px 44px' : '10px 14px 10px 40px';
  const fs = size === 'lg' ? 17 : 15;
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 460
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: size === 'lg' ? 16 : 13,
      top: '50%',
      transform: 'translateY(-50%)',
      color: focus ? 'var(--amber-ink)' : 'var(--ink-faint)',
      lineHeight: 0,
      pointerEvents: 'none',
      transition: 'color var(--dur-fast) var(--ease-paper)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "search",
    size: size === 'lg' ? 18 : 16
  })), /*#__PURE__*/React.createElement("input", _extends({
    type: "search",
    value: value,
    defaultValue: defaultValue,
    placeholder: placeholder,
    onChange: onChange,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      width: '100%',
      fontFamily: 'var(--font-serif)',
      fontSize: fs,
      color: 'var(--ink-soft)',
      padding: pad,
      background: 'var(--paper-pure)',
      border: '1px solid ' + (focus ? 'var(--amber)' : 'var(--border-strong)'),
      borderRadius: 'var(--radius-sm)',
      outline: 'none',
      boxShadow: focus ? '0 0 0 3px var(--amber-tint)' : 'none',
      transition: 'border-color var(--dur-fast) var(--ease-paper), box-shadow var(--dur-fast) var(--ease-paper)',
      boxSizing: 'border-box'
    }
  }, rest)));
}
Object.assign(__ds_scope, { SearchInput });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/SearchInput.jsx", error: String((e && e.message) || e) }); }

// components/media/IllustrationPlate.jsx
try { (() => {
/**
 * IllustrationPlate — a mounted naturalist engraving frame. Until real
 * illustrations are generated it shows a labelled placeholder ("plate
 * to come") with a faint hatched ground and a figure number; pass `src`
 * to drop in the finished engraving. This is the brand's answer to bare
 * pages: every major entry can carry a plate.
 *
 * ratio: height as a fraction of width (e.g. 0.62 landscape, 1.3 portrait).
 */
function IllustrationPlate({
  figure,
  caption,
  src,
  alt,
  ratio = 0.62,
  tone = 'moss',
  framed = true,
  ...rest
}) {
  const toneInk = {
    moss: 'var(--moss)',
    slate: 'var(--slate)',
    clay: 'var(--clay)',
    ochre: 'var(--ochre)',
    amber: 'var(--amber-ink)'
  }[tone] || 'var(--moss)';
  const toneRGB = {
    moss: '93,107,63',
    slate: '63,97,104',
    clay: '160,73,47',
    ochre: '176,138,46',
    amber: '192,120,64'
  }[tone] || '93,107,63';
  const frame = framed ? {
    background: 'var(--paper-pure)',
    border: '1px solid var(--rule-strong)',
    borderRadius: 'var(--radius-xs)',
    boxShadow: 'var(--shadow-plate)',
    padding: 8
  } : {
    background: 'transparent',
    border: 0,
    padding: 0
  };
  const innerBorder = framed ? '1px solid var(--rule)' : 'none';
  return /*#__PURE__*/React.createElement("figure", {
    style: {
      margin: 0,
      ...rest.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      ...frame
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: '100%',
      paddingTop: ratio * 100 + '%',
      border: innerBorder,
      overflow: 'hidden',
      background: src ? framed ? 'var(--paper-warm)' : 'transparent' : `repeating-linear-gradient(45deg, rgba(${toneRGB},0.09) 0 1px, transparent 1px 9px), var(--paper-warm)`
    }
  }, src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt || caption || '',
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }) : /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8
    },
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 30,
      lineHeight: 1,
      color: toneInk
    }
  }, '\u2042'), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-label)',
      fontSize: 10,
      fontWeight: 600,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: 'var(--ink-faint)'
    }
  }, "Plate \xB7 engraving to come")))), (figure || caption) && /*#__PURE__*/React.createElement("figcaption", {
    style: {
      display: 'flex',
      gap: 8,
      marginTop: 9,
      paddingLeft: 2
    }
  }, figure && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-label)',
      fontSize: 10,
      fontWeight: 700,
      letterSpacing: '0.09em',
      textTransform: 'uppercase',
      color: toneInk,
      whiteSpace: 'nowrap'
    }
  }, figure), caption && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontStyle: 'italic',
      fontSize: 13,
      lineHeight: 1.45,
      color: 'var(--ink-muted)'
    }
  }, caption)));
}
Object.assign(__ds_scope, { IllustrationPlate });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/media/IllustrationPlate.jsx", error: String((e && e.message) || e) }); }

// ui_kits/print/PrintSpread.jsx
try { (() => {
/* PrintSpread — the bound-edition (Typst/PDF) face of the guide: a
   two-page spread on a desk. Left page closes the previous entry with
   its exemplar plate; right page opens a new entry with running header,
   drop-cap lead, a hazard callout and footnotes. Pure typographic
   recreation — this is what the PDF looks like, not an interactive app.
   Exposed as window.PrintSpread. */

function RunningHeader({
  side,
  part,
  page
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      flexDirection: side === 'left' ? 'row' : 'row-reverse',
      borderBottom: '1px solid var(--rule-strong)',
      paddingBottom: 8,
      marginBottom: 26
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      color: 'var(--ink-muted)'
    }
  }, page), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      textAlign: side === 'left' ? 'left' : 'right',
      paddingLeft: side === 'left' ? 14 : 0,
      paddingRight: side === 'right' ? 14 : 0,
      fontFamily: 'var(--font-label)',
      fontSize: 10,
      fontWeight: 600,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, part));
}
const FAMILIES = ['structure', 'puzzles', 'story', 'players', 'space', 'systems'];
function BleedTabs({
  active,
  activeNumber
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 54,
      right: -16,
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    },
    "aria-hidden": "true"
  }, FAMILIES.map((f, i) => /*#__PURE__*/React.createElement("div", {
    key: f,
    style: {
      width: f === active ? 26 : 16,
      height: 34,
      background: 'var(--fam-' + f + ')',
      borderRadius: '0 3px 3px 0',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: '1px 1px 2px rgba(40,30,14,0.14)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 9,
      color: '#fff',
      opacity: 0.9
    }
  }, f === active ? activeNumber || String.fromCharCode(65 + i) : String.fromCharCode(65 + i)))));
}
function Page({
  side,
  family,
  tabs,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    "data-family": family,
    style: {
      position: 'relative',
      width: 420,
      minHeight: 580,
      background: 'var(--paper-pure)',
      padding: '40px 46px',
      boxShadow: side === 'left' ? 'inset -22px 0 30px -28px rgba(40,30,14,0.28), var(--shadow-plate)' : 'inset 22px 0 30px -28px rgba(40,30,14,0.28), var(--shadow-plate)',
      borderRadius: side === 'left' ? '3px 0 0 3px' : '0 3px 3px 0'
    }
  }, tabs && /*#__PURE__*/React.createElement(BleedTabs, {
    active: family,
    activeNumber: "XVI"
  }), children);
}
function PrintSpread() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: '100vh',
      background: 'var(--paper-deep)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 40
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      boxShadow: 'var(--shadow-raised)'
    }
  }, /*#__PURE__*/React.createElement(Page, {
    side: "left",
    family: "puzzles"
  }, /*#__PURE__*/React.createElement(RunningHeader, {
    side: "left",
    part: "Puzzles \xB7 Cluing & Information",
    page: "46"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14.5,
      lineHeight: 1.66,
      color: 'var(--ink-soft)',
      margin: '0 0 14px'
    }
  }, "\u2026and so the red herring is not a betrayal of the contract but a clause within it: the design may mislead, provided the misleading is itself fairly clued. The player who is fooled should, on reflection, see exactly where they chose to be fooled."), /*#__PURE__*/React.createElement("div", {
    style: {
      border: '1px solid var(--rule-strong)',
      borderRadius: 3,
      margin: '22px 0',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      borderBottom: '2px solid var(--rule-strong)',
      padding: '11px 16px',
      background: 'var(--paper-warm)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-label)',
      fontSize: 9,
      fontWeight: 600,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: 'var(--text-faint)',
      marginBottom: 3
    }
  }, "Plate XV \xB7 Exemplar"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 17,
      fontWeight: 700,
      color: 'var(--ink)'
    }
  }, "The Witness"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontStyle: 'italic',
      fontSize: 12.5,
      color: 'var(--ink-muted)'
    }
  }, "Jonathan Blow \xB7 2016")), [['Medium', 'Open-world puzzle'], ['Mechanism', 'Line-drawing grammar'], ['Cluing', 'Environmental rhyme']].map(([k, v], i, a) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      display: 'flex',
      padding: '8px 16px',
      borderBottom: i === a.length - 1 ? 'none' : '1px solid var(--border-hairline)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: '42%',
      fontFamily: 'var(--font-label)',
      fontSize: 9,
      fontWeight: 600,
      letterSpacing: '0.07em',
      textTransform: 'uppercase',
      color: 'var(--text-faint)'
    }
  }, k), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11.5,
      color: 'var(--ink-soft)'
    }
  }, v)))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--border-hairline)',
      marginTop: 'auto',
      paddingTop: 8,
      fontFamily: 'var(--font-mono)',
      fontSize: 9.5,
      color: 'var(--text-faint)',
      lineHeight: 1.6
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0
    }
  }, "14. On triangulation as fairness, see Plate XIV, \u201CThe Fairness Contract.\u201D"))), /*#__PURE__*/React.createElement(Page, {
    side: "right",
    family: "structure",
    tabs: true
  }, /*#__PURE__*/React.createElement(RunningHeader, {
    side: "right",
    part: "The Field Guide",
    page: "47"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '2px solid var(--amber)',
      paddingTop: 12,
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 10,
      marginBottom: 7
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      color: 'var(--amber-ink)'
    }
  }, "\u2116 XVI"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-label)',
      fontSize: 9.5,
      fontWeight: 600,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, "Structure \xB7 Pacing & Energy")), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 30,
      margin: '0 0 8px',
      lineHeight: 1.08
    }
  }, "The Architecture of Dread"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontStyle: 'italic',
      fontSize: 15.5,
      color: 'var(--ink-soft)',
      margin: 0,
      lineHeight: 1.32
    }
  }, "Fear is a tempo, not a monster.")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14.5,
      lineHeight: 1.66,
      color: 'var(--ink-soft)',
      margin: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      float: 'left',
      fontFamily: 'var(--font-display)',
      fontSize: 52,
      lineHeight: 0.82,
      fontWeight: 700,
      color: 'var(--ink)',
      padding: '4px 8px 0 0'
    }
  }, "D"), "read is built, not summoned. The monster in the dark is a payment; the corridor before it is the loan. A designer who spends the corridor well need barely show the monster at all \u2014 the player will have built a worse one in the meantime."), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: '18px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 0,
      borderTop: '2px solid var(--clay)'
    },
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '9px 0'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 13,
      lineHeight: 1.5,
      color: 'var(--ink-soft)',
      margin: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-label)',
      fontWeight: 700,
      fontSize: 10.5,
      letterSpacing: '0.06em',
      textTransform: 'uppercase',
      color: 'var(--clay-ink)',
      whiteSpace: 'nowrap'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--clay)',
      paddingRight: 3
    }
  }, "\u2021"), "Hazard."), ' ', "The jump-scare treadmill: when every beat pays out at the same volume, the player re-tunes, and the loan is never felt again.")), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 0,
      borderTop: '2px solid var(--clay)'
    },
    "aria-hidden": "true"
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14.5,
      lineHeight: 1.66,
      color: 'var(--ink-soft)',
      margin: 0
    }
  }, "The remedy is dynamic range. A whisper is only quiet beside a held breath; a held breath only tense beside a long, unbroken calm\u2026"))));
}
window.PrintSpread = PrintSpread;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/print/PrintSpread.jsx", error: String((e && e.message) || e) }); }

// ui_kits/wiki/ArticleView.jsx
try { (() => {
/* ArticleView — a single plate read in full. De-doc'd: the header carries
   a taxon icon + number, the right column opens with a naturalist
   illustration plate above the exemplar, the lead drops a cap, and the
   three callout voices are printed asides (Specimen plate, Field Note,
   Hazard band) — not tinted boxes. Composes Silhouette, Callout,
   ProvenanceMark, StatBlock, Backlinks, MediaBadge, Tag, Icon,
   IllustrationPlate. */
function ArticleView({
  entry,
  data,
  onOpen
}) {
  const DS = window.FieldGuideDesignSystem_df43d1;
  const {
    Silhouette,
    Callout,
    ProvenanceMark,
    StatBlock,
    Backlinks,
    MediaBadge,
    Tag,
    Icon,
    IllustrationPlate
  } = DS;
  const body = entry.body || [];
  const family = entry.family || 'puzzles';
  const tone = {
    if: 'slate',
    live: 'clay',
    tabletop: 'moss',
    hunt: 'ochre'
  }[entry.media] || 'moss';
  let pcount = 0; // count body paragraphs to drop-cap the first

  return /*#__PURE__*/React.createElement("div", {
    "data-family": family,
    style: {
      maxWidth: 940,
      margin: '0 auto',
      padding: '36px 44px 88px'
    }
  }, /*#__PURE__*/React.createElement("header", {
    style: {
      borderTop: '2px solid var(--amber)',
      paddingTop: 18,
      marginBottom: 30
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 11,
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: family,
    size: 17,
    style: {
      color: 'var(--amber-ink)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      color: 'var(--amber-ink)',
      letterSpacing: '0.04em'
    }
  }, "\u2116 ", entry.number), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-label)',
      fontSize: 11,
      fontWeight: 600,
      letterSpacing: '0.09em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, entry.taxon), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 'auto',
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, entry.provenance && /*#__PURE__*/React.createElement(ProvenanceMark, {
    kind: entry.provenance
  }), /*#__PURE__*/React.createElement(MediaBadge, {
    media: entry.media
  }))), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 48,
      margin: '0 0 14px',
      letterSpacing: '-0.01em',
      lineHeight: 1.05
    }
  }, entry.title), /*#__PURE__*/React.createElement(Silhouette, null, entry.silhouette), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      flexWrap: 'wrap'
    }
  }, (entry.tags || []).map(t => /*#__PURE__*/React.createElement(Tag, {
    key: t,
    size: "sm"
  }, t)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 312px',
      gap: 48,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("article", {
    style: {
      minWidth: 0
    }
  }, body.map((b, i) => {
    if (b.type === 'lead') {
      return /*#__PURE__*/React.createElement("p", {
        key: i,
        style: {
          fontSize: 20,
          lineHeight: 1.58,
          color: 'var(--ink-soft)',
          marginBottom: 22
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          float: 'left',
          fontFamily: 'var(--font-display)',
          fontSize: 62,
          lineHeight: 0.8,
          fontWeight: 700,
          color: 'var(--ink)',
          padding: '5px 11px 0 0'
        }
      }, String(b.text).charAt(0)), String(b.text).slice(1));
    }
    if (b.type === 'h') return /*#__PURE__*/React.createElement("h2", {
      key: i,
      style: {
        fontSize: 27,
        marginTop: 40,
        marginBottom: 15,
        display: 'flex',
        alignItems: 'baseline',
        gap: 12
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-label)',
        fontSize: 12,
        fontWeight: 600,
        color: 'var(--amber)',
        letterSpacing: '0.06em'
      }
    }, '\u00A7'), b.text);
    if (b.type === 'h3') return /*#__PURE__*/React.createElement("h3", {
      key: i,
      style: {
        fontFamily: 'var(--font-subhead)',
        fontSize: 20,
        fontWeight: 600,
        color: 'var(--ink)',
        marginTop: 28,
        marginBottom: 10
      }
    }, b.text);
    if (b.type === 'sources') return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        marginTop: 36,
        borderTop: '1px solid var(--border-hairline)',
        paddingTop: 16
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-label)',
        fontSize: 11,
        fontWeight: 600,
        letterSpacing: '0.08em',
        textTransform: 'uppercase',
        color: 'var(--text-faint)',
        marginBottom: 10
      }
    }, "Sources"), /*#__PURE__*/React.createElement("ul", {
      style: {
        listStyle: 'none',
        margin: 0,
        padding: 0,
        display: 'flex',
        flexDirection: 'column',
        gap: 6
      }
    }, b.items.map((s, j) => /*#__PURE__*/React.createElement("li", {
      key: j,
      style: {
        fontFamily: 'var(--font-data)',
        fontSize: 12,
        lineHeight: 1.5,
        color: 'var(--ink-muted)'
      }
    }, s))));
    if (b.type === 'callout') return /*#__PURE__*/React.createElement(Callout, {
      key: i,
      kind: b.kind,
      title: b.title,
      plate: b.plate
    }, b.text);
    pcount += 1;
    return /*#__PURE__*/React.createElement("p", {
      key: i,
      style: {
        fontSize: 17,
        lineHeight: 1.64,
        color: 'var(--ink-soft)',
        marginBottom: 18
      }
    }, b.text, ' ', b.prov && /*#__PURE__*/React.createElement(ProvenanceMark, {
      kind: b.prov
    }));
  })), /*#__PURE__*/React.createElement("aside", {
    style: {
      position: 'sticky',
      top: 24,
      display: 'flex',
      flexDirection: 'column',
      gap: 22
    }
  }, /*#__PURE__*/React.createElement(IllustrationPlate, {
    figure: 'Fig. ' + entry.number,
    caption: entry.plateCaption || entry.silhouette,
    tone: "amber",
    ratio: 0.78
  }), entry.exemplar && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-label)',
      fontSize: 10,
      fontWeight: 600,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: 'var(--text-faint)',
      marginBottom: 10
    }
  }, "The Exemplar"), /*#__PURE__*/React.createElement(StatBlock, {
    title: entry.exemplar.title,
    subtitle: entry.exemplar.subtitle,
    rows: entry.exemplar.rows
  })))), entry.backlinks && entry.backlinks.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 52
    },
    onClickCapture: e => {
      const a = e.target.closest('a');
      if (!a) return;
      e.preventDefault();
      const title = a.textContent.trim();
      const hit = entry.backlinks.find(l => title.startsWith(l.title));
      if (hit) onOpen(hit.id);
    }
  }, /*#__PURE__*/React.createElement(Backlinks, {
    links: entry.backlinks.map(l => ({
      ...l,
      href: '#'
    }))
  })));
}
window.ArticleView = ArticleView;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/wiki/ArticleView.jsx", error: String((e && e.message) || e) }); }

// ui_kits/wiki/BrowseView.jsx
try { (() => {
/* BrowseView — the gazetteer front page: big search, facet rail,
   and a grid of entry plates. Composes DS SearchInput, FilterChip,
   EntryCard. */
const {
  useState
} = React;
function BrowseView({
  data,
  onOpen
}) {
  const DS = window.FieldGuideDesignSystem_df43d1;
  const {
    SearchInput,
    FilterChip,
    EntryCard,
    MediaBadge,
    Icon,
    IllustrationPlate
  } = DS;
  const [active, setActive] = useState([]);
  const [query, setQuery] = useState('');
  const featured = data.entries.find(e => e.body) || data.entries[0];
  const toggle = id => setActive(a => a.includes(id) ? a.filter(x => x !== id) : [...a, id]);
  const entries = data.entries.filter(e => {
    const q = query.trim().toLowerCase();
    const matchesQ = !q || (e.title + ' ' + (e.silhouette || '')).toLowerCase().includes(q);
    const matchesF = active.length === 0 || (e.tags || []).some(t => active.includes(t.toLowerCase().replace(/ /g, '-')) || active.includes(t.toLowerCase()));
    return matchesQ && matchesF;
  });
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 940,
      margin: '0 auto',
      padding: '40px 44px 88px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '2px solid var(--amber)',
      paddingTop: 18,
      marginBottom: 30
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 9,
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "map",
    size: 15,
    style: {
      color: 'var(--amber-ink)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-label)',
      fontSize: 11,
      fontWeight: 600,
      letterSpacing: '0.09em',
      textTransform: 'uppercase',
      color: 'var(--text-faint)'
    }
  }, "The Gazetteer")), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 44,
      margin: '0 0 8px'
    }
  }, "Browse the Field Guide"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 18,
      fontStyle: 'italic',
      color: 'var(--ink-muted)',
      maxWidth: '54ch',
      margin: '0 0 22px'
    }
  }, "Six families \u2014 structure, puzzles, story, players, space and systems \u2014 each one a specimen pinned to the page."), /*#__PURE__*/React.createElement(SearchInput, {
    size: "lg",
    placeholder: "Search 204 entries\u2026",
    value: query,
    onChange: e => setQuery(e.target.value)
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      flexWrap: 'wrap',
      marginBottom: 28
    }
  }, data.facets.map(f => /*#__PURE__*/React.createElement(FilterChip, {
    key: f.id,
    active: active.includes(f.id),
    count: f.count,
    onClick: () => toggle(f.id)
  }, f.label))), !query && active.length === 0 && featured && /*#__PURE__*/React.createElement("div", {
    "data-family": featured.family,
    style: {
      display: 'grid',
      gridTemplateColumns: '300px 1fr',
      gap: 28,
      alignItems: 'center',
      marginBottom: 34,
      paddingBottom: 30,
      borderBottom: '1px solid var(--border-hairline)'
    }
  }, /*#__PURE__*/React.createElement(IllustrationPlate, {
    figure: 'Fig. ' + featured.number,
    caption: featured.plateCaption || featured.silhouette,
    tone: "moss",
    ratio: 0.72
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 9,
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-label)',
      fontSize: 10,
      fontWeight: 700,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: 'var(--moss-ink)'
    }
  }, "Specimen of the week")), /*#__PURE__*/React.createElement("h2", {
    onClick: () => onOpen(featured.id),
    style: {
      fontSize: 32,
      margin: '0 0 10px',
      cursor: 'pointer',
      lineHeight: 1.1
    }
  }, featured.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-subhead)',
      fontStyle: 'italic',
      fontSize: 18,
      color: 'var(--ink-soft)',
      margin: '0 0 16px',
      lineHeight: 1.4
    }
  }, featured.silhouette), /*#__PURE__*/React.createElement("div", {
    onClick: () => onOpen(featured.id),
    style: {
      cursor: 'pointer',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 7,
      fontFamily: 'var(--font-label)',
      fontSize: 12,
      fontWeight: 600,
      letterSpacing: '0.05em',
      textTransform: 'uppercase',
      color: 'var(--amber-ink)'
    }
  }, "Read the entry ", /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-right",
    size: 15
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
      gap: 16
    }
  }, entries.map(e => /*#__PURE__*/React.createElement("div", {
    key: e.id,
    "data-family": e.family,
    onClick: () => onOpen(e.id),
    style: {
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(EntryCard, {
    number: e.number,
    taxon: e.taxon,
    title: e.title,
    silhouette: e.silhouette,
    tags: e.tags,
    media: e.media,
    href: "#"
  })))), entries.length === 0 && /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--ink-muted)',
      fontStyle: 'italic',
      marginTop: 30
    }
  }, "No specimens match that search."));
}
window.BrowseView = BrowseView;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/wiki/BrowseView.jsx", error: String((e && e.message) || e) }); }

// ui_kits/wiki/PartView.jsx
try { (() => {
/* PartView — a family's PART page, with its PRIMER integrated as the
   opener (the true unnumbered-primer-then-articles divider is hard in
   Quarto/Typst, so the primer becomes the part page's subtitle + lead).
   Family-coloured throughout via data-family; then the numbered article
   index. Composes EntryCard, Icon, Silhouette. */
function PartView({
  family,
  data,
  onOpen
}) {
  const DS = window.FieldGuideDesignSystem_df43d1;
  const {
    EntryCard,
    Icon
  } = DS;
  const section = data.sections.find(s => s.id === family) || data.sections[0];
  const primer = data.primers && data.primers[family] || {};
  const articles = data.entries.filter(e => e.family === family);
  return /*#__PURE__*/React.createElement("div", {
    "data-family": family,
    style: {
      maxWidth: 940,
      margin: '0 auto',
      padding: '40px 44px 88px'
    }
  }, /*#__PURE__*/React.createElement("header", {
    style: {
      borderTop: '2px solid var(--amber)',
      paddingTop: 18,
      marginBottom: 34
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 11,
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: family,
    size: 20,
    style: {
      color: 'var(--amber-ink)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      color: 'var(--amber-ink)',
      letterSpacing: '0.06em'
    }
  }, "PART ", primer.part), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-label)',
      fontSize: 11,
      fontWeight: 600,
      letterSpacing: '0.09em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, section.label)), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 50,
      margin: '0 0 6px',
      letterSpacing: '-0.01em',
      lineHeight: 1.02
    }
  }, section.label), primer.title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-subhead)',
      fontStyle: 'italic',
      fontSize: 22,
      color: 'var(--amber-ink)',
      margin: '0 0 16px',
      lineHeight: 1.25
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-label)',
      fontStyle: 'normal',
      fontSize: 10,
      fontWeight: 700,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: 'var(--text-faint)',
      marginRight: 10,
      verticalAlign: 'middle'
    }
  }, "Primer"), primer.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-reading)',
      fontSize: 19,
      lineHeight: 1.6,
      color: 'var(--ink-soft)',
      maxWidth: '60ch',
      margin: 0
    }
  }, primer.lead)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-label)',
      fontSize: 11,
      fontWeight: 600,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: 'var(--text-faint)',
      marginBottom: 14
    }
  }, "Articles in this part ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--ink-faint)'
    }
  }, "\xB7 ", articles.length)), articles.length > 0 ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
      gap: 16
    }
  }, articles.map(e => /*#__PURE__*/React.createElement("div", {
    key: e.id,
    onClick: () => onOpen(e.id),
    style: {
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(EntryCard, {
    number: e.number,
    taxon: e.taxon,
    title: e.title,
    silhouette: e.silhouette,
    tags: e.tags,
    media: e.media,
    href: "#"
  })))) : /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontStyle: 'italic',
      color: 'var(--ink-muted)'
    }
  }, "The articles for this part are still being written."));
}
window.PartView = PartView;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/wiki/PartView.jsx", error: String((e && e.message) || e) }); }

// ui_kits/wiki/WikiShell.jsx
try { (() => {
/* WikiShell — the persistent chrome around every view: a slim masthead
   with the guide wordmark + header search, and a left nav rail listing
   the five taxonomic sections. Holds the app's view state and routes
   between BrowseView and ArticleView. Exposed as window.WikiApp. */
const {
  useState: useShellState
} = React;
function Masthead({
  onHome
}) {
  const DS = window.FieldGuideDesignSystem_df43d1;
  const {
    SearchInput,
    Icon
  } = DS;
  return /*#__PURE__*/React.createElement("header", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 24,
      padding: '0 28px',
      height: 60,
      borderBottom: '1px solid var(--border-hairline)',
      background: 'var(--paper)',
      position: 'sticky',
      top: 0,
      zIndex: 10
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onHome,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      background: 'none',
      border: 0,
      cursor: 'pointer',
      padding: 0
    },
    title: "The Gazetteer \u2014 all entries"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "feather",
    size: 20,
    style: {
      color: 'var(--amber)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontWeight: 700,
      fontSize: 19,
      color: 'var(--ink)',
      letterSpacing: '-0.01em'
    }
  }, "The Field Guide"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-label)',
      fontSize: 10,
      fontWeight: 600,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: 'var(--amber-ink)',
      alignSelf: 'center',
      paddingTop: 1
    }
  }, "Narrative & Game Design")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: 'auto',
      width: 280
    }
  }, /*#__PURE__*/React.createElement(SearchInput, {
    placeholder: "Search the guide\u2026"
  })));
}
function NavRail({
  sections,
  currentSection,
  onPick
}) {
  const {
    Icon
  } = window.FieldGuideDesignSystem_df43d1;
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      width: 248,
      flexShrink: 0,
      borderRight: '1px solid var(--border-hairline)',
      background: 'var(--surface-rail)',
      padding: '28px 16px',
      alignSelf: 'stretch'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-label)',
      fontSize: 10,
      fontWeight: 600,
      letterSpacing: '0.09em',
      textTransform: 'uppercase',
      color: 'var(--text-faint)',
      padding: '0 10px',
      marginBottom: 12
    }
  }, "Taxonomy"), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 1
    }
  }, sections.map(s => {
    const on = s.id === currentSection;
    return /*#__PURE__*/React.createElement("li", {
      key: s.id
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => onPick(s.id),
      style: {
        width: '100%',
        textAlign: 'left',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        padding: '9px 10px',
        borderRadius: 'var(--radius-sm)',
        border: 0,
        background: on ? 'var(--amber-tint)' : 'transparent',
        borderLeft: '2px solid ' + (on ? 'var(--amber)' : 'transparent'),
        fontFamily: 'var(--font-serif)',
        fontSize: 15,
        color: on ? 'var(--amber-ink)' : 'var(--ink-soft)',
        transition: 'background var(--dur-fast) var(--ease-paper)'
      },
      onMouseEnter: e => {
        if (!on) e.currentTarget.style.background = 'var(--paper-warm)';
      },
      onMouseLeave: e => {
        if (!on) e.currentTarget.style.background = 'transparent';
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: s.icon || 'feather',
      size: 16,
      style: {
        color: 'var(--fam-' + s.id + ')'
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1
      }
    }, s.label), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 10,
        color: 'var(--text-faint)'
      }
    }, s.count)));
  })));
}
function WikiApp() {
  const data = window.WIKI_DATA;
  const BrowseView = window.BrowseView;
  const ArticleView = window.ArticleView;
  const PartView = window.PartView;
  const [view, setView] = useShellState({
    kind: 'part',
    section: 'puzzles'
  });
  const open = id => {
    const entry = data.entries.find(e => e.id === id);
    if (entry) {
      setView({
        kind: 'article',
        id,
        section: entry.family || view.section
      });
      window.scrollTo(0, 0);
    }
  };
  const home = () => {
    setView({
      kind: 'browse',
      section: view.section
    });
    window.scrollTo(0, 0);
  };
  const goPart = section => {
    setView({
      kind: 'part',
      section
    });
    window.scrollTo(0, 0);
  };
  const entry = view.kind === 'article' ? data.entries.find(e => e.id === view.id) : null;
  // Fallback for stub entries with no body: synthesize a minimal one.
  const fullEntry = entry && !entry.body ? {
    ...entry,
    body: [{
      type: 'lead',
      text: entry.silhouette
    }, {
      type: 'p',
      text: 'This specimen is catalogued but its full field-record is still being written. Its place in the cross-link graph is already fixed.',
      prov: 'corpus'
    }],
    backlinks: []
  } : entry;
  const activeSection = view.kind === 'article' ? entry && entry.family : view.section;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: '100vh',
      background: 'var(--paper)'
    }
  }, /*#__PURE__*/React.createElement(Masthead, {
    onHome: home
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'stretch'
    }
  }, /*#__PURE__*/React.createElement(NavRail, {
    sections: data.sections,
    currentSection: activeSection,
    onPick: goPart
  }), /*#__PURE__*/React.createElement("main", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, view.kind === 'browse' && /*#__PURE__*/React.createElement(BrowseView, {
    data: data,
    onOpen: open
  }), view.kind === 'part' && /*#__PURE__*/React.createElement(PartView, {
    family: view.section,
    data: data,
    onOpen: open
  }), view.kind === 'article' && /*#__PURE__*/React.createElement(ArticleView, {
    entry: fullEntry,
    data: data,
    onOpen: open
  }))));
}
window.WikiApp = WikiApp;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/wiki/WikiShell.jsx", error: String((e && e.message) || e) }); }

// ui_kits/wiki/data.js
try { (() => {
/* Sample content for the Field Guide wiki UI kit.
   Not the real corpus — representative entries that exercise every
   component and the cross-link graph. Exposed as window.WIKI_DATA. */
window.WIKI_DATA = {
  sections: [{
    id: 'structure',
    label: 'Structure & Pacing',
    count: 31,
    icon: 'structure'
  }, {
    id: 'puzzles',
    label: 'Puzzles, Clues & Information',
    count: 27,
    icon: 'puzzles'
  }, {
    id: 'story',
    label: 'Story, Character & Voice',
    count: 34,
    icon: 'story'
  }, {
    id: 'players',
    label: 'Players & Social Dynamics',
    count: 24,
    icon: 'players'
  }, {
    id: 'space',
    label: 'Space, Props & Materiality',
    count: 18,
    icon: 'space'
  }, {
    id: 'systems',
    label: 'Systems & Mechanics',
    count: 24,
    icon: 'systems'
  }],
  /* Each family is a PART; the part page integrates its PRIMER (title shown
     as the part's subtitle) then lists the numbered articles. Story's primer
     is still to be written. */
  primers: {
    structure: {
      part: 'A',
      title: 'The Shape of Time',
      lead: 'Every designed experience has a shape in time — a curve of tension, a loop, a branching tree. Before any scene is written, the designer is choosing a silhouette for the whole.'
    },
    puzzles: {
      part: 'B',
      title: 'The Fairness Contract',
      lead: 'A puzzle is a promise: that an attentive solver, working only with what they were given, can get there from here. Everything in this family is built on keeping that promise.'
    },
    story: {
      part: 'C',
      title: null,
      lead: 'The narrative and aesthetic layer — voice, character, world. The primer for this family is still being written.'
    },
    players: {
      part: 'D',
      title: 'The Social Contract & Safety',
      lead: 'Before the game begins, the table agrees — often silently — on what is allowed, what is real, and how to stop. This family is about making that agreement deliberate.'
    },
    space: {
      part: 'E',
      title: 'Making It Real',
      lead: 'The physical and sensory layer: the artefact in the hand, the lock that opens, the room that wraps the player. Where the game stops being described and starts being touched.'
    },
    systems: {
      part: 'F',
      title: 'The Engine Room',
      lead: 'Underneath the fiction is the engine that decides what happens — dice, clocks, moves, economies. This family is about the machinery and the table-feel it produces.'
    }
  },
  facets: [{
    id: 'cluing',
    label: 'Cluing',
    count: 42
  }, {
    id: 'fairness',
    label: 'Fairness',
    count: 27
  }, {
    id: 'mood',
    label: 'Mood',
    count: 31
  }, {
    id: 'pacing',
    label: 'Pacing',
    count: 23
  }, {
    id: 'social',
    label: 'Social Contract',
    count: 18
  }, {
    id: 'failure',
    label: 'Failure Modes',
    count: 14
  }],
  entries: [{
    id: 'fairness-contract',
    number: 14,
    family: 'puzzles',
    taxon: 'Puzzles · Cluing & Information',
    title: 'Cluing & Fairness',
    provenance: 'researched',
    silhouette: 'The contract that says a solver who pays attention can get there from here.',
    media: 'if',
    plateCaption: 'The locked diorama — every clue placed in plain sight.',
    tags: ['Cluing', 'Fairness', 'Information'],
    body: [{
      type: 'lead',
      text: 'Cluing is the craft of handing over exactly enough to reach the answer and no more. A puzzle with no clues is a locked box with no keyhole; a puzzle with the wrong clues is a box with the answer painted on the lid. The work sits between those two failures.'
    }, {
      type: 'p',
      text: 'Fairness is the promise underneath. An attentive person, working only with what the puzzle gave them, can reach the solution without guessing and without secret knowledge. The same promise wears four coats: "fair play" in a detective story, the "Three Clue Rule" at a tabletop, "no tricks" in a puzzle hunt.',
      prov: 'synthesis'
    }, {
      type: 'h',
      text: 'The Mechanism'
    }, {
      type: 'p',
      text: 'A puzzle is fair when a sufficiently attentive solver can reach the answer using only what the puzzle provides, plus any convention they had a way to find first. The test is reachability, not ease: a fair puzzle can still be brutally hard.',
      prov: 'corpus'
    }, {
      type: 'h3',
      text: 'Every clue does work'
    }, {
      type: 'p',
      text: 'Nothing on the page is decorative by accident. Anything a solver might take for a clue should either do real work or be deliberately neutral — and the convention has to hold. Let odd capitals hide a message in one puzzle and solvers will hunt for hidden messages forever after.',
      prov: 'corpus'
    }, {
      type: 'callout',
      kind: 'specimen',
      title: 'MIT Mystery Hunt',
      text: 'Decades of a shared cluing grammar solvers carry between puzzles: answers arrive as all-caps phrases so metas can extract from them, a grid of exactly 26 entries probably means the alphabet, and the 2014 Hunt ruled flavour text was never required to solve — declared up front, so solvers knew where they stood.'
    }, {
      type: 'h3',
      text: 'Indirection, not obscurity'
    }, {
      type: 'p',
      text: 'The line that matters is between indirection and obscurity. Under indirection the solver works, yet every step reads clearly as a step once found. Under obscurity the path stays hidden even from full attention. The discipline is to make each move hard to make but easy to recognise once made.',
      prov: 'corpus'
    }, {
      type: 'callout',
      kind: 'hazard',
      text: 'The seductive failure is the clever rule only you know. The tell is when your own playtest notes say "they should have realised" more than once — the designer\u2019s voice covering an unfair gap. The solver does not owe you the leap.'
    }, {
      type: 'h',
      text: 'Where this fits'
    }, {
      type: 'p',
      text: 'Fairness is the floor the rest of this family stands on. Once a puzzle is fair, the craft turns to the payoff fair cluing has earned — the aha moment — and, when fair clues still leave solvers stuck, to graceful hint systems and recovery.',
      prov: 'synthesis'
    }, {
      type: 'sources',
      items: ['Wilson, D. "Introduction to Writing Good Puzzle Hunt Puzzles." MIT.', 'Selinker & Snyder. Puzzlecraft. Lone Shark Games, 2012.', 'Alexander, J. "The Three Clue Rule." The Alexandrian, 2008.', 'Van Dine, S. S. "Twenty Rules for Writing Detective Stories." 1928.']
    }],
    backlinks: [{
      title: 'Red Herrings & False Leads',
      taxon: 'Puzzles',
      id: 'red-herrings'
    }, {
      title: 'The Locked-Room Mystery',
      taxon: 'Structure',
      id: 'locked-room'
    }, {
      title: 'Diegetic Hint Systems',
      taxon: 'Story',
      id: 'diegetic-hints'
    }],
    exemplar: {
      title: 'Return of the Obra Dinn',
      subtitle: 'Lucas Pope · 2018',
      rows: [{
        label: 'Medium',
        value: 'Deduction game'
      }, {
        label: 'Mechanism',
        value: 'Memento mori watch'
      }, {
        label: 'Cluing',
        value: 'Triangulation'
      }, {
        label: 'Fairness',
        value: 'Verify-in-threes'
      }]
    }
  }, {
    id: 'red-herrings',
    number: 15,
    family: 'puzzles',
    taxon: 'Puzzles · Cluing & Information',
    title: 'Red Herrings & False Leads',
    silhouette: 'A lie the design tells on purpose — and must let the player catch.',
    media: 'tabletop',
    tags: ['Cluing', 'Fairness', 'Failure Modes']
  }, {
    id: 'diegetic-hints',
    number: 7,
    family: 'story',
    taxon: 'Story · Diegetic Design',
    title: 'Diegetic Hint Systems',
    silhouette: 'Help that arrives from inside the world, never from above it.',
    media: 'live',
    tags: ['Diegesis', 'Cluing', 'Immersion']
  }, {
    id: 'locked-room',
    number: 31,
    family: 'structure',
    taxon: 'Structure · Branching Topology',
    title: 'The Locked-Room Mystery',
    silhouette: 'A bounded world where the answer was always already inside.',
    media: 'if',
    tags: ['Information', 'Pacing', 'Fairness']
  }, {
    id: 'magic-circle',
    number: 2,
    family: 'players',
    taxon: 'Players · Trust & Pressure',
    title: 'The Magic Circle',
    silhouette: 'The invisible line a player steps across to agree the game is real.',
    media: 'tabletop',
    tags: ['Social Contract', 'Safety']
  }, {
    id: 'dread-pacing',
    number: 22,
    family: 'structure',
    taxon: 'Structure · Pacing & Energy',
    title: 'The Architecture of Dread',
    silhouette: 'Fear is a tempo, not a monster.',
    media: 'live',
    tags: ['Pacing', 'Tension', 'Mood']
  }]
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/wiki/data.js", error: String((e && e.message) || e) }); }

__ds_ns.Backlinks = __ds_scope.Backlinks;

__ds_ns.EntryCard = __ds_scope.EntryCard;

__ds_ns.Silhouette = __ds_scope.Silhouette;

__ds_ns.StatBlock = __ds_scope.StatBlock;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.MediaBadge = __ds_scope.MediaBadge;

__ds_ns.ProvenanceMark = __ds_scope.ProvenanceMark;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Callout = __ds_scope.Callout;

__ds_ns.FilterChip = __ds_scope.FilterChip;

__ds_ns.SearchInput = __ds_scope.SearchInput;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.IllustrationPlate = __ds_scope.IllustrationPlate;

})();
