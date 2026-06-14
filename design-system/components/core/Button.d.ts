import * as React from 'react';

/**
 * The field guide's primary action control — amber fill, quiet outline, or ghost.
 *
 * @startingPoint section="Core" subtitle="Amber / secondary / ghost action button" viewport="700x120"
 */
export interface ButtonProps {
  children: React.ReactNode;
  /** Visual weight. @default "primary" */
  variant?: 'primary' | 'secondary' | 'ghost';
  /** @default "md" */
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  type?: 'button' | 'submit' | 'reset';
}

export function Button(props: ButtonProps): JSX.Element;
