import * as React from 'react';
import styled from 'styled-components';

import CardProps from '../utils/CardProps';

export default ({ children }: CardProps) => {
  const CardSplashSubText = styled.div`
    font-size: 16px;
    padding-top: 10px;
  `;
  return (
    <CardSplashSubText>
      {children}
    </CardSplashSubText>
  );
};
