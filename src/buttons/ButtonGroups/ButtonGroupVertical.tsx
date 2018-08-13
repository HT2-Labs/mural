import * as React from 'react';
import styled from 'styled-components';

import { Align } from '../../utils/AlignmentProps';

interface ButtonGroupProps {
  readonly children: React.ReactNode;
  readonly alignment?: Align;
}

const getAlignment = (alignment?: Align) => {
  switch (alignment) {
    case Align.Left: return 'justify-content: flex-start';
    case Align.Center: return 'justify-content: center';
    case Align.Right: return 'justify-content: flex-end';
    default: return undefined;
  }
};

const ButtonGroupVertical = ({ children, alignment }: ButtonGroupProps) => {

  const alignType = getAlignment(alignment);

  const Group = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
    ${alignType};

    > Button {
      margin-top: 8px;
    }
    > Button:first-child {
      margin-top: 0;
    }
  `;

  return <Group>{children}</Group>;
};

export default ButtonGroupVertical;
