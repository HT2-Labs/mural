import * as React from 'react';

import { ButtonGhost } from '../../../buttons';
import { PageActions, PageHeader, PageHeaderText, PageTitle } from '../../../headers';
import { TabItem, TabMenu } from '../../../menus';
import { Table, TableCell, TableRow } from '../../../tables';
import { H1, H3, SizeType } from '../../../Text';
import { DocsPlayground, DocsPropsTableHeader } from '../../shared';

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
      <ButtonGhost onClick={deadClick} >Edit</ButtonGhost>
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

const DocsHeaders = () => {
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
              <ButtonGhost>Edit</ButtonGhost>
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

export default DocsHeaders;
