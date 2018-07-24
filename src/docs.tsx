import * as React from 'react';
import * as dom from 'react-dom';
import { ThemeProvider } from 'styled-components';
import styled from 'styled-components';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import DocsButtons from './docs/DocsButtons';
import DocsCards from './docs/DocsCards';
import DocsHeaders from './docs/DocsHeaders';
import DocsIcons from './docs/DocsIcons';
import DocsIntro from './docs/DocsIntro';
import DocsMenus from './docs/DocsMenus';
import DocsSidebar from './docs/DocsSidebar';
import DocsText from './docs/DocsText';

const Demo = () => {
  const theme = {
    color: {
      BodyText: '#2f2f2f',
      Button: '#076699',
      ButtonText: '#ffffff',
      Danger: '#ff0000',
      Disabled: '#eeeeee',
      DisabledText: '#5d5d5d',
      Primary: '#41bfee',
      PrimaryText: '#ffffff',
      Secondary: '#344a58',
      SecondaryText: '#ffffff',
    },
    radius: {
      Button: '2px',
      Card: '12px',
    },
    shadow: {
      Large: '0 2px 2px 2px rgba(0, 0, 0, 0.12)',
      Main: '0 2px 2px 0 rgba(0, 0, 0, 0.24)',
    },
  };

  const MainWrap = styled.div`
    border-top: 8px solid ${theme.color.Secondary};
    display: grid;
    grid-template-columns: 250px auto;
    grid-template-rows: auto;
    margin: 0 auto;
    padding-top: 16px;
    max-width: 1200px;
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
            <Route exact path="/" component={DocsIntro}/>
            <Route path="/buttons" component={DocsButtons}/>
            <Route path="/cards" component={DocsCards}/>
            <Route path="/headers" component={DocsHeaders}/>
            <Route path="/icons" component={DocsIcons}/>
            <Route path="/menus" component={DocsMenus}/>
            <Route path="/text" component={DocsText}/>
          </Switch>
        </Main>
      </MainWrap>
    </ThemeProvider>
  );
};

const element = document.getElementsByClassName('app')[0];
dom.render(<BrowserRouter><Demo /></BrowserRouter>, element);
