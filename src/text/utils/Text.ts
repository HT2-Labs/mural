import { css } from '../../utils/mural-styled-components';

import ThemeProvider from '../../themes/themeProps';
import { Align } from '../../utils/AlignmentProps';
import { getSize, Size } from '../../utils/sizes';

export interface TextProps {
  readonly alignment?: Align;
  readonly bold?: boolean;
  readonly children: React.ReactNode;
  readonly color?: ((props: { readonly theme: ThemeProvider }) => string) | string;
  readonly italic?: boolean;
  readonly size?: Size;
  readonly spacing?: Size | string;
}

const textStyle = css`
  color: ${(props) => props.color ? props.color : ({theme}: any) => theme.color.Success};
  margin: 0 0 ${getSize((props) => props.spacing, Size.Default)};
  width: 100%;
  font-weight: ${(props) => props.bold ? '700' : '300'};
  font-style: ${(props) => props.italic ? 'italic' : 'normal'};
`;

export default textStyle;
