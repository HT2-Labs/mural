import * as React from 'react';
import buttonColorStyles from '../utils/buttonColorStyles';
import buttonIconStyle from '../utils/buttonIconBasicStyles';
import buttonInvisibleStyles from '../utils/buttonInvisibleStyles';
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

const IconButtonInvisible = ({
  ariaLabel,
  children,
  disabled = false,
  size = Size.Medium,
  onClick,
  colorOverride,
}: IconButtonProps) => {

  const useTextColor = true;
  const buttonSize = getButtonSize(size);
  const fontSize = getFontSize(size);

  const BaseButton = buttonIconStyle(buttonSize, fontSize, disabled);
  const color = buttonColorStyles({ disabled, useTextColor, colorOverride });
  const InvisibleIconButton = buttonInvisibleStyles({ BaseButton, color });

  return (
    <InvisibleIconButton
      disabled={disabled}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {children}
    </InvisibleIconButton>
  );
};

export default IconButtonInvisible;
