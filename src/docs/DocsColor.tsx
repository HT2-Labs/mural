import * as React from 'react';
import styled from 'styled-components';

export default ( {color, children }: any) => {

  const ColorItem = styled.div`
    background-color: ${color};
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
