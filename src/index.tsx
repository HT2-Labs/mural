import * as React from 'react';
import * as dom from 'react-dom';
import styled from './utils/mural-styled-components';

import { Router } from '@reach/router';
import DocsIntro from './docs/DocsIntro';
import DocsSidebar from './docs/DocsSidebar';
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
} from './docs/pages/components';
import ThemeProvider from './themes/ThemeProvider';
import getRootPath from './utils/getRootPath';

const Demo = () => {

  const MainWrap = styled.div`
    display: grid;
    grid-template-columns: 250px auto;
    grid-template-rows: auto;
    max-width: 1200px;
    height: 100%;
  `;

  const Main = styled.main`
    padding: 20px;
  `;

return (
  <ThemeProvider>
      <MainWrap>
        <DocsSidebar />
        <Main>
          <Router>
            <DocsThemes path={getRootPath('/themes')} />
            <DocsButtons path={getRootPath('/buttons')} />
            <DocsCards path={getRootPath('/cards')} />
            <DocsForms path={getRootPath('/forms')} />
            <DocsHeaders path={getRootPath('/headers')} />
            <DocsIcons path={getRootPath('/icons')} />
            <DocsLists path={getRootPath('/lists')} />
            <DocsMenus path={getRootPath('/menus')} />
            <DocsMedia path={getRootPath('/media')} />
            <DocsModals path={getRootPath('/modal')} />
            <DocsText path={getRootPath('/text')} />
            <DocsIntro path={getRootPath('/')} />
          </Router>
        </Main>
      </MainWrap>
    </ThemeProvider>
  );
};

const element = document.getElementsByClassName('app')[0];
dom.render(<Demo />, element);
