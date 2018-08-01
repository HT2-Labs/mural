import { ReactNode } from 'react';

export enum Size {
  Small,
  Medium,
  Large,
}
export default interface IconButtonProps {
  readonly children: ReactNode;
  readonly color?: string;
  readonly disabled?: boolean | undefined;
  readonly onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  readonly size?: Size;
}
