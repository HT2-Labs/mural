import * as React from 'react';

import { DocsPropsTableHeader } from '../../docs/shared';
import { Table, TableCell, TableRow } from '../../tables';

export default () => {
  return(
    <Table>
      <DocsPropsTableHeader />
      <tbody>
        <TableRow>
          <TableCell>url</TableCell>
          <TableCell>string</TableCell>
          <TableCell>undefined</TableCell>
          <TableCell>Media source URL</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>title</TableCell>
          <TableCell>string</TableCell>
          <TableCell>undefined</TableCell>
          <TableCell>Title text for media</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>height</TableCell>
          <TableCell>string</TableCell>
          <TableCell>100%</TableCell>
          <TableCell>The height, in percentage, of the media</TableCell>
        </TableRow>
      </tbody>
    </Table>
  );
};
