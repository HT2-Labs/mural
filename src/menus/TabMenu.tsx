import * as React from 'react';
import styled from 'styled-components';

import { Align } from '../utils/AlignmentProps';

interface TabMenuProps {
  readonly children: React.ReactNode;
  readonly alignment?: Align;
  readonly ariaLabel?: string;
}

const getAlignment = (alignment?: Align) => {
  switch (alignment) {
    case Align.Left: return 'justify-content: flex-start';
    case Align.Center: return 'justify-content: center';
    case Align.Right: return 'justify-content: flex-end';
    default: return undefined;
  }
};

export default ({ children, alignment, ariaLabel }: TabMenuProps) => {
  const alignType = getAlignment(alignment);

  const TabMenu = styled.nav`
    display: flex;
    height: 44px;
    margin: auto 4px 0;
    ${alignType};
  `;

  return (
    <TabMenu role="presentation" aria-label={ariaLabel}>
      {children}
    </TabMenu>
  );
};
