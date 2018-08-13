export interface Props {
  readonly BaseButton: any;
  readonly color: any;
  readonly disabled?: boolean;
}
export default ({ BaseButton, color, disabled = false }: Props) => {
  const ButtonGhost = BaseButton.extend`
    background-color: transparent;
    border: 2px solid ${color.background};
    box-shadow: none;
    color: ${color.background};
    &:hover {
      border: 2px solid ${color.backgroundLight};
      color: ${color.backgroundLight};
      box-shadow: ${disabled ? 'none' : ({ theme }: any ) => theme.shadow.Small};
    }
  `;
  return ButtonGhost;
};
