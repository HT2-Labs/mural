import * as React from 'react';
import styled from '../utils/mural-styled-components';

import ThemeProvider from '../themes/themeProps';

import IconExternalLink from '../icons/IconExternalLink';
import { getSize, Size } from '../utils/sizes';
import textStyles from './utils/textStyles';

export interface LinkProps {
  readonly children?: React.ReactNode;
  readonly color?: ((props: { readonly theme: ThemeProvider }) => string) | string;
  readonly external?: boolean;
  readonly href?: string | undefined;
  readonly onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  readonly size?: Size;
}

const Link = (props: LinkProps) => {
  const BaseLink = styled.a`
  ${textStyles}
  cursor: pointer;
  font-size: ${getSize(props.size, Size.Default)};
  text-decoration: none;

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
    <BaseLink
      href={props.href}
      onClick={props.onClick}
    >
      {props.children}
      {props.external !== undefined ? <IconExternalLink /> : null}
    </BaseLink>
  );
};

export default Link;
