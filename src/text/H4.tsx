import styled from '../utils/mural-styled-components';
import { getSize, Size } from '../utils/sizes';
import textStyles, { TextProps } from './utils/textStyles';

const H4 = styled.h4<TextProps>`
  ${textStyles}
  font-size: ${(props) => getSize(props.size, Size.Default)};
`;

export default H4;
