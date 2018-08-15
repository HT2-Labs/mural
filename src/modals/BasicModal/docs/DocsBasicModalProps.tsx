import * as React from 'react';

import { DocsPropsTableHeader } from '../../../docs/shared';
import { Table, TableCell, TableRow } from '../../../tables';

export default () => {
  return(
    <Table>
      <DocsPropsTableHeader />
      <tbody>
        <TableRow>
          <TableCell>open</TableCell>
          <TableCell>Boolean</TableCell>
          <TableCell>Undefined </TableCell>
          <TableCell>Defines whether the modal is open</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>onCloseFn</TableCell>
          <TableCell>Function</TableCell>
          <TableCell>Undefined</TableCell>
          <TableCell>A function to call when a user attempts to close the modal</TableCell>
        </TableRow>
      </tbody>
    </Table>
  );
};
