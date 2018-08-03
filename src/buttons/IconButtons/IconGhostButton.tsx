import * as React from 'react';
import buttonGhostDisabledStyle from '../utils/buttonGhostDisabledStyle';
import buttonGhostStyle from '../utils/buttonGhostStyle';
import buttonIconStyle from '../utils/buttonIconStyle';
import IconButtonProps, { Size } from './iconButtonProps';

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
  const Button = buttonIconStyle(buttonSize, fontSize, disabled);

  const GhostButton = buttonGhostStyle(Button, ({ theme }: any) => theme.color.Button);

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
