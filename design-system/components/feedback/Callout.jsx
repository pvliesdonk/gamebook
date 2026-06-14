import React from 'react';

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
  fieldnote: { label: 'Field Note', ink: 'var(--slate-ink)', c: 'var(--slate)', edge: 'var(--slate-edge)', mark: '\u261E' },
  hazard:    { label: 'Hazard',     ink: 'var(--clay-ink)',  c: 'var(--clay)',  edge: 'var(--clay-edge)',  mark: '\u2021' },
  specimen:  { label: 'Specimen',   ink: 'var(--moss-ink)',  c: 'var(--moss)',  edge: 'var(--moss-edge)',  mark: '\u2042' },
};

function Rule({ color }) {
  return <div style={{ height: 0, borderTop: '2px solid ' + color }} aria-hidden="true" />;
}

export function Callout({ kind = 'specimen', title, plate = false, sidebar = false, children, ...rest }) {
  const v = VOICES[kind] || VOICES.specimen;

  /* ---- SIDEBAR: boxed, self-contained — for print margins / rails ---- */
  if (sidebar) {
    return (
      <aside
        style={{
          margin: 'var(--flow) 0',
          maxWidth: 'var(--measure-narrow)',
          background: 'var(--paper-pure)',
          border: '1px solid ' + v.edge,
          borderTop: '2px solid ' + v.c,
          borderRadius: 'var(--radius-xs)',
          padding: '13px 16px 15px',
          boxShadow: 'var(--shadow-plate)',
        }}
        {...rest}
      >
        <div style={{ fontFamily: 'var(--font-label)', fontSize: 10.5, fontWeight: 700, letterSpacing: '0.09em', textTransform: 'uppercase', color: v.ink, marginBottom: 6 }}>
          <span style={{ color: v.c, paddingRight: 4 }} aria-hidden="true">{v.mark}</span>
          {title || v.label}
        </div>
        <div style={{ fontFamily: 'var(--font-serif)', fontSize: 14, lineHeight: 1.52, color: 'var(--ink-soft)' }}>
          {children}
        </div>
      </aside>
    );
  }

  /* ---- INLINE: a penned run-in marginal aside ---- */
  if (kind === 'fieldnote') {
    return (
      <aside style={{ margin: 'var(--flow) 0', maxWidth: 'var(--measure-narrow)' }} {...rest}>
        <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 16, lineHeight: 1.6, color: 'var(--ink-soft)', margin: 0 }}>
          <span style={{ fontStyle: 'normal', fontFamily: 'var(--font-label)', fontWeight: 600, fontSize: 12, letterSpacing: '0.06em', textTransform: 'uppercase', color: v.ink, whiteSpace: 'nowrap' }}>
            <span style={{ color: v.c, paddingRight: 3 }} aria-hidden="true">{v.mark}</span>
            {title || v.label}.
          </span>{' '}
          {children}
        </p>
      </aside>
    );
  }

  /* ---- INLINE: a printed caution band, symmetric hatched rules ---- */
  if (kind === 'hazard') {
    return (
      <aside style={{ margin: 'var(--flow) 0', maxWidth: 'var(--measure-narrow)' }} {...rest}>
        <Rule color={v.c} />
        <p style={{ fontFamily: 'var(--font-serif)', fontSize: 15, lineHeight: 1.55, color: 'var(--ink-soft)', margin: 0, padding: '10px 0' }}>
          <span style={{ fontFamily: 'var(--font-label)', fontWeight: 700, fontSize: 12, letterSpacing: '0.06em', textTransform: 'uppercase', color: v.ink, whiteSpace: 'nowrap' }}>
            <span style={{ color: v.c, paddingRight: 3 }} aria-hidden="true">{v.mark}</span>
            {title || v.label}.
          </span>{' '}
          {children}
        </p>
        <Rule color={v.c} />
      </aside>
    );
  }

  /* ---- INLINE: specimen — quiet text-first note, plate is opt-in ---- */
  return (
    <figure
      style={{
        margin: 'var(--flow) 0',
        maxWidth: 'var(--measure-narrow)',
        background: 'var(--paper-pure)',
        border: '1px solid var(--border-hairline)',
        borderTop: '2px solid ' + v.c,
        borderRadius: 'var(--radius-xs)',
        overflow: 'hidden',
      }}
      {...rest}
    >
      {plate && (
        <div style={{
          height: 128, borderBottom: '1px solid var(--rule)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 7,
          background: 'repeating-linear-gradient(45deg, rgba(93,107,63,0.10) 0 1px, transparent 1px 8px), var(--paper-warm)',
        }} aria-hidden="true">
          <span style={{ fontSize: 26, color: v.c, lineHeight: 1 }}>{v.mark}</span>
          <span style={{ fontFamily: 'var(--font-label)', fontSize: 9.5, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--ink-faint)' }}>
            Plate &middot; engraving to come
          </span>
        </div>
      )}
      <figcaption style={{ padding: '12px 17px 15px' }}>
        <div style={{ fontFamily: 'var(--font-label)', fontSize: 10, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: v.ink }}>
          <span style={{ paddingRight: 4 }} aria-hidden="true">{v.mark}</span>{v.label}
        </div>
        {title && (
          <div style={{ fontFamily: 'var(--font-subhead)', fontSize: 19, fontWeight: 700, color: 'var(--ink)', margin: '4px 0 6px', lineHeight: 1.15 }}>
            {title}
          </div>
        )}
        <div style={{ fontFamily: 'var(--font-serif)', fontSize: 14.5, lineHeight: 1.5, color: 'var(--ink-soft)', marginTop: title ? 0 : 5 }}>
          {children}
        </div>
      </figcaption>
    </figure>
  );
}
