export default interface ButtonProps {
  readonly danger?: boolean | undefined;
  readonly disabled?: boolean | undefined;
  readonly fullWidth?: boolean | undefined;
  readonly height?: number | string;
  readonly onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  readonly width?: number | string;
}
