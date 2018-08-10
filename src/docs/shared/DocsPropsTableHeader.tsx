import * as React from 'react';
import { TableHeader, TableRow } from '../../tables';

const DocsPropsTableHeader = () => {
  return (
    <TableRow>
      <TableHeader>Name</TableHeader>
      <TableHeader>Type</TableHeader>
      <TableHeader>Default</TableHeader>
      <TableHeader>Description</TableHeader>
    </TableRow>
  );
};

export default DocsPropsTableHeader;
