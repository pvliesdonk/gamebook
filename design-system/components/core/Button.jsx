import React from 'react';

/**
 * Button — the field guide's primary action control.
 * Crisp corners, Franklin label, restrained. Amber fill is the
 * one loud variant; most chrome uses quiet or ghost.
 */
export function Button({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  iconLeft = null,
  iconRight = null,
  onClick,
  type = 'button',
  ...rest
}) {
  const pad = {
    sm: '6px 12px',
    md: '9px 16px',
    lg: '12px 22px',
  }[size];
  const fs = { sm: 12, md: 13, lg: 14 }[size];

  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    fontFamily: 'var(--font-label)',
    fontWeight: 600,
    fontSize: fs,
    letterSpacing: '0.04em',
    textTransform: 'uppercase',
    lineHeight: 1,
    padding: pad,
    borderRadius: 'var(--radius-sm)',
    border: '1px solid transparent',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.45 : 1,
    transition: 'background var(--dur-fast) var(--ease-paper), color var(--dur-fast) var(--ease-paper), border-color var(--dur-fast) var(--ease-paper)',
    whiteSpace: 'nowrap',
  };

  const variants = {
    primary: {
      background: 'var(--amber)',
      color: 'var(--paper)',
      borderColor: 'var(--amber-deep)',
    },
    secondary: {
      background: 'var(--paper-pure)',
      color: 'var(--ink-soft)',
      borderColor: 'var(--border-strong)',
    },
    ghost: {
      background: 'transparent',
      color: 'var(--amber-ink)',
      borderColor: 'transparent',
    },
  };

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      style={{ ...base, ...variants[variant] }}
      onMouseEnter={(e) => {
        if (disabled) return;
        if (variant === 'primary') e.currentTarget.style.background = 'var(--amber-deep)';
        if (variant === 'secondary') { e.currentTarget.style.background = 'var(--paper-warm)'; e.currentTarget.style.borderColor = 'var(--ink-faint)'; }
        if (variant === 'ghost') e.currentTarget.style.background = 'var(--amber-tint)';
      }}
      onMouseLeave={(e) => {
        Object.assign(e.currentTarget.style, variants[variant]);
      }}
      {...rest}
    >
      {iconLeft}
      {children}
      {iconRight}
    </button>
  );
}
