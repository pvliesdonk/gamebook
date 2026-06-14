import * as React from 'react';

/** The guide's lookup field — serif-set, leading lens glyph, paper-white well. */
export interface SearchInputProps {
  value?: string;
  defaultValue?: string;
  /** @default "Search the guide…" */
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  /** @default "md" */
  size?: 'md' | 'lg';
}
export function SearchInput(props: SearchInputProps): JSX.Element;
