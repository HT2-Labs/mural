import * as React from 'react';
import styled from 'styled-components';

import CardProps from './CardProps';

export default ({ children }: CardProps) => {
  const CardSplashText = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    font-size: 20px;
    height: 100%;
    justify-content: center;
    line-height: 1.19;
    text-align: center;
    width: 100%;
  `;
  return (
    <CardSplashText>
      {children}
    </CardSplashText>
  );
};
