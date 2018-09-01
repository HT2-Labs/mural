import * as React from 'react';
import styled from 'styled-components';
import fontStyle from '../utils/fontStyle';
import { Size } from '../utils/sizes';
import { TextProps } from './utils/textProps';
import { getFontSize } from './utils/textStyle';

const P = ({
  color = String(({ theme }: any) => theme.color.Button),
  italic,
  strong,
  size,
  children,
  margin,
}: TextProps) => {
  const Paragraph = styled.p`
    color: ${color};
    font-size: ${getFontSize(size, Size.Default)};
    margin: ${margin !== undefined ? '15px 0 10px 0' : 0};
    font-weight: 100;
  `;

  return <Paragraph>{fontStyle({ italic, strong, children })}</Paragraph>;
};

export default P;
