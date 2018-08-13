import * as React from 'react';

export interface FontStyleProps {
  readonly children: React.ReactNode;
  readonly strong?: boolean;
  readonly italic?: boolean;
}

export default ({strong = false, italic = false, children}: FontStyleProps) => {
  if (strong && italic) {
    return <strong><i>{children}</i></strong>;
  }
  if (strong) {
    return <strong>{children}</strong>;
  }
  if (italic) {
    return <i>{children}</i>;
  }
  return children;
};
