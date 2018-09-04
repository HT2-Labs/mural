import { css } from '../../utils/mural-styled-components';

import ThemeProvider from '../../themes/themeProps';
import { Align } from '../../utils/AlignmentProps';
import { getSize, Size } from '../../utils/sizes';

export interface TextProps {
  readonly alignment?: Align;
  readonly bold?: boolean;
  readonly children: React.ReactNode;
  readonly textColor?: ((props: { readonly theme: ThemeProvider }) => string) | string;
  readonly italic?: boolean;
  readonly size?: Size;
  readonly spacing?: Size | string;
}

const textStyle = css<TextProps>`
  color: ${(props) => props.textColor !== undefined ? props.textColor : props.theme.color.BodyText};
  font-style: ${(props) => props.italic !== undefined ? 'italic' : 'normal'};
  font-weight: ${(props) => props.bold !== undefined ? '700' : '300'};
  margin: 0 0 ${(props) => getSize(props.spacing, Size.Default)};
  width: 100%;
`;

export default textStyle;
