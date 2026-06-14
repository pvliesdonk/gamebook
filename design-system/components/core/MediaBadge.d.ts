import * as React from 'react';

/**
 * Pill marking which of the four media an entry belongs to. Each medium owns one ink.
 *
 * @startingPoint section="Core" subtitle="The four-media wayfinding pill" viewport="700x90"
 */
export interface MediaBadgeProps {
  /** Which face of the guide. @default "if" */
  media?: 'if' | 'live' | 'tabletop' | 'hunt';
  /** Override the default label text. */
  label?: string;
  /** Fill the pill (for dark rails/headers). @default false */
  solid?: boolean;
}
export function MediaBadge(props: MediaBadgeProps): JSX.Element;
