import * as React from 'react';
import styled from 'styled-components';
import { SizeType } from '.';
import fontStyle from '../utils/fontStyle';
import { TextProps } from './textProps';
import { getFontSize } from './textStyle';

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
    font-size: ${getFontSize(size, SizeType.Medium)};
    margin: ${margin !== undefined ? '15px 0 10px 0' : 0};
    width: 100%;
    font-weight: 100;
  `;

  return <HeaderText>{fontStyle({ italic, strong, children })}</HeaderText>;
};

export default H3;
