// tslint:disable:no-magic-numbers
// tslint:disable:object-literal-sort-keys
import {
  darken,
  em,
  lighten,
  modularScale,
  readableColor,
} from 'polished';
import * as React from 'react';
import { ThemeProvider } from 'styled-components';

export interface ThemeProps {
  readonly theme: any;
  readonly children: React.ReactNode;
}

export default ({ children, theme }: ThemeProps) => {

  const lightenValue = 0.1;
  const DarkenValue = 0.1;
  const modularScaleValue = 'perfectFourth';

  const constructedTheme = {
    color: {
      Body: theme.color.Body,
      BodyText: readableColor(theme.color.Body),

      Button: theme.color.Button,
      ButtonDark: darken(DarkenValue, theme.color.Button),
      ButtonLight: lighten(lightenValue, theme.color.Button),
      ButtonText: readableColor(theme.color.Button),

      Danger: theme.color.Danger,
      DangerDark: darken(DarkenValue, theme.color.Danger),
      DangerLight: lighten(lightenValue, theme.color.Danger),
      DangerText: readableColor(theme.color.Danger),

      Disabled: theme.color.Disabled,
      DisabledDark: darken(DarkenValue, theme.color.Disabled),
      DisabledLight: lighten(lightenValue, theme.color.Disabled),
      DisabledText: darken(0.5, theme.color.Disabled),

      Primary: theme.color.Primary,
      PrimaryDark: darken(DarkenValue, theme.color.Primary),
      PrimaryLight: lighten(lightenValue, theme.color.Primary),
      PrimaryText: readableColor(theme.color.Primary),

      Secondary: theme.color.Secondary,
      SecondaryDark: darken(DarkenValue, theme.color.Secondary),
      SecondaryLight: lighten(lightenValue, theme.color.Secondary),
      SecondaryText: readableColor(theme.color.Secondary),
    },
    font: {
      Small: modularScale(-1, em(theme.font.Base), modularScaleValue),
      Base: em(theme.font.Base),
      Medium: modularScale(2, em(theme.font.Base), modularScaleValue),
      Large: modularScale(3, em(theme.font.Base), modularScaleValue),
      ExtraLarge: modularScale(4, em(theme.font.Base), modularScaleValue),
    },
    radius: {
      Large: theme.radius.Large,
      Medium: theme.radius.Medium,
      Small: theme.radius.Small,
    },
    shadow: {
      Large: theme.shadow.Large,
      Medium: theme.shadow.Medium,
      Small: theme.shadow.Small,
    },
  };
  return (
    <ThemeProvider theme={constructedTheme}>
      {children}
    </ThemeProvider>
  );
};
