import * as React from 'react';
import styled from 'styled-components';

import CardProps from './CardProps';

const CardSplashHeader = ({ children }: CardProps) => {
  const CardSplashHeaderContainer = styled.div`
    display: flex;
    height: 18px;
    margin-bottom: -18px;
    width: 100%;
  `;
  return (
    <CardSplashHeaderContainer>
      {children}
    </CardSplashHeaderContainer>
  );
};

export default CardSplashHeader;
