import ThemeProvider from '../../themes/themeProps';
import styled from '../../utils/mural-styled-components';

import { invert, readableColor, transparentize } from 'polished';

const alpha = 0.1;

const Overlay = styled.div<{
  readonly backgroundColor?: ((props: { readonly theme: ThemeProvider }) => string) | string;
  readonly showOverlay: boolean;
}>`
  background-color: ${(props) =>
    props.showOverlay
      ? ({ backgroundColor, theme }) => {
          if (backgroundColor === undefined) {
            return transparentize(alpha, invert(theme.color.BodyText));
          }
          if (backgroundColor instanceof Function) {
            return transparentize(alpha, invert(readableColor(backgroundColor({ theme }))));
          }
          return transparentize(alpha, invert(readableColor(backgroundColor)));
        }
      : null};

  box-sizing: border-box;
  padding: 4px;
  position: absolute;
  right: 0;
  z-index: 20;
  height: ${(props) => props.showOverlay ? '100%' : null};
  width: ${(props) => props.showOverlay ? '100%' : null};
`;

export default Overlay;
