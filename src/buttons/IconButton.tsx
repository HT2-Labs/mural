import * as React from 'react';
import styled from 'styled-components';
import IconButtonProps, { Size } from './IconButtonProps';

const getButtonSize = (size: Size) => {
  switch (size) {
    case Size.Small: return '32px';
    case Size.Medium: default: return '50px';
    case Size.Large: return '80px';
  }
};

const getFontSize = (size: Size) => {
  switch (size) {
    case Size.Small: return '16px';
    case Size.Medium: default: return '25px';
    case Size.Large: return '40px';
  }
};

export default ({
  children,
  disabled = false,
  size = Size.Medium,
  onClick,
}: IconButtonProps) => {

  const buttonSize = getButtonSize(size);
  const fontSize = getFontSize(size);

  const Button = styled.button`
    border-radius: 50%;
    box-sizing: border-box;
    cursor: ${disabled ? 'not-allowed' : 'pointer'};
    display: block;
    flex-shrink: 0;
    font-size: ${fontSize};
    font-weight: 500;
    padding: 2px;
    text-align: center;
    text-transform: uppercase;
    font-family: 'Roboto', sans-serif;
    width: ${buttonSize};
    height: ${buttonSize};
    &:hover {
      background-color: #168ccc;
    }
    &:active {
      box-shadow: none;
    }
    & svg {
      position: relative;
      top: .15em;
    }
  `;

  const NormalButton = Button.extend`
    background-color: ${({ theme }) => theme.color.Button};
    border: ${({ theme }) => theme.color.Button};
    box-shadow: ${({ theme }) => theme.shadow.Main};
    color: ${({ theme }) => theme.color.ButtonText};
  `;

  const DisabledButton = Button.extend`
    background-color: ${({ theme }) => theme.color.Disabled};
    border: 2px solid ${({ theme }) => theme.color.Disabled};
    box-shadow: none;
    color: ${({ theme }) => theme.color.DisabledText};
  `;

  const chooseButton = () => {
    if (disabled) { return DisabledButton; }
    return NormalButton;
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
