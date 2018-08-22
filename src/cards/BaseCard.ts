import { readableColor } from 'polished';
import styled from '../utils/mural-styled-components';
import CardProps from './utils/CardProps';

const BaseCard = styled.div<CardProps>`
    border-radius: ${({ theme }) => theme.radius.Medium};
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
    background-color: ${({backgroundColor}) => backgroundColor !== undefined
      ? backgroundColor
      : ({ theme }) => theme.color.White
    };
    cursor: ${(props) => props.onClick !== undefined ? 'pointer' : 'initial'};
    overflow: hidden;
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    height: 100%;
    &:hover {
      ${({onClick}) => onClick !== undefined ? 'box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.12)' : ''};
      transform: ${({onClick}) => onClick !== undefined ? 'scale(1.01)' : 'none'};
    };
  `;

export default BaseCard;
