import * as React from 'react';
import buttonStyle from '../utils/buttonBasicStyles';
import buttonColorStyles from '../utils/buttonColorStyles';
import buttonNormalStyles from '../utils/buttonNormalStyles';
import ButtonProps from './buttonProps';

const Button = ({
  children,
  danger = false,
  disabled = false,
  fullWidth = false,
  onClick,
  type,
}: ButtonProps) => {

  const BaseButton = buttonStyle({ fullWidth, disabled });
  const color = buttonColorStyles({ danger, disabled });
  const NormalButton = buttonNormalStyles({ BaseButton, color, disabled });

  return (
    <NormalButton
      disabled={disabled}
      onClick={onClick}
      type={type}
    >
      {children}
    </NormalButton>
  );
};

export default Button;
