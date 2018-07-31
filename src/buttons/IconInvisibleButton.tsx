// tslint:disable:max-file-line-count
import * as React from 'react';
import styled from 'styled-components';
import ButtonProps from './ButtonProps';

export default ({
  children,
  disabled = false,
  onClick,

}: ButtonProps) => {
  const Button = styled.button`
    border-radius: 50%;
    box-sizing: border-box;
    cursor: ${disabled ? 'not-allowed' : 'pointer'};
    display: block;
    flex-shrink: 0;
    font-size: 16px;
    font-weight: 500;
    padding: 2px;
    text-align: center;
    text-transform: uppercase;
    font-family: 'Roboto', sans-serif;
    width: 32px;
    height: 32px;
    &:hover {
      background-color: #eee;
    }
    &:active {
      box-shadow: none;
    }
    & svg {
      position: relative;
      top: .15em;
    }
  `;
  const InvisibleButton = Button.extend`
    background-color: transparent;
    border: 2px solid transparent;
    box-shadow: none;
    color: ${({ theme }) => theme.color.Button};
  `;
  const DisabledInvisibleButton = Button.extend`
    background-color: transparent;
    border: 2px solid transparent;
    box-shadow: none;
    color: ${({ theme }) => theme.color.DisabledText};
  `;
  const chooseButton = () => {
    if (disabled) { return DisabledInvisibleButton; }
    return InvisibleButton;

  };
  const ChosenButton = chooseButton();

  return (
    <ChosenButton
      disabled={disabled}
      onClick={onClick}
      role={'button'}
    >
      {children}
    </ChosenButton>
  );
};
