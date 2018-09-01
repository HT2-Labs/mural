import * as React from 'react';
import * as dom from 'react-dom';

import { Link, Router } from '@reach/router';
import PageComponents from './docs/pages/components/PageComponents';
import PageHome from './docs/pages/home/PageHome';
import { TabMenu } from './menus';
import ThemeProvider from './themes/ThemeProvider';
import { Align } from './utils/AlignmentProps';
import styled from './utils/mural-styled-components';

const NavLink = styled(Link)<{ readonly isCurrent?: any}>`
  ${ (props) => props.isCurrent ? 'background-color: #ba2c9c;' : null }
  padding: 0 12px;
  color: ${({ theme }) => theme.color.Button};
  font-size: ${({ theme }) => theme.font.Base};
  text-decoration: none;
`;

const Nav = styled.div`
  background-color: #fff;
  width: 100%;
  height: 60px;
  box-shadow: ${(props) => props.theme.shadow.Medium};
  position: fixed;
  border-bottom: 6px solid #ba2c9c;
  padding: 0 16px;
  box-sizing: border-box;
  display: flex;
  z-index: 1000;
`;

const GhostNav = styled.div`
  height: 60px;
`;

const GhostNav = styled.div`
  ::selection {
    background: ${({ theme }) => theme.color.Button};
  }
  ::-moz-selection {
    background: ${({ theme }) => theme.color.Button};
  }
`;

const Demo = () => {
  return (
    <ThemeProvider>
      <Thing>
        <Nav>
          <NavLink to={'/'} >Mural</NavLink>
          <TabMenu alignment={Align.Right}>
            <NavLink to={'/info'}>Guidelines</NavLink>
            <NavLink to={'/changelog'}>Changelog</NavLink>
            <NavLink to={'/components'}>Components</NavLink>
            <NavLink to={'/patterns'}>Patterns</NavLink>
          </TabMenu>
        </Nav>
        <GhostNav />
        <Router>
          <PageHome path={'/'} />
          <PageComponents path={'components/*'} />
        </Router>
      </Thing>
    </ThemeProvider>
  );
};

const element = document.getElementsByClassName('app')[0];
dom.render(<Demo />, element);
