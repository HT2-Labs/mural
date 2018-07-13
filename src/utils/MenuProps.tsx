export default interface IconProps {
  readonly active?: boolean;
  readonly children?: JSX.Element[] | JSX.Element | string;
  readonly onClick?: (e: Event) => void;
}
