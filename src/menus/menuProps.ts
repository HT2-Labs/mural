import { ReactNode } from 'react';

export default interface MenuProps {
  readonly active?: boolean;
  readonly children?: ReactNode;
  readonly onClick?: (e: React.MouseEvent<HTMLElement>) => void;
}
