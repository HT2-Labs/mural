export default interface FormProps {
  readonly label?: string | JSX.Element;
  readonly danger?: boolean | undefined;
  readonly group?: string | undefined;
  readonly onChange?: (event: React.ChangeEvent<HTMLElement>) => void;

  // Fetched from https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input
  readonly type?: any;
  readonly accept?: any;
  readonly autofocus?: any;
  readonly capture?: any;
  readonly checked?: any;
  readonly disabled?: any;
  readonly form?: any;
  readonly formaction?: any;
  readonly formenctype?: any;
  readonly formmethod?: any;
  readonly formnovalidate?: any;
  readonly formtarget?: any;
  readonly height?: any;
  readonly inputmode?: any;
  readonly list?: any;
  readonly max?: any;
  readonly maxlength?: any;
  readonly min?: any;
  readonly minlength?: any;
  readonly multiple?: any;
  readonly name?: any;
  readonly pattern?: any;
  readonly placeholder?: any;
  readonly readonly?: any;
  readonly required?: any;
  readonly size?: any;
  readonly spellcheck?: any;
  readonly src?: any;
  readonly step?: any;
  readonly tabindex?: any;
  readonly value?: any;
  readonly width?: any;
}
