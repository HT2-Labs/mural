export enum ButtonType {
  Ghost,
  Invisible,
}

export default interface IconProps {
  readonly children?: JSX.Element[] | JSX.Element | string | boolean[] | boolean;
  readonly disabled?: boolean;
  readonly onClick?: () => void;
  readonly type?: ButtonType;
}
