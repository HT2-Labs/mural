enum Size {
  Bit, // 2px
  Bite, // 4px
  Kilo, // 8px
  Default, // 16px
  Mega, // 20px
  Giga, // 32px
  Tera, // 49px
  Peta, // 61px
  Exa, // 76px
}

const getSize = (size: any, defaultSize: Size) => {

  const selectedSize = size ? size : defaultSize;
  console.log(selectedSize);

  switch (selectedSize) {
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
      return ({ theme }: any) => theme.size.Mega;

    case Size.Giga:
      return ({ theme }: any) => theme.size.Giga;

    case Size.Tera:
      return ({ theme }: any) => theme.size.Tera;

    case Size.Peta:
      return ({ theme }: any) => theme.size.Peta;

    case Size.Exa:
      return ({ theme }: any) => theme.size.Exa;
  }
};

export {
  getSize,
  Size,
};
