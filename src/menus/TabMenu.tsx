import * as React from 'react';
import styled from 'styled-components';
import MenuProps from '../utils/MenuProps';

export default ({ children }: MenuProps) => {
  const TabMenu = styled.nav`
    display: flex;
    height: 44px;
    width: 100%;
    margin: 0 8px;
  `;

  return (
    <TabMenu>
      {children}
    </TabMenu>
  );
};
