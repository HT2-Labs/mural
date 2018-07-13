export enum ButtonType {
  Ghost,
  Invisible,
}

export default interface IconProps {
  // Readonly children?: JSX.Element[] | JSX.Element | string | boolean[] | boolean; -- Help Ryan!
  readonly children?: any;
  readonly disabled?: boolean | undefined;
  readonly onClick?: (e: Event) => void;
  readonly type?: ButtonType;
}
