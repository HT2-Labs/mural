import * as React from 'react';
import styled from 'styled-components';

import { Align } from '../../utils/AlignmentProps';

interface ButtonGroupProps {
  readonly children: React.ReactNode;
  readonly alignment?: Align;
  readonly condensed?: boolean;
}

const getAlignment = (alignment?: Align) => {
  switch (alignment) {
    case Align.Left: return 'justify-content: flex-start';
    case Align.Center: return 'justify-content: center';
    case Align.Right: return 'justify-content: flex-end';
    default: return undefined;
  }
};

const ButtonGroup = ({ children, alignment, condensed = false }: ButtonGroupProps) => {

  const alignType = getAlignment(alignment);

  const Group = styled.div`
    display: flex;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    ${alignType};

    > Button {
      ${!condensed ? 'margin-left: 8px;' : null}
    }
    > Button:first-child {
      margin-left: 0;
    }
  `;

  return <Group>{children}</Group>;
};

export default ButtonGroup;
