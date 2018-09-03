import * as React from 'react';
import styled from 'styled-components';
import fontStyle from '../utils/fontStyle';
import { getSize, Size } from '../utils/sizes';
import { TextProps } from './utils/textProps';

const Label = ({
  color = String(({ theme }: any) => theme.color.Button),
  italic,
  strong,
  size,
  children,
}: TextProps) => {
  const LabelText = styled.label`
    display: block;
    color: ${color};
    font-size: ${getSize(size, Size.Default)};
  `;

  return <LabelText>{fontStyle({ italic, strong, children })}</LabelText>;
};

export default Label;
