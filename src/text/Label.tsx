import * as React from 'react';
import styled from 'styled-components';
import { SizeType } from '.';
import fontStyle from '../utils/fontStyle';
import { TextProps } from './textProps';
import { getFontSize } from './textStyle';

const Label = ({
  color = String(({ theme }: any) => theme.color.Button),
  italic,
  strong,
  size,
  children,
  margin,
}: TextProps) => {
  const LabelText = styled.label`
    display: block;
    color: ${color};
    font-size: ${getFontSize(size, SizeType.Small)};
    margin: ${margin !== undefined ? '5px 0 5px 0' : 0};
  `;

  return <LabelText>{fontStyle({ italic, strong, children })}</LabelText>;
};

export default Label;
