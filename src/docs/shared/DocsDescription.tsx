import * as React from 'react';
import { H2 } from '../../text';
import { Size } from '../../utils/sizes';

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
      <H2 size={Size.Giga}>{title}</H2>
      <hr />
      {children}
    </>
  );
};

export default DocsDescription;
