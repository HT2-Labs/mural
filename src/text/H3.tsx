import * as React from 'react';
import styled from 'styled-components';
import fontStyle from '../utils/fontStyle';
import { Size } from '../utils/sizes';
import { TextProps } from './utils/textProps';
import { getFontSize } from './utils/textStyle';

const H3 = ({
  color = String(({ theme }: any) => theme.color.Button),
  italic,
  strong,
  size,
  children,
  margin,
}: TextProps) => {
  const HeaderText = styled.h3`
    color: ${color};
    font-size: ${getFontSize(size, Size.Mega)};
    margin: ${margin !== undefined ? '15px 0 10px 0' : 0};
    width: 100%;
    font-weight: 100;
  `;

  return <HeaderText>{fontStyle({ italic, strong, children })}</HeaderText>;
};

export default H3;
