import * as React from 'react';
import styled from 'styled-components';
import TextProps from './TextProps';
import { getFontSize } from './textStyle';

export default ({
  children, size, color = String(({ theme }: any ) => theme.color.Button),
 }: TextProps) => {
  const H4 = styled.h4`
    color: ${color};
    font-size: ${getFontSize(size)};
    margin: 0;
  `;

  return (
    <H4>
      {children}
    </H4>
  );
};
