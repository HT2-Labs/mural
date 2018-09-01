import { Size } from '../../utils/sizes';

export interface Props {
  readonly fullWidth: any;
  readonly disabled: any;
}

export const getFontSize = (size: any, defaultSize: any) => {
  const textSize = size ? size : defaultSize;

  switch (textSize) {
    case Size.Bit:
      return ({ theme }: any) => theme.size.Bit;

    case Size.Bite:
      return ({ theme }: any) => theme.size.Bite;

    case Size.Kilo:
      return ({ theme }: any) => theme.size.Kilo;

    case Size.Default:
    default:
      return ({ theme }: any) => theme.size.Default;

    case Size.Mega:
      return ({ theme }: any) => theme.size.Medium;

    case Size.Giga:
      return ({ theme }: any) => theme.size.Large;

    case Size.Tera:
      return ({ theme }: any) => theme.size.ExtraLarge;

    case Size.Peta:
      return ({ theme }: any) => theme.size.ExtraLarge;

    case Size.Exa:
      return ({ theme }: any) => theme.size.ExtraLarge;
  }
};
