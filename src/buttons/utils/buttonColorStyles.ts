import { lighten } from 'polished';

// tslint:disable:no-let
export interface ButtonColorProps {
  readonly colorOverride?: string | undefined;
  readonly danger?: boolean | undefined;
  readonly disabled?: boolean | undefined;
  readonly useTextColor?: boolean | undefined;
}

export default ({
  colorOverride,
  danger = false,
  disabled = false,
  useTextColor = false,
}: ButtonColorProps) => {
  const lightenAmount = 0.1;
  let background = null;
  let backgroundLight = null;
  let text = null;

  if (disabled) {
    // Check if we should use the text color over the background color
    // This is only needed for 'disabled' and 'ghost' buttons
    background = useTextColor
      ? ({ theme }: any) => theme.color.DisabledText
      : ({ theme }: any) => theme.color.Disabled;
    backgroundLight = useTextColor
      ? ({ theme }: any) => theme.color.DisabledText
      : ({ theme }: any) => theme.color.Disabled;
    text = ({ theme }: any) => theme.color.DisabledText;
  } else if (danger) {
    background = ({ theme }: any) => theme.color.Danger;
    backgroundLight = ({ theme }: any) => theme.color.DangerLight;
    text = ({ theme }: any) => theme.color.DangerText;
  } else if (colorOverride !== undefined) {
    background = colorOverride;
    backgroundLight = lighten(lightenAmount, colorOverride);
    text = colorOverride;
  } else {
    background = ({ theme }: any) => theme.color.Button;
    backgroundLight = ({ theme }: any) => theme.color.ButtonLight;
    text = ({ theme }: any) => theme.color.ButtonText;
  }
  return {background, text, backgroundLight};
};
