import * as React from 'react';
import { TableHeader, TableRow } from '../../tables';

const DocsPropsTableHeader = () => {
  return (
    <thead>
      <TableRow>
        <TableHeader>Name</TableHeader>
        <TableHeader>Type</TableHeader>
        <TableHeader>Default</TableHeader>
        <TableHeader>Description</TableHeader>
      </TableRow>
    </thead>
  );
};

export default DocsPropsTableHeader;
