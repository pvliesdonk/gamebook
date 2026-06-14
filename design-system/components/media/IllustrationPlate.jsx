import React from 'react';

/**
 * IllustrationPlate — a mounted naturalist engraving frame. Until real
 * illustrations are generated it shows a labelled placeholder ("plate
 * to come") with a faint hatched ground and a figure number; pass `src`
 * to drop in the finished engraving. This is the brand's answer to bare
 * pages: every major entry can carry a plate.
 *
 * ratio: height as a fraction of width (e.g. 0.62 landscape, 1.3 portrait).
 */
export function IllustrationPlate({
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
    moss: 'var(--moss)', slate: 'var(--slate)', clay: 'var(--clay)',
    ochre: 'var(--ochre)', amber: 'var(--amber-ink)',
  }[tone] || 'var(--moss)';
  const toneRGB = {
    moss: '93,107,63', slate: '63,97,104', clay: '160,73,47',
    ochre: '176,138,46', amber: '192,120,64',
  }[tone] || '93,107,63';

  const frame = framed
    ? { background: 'var(--paper-pure)', border: '1px solid var(--rule-strong)', borderRadius: 'var(--radius-xs)', boxShadow: 'var(--shadow-plate)', padding: 8 }
    : { background: 'transparent', border: 0, padding: 0 };
  const innerBorder = framed ? '1px solid var(--rule)' : 'none';

  return (
    <figure style={{ margin: 0, ...rest.style }}>
      <div style={{ position: 'relative', ...frame }}>
        <div style={{
          position: 'relative',
          width: '100%',
          paddingTop: (ratio * 100) + '%',
          border: innerBorder,
          overflow: 'hidden',
          background: src ? (framed ? 'var(--paper-warm)' : 'transparent') : `repeating-linear-gradient(45deg, rgba(${toneRGB},0.09) 0 1px, transparent 1px 9px), var(--paper-warm)`,
        }}>
          {src ? (
            <img src={src} alt={alt || caption || ''} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
          ) : (
            <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 8 }} aria-hidden="true">
              <span style={{ fontSize: 30, lineHeight: 1, color: toneInk }}>{'\u2042'}</span>
              <span style={{ fontFamily: 'var(--font-label)', fontSize: 10, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--ink-faint)' }}>
                Plate &middot; engraving to come
              </span>
            </div>
          )}
        </div>
      </div>
      {(figure || caption) && (
        <figcaption style={{ display: 'flex', gap: 8, marginTop: 9, paddingLeft: 2 }}>
          {figure && (
            <span style={{ fontFamily: 'var(--font-label)', fontSize: 10, fontWeight: 700, letterSpacing: '0.09em', textTransform: 'uppercase', color: toneInk, whiteSpace: 'nowrap' }}>
              {figure}
            </span>
          )}
          {caption && (
            <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 13, lineHeight: 1.45, color: 'var(--ink-muted)' }}>
              {caption}
            </span>
          )}
        </figcaption>
      )}
    </figure>
  );
}
