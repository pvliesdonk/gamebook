import * as React from 'react';

/**
 * A single plate in a browse grid or backlink list — number, taxon, title, silhouette, facet tags.
 *
 * @startingPoint section="Content" subtitle="Field-guide entry plate card" viewport="380x200"
 */
export interface EntryCardProps {
  /** Catalogue number shown as "№ N". */
  number?: number | string;
  /** Taxon kicker, e.g. "Puzzles · Cluing". */
  taxon?: string;
  title: string;
  /** Italic one-line definition. */
  silhouette?: string;
  /** Facet tags. */
  tags?: string[];
  /** Optional media badge in the corner. */
  media?: 'if' | 'live' | 'tabletop' | 'hunt';
  href?: string;
}
export function EntryCard(props: EntryCardProps): JSX.Element;
