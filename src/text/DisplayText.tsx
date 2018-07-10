import * as React from 'react';
import styled from 'styled-components';
import TextProps, { ElementType, SizeType } from '../utils/TextProps';

export default ({ children, size, type }: TextProps) => {
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

  const small = styled(ChosenElement)`
    font-weight: normal;
    font-size: 20px;
  `;
  const medium = styled(ChosenElement)`
    font-weight: normal;
    font-size: 24px;
  `;
  const large = styled(ChosenElement)`
    font-weight: bold;
    font-size: 32px;
  `;
  const extraLarge = styled(ChosenElement)`
    font-weight: bold;
    font-size: 40px;
  `;

  const chooseSize = () => {
    if (size === SizeType.Small) { return small; }
    if (size === SizeType.Large) { return large; }
    if (size === SizeType.ExtraLarge) { return extraLarge; }
    return medium;
  };
  const ChosenSize = chooseSize();

  return (
    <ChosenSize>
      {children}
    </ChosenSize>
  );
};
