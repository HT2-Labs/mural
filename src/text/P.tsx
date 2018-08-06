import * as React from 'react';
import styled from 'styled-components';
import TextProps from './TextProps';
import { getFontSize } from './textStyle';

export default ({ children, size }: TextProps) => {
  const P = styled.p`
    color: ${({ theme }) => theme.colorText};
    font-size: ${getFontSize(size)};
  `;

  return (
    <P>
      {children}
    </P>
  );
};
