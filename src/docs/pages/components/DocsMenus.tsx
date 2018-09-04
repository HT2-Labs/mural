import * as React from 'react';

import { TabItem, TabMenu } from '../../../navigation';
import { Table, TableCell, TableRow } from '../../../tables';
import { H1, P } from '../../../text';
import { Align } from '../../../utils/AlignmentProps';
import { Size } from '../../../utils/sizes';
import { DocsPlayground, DocsPropsTableHeader } from '../../shared';
import DocsPageProps from './DocsPageProps';

const codeSnippet =
  `import { TabMenu, TabItem } from '@ht2-labs/mural/Menu';
import { Align } from '@ht2-labs/mural/utils/AlignmentProps';
<TabMenu>
  <TabItem active>Goals</TabItem>
  <TabItem>Archive</TabItem>
  <TabItem>Reports</TabItem>
</TabMenu>
<TabMenu alignment={Align.Center}>
  <TabItem active>Goals</TabItem>
  <TabItem>Archive</TabItem>
  <TabItem>Reports</TabItem>
</TabMenu>
<TabMenu alignment={Align.Right}>
  <TabItem active>Goals</TabItem>
  <TabItem>Archive</TabItem>
  <TabItem>Reports</TabItem>
</TabMenu>
`;

const availableProps =
<Table>
<DocsPropsTableHeader/>
  <TableRow>
    <TableCell>active</TableCell>
    <TableCell>Boolean</TableCell>
    <TableCell>Undefined </TableCell>
    <TableCell>Defines whether this is the active tab</TableCell>
  </TableRow>
</Table>;

const DocsMenus = ({}: DocsPageProps) => {

  return (
    <>
      <H1 size={Size.ExtraLarge}>Menus</H1>
      <hr />
      <P>Simple tab menu. Only use for top level page specific navigation.</P>
      <DocsPlayground code={codeSnippet} exampleProps={availableProps}>
        <TabMenu>
          <TabItem active>Goals</TabItem>
          <TabItem>Archive</TabItem>
          <TabItem>Reports</TabItem>
        </TabMenu>
        <TabMenu alignment={Align.Center}>
          <TabItem active>Goals</TabItem>
          <TabItem>Archive</TabItem>
          <TabItem>Reports</TabItem>
        </TabMenu>
        <TabMenu alignment={Align.Right}>
          <TabItem active>Goals</TabItem>
          <TabItem>Archive</TabItem>
          <TabItem>Reports</TabItem>
        </TabMenu>
      </DocsPlayground>
    </>
  );
};

export default DocsMenus;
