import * as React from 'react';
import styled from 'styled-components';
import ListProps from './ListProps';

export default ({ children, canSelect }: ListProps) => {
  const ListContainer = styled.ul`
    background-color: #fff;
    box-shadow: ${({ theme }) => theme.shadow.Main};
    height: 100%;
    margin: 0;
    overflow-y: auto;
    padding: 0;
  `;

  return (
    <ListContainer selectType={ canSelect }>
      {children}
    </ListContainer>
  );
};
