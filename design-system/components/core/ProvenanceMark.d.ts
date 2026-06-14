import * as React from 'react';

/** Mono bracket-tag declaring a claim's source: corpus / researched / synthesis. */
export interface ProvenanceMarkProps {
  /** @default "corpus" */
  kind?: 'corpus' | 'researched' | 'synthesis';
}
export function ProvenanceMark(props: ProvenanceMarkProps): JSX.Element;
