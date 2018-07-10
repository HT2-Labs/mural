import * as React from 'react';
import styled from 'styled-components';
import HeaderProps from '../utils/HeaderProps';

export default ({ children }: HeaderProps) => {
  const PageHeaderWrapper = styled.div`
    background-color: #fff;
    box-shadow: ${({ theme }) => theme.shadow.Main};
    position: relative;
  `;
  const PageHeader = styled.header`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    max-width: 1200px;
    min-height: 140px;
    padding: 0 8px;
    width: 100%;
  `;

  return (
    <PageHeaderWrapper>
      <PageHeader>
        {children}
      </PageHeader>
    </PageHeaderWrapper>
  );
};
