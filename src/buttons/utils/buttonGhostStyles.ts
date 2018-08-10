export interface Props {
  readonly Button: any;
  readonly color: any;
  readonly disabled?: boolean | undefined;
  readonly danger?: boolean | undefined;
}
export default ({ Button, color, disabled = false }: Props) => {
  const ButtonGhost = Button.extend`
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
