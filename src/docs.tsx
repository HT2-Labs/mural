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
import { ThemeProvider } from './ThemeProvider';
import checkForGithubPages from './utils/checkForGithubPages';

const Demo = () => {
  const theme = {
    color: {
      Body: '#efefef',
      Button: '#076699',
      Danger: '#ce0000',
      Disabled: '#ddd',
      Primary: '#41bfee',
      Secondary: '#344a58',
      Success: '#22c65b',
    },
    font: {
      Base: '16px',
    },
    radius: {
      Large: '50%',
      Medium: '12px',
      Small: '2px',
    },
    shadow: {
      Large: '0 2px 2px 2px rgba(0, 0, 0, 0.12)',
      Medium: '0px 1px 5px 0px rgba(0, 0, 0, 0.3)',
      Small: 'rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px',
    },
  };

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
  <ThemeProvider theme={theme}>
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
