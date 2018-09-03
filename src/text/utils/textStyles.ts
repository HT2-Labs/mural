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

const textStyle = css<TextProps>`
  color: ${(props) => props.color ? props.color : props.theme.color.BodyText};
  font-style: ${(props) => props.italic ? 'italic' : 'normal'};
  font-weight: ${(props) => props.bold ? '700' : '300'};
  margin: 0 0 ${(props) => getSize(props.spacing, Size.Default)};
  width: 100%;
`;

export default textStyle;
