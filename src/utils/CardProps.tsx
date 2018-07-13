export enum CardType {
  Highlighted,
  Placeholder,
}

export default interface IconProps {
  readonly active?: boolean;
  readonly children?: JSX.Element[] | JSX.Element | string | boolean[] | boolean;
  readonly onClick?: (e: Event) => void;
  readonly type?: CardType;
}
