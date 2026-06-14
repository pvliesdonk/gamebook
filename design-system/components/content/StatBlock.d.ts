import * as React from 'react';

/** The exemplar field-record: titled specimen with a mono key/value table of taxonomic data. */
export interface StatRow { label: string; value: React.ReactNode; }
export interface StatBlockProps {
  title: string;
  /** Italic sub-line, e.g. designer + year. */
  subtitle?: string;
  media?: 'if' | 'live' | 'tabletop' | 'hunt';
  rows: StatRow[];
}
export function StatBlock(props: StatBlockProps): JSX.Element;
