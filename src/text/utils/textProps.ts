import { ReactNode } from 'react';
import ThemeProvider from '../../themes/themeProps';
import { Align } from '../../utils/AlignmentProps';
import { Size } from '../../utils/sizes';

export interface TextProps {
  readonly children: ReactNode;
  readonly size?: Size;
  readonly color?: ((props: { readonly theme: ThemeProvider }) => string) | string;
  readonly strong?: boolean;
  readonly italic?: boolean;
  readonly alignment?: Align;
  readonly margin?: boolean;
}
