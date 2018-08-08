import { ReactNode } from 'react';

export default interface LinkProps {
  readonly children: ReactNode;
  readonly external?: boolean;
  readonly color?: string;
}
