import * as React from 'react';
import styled from 'styled-components';

import { Align } from '../utils/AlignmentProps';

interface TabMenuProps {
  readonly children: React.ReactNode;
  readonly alignment?: Align;
  readonly ariaLabel?: string | undefined;
}

const getAlignment = (alignment?: Align) => {
  switch (alignment) {
    case Align.Left: return 'justify-content: flex-start';
    case Align.Center: return 'justify-content: center';
    case Align.Right: return 'justify-content: flex-end';
    default: return undefined;
  }
};

const TabMenu = ({ children, alignment, ariaLabel }: TabMenuProps) => {
  const alignType = getAlignment(alignment);

  const TabMenuContainer = styled.nav`
    display: flex;
    height: 44px;
    margin: auto 4px 0;
    ${alignType};
  `;

  return (
    <TabMenuContainer role="presentation" aria-label={ariaLabel}>
      {children}
    </TabMenuContainer>
  );
};

export default TabMenu;
