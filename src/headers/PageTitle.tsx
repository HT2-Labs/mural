import * as React from 'react';
import styled from 'styled-components';
import HeaderProps from '../utils/HeaderProps';

export default ({ children }: HeaderProps) => {
  const PageTitle = styled.div`
    display: flex;
    width: 100%;
  `;

  return (
    <PageTitle>
      {children}
    </PageTitle>
  );
};
