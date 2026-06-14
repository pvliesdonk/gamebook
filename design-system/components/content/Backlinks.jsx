import React from 'react';
import { Icon } from '../media/Icon.jsx';

/**
 * Backlinks — the "Referenced by" register at the foot of an entry: the
 * wiki's bidirectional links rendered as a labelled list of inbound
 * plates. Each link is { title, taxon?, href? }. This is the mechanism
 * that turns the guide from a book into a connected vault.
 */
export function Backlinks({ label = 'Referenced by', links = [], ...rest }) {
  return (
    <section
      style={{
        borderTop: '1px solid var(--border-hairline)',
        paddingTop: 'var(--space-4)',
        maxWidth: 'var(--measure)',
      }}
      {...rest}
    >
      <div style={{
        fontFamily: 'var(--font-label)', fontSize: 11, fontWeight: 600,
        letterSpacing: '0.08em', textTransform: 'uppercase',
        color: 'var(--text-faint)', marginBottom: 10,
      }}>
        {label} <span style={{ color: 'var(--ink-faint)' }}>· {links.length}</span>
      </div>
      <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 2 }}>
        {links.map((l, i) => (
          <li key={i}>
            <a
              href={l.href || '#'}
              style={{
                display: 'flex', alignItems: 'baseline', gap: 10,
                textDecoration: 'none', padding: '6px 8px',
                marginLeft: -8, borderRadius: 'var(--radius-xs)',
                transition: 'background var(--dur-fast) var(--ease-paper)',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--paper-warm)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; }}
            >
              <span style={{ color: 'var(--amber-ink)', lineHeight: 0, marginTop: 3 }}><Icon name="corner-down-right" size={14} /></span>
              <span>
                <span style={{ fontFamily: 'var(--font-serif)', fontSize: 15, color: 'var(--ink-soft)' }}>{l.title}</span>
                {l.taxon && (
                  <span style={{ fontFamily: 'var(--font-label)', fontSize: 10, fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--text-faint)', marginLeft: 10 }}>
                    {l.taxon}
                  </span>
                )}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
