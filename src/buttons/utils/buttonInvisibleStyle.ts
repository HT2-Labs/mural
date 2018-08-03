
export interface Props {
  readonly Button: any;
  readonly color: any;
}
export default (Button: any, color: any) => {
  const InvisibleButton = Button.extend`
    background-color: transparent;
    border: 2px solid transparent;
    box-shadow: none;
    color: ${color};
  `;
  return InvisibleButton;
};
