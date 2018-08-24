import { SizeType } from './textProps';

export interface Props {
  readonly fullWidth: any;
  readonly disabled: any;
}

export const getFontSize = (size: any) => {
  switch (size) {
    case SizeType.Small:
      return ({ theme }: any) => theme.font.Small;
    case SizeType.Body: default:
      return ({ theme }: any) => theme.font.Normal;
    case SizeType.Medium:
      return ({ theme }: any) => theme.font.Medium;
    case SizeType.Large:
      return ({ theme }: any) => theme.font.Large;
    case SizeType.ExtraLarge:
      return ({ theme }: any) => theme.font.ExtraLarge;
  }
};
