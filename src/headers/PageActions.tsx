import * as React from 'react';
import styled from 'styled-components';
import HeaderProps from '../utils/HeaderProps';

export default ({ children }: HeaderProps) => {
  const PageActions = styled.div`
    margin: auto 0 auto auto;
  `;

  return (
    <PageActions>
      {children}
    </PageActions>
  );
};
