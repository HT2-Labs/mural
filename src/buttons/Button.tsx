import * as React from 'react';
import styled from 'styled-components';
import ButtonProps, { ButtonType } from '../utils/ButtonProps';

export {
  ButtonType,
};

export default ({ children, onClick, type, disabled }: ButtonProps) => {
  const Button = styled.button`
    border-radius: ${({ theme }) => theme.radius.Button};
    box-sizing: border-box;
    cursor: ${disabled !== undefined ? 'not-allowed' : 'pointer'};
    display: block;
    flex-shrink: 0;
    font-size: 16px;
    font-weight: 700;
    margin: 4px;
    padding: 8px 16px;
    text-align: center;
    width: auto;
    &:hover {
      box-shadow: ${disabled !== undefined ? 'none' : ({ theme }) => theme.shadow.Large};
      transform: ${disabled !== undefined ? 'none' : 'translate3D(0, 2px, 0)'};
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
  const NormalButton = styled(Button)`
    background-color: ${({ theme }) => theme.color.Button};
    border: 2px solid ${({ theme }) => theme.color.Button};
    box-shadow: ${({ theme }) => theme.shadow.Main};
    color: ${({ theme }) => theme.color.ButtonText};
  `;
  const GhostButton = styled(Button)`
    background-color: transparent;
    border: 2px solid ${({ theme }) => theme.color.Button};
    box-shadow: none;
    color: ${({ theme }) => theme.color.Button};
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
    if (disabled !== undefined && type === ButtonType.Ghost) { return DisabledGhostButton; }
    if (disabled !== undefined) { return DisabledButton; }
    if (type === ButtonType.Ghost) { return GhostButton; }
    return NormalButton;
  };
  const ChosenButton = chooseButton();

  return (
    <ChosenButton
      disabled={disabled !== undefined ? true : false}
      onClick={onClick}
      role={'button'}
    >
      {children}
    </ChosenButton>
  );
};
