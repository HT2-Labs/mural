import * as React from 'react';
import styled from 'styled-components';
import fontStyle from '../utils/fontStyle';
import { TextProps } from './textProps';
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
    margin: 0;
  `;

  return (
    <Paragraph>
      {fontStyle({italic, strong, children}) }
    </Paragraph>
  );
};

export default P;
