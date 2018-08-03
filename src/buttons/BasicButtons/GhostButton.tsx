import * as React from 'react';
import buttonGhostDisabledStyle from '../utils/buttonGhostDisabledStyle';
import ghostButtonStyle from '../utils/buttonGhostStyle';
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
    : ({ theme }: any) => theme.color.Button
    ;

  const GhostButton = ghostButtonStyle(Button, color);

  const DisabledGhostButton = buttonGhostDisabledStyle(Button);

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
