export interface Props {
  readonly Button: any;
  readonly color: any;
}
export default ({ Button, color }: Props) => {
  const ButtonGhost = Button.extend`
    background-color: transparent;
    border: 2px solid ${color.background};
    box-shadow: none;
    color: ${color.background};
    &:hover {
      border: 2px solid ${color.backgroundLight};
      color: ${color.backgroundLight};
    }
  `;
  return ButtonGhost;
};
