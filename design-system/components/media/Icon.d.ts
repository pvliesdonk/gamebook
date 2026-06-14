import * as React from 'react';

/**
 * A Phosphor Thin glyph, brand-tuned to sit with Jenson. Inherits currentColor.
 *
 * Names: search · arrow-right · arrow-left · corner-down-right · check · feather · map · list ·
 * structure · puzzles · story · players · space · systems (the six families) ·
 * if · live · tabletop · hunt (media).
 *
 * @startingPoint section="Media" subtitle="Brand line-icon set (Phosphor Thin, inlined)" viewport="700x140"
 */
export interface IconProps {
  /** Glyph name — see Icon.names. */
  name: string;
  /** px. @default 18 */
  size?: number;
  /** Accepted for API compatibility; Phosphor Thin has its weight baked in (ignored). */
  strokeWidth?: number;
  /** Accessible label; omit for decorative (aria-hidden). */
  label?: string;
  style?: React.CSSProperties;
}
export function Icon(props: IconProps): JSX.Element;
