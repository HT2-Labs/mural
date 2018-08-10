import * as React from 'react';
import styled from 'styled-components';
import TextProps from './TextProps';
import { getFontSize } from './textStyle';

export default ({
  children, size, color = String(({ theme }: any ) => theme.color.Button),
 }: TextProps) => {
  const H3 = styled.h3`
    color: ${color};
    font-size: ${getFontSize(size)};
    margin: 0;
  `;

  return (
    <H3>
      {children}
    </H3>
  );
};
