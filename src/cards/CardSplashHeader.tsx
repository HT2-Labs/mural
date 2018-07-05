import * as React from 'react';
import styled from 'styled-components';

import CardProps from '../utils/CardProps';

export default ({ children }: CardProps) => {
  const CardSplashHeader = styled.div`
    display: flex;
    height: 18px;
    margin-bottom: -18px;
    width: 100%;
  `;
  return (
    <CardSplashHeader>
      {children}
    </CardSplashHeader>
  );
};
