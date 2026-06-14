import React from 'react';
import { MediaBadge } from '../core/MediaBadge.jsx';
import { Tag } from '../core/Tag.jsx';

/**
 * EntryCard — a single plate in a browse grid or "Referenced by" list.
 * Shows the entry number, taxon kicker, title, silhouette line, and a
 * row of facet tags. The amber top-rule marks it as a field-guide plate.
 */
export function EntryCard({
  number,
  taxon,
  title,
  silhouette,
  tags = [],
  media,
  href = '#',
  ...rest
}) {
  return (
    <a
      href={href}
      style={{
        display: 'block',
        textDecoration: 'none',
        background: 'var(--surface-card)',
        border: '1px solid var(--border-hairline)',
        borderTop: '2px solid var(--amber)',
        borderRadius: 'var(--radius-md)',
        padding: '15px 18px 16px',
        transition: 'box-shadow var(--dur-base) var(--ease-paper), border-color var(--dur-fast) var(--ease-paper)',
      }}
      onMouseEnter={(e) => { e.currentTarget.style.boxShadow = 'var(--shadow-raised)'; }}
      onMouseLeave={(e) => { e.currentTarget.style.boxShadow = 'none'; }}
      {...rest}
    >
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, marginBottom: 9 }}>
        {number != null && (
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--amber-ink)', letterSpacing: '0.03em' }}>
            № {number}
          </span>
        )}
        {taxon && (
          <span style={{ fontFamily: 'var(--font-label)', fontSize: 10, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-faint)' }}>
            {taxon}
          </span>
        )}
        {media && <span style={{ marginLeft: 'auto' }}><MediaBadge media={media} /></span>}
      </div>
      <h3 style={{ fontFamily: 'var(--font-subhead)', fontSize: 'var(--text-lg)', fontWeight: 600, color: 'var(--ink)', margin: '0 0 5px', lineHeight: 1.18 }}>
        {title}
      </h3>
      {silhouette && (
        <p style={{ fontFamily: 'var(--font-subhead)', fontStyle: 'italic', fontSize: 14, color: 'var(--ink-muted)', margin: '0 0 11px', lineHeight: 1.4 }}>
          {silhouette}
        </p>
      )}
      {tags.length > 0 && (
        <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
          {tags.map((t) => <Tag key={t} size="sm">{t}</Tag>)}
        </div>
      )}
    </a>
  );
}
