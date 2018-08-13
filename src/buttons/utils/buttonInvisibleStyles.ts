
export interface InvisibleButtonProps {
  readonly BaseButton: any;
  readonly color: any;
}
export default ({ BaseButton, color }: InvisibleButtonProps ) => {
  const ButtonInvisible = BaseButton.extend`
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
