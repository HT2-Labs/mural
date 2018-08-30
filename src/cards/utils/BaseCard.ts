import styled from '../../utils/mural-styled-components';

import { readableColor } from 'polished';
import CardProps from './CardProps';

const BaseCard = styled.div<CardProps>`
  border-radius: ${({ theme }) => theme.radius.Medium};
  border: 3px solid rgba(0, 0, 0, ${({ backgroundColor }) => backgroundColor !== undefined
    ? backgroundColor
    : ({ theme }) => theme.color.White});
  box-shadow: ${({ onClick, theme }) =>
    onClick !== undefined ? theme.shadow.Medium : theme.shadow.Small};
  box-sizing: border-box;
  color: ${({ backgroundColor, theme }) => {
    if (backgroundColor === undefined) {
      return theme.color.BodyText;
    }
    if (backgroundColor instanceof Function) {
      return readableColor(backgroundColor({ theme }));
    }
    return readableColor(backgroundColor);
  }};
  background: ${({ backgroundColor }) =>
    backgroundColor !== undefined ? backgroundColor : ({ theme }) => theme.color.White};
  cursor: ${(props) => (props.onClick !== undefined ? 'pointer' : 'initial')};
  overflow: hidden;
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  &:hover {
    ${({ onClick, theme }) => (onClick !== undefined ? theme.shadow.Large : '')};
    transform: ${({ onClick }) => (onClick !== undefined ? 'scale(1.01)' : 'none')};
  }
`;

export default BaseCard;
