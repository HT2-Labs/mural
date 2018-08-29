import styled from '../utils/mural-styled-components';

export interface MediaProps {
  readonly height?: string;
  readonly url?: string;
}

const Media = styled.div<MediaProps>`
  background-image: url(${(props) => props.url !== undefined ? props.url : null});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  padding-top: ${(props) => props.height !== undefined ? props.height : '100%'};
  width: 100%;
`;

export default Media;
