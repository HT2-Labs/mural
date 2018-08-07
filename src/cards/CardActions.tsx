import * as React from 'react';
import styled from 'styled-components';
import CardProps from './CardProps';

export default ({ children }: CardProps) => {
  const CardActions = styled.div`
    display: flex;
    position: absolute;
    bottom: 0;
  `;

  return (
    <CardActions>
      {children}
    </CardActions>
  );
};
