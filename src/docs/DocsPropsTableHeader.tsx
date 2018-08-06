import * as React from 'react';
import TableHeader from '../tables/TableHeader';
import TableRow from '../tables/TableRow';
export default () => {
    return (
<TableRow>
  <TableHeader>Name</TableHeader>
  <TableHeader>Type</TableHeader>
  <TableHeader>Default</TableHeader>
  <TableHeader>Description</TableHeader>
</TableRow>
    );
  };
