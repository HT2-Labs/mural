import * as React from 'react';
import styled from 'styled-components';
import fontStyle from '../utils/fontStyle';
import { getSize, Size } from '../utils/sizes';
import textStyle from './utils/Text';
import { TextProps } from './utils/textProps';

const H2 = ({
  size,
  children,
}: TextProps) => {
  const HeaderText = styled.h2`
    ${textStyle}
    font-size: ${getSize(size, Size.Giga)};
  `;

  return <HeaderText>{children}</HeaderText>;
};

export default H2;
