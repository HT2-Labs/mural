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

export default interface TextProps {
  readonly children: ReactNode;
  readonly size?: SizeType;
  readonly color?: ((props: { readonly theme: ThemeProvider }) => string) | string;
  readonly strong?: boolean;
  readonly italic?: boolean;
  readonly alignment?: Align;
}
