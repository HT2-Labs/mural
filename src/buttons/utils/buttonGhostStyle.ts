
export interface Props {
  readonly Button: any;
  readonly color: any;
}
export default (Button: any, color: any) => {
  const GhostButton = Button.extend`
  background-color: transparent;
  border: 2px solid ${color};
  box-shadow: none;
  color: ${color};
`;
  return GhostButton;
};
