import * as React from 'react';
import styled from '../mural-styled-components';

import { em } from 'polished';
import DocsPageProps from '../../docs/pages/components/DocsPageProps';
import { DocsDescription, DocsPlayground } from '../../docs/shared';
import { getSize, Size } from '../sizes';

const Box = styled.div<{ readonly size: Size }>`
  background-color: ${(props) => props.theme.color.Secondary};
  height: ${(props) => getSize(props.size, Size.Default)};
  width: ${(props) => getSize(props.size, Size.Default)};
  margin: ${em(Size.Default)};
`;

const DocsText = ({ }: DocsPageProps) => {
  return (
    <>
      <DocsDescription>
        <DocsPlayground>
          <Box size={Size.Exa} />
          <Box size={Size.Peta} />
          <Box size={Size.Tera} />
          <Box size={Size.Giga} />
          <Box size={Size.Mega} />
          <Box size={Size.Default} />
          <Box size={Size.Bite} />
          <Box size={Size.Bit} />
        </DocsPlayground>
      </DocsDescription>
    </>
  );
};

export default DocsText;
