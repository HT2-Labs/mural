import * as React from 'react';
import { SizeType } from '../Text';
import H2 from '../text/H1';

interface Props {
  readonly children: React.ReactNode;
  readonly title?: String;
}

export default ({
  children,
  title,
}: Props) => {
  return (
    <div>
      <H2 size={SizeType.Large}>{title}</H2>
      <hr />
      {children}
    </div>
  );

};
