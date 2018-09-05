import * as React from 'react';
import styled from 'styled-components';
import { getSize, Size } from '../../utils/sizes';
import MenuProps from './menuProps';

const TabItem = ({ active = false, children, onClick}: MenuProps) => {
  const Item = styled.button`
    display: flex;
    border-left: none;
    border-top: none;
    border-right: none;
    border-bottom: 4px solid;
    border-color: ${active ? ({ theme }) => theme.color.Button : 'transparent'};
    box-sizing: border-box;
    background: transparent;
    color: ${active
      ? ({ theme }) => theme.color.Button
      : ({ theme }) => theme.color.BodyText
    };
    flex: 0;
    font-family: inherit;
    font-size: ${getSize(Size.Default, Size.Default)};
    height: 44px;
    padding: 0 16px;
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
    <Item
      aria-selected={active}
      onClick={onClick}
      role="tab"
    >
      {children}
    </Item>
  );
};

export default TabItem;
