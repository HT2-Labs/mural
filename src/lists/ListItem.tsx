import * as React from 'react';
import styled from 'styled-components';
import ListProps from './ListProps';

const ListItem = ({ children }: ListProps) => {
  const Item = styled.li`
    color: ${({ theme }) => theme.color.BodyText};
    font-size: 16px;
    list-style: none;
    padding: 8px 12px;
  `;

  return (
    <Item>{children}</Item>
  );
};

export default ListItem;
