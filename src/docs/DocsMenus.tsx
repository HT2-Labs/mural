import * as React from 'react';

import TabItem from '../menus/TabItem';
import TabMenu from '../menus/TabMenu';
import { Align } from '../utils/AlignmentProps';

import { H1, H2, P, SizeType } from '../Text';
import DocsCode from './DocsCode';
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
      <H1 size={SizeType.ExtraLarge}>Headers</H1>
      <hr />
      <P>Simple tab menu. Only use for top level page specific navigation.</P>
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
      <H2 size={SizeType.Large}>Examples</H2>
      <hr />
      <DocsPlayground>
        <DocsCode code={codeSnippet} />
      </DocsPlayground>
      <H2 size={SizeType.Large}>Props</H2>
      <DocsPlayground>
        <code>Prop: active</code> - <code>Default: none</code>
        <hr />
      </DocsPlayground>
    </>
  );
};
