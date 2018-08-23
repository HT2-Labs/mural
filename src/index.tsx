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
  DocsMenus,
  DocsModals,
  DocsText,
  DocsThemes,
} from './docs/pages/components';
import ThemeProvider from './themes/ThemeProvider';

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
            <DocsThemes path="themes" />
            <DocsButtons path="buttons" />
            <DocsCards path="cards" />
            <DocsForms path="forms" />
            <DocsHeaders path="headers" />
            <DocsIcons path="icons" />
            <DocsLists path="lists" />
            <DocsMenus path="menus" />
            <DocsModals path="modal" />
            <DocsText path="text" />
            <DocsIntro path="/"/>
          </Router>
        </Main>
      </MainWrap>
    </ThemeProvider>
  );
};

const element = document.getElementsByClassName('app')[0];
dom.render(<Demo />, element);
