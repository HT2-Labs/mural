// tslint:disable:max-file-line-count
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
  readonly theme?: any;
  readonly children: React.ReactNode;
}

const MuralThemeProvider = ({ children, theme }: ThemeProps) => {

  // Set all base theme values
  const defaultTheme = {
    colorBody: '#efefef',
    colorButton: '#076699',
    colorDanger: '#ce0000',
    colorDisabled: '#ddd',
    colorPrimary: '#41bfee',
    colorSecondary: '#344a58',
    colorSuccess: '#22c65b',
    fontBase: '16px',
    radiusLarge: '50%',
    radiusMedium: '12px',
    radiusSmall: '2px',
    shadowLarge: '0 2px 2px 2px rgba(0, 0, 0, 0.12)',
    shadowMedium: '0px 1px 5px 0px rgba(0, 0, 0, 0.3)',
    shadowSmall: 'rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px',
  };

  // Apply app supplied theme over the mural default
  const mergedTheme = {...defaultTheme, ...theme};

  // Default values
  const lightenValue = 0.1;
  const DarkenValue = 0.1;
  const modularScaleValue = 'perfectFourth';

  const constructedTheme = {
    color: {
      Body: mergedTheme.colorBody,
      BodyDark: darken(DarkenValue, mergedTheme.colorBody),
      BodyLight: lighten(lightenValue, mergedTheme.colorBody),
      BodyText: readableColor(mergedTheme.colorBody),

      Button: mergedTheme.colorButton,
      ButtonDark: darken(DarkenValue, mergedTheme.colorButton),
      ButtonLight: lighten(lightenValue, mergedTheme.colorButton),
      ButtonText: readableColor(mergedTheme.colorButton),

      Danger: mergedTheme.colorDanger,
      DangerDark: darken(DarkenValue, mergedTheme.colorDanger),
      DangerLight: lighten(lightenValue, mergedTheme.colorDanger),
      DangerText: readableColor(mergedTheme.colorDanger),

      Disabled: mergedTheme.colorDisabled,
      DisabledDark: darken(DarkenValue, mergedTheme.colorDisabled),
      DisabledLight: lighten(lightenValue, mergedTheme.colorDisabled),
      DisabledText: darken(0.5, mergedTheme.colorDisabled),

      Primary: mergedTheme.colorPrimary,
      PrimaryDark: darken(DarkenValue, mergedTheme.colorPrimary),
      PrimaryLight: lighten(lightenValue, mergedTheme.colorPrimary),
      PrimaryText: readableColor(mergedTheme.colorPrimary),

      Secondary: mergedTheme.colorSecondary,
      SecondaryDark: darken(DarkenValue, mergedTheme.colorSecondary),
      SecondaryLight: lighten(lightenValue, mergedTheme.colorSecondary),
      SecondaryText: readableColor(mergedTheme.colorSecondary),

      Success: mergedTheme.colorSuccess,
      SuccessDark: darken(DarkenValue, mergedTheme.colorSuccess),
      SuccessLight: lighten(lightenValue, mergedTheme.colorSuccess),
      SuccessText: readableColor(mergedTheme.colorSuccess),
    },
    font: {
      Small: modularScale(-1, em(mergedTheme.fontBase), modularScaleValue),
      Base: em(mergedTheme.fontBase),
      Medium: modularScale(2, em(mergedTheme.fontBase), modularScaleValue),
      Large: modularScale(3, em(mergedTheme.fontBase), modularScaleValue),
      ExtraLarge: modularScale(4, em(mergedTheme.fontBase), modularScaleValue),
    },
    radius: {
      Large: mergedTheme.radiusLarge,
      Medium: mergedTheme.radiusMedium,
      Small: mergedTheme.radiusSmall,
    },
    shadow: {
      Large: mergedTheme.shadowLarge,
      Medium: mergedTheme.shadowMedium,
      Small: mergedTheme.shadowSmall,
    },
  };
  return (
    <ThemeProvider theme={constructedTheme}>
      {children}
    </ThemeProvider>
  );
};

export default MuralThemeProvider;
