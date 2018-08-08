import * as React from 'react';
import Table from '../tables/Table';
import TableRow from '../tables/TableRow';
import DocsGuidanceHeader from './DocsGuidanceHeader';

interface Props {
  readonly children: React.ReactNode;
  readonly title?: String;
}

export default ({
  children,
}: Props) => {
  return (
    <Table layout="fixed">
        <TableRow><DocsGuidanceHeader alignment="center" color="do">Do</DocsGuidanceHeader>
        <DocsGuidanceHeader alignment="center" color="dont">Don't</DocsGuidanceHeader></TableRow>
        {children}
    </Table>
  );

};
