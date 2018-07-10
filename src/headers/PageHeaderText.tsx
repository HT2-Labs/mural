import * as React from 'react';
import styled from 'styled-components';
import HeaderProps from '../utils/HeaderProps';

export default ({ children }: HeaderProps) => {
  const PageHeaderText = styled.div`
    margin: 0 4px;
  `;

  return (
    <PageHeaderText>
      {children}
    </PageHeaderText>
  );
};
