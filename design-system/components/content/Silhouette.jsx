import React from 'react';

/**
 * Silhouette — the italic one-line "jizz" that opens every entry: the
 * shape of the idea recognised at a glance, before any detail. Sits
 * directly under the plate title, above the body.
 */
export function Silhouette({ children, ...rest }) {
  return (
    <p
      style={{
        fontFamily: 'var(--font-subhead)',
        fontStyle: 'italic',
        fontSize: 'var(--text-lg)',
        lineHeight: 1.32,
        color: 'var(--ink-soft)',
        margin: '0 0 var(--space-5)',
        maxWidth: 'var(--measure)',
      }}
      {...rest}
    >
      {children}
    </p>
  );
}
