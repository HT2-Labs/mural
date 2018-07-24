import * as React from 'react';
import styled from 'styled-components';
import CardProps from './CardProps';

export default ({ children }: CardProps) => {
  const CardActions = styled.div`
    margin: auto 4px auto auto;
  `;

  return (
    <CardActions>
      {children}
    </CardActions>
  );
};
