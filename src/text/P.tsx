import * as React from 'react';
import styled from 'styled-components';
import TextProps from './TextProps';
import { getFontSize } from './textStyle';

export default ({
  children, size, color = String(({ theme }: any ) => theme.color.Button),
 }: TextProps) => {
  const P = styled.p`
    color: ${color};
    font-size: ${getFontSize(size)};
  `;

  return (
    <P>
      {children}
    </P>
  );
};
