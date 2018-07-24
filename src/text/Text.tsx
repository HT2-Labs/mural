import * as React from 'react';
import styled from 'styled-components';
import TextProps, { ElementType } from '../utils/TextProps';

export {
  ElementType,
};

export default ({ children, type }: TextProps) => {
  const h1 = styled.h1`
    color: ${({ theme }) => theme.colorText};
  `;
  const h2 = styled.h2`
    color: ${({ theme }) => theme.colorText};
  `;
  const h3 = styled.h3`
    color: ${({ theme }) => theme.colorText};
  `;
  const h4 = styled.h4`
    color: ${({ theme }) => theme.colorText};
  `;
  const p = styled.p`
    color: ${({ theme }) => theme.colorText};
  `;

  const chooseElement = () => {
    if (type === ElementType.H1) { return h1; }
    if (type === ElementType.H2) { return h2; }
    if (type === ElementType.H3) { return h3; }
    if (type === ElementType.H4) { return h4; }
    return p;
  };
  const ChosenElement = chooseElement();

  // Const small = styled(ChosenElement)`
  //   Font-weight: normal;
  //   Font-size: 20px;
  // `;
  // Const medium = styled(ChosenElement)`
  //   Font-weight: normal;
  //   Font-size: 24px;
  // `;
  // Const large = styled(ChosenElement)`
  //   Font-weight: bold;
  //   Font-size: 32px;
  // `;
  // Const extraLarge = styled(ChosenElement)`
  //   Font-weight: bold;
  //   Font-size: 40px;
  // `;

  // Const chooseSize = () => {
  //   If (size === SizeType.Small) { return small; }
  //   If (size === SizeType.Large) { return large; }
  //   If (size === SizeType.ExtraLarge) { return extraLarge; }
  //   Return medium;
  // };
  // Const ChosenSize = chooseSize();

  return (
    <ChosenElement>
      {children}
    </ChosenElement>
  );
};
