import * as React from 'react';
import styled from 'styled-components';

interface DocsGuidanceProps {
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

const DocsGuidanceHeader = ({ children, alignment, color }: DocsGuidanceProps) => {
  const borderColor = getColor(color);
  const Table = styled.th`
    ${alignment !== undefined ? `text-align: ${alignment};` : `text-align: left`};
    border-bottom: solid 3px;
    border-color: ${borderColor};
    padding: 16px 8px;
  `;

  return (
    <Table>
      {children}
    </Table>
  );
};

export default DocsGuidanceHeader;
