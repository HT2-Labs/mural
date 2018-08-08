export interface NormalButtonProps {
  readonly Button: any;
  readonly color: any;
  readonly disabled: boolean | undefined;
}
export default ({ Button, color, disabled }: NormalButtonProps) => {
  const NormalButton = Button.extend`
    background-color: ${color.background};
    border: 2px solid ${color.background};
    color: ${color.text};
    &:hover {
      border: 2px solid ${color.backgroundLight};
      background-color: ${color.backgroundLight};
      box-shadow: ${disabled === true ? 'none' : ({ theme }: any ) => theme.shadow.Small};
    }
  `;
  return NormalButton;
};
