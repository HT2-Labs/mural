import * as React from 'react';
import styled from 'styled-components';

import CardProps from '../utils/CardProps';

export default ({ children }: CardProps) => {
  const CardFooter = styled.div`
    display: flex;
    font-size: 14px;
    justify-self: flex-end;
    width: 100%;
  `;
  return (
    <CardFooter>
      {children}
    </CardFooter>
  );
};
