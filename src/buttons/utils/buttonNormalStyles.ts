export interface NormalButtonProps {
  readonly Button: any;
  readonly color: any;
}
export default ({ Button, color }: NormalButtonProps) => {
  const NormalButton = Button.extend`
    background-color: ${color.background};
    border: 2px solid ${color.background};
    color: ${color.text};
    &:hover {
      border: 2px solid ${color.backgroundLight};
      background-color: ${color.backgroundLight};
    }
  `;
  return NormalButton;
};
