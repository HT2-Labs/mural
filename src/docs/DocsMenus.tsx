import * as React from 'react';

import TabItem from '../menus/TabItem';
import TabMenu from '../menus/TabMenu';
import DocsSectionTitle from './DocsSectionTitle';

export default () => {

  return (
    <>
      <DocsSectionTitle id="Headers">Headers</DocsSectionTitle>
      <TabMenu>
        <TabItem active>Goals</TabItem>
        <TabItem>Archive</TabItem>
        <TabItem>Reports</TabItem>
      </TabMenu>
      <hr />
    </>
  );
};
