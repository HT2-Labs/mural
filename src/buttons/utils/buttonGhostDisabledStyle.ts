
export interface Props {
  readonly Button: any;
}
export default (Button: any) => {
  const DisabledGhostButton = Button.extend`
    background-color: transparent;
    border: 2px solid ${({ theme }: any) => theme.color.Disabled};
    box-shadow: none;
    color: ${({ theme }: any) => theme.color.DisabledText};
  `;
  return DisabledGhostButton;
};
