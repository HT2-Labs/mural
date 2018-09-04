import styled from '../utils/mural-styled-components';
import { getSize, Size } from '../utils/sizes';
import textStyles, { TextProps } from './utils/textStyles';

const P = styled.p<TextProps>`
  ${textStyles}
  font-size: ${(props) => getSize(props.size, Size.Default)};
`;

export default P;
