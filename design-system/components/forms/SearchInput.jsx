import React from 'react';
import { Icon } from '../media/Icon.jsx';

/**
 * SearchInput — the field guide's lookup field. A serif-set field with a
 * leading lens glyph and a quiet paper-white well; the way you enter the
 * vault. Controlled or uncontrolled.
 */
export function SearchInput({
  value,
  defaultValue,
  placeholder = 'Search the guide…',
  onChange,
  size = 'md',
  ...rest
}) {
  const pad = size === 'lg' ? '13px 16px 13px 44px' : '10px 14px 10px 40px';
  const fs = size === 'lg' ? 17 : 15;
  const [focus, setFocus] = React.useState(false);
  return (
    <div style={{ position: 'relative', maxWidth: 460 }}>
      <span style={{
        position: 'absolute', left: size === 'lg' ? 16 : 13,
        top: '50%', transform: 'translateY(-50%)',
        color: focus ? 'var(--amber-ink)' : 'var(--ink-faint)',
        lineHeight: 0, pointerEvents: 'none',
        transition: 'color var(--dur-fast) var(--ease-paper)',
      }}>
        <Icon name="search" size={size === 'lg' ? 18 : 16} />
      </span>
      <input
        type="search"
        value={value}
        defaultValue={defaultValue}
        placeholder={placeholder}
        onChange={onChange}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        style={{
          width: '100%',
          fontFamily: 'var(--font-serif)',
          fontSize: fs,
          color: 'var(--ink-soft)',
          padding: pad,
          background: 'var(--paper-pure)',
          border: '1px solid ' + (focus ? 'var(--amber)' : 'var(--border-strong)'),
          borderRadius: 'var(--radius-sm)',
          outline: 'none',
          boxShadow: focus ? '0 0 0 3px var(--amber-tint)' : 'none',
          transition: 'border-color var(--dur-fast) var(--ease-paper), box-shadow var(--dur-fast) var(--ease-paper)',
          boxSizing: 'border-box',
        }}
        {...rest}
      />
    </div>
  );
}
