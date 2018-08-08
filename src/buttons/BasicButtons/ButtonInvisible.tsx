import * as React from 'react';
import buttonStyle from '../utils/buttonBasicStyles';
import buttonColorStyles from '../utils/buttonColorStyles';
import buttonInvisibleStyle from '../utils/buttonInvisibleStyles';
import ButtonProps from './buttonProps';

export default ({
  children,
  danger = false,
  disabled = false,
  fullWidth = false,
  onClick,
  type,
}: ButtonProps) => {

  // Add to buttonColorStyles to set text color in place of background color
  const useTextColor = true;

  const Button = buttonStyle({ fullWidth, disabled });
  const color = buttonColorStyles({ danger, disabled, useTextColor });
  const InvisibleButton = buttonInvisibleStyle({ Button, color });

  return (
    <InvisibleButton
      disabled={disabled}
      onClick={onClick}
      type={type}
    >
      {children}
    </InvisibleButton>
  );
};
