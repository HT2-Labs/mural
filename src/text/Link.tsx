import * as React from 'react';
import styled from 'styled-components';
import { SizeType } from '.';
import IconExternalLink from '../icons/IconExternalLink';
import { LinkProps } from './textProps';
import { getFontSize } from './textStyle';

const Link = ({
  children,
  color = String(({ theme }: any) => theme.color.Button),
  external = false,
  href,
  onClick,
  size,
}: LinkProps) => {
  const LinkContainer = styled.a`
    cursor: pointer;
    color: ${color};
    font-size: ${getFontSize(size, SizeType.Body)};
    &:hover {
      -webkit-text-decoration-skip: auto;
      text-decoration: underline;
    }
    & svg {
      margin-left: 4px;
      position: relative;
      top: 0.15em;
    }
  `;

  return (
    <LinkContainer href={href} onClick={onClick}>
      {children}
      {external ? <IconExternalLink /> : null}
    </LinkContainer>
  );
};

export default Link;
