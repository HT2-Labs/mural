import * as React from 'react';

import { ButtonGhost } from '../../../buttons';
import { PageActions, PageHeader, PageHeaderText, PageTitle } from '../../../headers';
import { TabItem, TabMenu } from '../../../navigation';
import { Table, TableCell, TableRow } from '../../../tables';
import { H1, H3 } from '../../../text';
import { Size } from '../../../utils/sizes';
import { DocsPlayground, DocsPropsTableHeader } from '../../shared';
import DocsPageProps from './DocsPageProps';

const codeSnippet = `import { H1, H3 } from '../Text';
import PageHeader from '@ht2-labs/mural/headers/PageHeader';
import PageHeaderText from '@ht2-labs/mural/headers/PageHeaderText';
import PageTitle from '@ht2-labs/mural/headers/PageTitle';
<PageHeader>
  <PageTitle>
    <PageHeaderText>
      <H1 size={Size.Large}>
        Promote
      </H1>
      <H3 size={Size.Small}>
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
      ...
    </TableCell>
    <TableCell>Size.Body </TableCell>
    <TableCell>Defines the text size of the header</TableCell>
  </TableRow>
</Table>;

const DocsHeaders = ({}: DocsPageProps) => {
  return (
    <>
      <H1 size={Size.ExtraLarge}>Headers</H1>
      <hr />
      <DocsPlayground code={codeSnippet} exampleProps={availableProps}>
        <PageHeader>
          <PageTitle>
            <PageHeaderText>
              <H1 size={Size.Large}>
                Promote
            </H1>
              <H3 size={Size.Small}>
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
