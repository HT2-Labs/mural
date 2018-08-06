import * as React from 'react';

import TabItem from '../menus/TabItem';
import TabMenu from '../menus/TabMenu';
import { Align } from '../utils/AlignmentProps';

import Table from '../tables/Table';
import TableCell from '../tables/TableCell';
import TableRow from '../tables/TableRow';

import DocsPropsTableHeader from '../docs/DocsPropsTableHeader';
import { H1, P, SizeType } from '../Text';
import DocsPlayground from './DocsPlayground';

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

export default () => {

  return (
    <>
      <H1 size={SizeType.ExtraLarge}>Menus</H1>
      <hr />
      <P>Simple tab menu. Only use for top level page specific navigation.</P>
      <DocsPlayground code={codeSnippet} props={availableProps}>
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
