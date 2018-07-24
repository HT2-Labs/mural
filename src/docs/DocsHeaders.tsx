import * as React from 'react';

import { H1, H3, SizeType } from '../text/Text';

import { Button, ButtonType } from '../Button';
import PageActions from '../headers/PageActions';
import PageHeader from '../headers/PageHeader';
import PageHeaderText from '../headers/PageHeaderText';
import PageTitle from '../headers/PageTitle';
import IconEdit from '../icons/IconEdit';
import TabItem from '../menus/TabItem';
import TabMenu from '../menus/TabMenu';
import DocsSectionTitle from './DocsSectionTitle';

export default () => {

  return (
    <>
      <DocsSectionTitle id="Headers">Headers</DocsSectionTitle>
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
            <PageActions><Button type={ButtonType.Ghost}><IconEdit /> Edit</Button></PageActions>
          </PageTitle>
          <TabMenu>
            <TabItem active>Goals</TabItem>
            <TabItem>Archive</TabItem>
            <TabItem>Reports</TabItem>
          </TabMenu>
        </PageHeader>
      <hr />
    </>
  );
};
