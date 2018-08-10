import * as React from 'react';
import styled from 'styled-components';
import fontStyle from '../utils/fontStyle';
import TextProps from './TextProps';
import { getFontSize } from './textStyle';

const P = ({
  color = String(({ theme }: any ) => theme.color.Button),
  italic,
  strong,
  size,
  children,
 }: TextProps) => {
  const Paragraph = styled.p`
    color: ${color};
    font-size: ${getFontSize(size)};
  `;

  return (
    <Paragraph>
      {fontStyle({italic, strong, children}) }
    </Paragraph>
  );
};

export default P;
