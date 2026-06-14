import React from 'react';
import { Icon } from '../media/Icon.jsx';

/**
 * FilterChip — a toggle facet in the browse rail. Quiet outline when off,
 * amber-tinted with a check when on. Optional trailing count. This is how
 * a reader narrows the gazetteer by mechanism, medium or topic.
 */
export function FilterChip({ children, active = false, count, onClick, ...rest }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      style={{
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
        transition: 'all var(--dur-fast) var(--ease-paper)',
      }}
      onMouseEnter={(e) => { if (!active) { e.currentTarget.style.background = 'var(--paper-warm)'; e.currentTarget.style.borderColor = 'var(--ink-faint)'; } }}
      onMouseLeave={(e) => { if (!active) { e.currentTarget.style.background = 'var(--paper-pure)'; e.currentTarget.style.borderColor = 'var(--border-strong)'; } }}
      {...rest}
    >
      {active && <Icon name="check" size={13} strokeWidth={2} />}
      {children}
      {count != null && (
        <span style={{
          fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: 0,
          color: active ? 'var(--amber-ink)' : 'var(--text-faint)',
          opacity: 0.8,
        }}>{count}</span>
      )}
    </button>
  );
}
