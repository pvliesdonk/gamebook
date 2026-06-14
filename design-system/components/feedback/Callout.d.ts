import * as React from 'react';

/**
 * The field guide's three annotation voices, set as printed asides (not docs boxes).
 * Inline form by default; `sidebar` renders a self-contained boxed aside for a print
 * margin or screen rail. Plates live at article/primer level (IllustrationPlate) — a
 * specimen may opt in to a small inset plate, but reads complete without one.
 *
 * @startingPoint section="Feedback" subtitle="Specimen / Field Note / Hazard printed asides" viewport="700x220"
 */
export interface CalloutProps {
  /** Which voice. @default "specimen" */
  kind?: 'specimen' | 'fieldnote' | 'hazard';
  /** Specimen: the specimen's name (e.g. the game). Field Note/Hazard: overrides the run-in voice label. */
  title?: string;
  /** Specimen only: opt in to a small inset illustration slot. Exception, not default. @default false */
  plate?: boolean;
  /** Render as a self-contained boxed aside (print margin / rail) instead of inline. @default false */
  sidebar?: boolean;
  children: React.ReactNode;
}
export function Callout(props: CalloutProps): JSX.Element;
