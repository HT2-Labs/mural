import { ReactNode } from 'react';

export enum SizeType {
  Body,
  Small,
  Medium,
  Large,
  ExtraLarge,
}

export default interface TextProps {
  readonly children: ReactNode;
  readonly size?: SizeType;
}
