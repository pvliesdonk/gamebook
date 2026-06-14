import * as React from 'react';

/** Taxonomic label chip — facets, mechanisms, topics. Amber `accent` marks the active one. */
export interface TagProps {
  children: React.ReactNode;
  /** Tint amber for the selected/active state. @default false */
  accent?: boolean;
  /** @default "md" */
  size?: 'sm' | 'md';
}
export function Tag(props: TagProps): JSX.Element;
