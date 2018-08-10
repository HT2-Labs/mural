import * as React from 'react';
import styled from 'styled-components';
import fontStyle from '../utils/fontStyle';
import TextProps from './TextProps';
import { getFontSize } from './textStyle';

const H2 = ({
  color = String(({ theme }: any ) => theme.color.Button),
  italic,
  strong,
  size,
  children,
}: TextProps) => {
  const HeaderText = styled.h2`
    color: ${color};
    font-size: ${getFontSize(size)};
    margin: 0;
  `;

  return (
    <HeaderText>
      {fontStyle({italic, strong, children}) }
    </HeaderText>
  );
};

export default H2;
