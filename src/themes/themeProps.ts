export default interface ThemeProvider {
  readonly color: {
      readonly Body: string;
      readonly BodyDark: string;
      readonly BodyLight: string;
      readonly BodyText: string;

      readonly Button: string;
      readonly ButtonDark: string;
      readonly ButtonLight: string;
      readonly ButtonText: string;

      readonly Danger: string;
      readonly DangerDark: string;
      readonly DangerLight: string;
      readonly DangerText: string;

      readonly Disabled: string;
      readonly DisabledDark: string;
      readonly DisabledLight: string;
      readonly DisabledText: string;

      readonly Primary: string;
      readonly PrimaryDark: string;
      readonly PrimaryLight: string;
      readonly PrimaryText: string;

      readonly Secondary: string;
      readonly SecondaryDark: string;
      readonly SecondaryLight: string;
      readonly SecondaryText: string;

      readonly Success: string;
      readonly SuccessDark: string;
      readonly SuccessLight: string;
      readonly SuccessText: string;
    };
    readonly font: {
      readonly Small: string;
      readonly Base: string;
      readonly Medium: string;
      readonly Large: string;
      readonly ExtraLarge: string;
    };
    readonly radius: {
      readonly Large: string;
      readonly Medium: string;
      readonly Small: string;
    };
    readonly shadow: {
      readonly Large: string;
      readonly Medium: string;
      readonly Small: string;
    };
}
