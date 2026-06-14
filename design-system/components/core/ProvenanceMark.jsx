import React from 'react';

const PROV = {
  corpus:     { label: 'corpus',     color: 'var(--prov-corpus)' },
  researched: { label: 'researched', color: 'var(--prov-researched)' },
  synthesis:  { label: 'synthesis',  color: 'var(--prov-synthesis)' },
};

/**
 * ProvenanceMark — the mono bracket-tag declaring where a claim comes
 * from: [corpus] (from the vault), [researched] (external source),
 * [synthesis] (author's own argument). The guide's honesty mechanism.
 */
export function ProvenanceMark({ kind = 'corpus', ...rest }) {
  const p = PROV[kind] || PROV.corpus;
  return (
    <span
      style={{
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
        verticalAlign: 'baseline',
      }}
      {...rest}
    >
      [{p.label}]
    </span>
  );
}
