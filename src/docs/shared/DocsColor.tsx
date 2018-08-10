import { readableColor } from 'polished';
import * as React from 'react';
import styled from 'styled-components';

interface DocsColorProps {
  readonly children?: React.ReactNode;
  readonly color?: any;
}

const DocsColor = ( { color, children }: DocsColorProps) => {

  const ColorItem = styled.div`
    background-color: ${color};
    color: ${({ theme }) => readableColor(color({theme}))};
    width: 80px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
  `;

  return (
    <ColorItem>
      {children}
    </ColorItem>
  );
};

export default DocsColor;
