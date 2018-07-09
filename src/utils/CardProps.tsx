export enum CardType {
  Highlighted,
  Placeholder,
}

export default interface IconProps {
  readonly children?: JSX.Element[] | JSX.Element | string | boolean[] | boolean;
  readonly type?: CardType;
  readonly selected?: boolean;
  readonly onClick?: () => void;
}
