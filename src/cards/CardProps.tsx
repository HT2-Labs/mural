import { ReactNode } from 'react';

export enum CardType {
  Highlighted,
  Placeholder,
}

export default interface CardProps {
  readonly active?: boolean;
  readonly children?: ReactNode;
  readonly onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  readonly overlayContent?: ReactNode;
  readonly type?: CardType;
}
