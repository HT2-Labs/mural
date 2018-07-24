import * as React from 'react';
import styled from 'styled-components';
import CardProps from './CardProps';

export default ({ children }: CardProps) => {
  const CardBody = styled.div`
    display: flex;
    font-size: 16px;
    height: 100%;
    line-height: 1.19;
    width: 100%;
  `;
  return (
    <CardBody>
      {children}
    </CardBody>
  );
};
