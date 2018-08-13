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

const IconButton = ({
  ariaLabel,
  children,
  disabled = false,
  size = Size.Medium,
  onClick,
  type,
}: IconButtonProps) => {

  const useTextColor = false;
  const buttonSize = getButtonSize(size);
  const fontSize = getFontSize(size);

  const BaseButton = buttonIconStyle(buttonSize, fontSize, disabled);
  const color = buttonColorStyles({ disabled, useTextColor });
  const NormalIconButton = buttonNormalStyles({ BaseButton, color, disabled });

  return (
    <NormalIconButton
      disabled={disabled}
      onClick={onClick}
      type={type}
      aria-label={ariaLabel}
    >
      {children}
    </NormalIconButton>
  );
};

export default IconButton;
