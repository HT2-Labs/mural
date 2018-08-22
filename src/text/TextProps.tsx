import { ReactNode } from 'react';
import { Align } from '../utils/AlignmentProps';

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
  readonly color?: string | Function;
  readonly strong?: boolean;
  readonly italic?: boolean;
  readonly alignment?: Align;
}
