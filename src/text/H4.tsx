import * as React from 'react';
import styled from '../utils/mural-styled-components';

import ThemeProvider from '../themes/themeProps';
import { Align } from '../utils/AlignmentProps';
import { Size } from '../utils/sizes';
import { getFontSize } from './utils/textStyle';

export interface TextProps {
  readonly alignment?: Align;
  readonly bold?: boolean;
  readonly children: React.ReactNode;
  readonly color?: ((props: { readonly theme: ThemeProvider }) => string) | string;
  readonly italic?: boolean;
  readonly size?: any;
  readonly spacing?: Size | string | undefined;
}

const H4 = styled.h4<TextProps>`
  color: ${(props) => props.color ? props.color : props.theme.color.BodyText};
  font-size: ${getFontSize((props: any) => props.size, Size.Default)};
  font-style: ${(props) => props.italic ? 'italic' : 'normal'};
  font-weight: ${(props) => props.bold ? '700' : '300'};
  margin: 0 0 ${getFontSize((props) => props.spacing, Size.Default)};
  width: 100%;
`;

export default H4;
