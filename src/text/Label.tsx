import * as React from 'react';
import styled from 'styled-components';
import fontStyle from '../utils/fontStyle';
import { TextProps } from './textProps';
import { getFontSize } from './textStyle';

const Label = ({
  color = String(({ theme }: any ) => theme.color.Button),
  italic,
  strong,
  size,
  children,
 }: TextProps) => {
  const LabelText = styled.label`
    display: block;
    color: ${color};
    font-size: ${getFontSize(size)};
  `;

  return (
    <LabelText>
      {fontStyle({italic, strong, children}) }
    </LabelText>
  );
};

export default Label;
