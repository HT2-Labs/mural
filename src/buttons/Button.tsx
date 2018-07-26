import * as React from 'react';
import styled from 'styled-components';
import defaultTo from '../utils/defaultTo';
import ButtonProps, { ButtonType } from './ButtonProps';

export default ({
  children,
  danger = false,
  disabled = false,
  fullWidth = false,
  ghostColor ,
  onClick,
  type,
}: ButtonProps) => {
  const Button = styled.button`
    border-radius: ${({ theme }) => theme.radius.Button};
    box-sizing: border-box;
    cursor: ${disabled ? 'not-allowed' : 'pointer'};
    display: block;
    flex-shrink: 0;
    font-size: 16px;
    font-weight: 700;
    margin: 4px;
    padding: 8px 16px;
    text-align: center;
    width: ${fullWidth ? '100%' : 'auto'};
    &:hover {
      box-shadow: ${disabled ? 'none' : ({ theme }) => theme.shadow.Large};
      transform: ${disabled ? 'none' : 'translate3D(0, 2px, 0)'};
      transition: all 0.15s ease 0s;
    }
    &:active {
      box-shadow: none;
    }
    & svg {
      position: relative;
      top: .1em;
    }
  `;
  const color = danger
    ? ({ theme }: any) => theme.color.Danger
    : ({ theme }: any) => theme.color.Button
  ;
  const NormalButton = styled(Button)`
    background-color: ${color};
    border: 2px solid ${color};
    box-shadow: ${({ theme }) => theme.shadow.Main};
    color: ${({ theme }) => theme.color.ButtonText};
  `;
  const GhostButton = styled(Button)`
    background-color: transparent;
    border: 2px solid ${defaultTo(ghostColor, color)};
    box-shadow: none;
    color: ${defaultTo(ghostColor, color)};
  `;
  const DisabledButton = styled(Button)`
    background-color: ${({ theme }) => theme.color.Disabled};
    border: 2px solid ${({ theme }) => theme.color.Disabled};
    box-shadow: none;
    color: ${({ theme }) => theme.color.DisabledText};
  `;
  const DisabledGhostButton = styled(Button)`
    background-color: transparent;
    border: 2px solid ${({ theme }) => theme.color.Disabled};
    box-shadow: none;
    color: ${({ theme }) => theme.color.DisabledText};
  `;
  const chooseButton = () => {
    if (disabled && type === ButtonType.Ghost) { return DisabledGhostButton; }
    if (disabled) { return DisabledButton; }
    if (type === ButtonType.Ghost) { return GhostButton; }
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
