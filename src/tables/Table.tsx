import * as React from 'react';
import styled from '../../node_modules/styled-components';

interface TabMenuProps {
    readonly children: React.ReactNode;
  }

  export default ({ children }: TabMenuProps) => {
    const Table = styled.table`
      width: 100%;
      border-collapse: collapse;
      background-color: #eaeaea;
      padding: 4px;
    `;

    return (
      <Table>
        {children}
      </Table>
    );
  };
