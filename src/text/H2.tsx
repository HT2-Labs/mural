import styled from '../utils/mural-styled-components';
import { getSize, Size } from '../utils/sizes';
import textStyles, { TextProps } from './utils/textStyles';

const H2 = styled.h2<TextProps>`
  ${textStyles}
  font-size: ${(props) => getSize(props.size, Size.ExtraLarge)};
`;

export default H2;
