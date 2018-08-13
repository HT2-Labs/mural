import * as React from 'react';
import { H2, SizeType } from '../../text';

interface DocsDescriptionProps {
  readonly children: React.ReactNode;
  readonly title?: String;
}

const DocsDescription = ({
  children,
  title,
}: DocsDescriptionProps) => {
  return (
    <>
      <H2 size={SizeType.Large}>{title}</H2>
      <hr />
      {children}
    </>
  );
};

export default DocsDescription;
