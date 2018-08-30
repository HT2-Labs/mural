import * as React from 'react';
import styled from 'styled-components';
import { SizeType } from '.';
import fontStyle from '../utils/fontStyle';
import { TextProps } from './textProps';
import { getFontSize } from './textStyle';

const P = ({
  color = String(({ theme }: any) => theme.color.Button),
  italic,
  strong,
  size,
  children,
}: TextProps) => {
  const Paragraph = styled.p`
    color: ${color};
    font-size: ${getFontSize(size, SizeType.Body)};
    margin: 0;
  `;

  return <Paragraph>{fontStyle({ italic, strong, children })}</Paragraph>;
};

export default P;
