import * as React from 'react';
import styled from 'styled-components';
import fontStyle from '../utils/fontStyle';
import { TextProps } from './textProps';
import { getFontSize } from './textStyle';

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
    font-size: ${getFontSize(size)};
    margin: 0;
    width: 100%;
    font-weight: 100;
    margin: ${margin ? '15px 0 10px 0' : 0};
  `;

  return <HeaderText>{fontStyle({ italic, strong, children })}</HeaderText>;
};

export default H1;
