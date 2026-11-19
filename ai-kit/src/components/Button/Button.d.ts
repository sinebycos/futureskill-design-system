import type { ButtonHTMLAttributes, ReactNode } from 'react';

export type ButtonVariant = 'primary' | 'secondary' | 'text';
export type ButtonTone = 'brand' | 'neutral' | 'destructive' | 'inverse';
export type ButtonSize = 'large' | 'medium' | 'small' | 'tiny';

/**
 * Triggers an action.
 * @startingPoint section="Actions" subtitle="Primary, secondary and text buttons in four tones" viewport="700x420"
 */
export interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
  /** Primary = filled, secondary = outlined, text = no container. Default 'primary'. */
  variant?: ButtonVariant;
  /** Default 'brand'. Use 'inverse' only on background-inverse or another dark ground. */
  tone?: ButtonTone;
  /** Default 'medium' (40px). 'large' 54px, 'small' 32px. 'tiny' is the legacy 35px pill, brand tone only. */
  size?: ButtonSize;
  /** Square button with one icon and no label: 48px at medium, 32px at small. Pass the icon as iconLeft and an aria-label. */
  iconOnly?: boolean;
  /** Icon before the label, sized to the button: 24px large, 20px medium, 16px small. */
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  /** Pins a visual state for documentation. */
  state?: 'hover' | 'click' | 'disabled';
  /** The HTML button type. Default 'button'. */
  htmlType?: 'button' | 'submit' | 'reset';
}

export function Button(props: ButtonProps): JSX.Element;
