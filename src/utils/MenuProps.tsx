export default interface IconProps {
  readonly active?: boolean;
  readonly children?: JSX.Element[] | JSX.Element | string;
  readonly onClick?: (e: React.MouseEvent<HTMLElement>) => void;
}
