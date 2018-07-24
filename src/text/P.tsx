import * as React from 'react';
import styled from 'styled-components';
import TextProps, { SizeType } from './TextProps';

export default ({ children, size }: TextProps) => {
  const P = styled.p`
    color: ${({ theme }) => theme.colorText};
  `;
  const body = P.extend`
    font-weight: normal;
    font-size: 16px;
  `;
  const small = P.extend`
    font-weight: normal;
    font-size: 20px;
  `;
  const medium = P.extend`
    font-weight: normal;
    font-size: 24px;
  `;
  const large = P.extend`
    font-weight: bold;
    font-size: 32px;
  `;
  const extraLarge = P.extend`
    font-weight: bold;
    font-size: 40px;
  `;

  const chooseSize = () => {
    if (size === SizeType.Small) { return small; }
    if (size === SizeType.Medium) { return medium; }
    if (size === SizeType.Large) { return large; }
    if (size === SizeType.ExtraLarge) { return extraLarge; }
    return body;
  };
  const ChosenSize = chooseSize();

  return (
    <ChosenSize>
      {children}
    </ChosenSize>
  );
};
