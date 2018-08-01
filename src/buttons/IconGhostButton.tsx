// tslint:disable:max-file-line-count
// tslint:disable:no-magic-numbers
import { ReactNode } from 'react';
import * as React from 'react';
import styled from 'styled-components';
import defaultTo from '../utils/defaultTo';

export enum Size {
  Small,
  Medium,
  Large,
}

interface ButtonProps {
  readonly children: ReactNode;
  readonly size?: Size;
  readonly color?: string;
  readonly ghostColor?: string;
  readonly backgroundColor?: string;
  readonly danger?: boolean;
  readonly disabled?: boolean;
  readonly onClick?: (e: React.MouseEvent<HTMLElement>) => void;
}

const getButtonSize = (size: Size) => {
  switch (size) {
    case Size.Small: return 32;
    case Size.Medium: default: return 50;
    case Size.Large: return 80;
  }
};

const getFontSize = (size: Size) => {
  switch (size) {
    case Size.Small: return 16;
    case Size.Medium: default: return 25;
    case Size.Large: return 40;
  }
};

export default ({
  children,
  danger = false,
  disabled = false,
  size = Size.Medium,
  ghostColor,
  onClick,

}: ButtonProps) => {
  const buttonSize = getButtonSize(size);
  const fontSize = getFontSize(size);
  const Button = styled.button`
    border-radius: 50%;
    box-sizing: border-box;
    cursor: ${disabled ? 'not-allowed' : 'pointer'};
    display: block;
    flex-shrink: 0;
    font-size: ${fontSize}px;
    font-weight: 500;
    padding: 2px;
    text-align: center;
    text-transform: uppercase;
    font-family: 'Roboto', sans-serif;
    width: ${buttonSize}px;
    height: ${buttonSize}px};
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
  const color = danger
    ? ({ theme }: any) => theme.color.Danger
    : ({ theme }: any) => theme.color.Button
    ;
  const GhostButton = Button.extend`
    background-color: transparent;
    border: 2px solid ${defaultTo(ghostColor, color)};
    box-shadow: none;
    color: ${defaultTo(ghostColor, color)};
  `;
  const DisabledGhostButton = Button.extend`
    background-color: transparent;
    border: 2px solid ${({ theme }) => theme.color.Disabled};
    box-shadow: none;
    color: ${({ theme }) => theme.color.DisabledText};
  `;

  const chooseButton = () => {
    if (disabled) { return DisabledGhostButton; }
    return GhostButton;
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
