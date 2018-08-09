import * as React from 'react';
import styled from 'styled-components';
import TextProps from './TextProps';
import { getFontSize } from './textStyle';

export default ({
   children, size, color = String(({ theme }: any ) => theme.color.Button),
 }: TextProps) => {
  const Label = styled.label`
    display: block;
    color: ${color};
    font-size: ${getFontSize(size)};
  `;

  return (
    <Label>
      {children}
    </Label>
  );
};
