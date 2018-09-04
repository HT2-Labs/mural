enum Size {
  None,
  ExtraSmall, // 2px
  Small, // 4px
  Default, // 16px
  Large, // 20px
  ExtraLarge, // 32px
  Huge, // 49px
  ExtraHuge, // 61px
  Massive, // 76px
}

const getSize = (size: any, defaultSize: Size) => {

  const selectedSize = size ? size : defaultSize;

  switch (selectedSize) {
    case Size.None:
      return 0;

    case Size.ExtraSmall:
      return ({ theme }: any) => theme.size.ExtraSmall;

    case Size.Small:
      return ({ theme }: any) => theme.size.Small;

    case Size.Default:
    default:
      return ({ theme }: any) => theme.size.Default;

    case Size.Large:
      return ({ theme }: any) => theme.size.Large;

    case Size.ExtraLarge:
      return ({ theme }: any) => theme.size.ExtraLarge;

    case Size.Huge:
      return ({ theme }: any) => theme.size.Huge;

    case Size.ExtraHuge:
      return ({ theme }: any) => theme.size.ExtraHuge;

    case Size.Massive:
      return ({ theme }: any) => theme.size.Massive;
  }
};

export {
  getSize,
  Size,
};
