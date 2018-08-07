import * as React from 'react';
import Table from '../tables/Table';
import TableHeader from '../tables/TableHeader';
import TableRow from '../tables/TableRow';

interface Props {
  readonly children: React.ReactNode;
  readonly title?: String;
}

export default ({
  children,
}: Props) => {
  return (
    <Table layout="fixed">
        <TableRow><TableHeader alignment="center">Do</TableHeader>
        <TableHeader alignment="center">Don't</TableHeader></TableRow>
        {children}
    </Table>
  );

};
