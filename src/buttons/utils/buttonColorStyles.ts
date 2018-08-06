// tslint:disable:no-let
export interface ButtonColorProps {
  readonly danger?: boolean | undefined;
  readonly disabled?: boolean | undefined;
}

export default ({danger, disabled}: ButtonColorProps) => {
  let background = null;
  let backgroundLight = null;
  let text = null;

  if (disabled) {
    background = ({ theme }: any) => theme.color.Disabled;
    backgroundLight = ({ theme }: any) => theme.color.Disabled;
    text = ({ theme }: any) => theme.color.DisabledText;
  } else if (danger) {
    background = ({ theme }: any) => theme.color.Danger;
    backgroundLight = ({ theme }: any) => theme.color.DangerLight;
    text = ({ theme }: any) => theme.color.DangerText;
  } else {
    background = ({ theme }: any) => theme.color.Button;
    backgroundLight = ({ theme }: any) => theme.color.ButtonLight;
    text = ({ theme }: any) => theme.color.ButtonText;
  }
  return {background, text, backgroundLight};
};
