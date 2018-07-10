import * as React from 'react';

import DisplayText from '../text/DisplayText';

import Button from '../buttons/Button';
import PageActions from '../headers/PageActions';
import PageHeader from '../headers/PageHeader';
import PageHeaderText from '../headers/PageHeaderText';
import PageTitle from '../headers/PageTitle';
import IconEdit from '../icons/IconEdit';
import TabItem from '../menus/TabItem';
import TabMenu from '../menus/TabMenu';
import { ButtonType } from '../utils/ButtonProps';
import { ElementType, SizeType } from '../utils/TextProps';
import DocsSectionTitle from './DocsSectionTitle';

export default () => {

  return (
    <>
      <DocsSectionTitle id="Headers">Headers</DocsSectionTitle>
        <PageHeader>
          <PageTitle>
            <PageHeaderText>
              <DisplayText type={ElementType.H1} size={SizeType.Large}>
                Promote
              </DisplayText>
              <DisplayText type={ElementType.H3} size={SizeType.Small}>
                Grow into a new role
              </DisplayText>
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
