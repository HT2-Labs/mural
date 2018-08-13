import * as React from 'react';
import styled from 'styled-components';

import CardProps from './CardProps';

const CardHeader = ({ children }: CardProps) => {
  const CardHeaderContainer = styled.div`
    display: flex;
    margin-bottom: 10px;
    width: 100%;
    padding: 12px 20px 0;
  `;
  return (
    <CardHeaderContainer>
      {children}
    </CardHeaderContainer>
  );
};

export default CardHeader;
