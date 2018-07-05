import * as React from 'react';
import styled from 'styled-components';

import CardProps from '../utils/CardProps';

export default ({ children }: CardProps) => {
  const CardSplashText = styled.div`
    align-items: center;
    display: flex;
    font-size: 20px;
    height: 100%;
    justify-content: center;
    line-height: 1.19;
    width: 100%;
  `;
  return (
    <CardSplashText>
      {children}
    </CardSplashText>
  );
};
