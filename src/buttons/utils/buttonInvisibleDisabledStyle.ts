
export interface Props {
  readonly Button: any;
}
export default (Button: any) => {
  const DisabledInvisibleButton = Button.extend`
    background-color: transparent;
    border: 2px solid transparent;
    box-shadow: none;
    color: ${({ theme }: any) => theme.color.DisabledText};
  `;
  return DisabledInvisibleButton;
};
