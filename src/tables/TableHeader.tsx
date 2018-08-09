import * as React from 'react';
import styled from 'styled-components';

interface TabMenuProps {
    readonly children: React.ReactNode;
    readonly alignment?: string;
  }

  export default ({ children, alignment }: TabMenuProps) => {
    const Table = styled.th`
      ${alignment !== undefined ? `text-align: ${alignment};` : `text-align: left`};
      border-bottom: solid 3px #ddd;
      border-collapse: collapse;
      padding: 4px;
    `;

    return (
      <Table>
        {children}
      </Table>
    );
  };
