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
  readonly children: JSX.Element[] | JSX.Element | string | boolean[] | boolean;
  readonly type: ElementType;
  readonly size?: SizeType;
}
