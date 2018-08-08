import * as React from 'react';
import styled from 'styled-components';
import IconExternalLink from '../icons/IconExternalLink';
import LinkProps from './linkProps';

export default ({
  children,
  external = false,
  color = String(({ theme }: any ) => theme.color.Button),
} : LinkProps) => {
  const Link = styled.a`
    cursor: pointer;
    color: ${color};
    &:hover{
      -webkit-text-decoration-skip: auto;
      text-decoration: underline;
    }
    & svg {
      margin-left: 4px;
      position: relative;
      top: .15em;
    }
  `;

  return(
    <Link>
      { children }
      { external ? <IconExternalLink/> : null}
    </Link>
  );
};
