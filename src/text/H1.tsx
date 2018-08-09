import * as React from 'react';
import styled from 'styled-components';
import TextProps from './TextProps';
import { getFontSize } from './textStyle';

export default ({
  children, size, color = String(({ theme }: any ) => theme.color.Button),
}: TextProps) => {
  const H1 = styled.h1`
    color: ${color};
    font-size: ${getFontSize(size)};
    margin: 0;
  `;

  return (
    <H1>
      {children}
    </H1>
  );
};
