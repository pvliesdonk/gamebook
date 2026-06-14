import * as React from 'react';

/**
 * A mounted naturalist engraving frame — real illustration via `src`, or a labelled
 * "plate to come" placeholder. The brand's answer to bare pages.
 *
 * @startingPoint section="Media" subtitle="Naturalist illustration plate / placeholder" viewport="420x320"
 */
export interface IllustrationPlateProps {
  /** Figure label, e.g. "Fig. 14". */
  figure?: string;
  /** Italic plate caption. */
  caption?: string;
  /** Finished engraving URL; omit for the placeholder. */
  src?: string;
  alt?: string;
  /** Height / width. @default 0.62 */
  ratio?: number;
  /** Hatch + ink tone. @default "moss" */
  tone?: 'moss' | 'slate' | 'clay' | 'ochre' | 'amber';
  /** Mounted frame + gutter (screen). Set false for print — art sits directly on the page. @default true */
  framed?: boolean;
  style?: React.CSSProperties;
}
export function IllustrationPlate(props: IllustrationPlateProps): JSX.Element;
