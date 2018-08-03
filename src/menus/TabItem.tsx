import * as React from 'react';
import styled from 'styled-components';
import MenuProps from './menuProps';

export default ({ active = false, children, onClick }: MenuProps) => {
  const TabItem = styled.div`
    border-bottom: 4px solid;
    border-color: ${active ? ({ theme }) => theme.color.Button : 'transparent'};
    box-sizing: border-box;
    color: ${active
      ? ({ theme }) => theme.color.Button
      : ({ theme }) => theme.color.BodyText
    };
    flex: 0;
    font-size: 16px;
    height: 44px;
    padding: 12px 16px 0px;
    text-align: center;
    width: 100%;
    &:hover {
      border-color: ${({ theme }) => theme.color.Button};
      color: ${({ theme }) => theme.color.Button};
      cursor: pointer;
    }
  `;

  return (
    <TabItem onClick={onClick}>
      {children}
    </TabItem>
  );
};
