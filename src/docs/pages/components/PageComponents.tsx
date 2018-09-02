import * as React from 'react';
import styled from '../../../utils/mural-styled-components';

import { Router } from '@reach/router';
import {
  DocsButtons,
  DocsCards,
  DocsForms,
  DocsHeaders,
  DocsIcons,
  DocsLists,
  DocsMedia,
  DocsMenus,
  DocsModals,
  DocsText,
  DocsThemes,
  DocsUtils,
} from '.';
import DocsPage from '../../shared/DocsPage';
import DocsPageProps from './DocsPageProps';
import DocsSidebar from './DocsSidebar';

const MainWrap = styled.div`
  display: grid;
  grid-template-columns: 250px auto;
  height: 100%;
`;

const PageComponents = ({}: DocsPageProps) => {
  return (
    <>
    <MainWrap>
    <DocsSidebar />
      <DocsPage>
        <Router>
          <DocsThemes path={'/'} />
          <DocsButtons path={'buttons'} />
          <DocsCards path={'cards'} />
          <DocsForms path={'forms'} />
          <DocsHeaders path={'headers'} />
          <DocsIcons path={'icons'} />
          <DocsLists path={'lists'} />
          <DocsMenus path={'menus'} />
          <DocsMedia path={'media'} />
          <DocsModals path={'modal'} />
          <DocsText path={'text'} />
          <DocsUtils path={'utils'} />
        </Router>

      </DocsPage>
    </MainWrap>
    </>
  );
};

export default PageComponents;
