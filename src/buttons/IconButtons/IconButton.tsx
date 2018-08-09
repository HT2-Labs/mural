import * as React from 'react';
import buttonColorStyles from '../utils/buttonColorStyles';
import buttonIconStyle from '../utils/buttonIconBasicStyles';
import buttonNormalStyles from '../utils/buttonNormalStyles';
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
  const useTextColor = false;
  const buttonSize = getButtonSize(size);
  const fontSize = getFontSize(size);

  const Button = buttonIconStyle(buttonSize, fontSize, disabled);
  const color = buttonColorStyles({ disabled, useTextColor});
  const IconButtonNormal = buttonNormalStyles({ Button, color});

  return (
    <IconButtonNormal
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </IconButtonNormal>
  );
};
