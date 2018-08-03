import * as React from 'react';
import buttonInvisibleStyle from '../utils/buttonInvisibleStyle';
import buttonStyle from '../utils/buttonStyle';
import ButtonProps from './buttonProps';

export default ({
  children,
  danger = false,
  disabled = false,
  fullWidth = false,
  onClick,
}: ButtonProps) => {

  const Button = buttonStyle(fullWidth, disabled);

  const color = danger
    ? ({ theme }: any) => theme.color.Danger
    : ({ theme }: any) => theme.color.Button;

  const InvisibleButton = buttonInvisibleStyle(Button, color);

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
