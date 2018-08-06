import * as React from 'react';
import styled from 'styled-components';
import TextProps from './TextProps';
import { getFontSize } from './textStyle';

export default ({ children, size }: TextProps) => {
  const H2 = styled.h2`
    color: ${({ theme }) => theme.color.BodyText};
    font-size: ${getFontSize(size)};
    margin: 0;
  `;

  return (
    <H2>
      {children}
    </H2>
  );
};
