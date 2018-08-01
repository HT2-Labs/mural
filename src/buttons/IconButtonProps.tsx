import { ReactNode } from 'react';

export enum ButtonType {
  Ghost,
  Invisible,
}

export default interface IconButtonProps {
  readonly color?: string;
  readonly height?: number | string;
  readonly width?: number | string;
}

export default interface ButtonProps {
  readonly color?: string;
  readonly height?: number | string;
  readonly width?: number | string;
  readonly children: ReactNode;
  readonly danger?: boolean | undefined;
  readonly disabled?: boolean | undefined;
  readonly fullWidth?: boolean | undefined;
  readonly ghostColor?: string;
  readonly onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  readonly type?: ButtonType;
}
