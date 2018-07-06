import * as React from 'react';
import styled from 'styled-components';
import ButtonProps, { ButtonType } from '../utils/ButtonProps';

export default ({ children, onClick, type, disabled }: ButtonProps) => {
  const Button = styled.button`
    border-radius: 2px;
    box-sizing: border-box;
    cursor: ${disabled !== undefined ? 'not-allowed' : 'pointer'};
    display: block;
    font-size: 14px;
    font-weight: 700;
    margin: 4px;
    padding: 10px 16px;
    text-align: center;
    text-transform: uppercase;
    width: auto;
    &:hover {
      box-shadow: ${disabled !== undefined ? 'none' : '0 2px 2px 2px rgba(0, 0, 0, 0.14)'};
      transform: ${disabled !== undefined ? 'none' : 'translateY(2px)'};
      transition: all 0.15s ease 0s;
    }
    &:active {
      box-shadow: none;
    }
  `;
  const NormalButton = styled(Button)`
    background-color: ${({ theme }) => theme.colorButton};
    border: 2px solid ${({ theme }) => theme.colorButton};
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.24);;
    color: #fff;
  `;
  const GhostButton = styled(Button)`
    background-color: #fff;
    border: 2px solid ${({ theme }) => theme.colorButton};
    box-shadow: none;
    color: ${({ theme }) => theme.colorButton};
  `;
  const DisabledButton = styled(Button)`
    background-color: #eee;
    border: 2px solid #eee;
    box-shadow: none;
    color: #444;
  `;
  const DisabledGhostButton = styled(Button)`
    background-color: #fff;
    border: 2px solid #eee;
    box-shadow: none;
    color: #777;
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
