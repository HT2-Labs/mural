import { ReactNode } from 'react';

export default interface ButtonProps {
  readonly children: ReactNode;
  readonly danger?: boolean | undefined;
  readonly disabled?: boolean | undefined;
  readonly fullWidth?: boolean | undefined;
  readonly height?: number | string;
  readonly onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  readonly type?: string | undefined;
  readonly width?: number | string;
}
