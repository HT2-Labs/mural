import { ReactNode } from 'react';
import ThemeProvider from '../../themes/themeProps';

export default interface CardProps {
  // Use for when a Card needs to be shown as active/selected
  readonly active?: boolean;

  // Sets the background color of the card
  readonly backgroundColor?: ((props: { readonly theme: ThemeProvider }) => string) | string;

  // Set background color of header/title
  readonly headerColor?: ((props: { readonly theme: ThemeProvider }) => string) | string;

  // Make content align centred vertically
  readonly centerContent?: boolean;

  // Sets the on click action for the card
  readonly onClick?: (e: React.MouseEvent<HTMLElement>) => void;

  // Adds the overlay menu to the Card and displays the overlayContent as the contents
  readonly overlayContent?: ReactNode;

  // Sets the Card title
  readonly title?: ReactNode | ReactNode[] | string;

  // Card children
  readonly children?: ReactNode;
}
