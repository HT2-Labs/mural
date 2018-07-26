import * as React from 'react';
import styled from 'styled-components';
import ListProps from './ListProps';

export default ({ children }: ListProps) => {
  const ListItem = styled.li`
    color: ${({ theme }) => theme.color.BodyText};
    font-size: 16px;
    list-style: none;
    padding: 8px 12px;
  `;

  return (
    <ListItem>{children}</ListItem>
  );
};
