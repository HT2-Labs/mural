import { ReactNode } from 'react';

export enum ElementType {
  H1,
  H2,
  H3,
  H4,
  P,
}

export enum SizeType {
  Small,
  Medium,
  Large,
  ExtraLarge,
}

export default interface IconProps {
  readonly children: ReactNode;
  readonly size?: SizeType;
  readonly type: ElementType;
}
