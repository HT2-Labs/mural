import styled from '../utils/mural-styled-components';
import { getSize, Size } from '../utils/sizes';
import textStyle, { TextProps } from './utils/Text';

const H1 = styled.h1<TextProps>`
  ${textStyle}
  font-size: ${getSize((props: any) => props.size, Size.Tera)};
`;

export default H1;
