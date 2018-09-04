// tslint:disable:max-file-line-count
// tslint:disable:no-magic-numbers
// tslint:disable:object-literal-sort-keys
// tslint:disable:max-line-length
import * as React from 'react';

import { darken, em, lighten, modularScale, readableColor } from 'polished';
import { ThemeProvider } from '../utils/mural-styled-components';
import defaultTheme from './defaultTheme';

export interface ThemeProps {
  readonly theme?: any;
  readonly children: React.ReactNode;
}

// tslint:disable-next-line:cyclomatic-complexity
const MuralThemeProvider = ({ children, theme }: ThemeProps) => {
  // Apply app supplied theme over the mural default
  const mergedTheme = { ...defaultTheme, ...theme };

  // Default values
  const lightenValue = 0.1;
  const DarkenValue = 0.1;

  const constructedTheme = {
    color: {
      Body: mergedTheme.colorBody,
      BodyDark: mergedTheme.colorBodyDark ? mergedTheme.colorBodyDark : darken(DarkenValue, mergedTheme.colorBody),
      BodyLight: mergedTheme.colorBodyLight ? mergedTheme.colorBodyLight : lighten(lightenValue, mergedTheme.colorBody),
      BodyText: mergedTheme.colorBodyText ? mergedTheme.colorBodyText : readableColor(mergedTheme.colorBody),

      Button: mergedTheme.colorButton,
      ButtonDark: mergedTheme.colorButtonDark ? mergedTheme.colorButtonDark : darken(DarkenValue, mergedTheme.colorButton),
      ButtonLight: mergedTheme.colorButtonLight ? mergedTheme.colorButtonLight : lighten(lightenValue, mergedTheme.colorButton),
      ButtonText: mergedTheme.colorButtonText ? mergedTheme.colorButtonText : readableColor(darken(DarkenValue, mergedTheme.colorButton)),

      Danger: mergedTheme.colorDanger,
      DangerDark: mergedTheme.colorDangerDark ? mergedTheme.colorDangerDark : darken(DarkenValue, mergedTheme.colorDanger),
      DangerLight: mergedTheme.colorDangerLight ? mergedTheme.colorDangerLight : lighten(lightenValue, mergedTheme.colorDanger),
      DangerText: mergedTheme.colorDangerText ? mergedTheme.colorDangerText : readableColor(mergedTheme.colorDanger),

      Disabled: mergedTheme.colorDisabled,
      DisabledDark: mergedTheme.colorDisabledDark ? mergedTheme.colorDisabledDark : darken(DarkenValue, mergedTheme.colorDisabled),
      DisabledLight: mergedTheme.colorDisabledLight ? mergedTheme.colorDisabledLight : lighten(lightenValue, mergedTheme.colorDisabled),
      DisabledText: mergedTheme.colorDisabledText ? mergedTheme.colorDisabledText : darken(0.5, mergedTheme.colorDisabled),

      Primary: mergedTheme.colorPrimary,
      PrimaryDark: mergedTheme.colorPrimaryDark ? mergedTheme.colorPrimaryDark : darken(DarkenValue, mergedTheme.colorPrimary),
      PrimaryLight: mergedTheme.colorPrimaryLight ? mergedTheme.colorPrimaryLight : lighten(lightenValue, mergedTheme.colorPrimary),
      PrimaryText: mergedTheme.colorPrimaryText ? mergedTheme.colorPrimaryText : readableColor(mergedTheme.colorPrimary),

      Secondary: mergedTheme.colorSecondary,
      SecondaryDark: mergedTheme.colorSecondaryDark ? mergedTheme.colorSecondaryDark : darken(DarkenValue, mergedTheme.colorSecondary),
      SecondaryLight: mergedTheme.colorSecondaryLight ? mergedTheme.colorSecondaryLight : lighten(lightenValue, mergedTheme.colorSecondary),
      SecondaryText: mergedTheme.colorSecondaryText ? mergedTheme.colorSecondaryText : readableColor(darken(DarkenValue, mergedTheme.colorSecondary)),

      Success: mergedTheme.colorSuccess,
      SuccessDark: mergedTheme.colorSuccessDark ? mergedTheme.colorSuccessDark : darken(DarkenValue, mergedTheme.colorSuccess),
      SuccessLight: mergedTheme.colorSuccessLight ? mergedTheme.colorSuccessLight : lighten(lightenValue, mergedTheme.colorSuccess),
      SuccessText: mergedTheme.colorSuccessText ? mergedTheme.colorSuccessText : readableColor(mergedTheme.colorSuccess),

      White: mergedTheme.colorWhite,
    },
    size: {
      ExtraSmall: mergedTheme.sizeExtraSmall ? mergedTheme.sizeExtraSmall : modularScale(-1, em(mergedTheme.fontBase)),
      Small: mergedTheme.sizeSmall ? mergedTheme.sizeSmall : modularScale(-0.5, em(mergedTheme.fontBase)),
      Default: mergedTheme.sizeDefault ? mergedTheme.sizeDefault : modularScale(0, em(mergedTheme.fontBase)),
      Large: mergedTheme.sizeLarge ? mergedTheme.sizeLarge : modularScale(1.25, em(mergedTheme.fontBase)),
      ExtraLarge: mergedTheme.sizeExtraLarge ? mergedTheme.sizeExtraLarge : modularScale(1.953, em(mergedTheme.fontBase)),
      Huge: mergedTheme.sizeHuge ? mergedTheme.sizeHuge : modularScale(3.052, em(mergedTheme.fontBase)),
      ExtraHuge: mergedTheme.sizeExtraHuge ? mergedTheme.sizeExtraHuge : modularScale(3.815, em(mergedTheme.fontBase)),
      Massive: mergedTheme.sizeMassive ? mergedTheme.sizeMassive : modularScale(4.768, em(mergedTheme.fontBase)),
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
  return <ThemeProvider theme={constructedTheme}>{children}</ThemeProvider>;
};

export default MuralThemeProvider;
