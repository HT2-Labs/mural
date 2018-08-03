// tslint:disable:no-magic-numbers
import { darken, lighten, readableColor } from 'polished';
import * as React from 'react';
import { ThemeProvider } from 'styled-components';

export interface ThemeProps {
  readonly theme: any;
  readonly children: React.ReactNode;
}

export default ({ children, theme }: ThemeProps) => {
  const constructedTheme = {
    color: {
      Body: theme.color.Body,
      BodyText: readableColor(theme.color.Body),

      Button: theme.color.Button,
      ButtonDark: darken(0.1, theme.color.Button),
      ButtonLight: lighten(0.1, theme.color.Button),
      ButtonText: readableColor(theme.color.Button),

      Danger: theme.color.Danger,
      DangerDark: darken(0.1, theme.color.Danger),
      DangerLight: lighten(0.1, theme.color.Danger),
      DangerText: readableColor(theme.color.Danger),

      Disabled: theme.color.Disabled,
      DisabledDark: darken(0.1, theme.color.Disabled),
      DisabledLight: lighten(0.1, theme.color.Disabled),
      DisabledText: readableColor(theme.color.Disabled),

      Primary: theme.color.Primary,
      PrimaryDark: darken(0.1, theme.color.Primary),
      PrimaryLight: lighten(0.1, theme.color.Primary),
      PrimaryText: readableColor(theme.color.Primary),

      Secondary: theme.color.Secondary,
      SecondaryDark: darken(0.1, theme.color.Secondary),
      SecondaryLight: lighten(0.1, theme.color.Secondary),
      SecondaryText: readableColor(theme.color.Secondary),
    },
    radius: {
      Button: '2px',
      Card: '12px',
    },
    shadow: {
      Large: '0 2px 2px 2px rgba(0, 0, 0, 0.12)',
      Main: '0px 1px 3px 0px rgba(0, 0, 0, 0.05)',
    },
  };
  return (
    <ThemeProvider theme={constructedTheme}>
      {children}
    </ThemeProvider>
  );
};
