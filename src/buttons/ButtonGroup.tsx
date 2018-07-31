import * as React from 'react';
import styled from 'styled-components';
// Import { JustifyContentProperty } from '../../node_modules/csstype';

import { Align } from '../utils/AlignmentProps';

interface ButtonGroupProps {
  readonly children: React.ReactNode;
  readonly alignment?: Align;
}
const getAlignment = (alignment: Align) => {
  switch (alignment) {
    case Align.Left: default: return 'flex-start';
    case Align.Center: return 'center';
    case Align.Right: return 'flex-end';
  }
};

export default ({ children, alignment = Align.Left }: ButtonGroupProps) => {
  const alignType = getAlignment(alignment);

  const TabMenu = styled.nav`
    display: flex;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    justify-content: ${alignType};

    > Button {
      margin-left: 8px;
    }
    > Button:first-child {
      margin-left: 0;
    }
  `;

  return (
    <TabMenu>
      {children}
    </TabMenu>
  );
};
