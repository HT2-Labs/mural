import * as React from 'react';
import buttonStyle from '../utils/buttonBasicStyles';
import buttonColorStyles from '../utils/buttonColorStyles';
import buttonNormalStyles from '../utils/buttonNormalStyles';
import ButtonProps from './buttonProps';

export default ({
  children,
  danger = false,
  disabled = false,
  fullWidth = false,
  onClick,
}: ButtonProps) => {

  const Button = buttonStyle({ fullWidth, disabled });
  const color = buttonColorStyles({ danger, disabled });
  const NormalButton = buttonNormalStyles({ Button, color });

  return (
    <NormalButton
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </NormalButton>
  );
};
