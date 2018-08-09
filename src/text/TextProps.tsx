import { ReactNode } from 'react';

export enum SizeType {
  Small,
  Body,
  Medium,
  Large,
  ExtraLarge,
}

export default interface TextProps {
  readonly children: ReactNode;
  readonly size?: SizeType;
  readonly color?: string;
}
