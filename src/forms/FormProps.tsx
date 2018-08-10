export default interface FormProps {
  readonly label?: string;
  readonly danger?: boolean | undefined;
  readonly disabled?: boolean | undefined;
  readonly group?: string | undefined;
  readonly children?: React.ReactNode;
  readonly value?: any;
}
