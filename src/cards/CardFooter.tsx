import * as React from 'react';
import styled from 'styled-components';

import CardProps from './CardProps';

const CardFooter = ({ children }: CardProps) => {

  const CardFooterContainer = styled.div`
    display: flex;
    font-size: 14px;
    justify-self: flex-end;
    width: 100%;
  `;

  return (
    <CardFooterContainer>
      {children}
    </CardFooterContainer>
  );
};

export default CardFooter;
