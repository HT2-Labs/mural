import * as React from 'react';
import * as dom from 'react-dom';
import styled from 'styled-components';

import DocsIcons from './docs/DocsIcons';
import DocsIntro from './docs/DocsIntro';
import DocsSidebar from './docs/DocsSidebar';

const Demo = () => {
  const MainWrap = styled.div`
    display: grid;
    grid-template-columns: 250px 870px;
    grid-template-rows: auto;
  `;
  const Main = styled.main`
    padding: 20px;
  `;
  return (
    <MainWrap>
      <DocsSidebar />
      <Main>
        <DocsIntro />
        <DocsIcons />
      </Main>
    </MainWrap>
  );
};

const element = document.getElementsByClassName('app')[0];
dom.render(<Demo />, element);
