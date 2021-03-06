import * as React from 'react';
import styled from 'styled-components';

export enum Layout {
  auto,
  fixed,
}

interface TabMenuProps {
    readonly children: React.ReactNode;
    readonly layout?: string;
  }

  export default ({ children, layout }: TabMenuProps) => {
    const Table = styled.table`
      width: 100%;
      border-collapse: collapse;
      background-color: #fff;
      padding: 8px;
      ${layout !== undefined ? `table-layout: ${layout};` : null}
    `;

    return (
      <Table>
        {children}
      </Table>
    );
  };
