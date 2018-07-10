import * as React from 'react';
import * as dom from 'react-dom';
import { ThemeProvider } from 'styled-components';
import styled from 'styled-components';

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
    grid-template-columns: 250px 870px;
    grid-template-rows: auto;
    margin: 0 auto;
    padding-top: 16px;
    width: 1200px;
  `;

  const Main = styled.main`
    padding: 20px;
  `;

  return (
    <ThemeProvider theme={theme}>
      <MainWrap>
        <DocsSidebar />
        <Main>
          <DocsIntro />
          <DocsButtons />
          <DocsCards />
          <DocsHeaders />
          <DocsIcons />
          <DocsMenus />
          <DocsText />
        </Main>
      </MainWrap>
    </ThemeProvider>
  );
};

const element = document.getElementsByClassName('app')[0];
dom.render(<Demo />, element);
