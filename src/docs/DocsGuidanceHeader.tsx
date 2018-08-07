import * as React from 'react';
import styled from '../../node_modules/styled-components';

interface TabMenuProps {
    readonly children: React.ReactNode;
    readonly alignment?: string;
    readonly color?: string;
  }
  const getColor = (color?: string) => {
    switch (color) {
      case 'do': return ({ theme }: any) => theme.color.Success;
      case 'dont': return ({ theme }: any) => theme.color.Danger;
      default: return `#ddd`;
    }
  };
  export default ({ children, alignment, color }: TabMenuProps) => {
    const borderColor = getColor(color);
    const Table = styled.th`
      ${alignment !== undefined ? `text-align: ${alignment};` : `text-align: left`};
      border-bottom: solid 3px;
      border-color: ${borderColor};
      /* border-collapse: collapse; */
      padding: 16px 8px;
    `;

    return (
      <Table>
        {children}
      </Table>
    );
  };
