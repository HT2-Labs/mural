import * as React from 'react';
import buttonStyle from '../utils/buttonBasicStyles';
import buttonColorStyles from '../utils/buttonColorStyles';
import buttonInvisibleStyle from '../utils/buttonInvisibleStyles';
import ButtonProps from './buttonProps';

const ButtonInvisible = ({
  children,
  colorOverride,
  danger = false,
  disabled = false,
  fullWidth = false,
  onClick,
}: ButtonProps) => {
  const useTextColor = true;
  const BaseButton = buttonStyle({ fullWidth, disabled });
  const color = buttonColorStyles({ danger, disabled, useTextColor, colorOverride });
  const InvisibleButton = buttonInvisibleStyle({ BaseButton, color });

  return (
    <InvisibleButton
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </InvisibleButton>
  );
};

export default ButtonInvisible;
