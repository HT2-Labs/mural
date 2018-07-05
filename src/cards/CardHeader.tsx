import * as React from 'react';
import styled from 'styled-components';

import CardProps from '../utils/CardProps';

export default ({ children }: CardProps) => {
  const CardHeader = styled.div`
    display: flex;
    height: 18px;
    margin-bottom: 10px;
    width: 100%;
  `;
  return (
    <CardHeader>
      {children}
    </CardHeader>
  );
};
