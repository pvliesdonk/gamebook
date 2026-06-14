import React from 'react';

/**
 * Tag — a taxonomic label chip. The small-caps Franklin token used
 * for facets, mechanisms and topics. Quiet by default; `accent`
 * tints it amber for the active/selected state.
 */
export function Tag({ children, accent = false, size = 'md', ...rest }) {
  const fs = size === 'sm' ? 10 : 11;
  const pad = size === 'sm' ? '2px 7px' : '3px 9px';
  return (
    <span
      style={{
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
        whiteSpace: 'nowrap',
      }}
      {...rest}
    >
      {children}
    </span>
  );
}
