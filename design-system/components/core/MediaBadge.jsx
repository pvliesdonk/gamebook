import React from 'react';
import { Icon } from '../media/Icon.jsx';

const MEDIA = {
  if:       { label: 'Interactive Fiction', icon: 'if' },
  live:     { label: 'Live Game',           icon: 'live' },
  tabletop: { label: 'Tabletop',            icon: 'tabletop' },
  hunt:     { label: 'Puzzle-hunt',         icon: 'hunt' },
};

/**
 * MediaBadge — a NEUTRAL pill marking which of the four media an entry
 * uses. Colour is the FAMILY channel, so media is carried by ICON +
 * label in plain ink (no per-medium colour). `solid` inverts it for
 * dark rails/headers.
 */
export function MediaBadge({ media = 'if', label, solid = false, ...rest }) {
  const m = MEDIA[media] || MEDIA.if;
  const text = label || m.label;
  return (
    <span
      style={{
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
        whiteSpace: 'nowrap',
      }}
      {...rest}
    >
      <Icon name={m.icon} size={13} strokeWidth={1.75} />
      {text}
    </span>
  );
}
