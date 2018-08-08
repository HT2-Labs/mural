import * as React from 'react';
import * as dom from 'react-dom';
import styled from 'styled-components';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import DocsButtons from './docs/DocsButtons';
import DocsCards from './docs/DocsCards';
import DocsForms from './docs/DocsForms';
import DocsHeaders from './docs/DocsHeaders';
import DocsIcons from './docs/DocsIcons';
import DocsIntro from './docs/DocsIntro';
import DocsLists from './docs/DocsLists';
import DocsMenus from './docs/DocsMenus';
import DocsModal from './docs/DocsModal';
import DocsSidebar from './docs/DocsSidebar';
import DocsText from './docs/DocsText';
import DocsThemes from './docs/DocsThemes';
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

  const path = checkForGithubPages() ? 'mural' : '';

  return (
    <ThemeProvider theme={theme}>
      <MainWrap>
        <DocsSidebar />
        <Main>
          <Switch>
            <Route path={`${path}/`} exact component={DocsIntro} />
            <Route path={`${path}/themes`} component={DocsThemes} />
            <Route path={`${path}/buttons`} component={DocsButtons} />
            <Route path={`${path}/cards`} component={DocsCards} />
            <Route path={`${path}/forms`} component={DocsForms} />
            <Route path={`${path}/headers`} component={DocsHeaders} />
            <Route path={`${path}/icons`} component={DocsIcons} />
            <Route path={`${path}/lists`} component={DocsLists} />
            <Route path={`${path}/menus`} component={DocsMenus} />
            <Route path={`${path}/modal`} component={DocsModal} />
            <Route path={`${path}/text`} component={DocsText} />
          </Switch>
        </Main>
      </MainWrap>
    </ThemeProvider>
  );
};

const element = document.getElementsByClassName('app')[0];
dom.render(<BrowserRouter><Demo /></BrowserRouter>, element);
