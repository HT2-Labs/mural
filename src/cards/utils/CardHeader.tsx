import styled from '../../utils/mural-styled-components';

import { darken, readableColor } from 'polished';
import CardProps from './CardProps';

const CardHeader = styled.div<CardProps>`
  box-sizing: border-box;
  padding: 12px 20px;
  width: 100%;

  background-color: ${({ headerColor }) =>
    headerColor !== undefined ? headerColor : ({ theme }) => theme.color.White};

  color: ${({ headerColor, theme }) => {
    if (headerColor === undefined) {
      return theme.color.BodyText;
    }
    if (headerColor instanceof Function) {
      return readableColor(darken(0.1, headerColor({ theme })));
    }
    return readableColor(headerColor);
  }};
`;

export default CardHeader;
