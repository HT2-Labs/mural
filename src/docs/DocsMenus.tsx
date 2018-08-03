import * as React from 'react';

import TabItem from '../menus/TabItem';
import TabMenu from '../menus/TabMenu';
import { Align } from '../utils/AlignmentProps';

import { H1, H2, P, SizeType } from '../Text';
import DocsPlayground from './DocsPlayground';

const codeSnippet =
  `import { TabMenu, TabItem } from '@ht2-labs/mural/Menu';
import { Align } from '../utils/AlignmentProps';
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

export default () => {

  return (
    <>
      <H1 size={SizeType.ExtraLarge}>Menus</H1>
      <hr />
      <P>Simple tab menu. Only use for top level page specific navigation.</P>
      <DocsPlayground code={codeSnippet} props="bleep">
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
      <H2 size={SizeType.Large}>Props</H2>

      <code>Prop: active</code> - <code>Default: none</code>
      <hr />

    </>
  );
};