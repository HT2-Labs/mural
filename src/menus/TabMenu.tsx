import * as React from 'react';
import styled from 'styled-components';
import MenuProps from '../utils/MenuProps';

export default ({ children }: MenuProps) => {
  const TabMenu = styled.nav`
    display: flex;
    height: 44px;
    margin: auto 4px 0;
  `;

  return (
    <TabMenu>
      {children}
    </TabMenu>
  );
};
