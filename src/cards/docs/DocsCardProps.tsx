import * as React from 'react';

import { DocsPropsTableHeader } from '../../docs/shared';
import { Table, TableCell, TableRow } from '../../tables';

export default () => {
  return(
    <Table>
      <DocsPropsTableHeader />
      <tbody>
        <TableRow>
          <TableCell>active</TableCell>
          <TableCell>Boolean</TableCell>
          <TableCell>False</TableCell>
          <TableCell>Use for when a Card needs to be shown as active/selected</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>textColor</TableCell>
          <TableCell>string | theme</TableCell>
          <TableCell>Undefined</TableCell>
          <TableCell>Sets the text color of the card</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>backgroundColor</TableCell>
          <TableCell>string | theme</TableCell>
          <TableCell>Undefined</TableCell>
          <TableCell>Sets the background color of the card</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>headerColor</TableCell>
          <TableCell>string | theme</TableCell>
          <TableCell>Undefined</TableCell>
          <TableCell>Set background color of header/title</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>onClick</TableCell>
          <TableCell>function</TableCell>
          <TableCell>Undefined</TableCell>
          <TableCell>Sets the on click action for the card</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>overlayContent</TableCell>
          <TableCell>jsx</TableCell>
          <TableCell>Undefined</TableCell>
          <TableCell>Adds the overlay menu to the Card and displays the
            overlayContent as the contents</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>title</TableCell>
          <TableCell>jsx | string</TableCell>
          <TableCell>Undefined</TableCell>
          <TableCell>Sets the Card title</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>children</TableCell>
          <TableCell>jsx</TableCell>
          <TableCell>Undefined</TableCell>
          <TableCell>Card children</TableCell>
        </TableRow>
      </tbody>
    </Table>
  );
};
