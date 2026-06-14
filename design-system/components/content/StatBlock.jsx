import React from 'react';

/**
 * StatBlock — the exemplar field-record: a titled specimen with a
 * mono key/value table of taxonomic data (medium, year, designer,
 * mechanism…). Used on exemplar/gazetteer entries. Each row is a
 * { label, value } pair.
 */
export function StatBlock({ title, subtitle, media, rows = [], ...rest }) {
  return (
    <div
      style={{
        background: 'var(--surface-card)',
        border: '1px solid var(--border-strong)',
        borderRadius: 'var(--radius-md)',
        overflow: 'hidden',
        maxWidth: 340,
      }}
      {...rest}
    >
      <div style={{ padding: '14px 16px 12px', borderBottom: '2px solid var(--rule-strong)' }}>
        <div style={{ fontFamily: 'var(--font-subhead)', fontSize: 'var(--text-lg)', fontWeight: 700, color: 'var(--ink)', lineHeight: 1.2 }}>
          {title}
        </div>
        {subtitle && (
          <div style={{ fontFamily: 'var(--font-subhead)', fontStyle: 'italic', fontSize: 13, color: 'var(--ink-muted)', marginTop: 3 }}>
            {subtitle}
          </div>
        )}
      </div>
      <table style={{ margin: 0, width: '100%', borderCollapse: 'collapse' }}>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i}>
              <td style={{
                fontFamily: 'var(--font-label)', fontSize: 10, fontWeight: 600,
                letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--text-faint)',
                padding: '8px 14px', width: '38%', verticalAlign: 'top',
                borderBottom: i === rows.length - 1 ? 'none' : '1px solid var(--border-hairline)',
              }}>
                {r.label}
              </td>
              <td style={{
                fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--ink-soft)',
                padding: '8px 14px', letterSpacing: '0.01em', lineHeight: 1.4,
                borderBottom: i === rows.length - 1 ? 'none' : '1px solid var(--border-hairline)',
              }}>
                {r.value}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
