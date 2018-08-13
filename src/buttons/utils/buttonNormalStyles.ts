export interface NormalButtonProps {
  readonly BaseButton: any;
  readonly color: any;
  readonly disabled: boolean;
}
export default ({ BaseButton, color, disabled = false }: NormalButtonProps) => {
  const NormalButton = BaseButton.extend`
    background-color: ${color.background};
    border: 2px solid ${color.background};
    color: ${color.text};
    &:hover {
      border: 2px solid ${color.backgroundLight};
      background-color: ${color.backgroundLight};
      box-shadow: ${disabled ? 'none' : ({ theme }: any ) => theme.shadow.Small};
    }
  `;
  return NormalButton;
};
