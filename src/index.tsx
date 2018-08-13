import * as React from 'react';
import * as dom from 'react-dom';
import styled from 'styled-components';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
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
import checkForGithubPages from './utils/checkForGithubPages';

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
          <Switch>
            <Route path="/themes" component={DocsThemes} />
            <Route path="/buttons" component={DocsButtons} />
            <Route path="/cards" component={DocsCards} />
            <Route path="/forms" component={DocsForms} />
            <Route path="/headers" component={DocsHeaders} />
            <Route path="/icons" component={DocsIcons} />
            <Route path="/lists" component={DocsLists} />
            <Route path="/menus" component={DocsMenus} />
            <Route path="/modal" component={DocsModals} />
            <Route path="/text" component={DocsText} />
            <Route component={DocsIntro} />
          </Switch>
        </Main>
      </MainWrap>
    </ThemeProvider>
  );
};

const path = checkForGithubPages() ? 'mural/' : '';
const element = document.getElementsByClassName('app')[0];
dom.render(<BrowserRouter basename={path}><Demo /></BrowserRouter>, element);
