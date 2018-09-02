import * as React from 'react';
import styled from '../mural-styled-components';

import DocsPageProps from '../../docs/pages/components/DocsPageProps';
import { DocsDescription, DocsPlayground } from '../../docs/shared';
import { H1, P } from '../../text';
import { getSize, Size } from '../sizes';

const Box = styled.div<{readonly size: Size}>`
  background-color: ${(props) => props.theme.color.Secondary};
  margin: ${getSize(Size.Default, Size.Default)};
`;

const DocsText = ({}: DocsPageProps) => {
  return (
    <>
      <DocsDescription>

        <DocsPlayground>
          {/* <Box size={Size.Exa} />
          <Box size={Size.Peta} />
          <Box size={Size.Tera} />
          <Box size={Size.Giga} />
          <Box size={Size.Mega} />
          <Box size={Size.Default} />
          <Box size={Size.Kilo} />
          <Box size={Size.Bite} /> */}
          <Box />
        </DocsPlayground>
      </DocsDescription>
    </>
  );
};

export default DocsText;
