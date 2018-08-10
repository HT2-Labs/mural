import * as React from 'react';
import styled from 'styled-components';
import fontStyle from '../utils/fontStyle';
import TextProps from './TextProps';
import { getFontSize } from './textStyle';

export default ({
  color = String(({ theme }: any ) => theme.color.Button),
  italic,
  strong,
  size,
  children,
 }: TextProps) => {
  const Label = styled.label`
    display: block;
    color: ${color};
    font-size: ${getFontSize(size)};
  `;

  return (
    <Label>
      {fontStyle({italic, strong, children}) }
    </Label>
  );
};
