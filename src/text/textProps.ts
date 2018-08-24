import { ReactNode } from 'react';
import ThemeProvider from '../themes/themeProps';
import { Align } from '../utils/AlignmentProps';

export enum SizeType {
  Small,
  Body,
  Medium,
  Large,
  ExtraLarge,
}

export interface TextProps {
  readonly children: ReactNode;
  readonly size?: SizeType;
  readonly color?: ((props: { readonly theme: ThemeProvider }) => string) | string;
  readonly strong?: boolean;
  readonly italic?: boolean;
  readonly alignment?: Align;
}

export interface LinkProps {
  readonly children: ReactNode;
  readonly color?: ((props: { readonly theme: ThemeProvider }) => string) | string;
  readonly external?: boolean;
  readonly href?: string;
  readonly onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  readonly size?: SizeType;
}
