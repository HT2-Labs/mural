import * as React from 'react';
import styled from 'styled-components';

import CardProps from '../utils/CardProps';

export default ({ children }: CardProps) => {
  const CardTitle = styled.h3`
    font-size: 13px;
    font-weight: normal;
    line-height: 1.25;
    margin: 0;
    width: 100%;
  `;
  return (
    <CardTitle>
      {children}
    </CardTitle>
  );
};
