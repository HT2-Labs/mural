import * as React from 'react';
import buttonStyle from '../utils/buttonBasicStyles';
import buttonColorStyles from '../utils/buttonColorStyles';
import buttonGhostStyle from '../utils/buttonGhostStyles';
import ButtonProps from './buttonProps';

const ButtonGhost = ({
  children,
  danger = false,
  disabled = false,
  fullWidth = false,
  onClick,
  colorOverride,
}: ButtonProps) => {

  // Add to buttonColorStyles to set text color in place of background color
  const useTextColor = true;

  const BaseButton = buttonStyle({ fullWidth, disabled });
  const color = buttonColorStyles({ danger, disabled, useTextColor, colorOverride });
  const GhostButton = buttonGhostStyle({ BaseButton, color });

  return (
    <GhostButton
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </GhostButton>
  );
};

export default ButtonGhost;
