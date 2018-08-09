import * as React from 'react';
import { Table, TableRow } from '../../tables';
import DocsGuidanceHeader from './DocsGuidanceHeader';

interface DocsGuidanceProps {
  readonly children: React.ReactNode;
  readonly title?: String;
}

const DocsGuidance = ({ children }: DocsGuidanceProps) => {
  return (
    <Table layout="fixed">
      <TableRow>
        <DocsGuidanceHeader alignment="center" color="do">Do</DocsGuidanceHeader>
        <DocsGuidanceHeader alignment="center" color="dont">Don't</DocsGuidanceHeader>
      </TableRow>
      {children}
    </Table>
  );

};

export default DocsGuidance;
