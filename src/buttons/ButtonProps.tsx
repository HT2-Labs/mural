import { ReactNode } from 'react';

export enum ButtonType {
  Ghost,
  Invisible,
}

export default interface ButtonProps {
  readonly children: ReactNode;
  readonly disabled?: boolean | undefined;
  readonly fullWidth?: boolean | undefined;
  readonly onClick: (e: React.MouseEvent<HTMLElement>) => void;
  readonly type?: ButtonType;
}
