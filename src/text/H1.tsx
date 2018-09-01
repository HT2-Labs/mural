import * as React from 'react';
import styled from 'styled-components';
import fontStyle from '../utils/fontStyle';
import { Size } from '../utils/sizes';
import { TextProps } from './utils/textProps';
import { getFontSize } from './utils/textStyle';

const H1 = ({
  children,
  color = String(({ theme }: any) => theme.color.Button),
  italic,
  size,
  strong,
  margin,
}: TextProps) => {
  const HeaderText = styled.h1`
    color: ${color};
    font-size: ${getFontSize(size, Size.Tera)};
    margin: 0;
    width: 100%;
    font-weight: 100;
    margin: ${margin !== undefined ? '15px 0 10px 0' : 0};
  `;

  return <HeaderText>{fontStyle({ italic, strong, children })}</HeaderText>;
};

export default H1;
