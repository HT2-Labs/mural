import styled from '../utils/mural-styled-components';

export enum aspectRatio {
  banner,
  square,
}

export interface CardMediaProps {
  readonly height?: aspectRatio | string;
  readonly url?: string;
}

const CardMedia = styled.div<CardMediaProps>`
  background-image: url(${(props) => props.url});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: 100%;
  padding-top: 100%;
  width: 100%;
`;

export default CardMedia;
