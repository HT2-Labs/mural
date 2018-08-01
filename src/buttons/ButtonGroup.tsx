import * as React from 'react';
import styled from 'styled-components';

interface ButtonGroupProps {
  readonly children: React.ReactNode;
}

export default ({ children }: ButtonGroupProps) => {

  const TabMenu = styled.nav`
    display: flex;
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
