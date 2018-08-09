import { ReactNode } from 'react';

export default interface LinkProps {
  readonly children: ReactNode;
  readonly color?: string;
  readonly external?: boolean;
  readonly href?: string;
  readonly onClick?: (e: React.MouseEvent<HTMLElement>) => void;
}
