import * as React from 'react';

/** A toggle facet in the browse rail — outline when off, amber-tinted with a check when on. */
export interface FilterChipProps {
  children: React.ReactNode;
  /** @default false */
  active?: boolean;
  /** Optional trailing result count. */
  count?: number;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
export function FilterChip(props: FilterChipProps): JSX.Element;
