export enum CardType {
  Highlighted,
  Placeholder,
}

export default interface IconProps {
  readonly children?: JSX.Element[] | JSX.Element | string;
  readonly type?: CardType;
  readonly onClick?: () => void;
}
