// tslint:disable:no-magic-numbers
import * as React from 'react';
import styled from 'styled-components';
import IconProps from '../icons/IconProps';

export enum Size {
  Small,
  Medium,
  Large,
}

interface Props {
  readonly renderIcon: (iconProps: IconProps) => JSX.Element;
  readonly size?: Size;
  readonly color?: string;
  readonly backgroundColor?: string;
}

const getButtonSize = (size: Size) => {
  switch (size) {
    case Size.Small: return 30;
    case Size.Medium: default: return 40;
    case Size.Large: return 80;
  }
};

const getFontSize = (size: Size) => {
  switch (size) {
    case Size.Small: return 15;
    case Size.Medium: default: return 20;
    case Size.Large: return 40;
  }
};

export default ({
  renderIcon,
  size = Size.Medium,
  color = 'inherit',
  backgroundColor = 'inherit',
}: Props) => {
  const buttonSize = getButtonSize(size);
  const fontSize = getFontSize(size);

  const Button = styled.button`
    width: ${buttonSize}px;
    height: ${buttonSize}px;
    font-size: ${fontSize}px;
    background-color: ${backgroundColor};
    border-radius: 50%;
    border: none;
    box-shadow: 2px 2px 2px rgba(0,0,0,.2);
    &:hover {
      cursor: pointer;
    }
    & svg {
      position: relative;
      top: .125em;
    }
  `;

  return (
    <Button>
      {renderIcon({ color })}
    </Button>
  );
};
