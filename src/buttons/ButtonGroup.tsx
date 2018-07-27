import * as React from 'react';
import styled from 'styled-components';

interface ButtonGroupProps {
  readonly children: React.ReactNode;
}

export default ({ children }: ButtonGroupProps) => {
  const TabMenu = styled.nav`
    display: flex;
  `;

  return (
    <TabMenu>
      {children}
    </TabMenu>
  );
};
