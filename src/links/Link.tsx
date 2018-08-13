import * as React from 'react';
import styled from 'styled-components';
import IconExternalLink from '../icons/IconExternalLink';
import LinkProps from './linkProps';

const Link = ({
  children,
  color = String(({ theme }: any ) => theme.color.Button),
  external = false,
  href,
  onClick,
}: LinkProps) => {

  const LinkContainer = styled.a`
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
    <LinkContainer href={href} onClick={onClick}>
      { children }
      { external ? <IconExternalLink/> : null}
    </LinkContainer>
  );
};

export default Link;
