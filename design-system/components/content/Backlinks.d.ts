import * as React from 'react';

/** The "Referenced by" register — inbound wiki links that connect one plate to the vault. */
export interface BacklinkItem { title: string; taxon?: string; href?: string; }
export interface BacklinksProps {
  /** @default "Referenced by" */
  label?: string;
  links: BacklinkItem[];
}
export function Backlinks(props: BacklinksProps): JSX.Element;
