import * as React from 'react';
import styled from 'styled-components';
import MenuProps from './menuProps';

export default ({ active = false, children, onClick}: MenuProps) => {
  const TabItem = styled.button`
    display: flex;
    border-left: none;
    border-top: none;
    border-right: none;
    border-bottom: 4px solid;
    border-color: ${active ? ({ theme }) => theme.color.Button : 'transparent'};
    box-sizing: border-box;
    background: none;
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
      border-color: ${({ theme }) => theme.color.ButtonLight};
      color: ${({ theme }) => theme.color.ButtonLight};
      cursor: pointer;
    }
    & svg {
      position: relative;
      top: .15em;
      margin-left: 6px;
    }
  `;

  return (
    <TabItem
      aria-selected={active}
      onClick={onClick}
      role="tab"
    >
      {children}
    </TabItem>
  );
};
