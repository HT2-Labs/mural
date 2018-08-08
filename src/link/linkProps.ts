import { ReactNode } from 'react';
import { Size } from '../buttons/IconButtons/iconButtonProps';

export default interface LinkProps {
  readonly children: ReactNode;
  readonly sizeType?: Size;
  readonly external?: boolean;
}
