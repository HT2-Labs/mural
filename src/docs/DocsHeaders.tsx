import * as React from 'react';

import { H1, H3, SizeType } from '../Text';

import Table from '../tables/Table';
import TableCell from '../tables/TableCell';
import TableRow from '../tables/TableRow';

import DocsPropsTableHeader from '../docs/DocsPropsTableHeader';
import DocsPlayground from './DocsPlayground';

import { GhostButton } from '../Button';
import PageActions from '../headers/PageActions';
import PageHeader from '../headers/PageHeader';
import PageHeaderText from '../headers/PageHeaderText';
import PageTitle from '../headers/PageTitle';
import IconEdit from '../icons/IconEdit';
import TabItem from '../menus/TabItem';
import TabMenu from '../menus/TabMenu';

const deadClick = () => {
  return;
};

const codeSnippet = `import { H1, H3, SizeType } from '../Text';
import PageHeader from '@ht2-labs/mural/headers/PageHeader';
import PageHeaderText from '@ht2-labs/mural/headers/PageHeaderText';
import PageTitle from '@ht2-labs/mural/headers/PageTitle';
<PageHeader>
<PageTitle>
  <PageHeaderText>
    <H1 size={SizeType.Large}>
      Promote
    </H1>
    <H3 size={SizeType.Small}>
      Grow into a new role
    </H3>
  </PageHeaderText>
  <PageActions>
    <GhostButton onClick={deadClick} ><IconEdit /> Edit</GhostButton>
  </PageActions>
</PageTitle>
</PageHeader>`;

const availableProps =
<Table>
<DocsPropsTableHeader/>
  <TableRow>
    <TableCell>size</TableCell>
    <TableCell>
      SizeType.Body, SizeType.Small, SizeType.Medium, SizeType.Large, SizeType.ExtraLarge
    </TableCell>
    <TableCell>SizeType.Body </TableCell>
    <TableCell>Defines the text size of the header</TableCell>
  </TableRow>
</Table>;

export default () => {

  return (
    <>
      <H1 size={SizeType.ExtraLarge}>Headers</H1>
      <hr />
      <DocsPlayground code={codeSnippet} props={availableProps}>
        <PageHeader>
          <PageTitle>
            <PageHeaderText>
              <H1 size={SizeType.Large}>
                Promote
            </H1>
              <H3 size={SizeType.Small}>
                Grow into a new role
            </H3>
            </PageHeaderText>
            <PageActions>
              <GhostButton onClick={deadClick} ><IconEdit /> Edit</GhostButton>
            </PageActions>
          </PageTitle>
          <TabMenu>
            <TabItem active>Goals</TabItem>
            <TabItem>Archive</TabItem>
            <TabItem>Reports</TabItem>
          </TabMenu>
        </PageHeader >
      </DocsPlayground>
    </>
  );
};
