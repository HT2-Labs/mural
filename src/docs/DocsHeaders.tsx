import * as React from 'react';

import { H1, H3, SizeType } from '../Text';

import { Button, ButtonType } from '../Button';
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

export default () => {

  return (
    <>
      <H1 size={SizeType.ExtraLarge}>Headers</H1>
      <hr />
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
            <Button onClick={deadClick} type={ButtonType.Ghost}><IconEdit /> Edit</Button>
          </PageActions>
        </PageTitle>
        <TabMenu>
          <TabItem active>Goals</TabItem>
          <TabItem>Archive</TabItem>
          <TabItem>Reports</TabItem>
        </TabMenu>
      </PageHeader>
    </>
  );
};
