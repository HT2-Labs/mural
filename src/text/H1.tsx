import styled from '../utils/mural-styled-components';
import { getSize, Size } from '../utils/sizes';
import textStyles, { TextProps } from './utils/textStyles';

const H1 = styled.h1<TextProps>`
  ${textStyles}
  font-size: ${(props) => getSize(props.size, Size.Tera)};
`;

export default H1;
