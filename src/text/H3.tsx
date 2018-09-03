import styled from '../utils/mural-styled-components';
import { getSize, Size } from '../utils/sizes';
import textStyles, { TextProps } from './utils/textStyles';

const H3 = styled.h3<TextProps>`
  ${textStyles}
  font-size: ${(props) => getSize(props.size, Size.Mega)};
`;

export default H3;
