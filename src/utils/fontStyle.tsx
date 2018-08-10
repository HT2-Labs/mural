import * as React from 'react';

export interface FontStyleProps {
  readonly children: React.ReactNode;
  readonly strong?: boolean;
  readonly italic?: boolean;
}

export default ({strong = false, italic = false, children}: FontStyleProps) => {
  return strong && italic ? <strong><i>{children}</i></strong> : children;
  return strong ? <strong>{children}</strong> : children;
  return italic ? <i>{children}</i> : children;
};
