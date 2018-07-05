import * as React from 'react';
import * as dom from 'react-dom';
import { ThemeProvider } from 'styled-components';
import styled from 'styled-components';

import DocsCards from './docs/DocsCards';
import DocsIcons from './docs/DocsIcons';
import DocsIntro from './docs/DocsIntro';
import DocsSidebar from './docs/DocsSidebar';

const Demo = () => {
  const theme = {
    borderRadius: '12px',
    boxShadow: '0 1px 6px 0 rgba(0, 0, 0, 0.12)',
    colorButton: '#076699',
    colorPrimary: '#41bfee',
    colorPrimaryText: '#fff',
    colorSecondary: '#344a58',
  };

  const MainWrap = styled.div`
    border-top: 8px solid ${theme.colorSecondary};
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
          <DocsCards />
          <DocsIcons />
        </Main>
      </MainWrap>
    </ThemeProvider>
  );
};

const element = document.getElementsByClassName('app')[0];
dom.render(<Demo />, element);
