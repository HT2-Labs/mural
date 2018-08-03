import * as React from 'react';
import buttonIconStyle from '../utils/buttonIconStyle';
import buttonInvisibleDisabledStyle from '../utils/buttonInvisibleDisabledStyle';
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
  color,
  disabled = false,
  size = Size.Medium,
  onClick,
}: IconButtonProps) => {

  const buttonSize = getButtonSize(size);
  const fontSize = getFontSize(size);

  const Button = buttonIconStyle(buttonSize, fontSize, disabled);

  const pickedColor = color !== undefined ? color : ({ theme }: any) => theme.color.Button;

  const InvisibleButton = Button.extend`
    background-color: transparent;
    border: 2px solid transparent;
    box-shadow: none;
    color: ${pickedColor};
  `;

  const DisabledInvisibleButton = buttonInvisibleDisabledStyle(Button);

  const chooseButton = () => {
    if (disabled) { return DisabledInvisibleButton; }
    return InvisibleButton;

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
