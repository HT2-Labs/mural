
export interface InvisibleButtonProps {
  readonly Button: any;
  readonly color: any;
}
export default ({ Button, color }: InvisibleButtonProps ) => {
  const ButtonInvisible = Button.extend`
    background-color: transparent;
    border: 2px solid transparent;
    box-shadow: none;
    color: ${color.background};
    &:hover {
      color: ${color.backgroundLight};
    }
  `;
  return ButtonInvisible;
};
