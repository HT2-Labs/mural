import * as React from 'react';
import styled from 'styled-components';

import CardProps from './CardProps';

const CardSplashSubText = ({ children }: CardProps) => {
  const CardSplashSubTextContainer = styled.div`
    font-size: 16px;
    padding-top: 10px;
  `;
  return (
    <CardSplashSubTextContainer>
      {children}
    </CardSplashSubTextContainer>
  );
};

export default CardSplashSubText;
