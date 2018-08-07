import * as React from 'react';
import Table from '../tables/Table';
import TableRow from '../tables/TableRow';
import DocsDosDontsHeader from './DocsGuidanceHeader';

interface Props {
  readonly children: React.ReactNode;
  readonly title?: String;
}

export default ({
  children,
}: Props) => {
  return (
    <Table layout="fixed">
        <TableRow><DocsDosDontsHeader alignment="center" color="do">Do</DocsDosDontsHeader>
        <DocsDosDontsHeader alignment="center" color="dont">Don't</DocsDosDontsHeader></TableRow>
        {children}
    </Table>
  );

};
