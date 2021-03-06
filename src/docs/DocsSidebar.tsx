// tslint:disable:max-file-line-count
import * as React from 'react';
import styled from '../utils/mural-styled-components';

import { Link } from '@reach/router';

import { IconGithub, IconNpm } from '../icons';
import getRootPath from '../utils/getRootPath';

const NavLink = (props: any) => (
  <Link
    {...props}
    getProps={({ isCurrent }) => {
      return {
        style: {
          background: isCurrent ? '#fff' : null,
          color: isCurrent ? '#344a58' : null,
        },
      };
    }}
  />
);

export default () => {
  const Sidebar = styled.div`
    background-color: #344a58;
  `;

  const SidebarFixed = styled.aside`
    width: 250px;
    display: flex;
    flex-direction: column;
    position: fixed;
    min-height: 100vh;
  `;

  const Logo = styled.div`
    background-image: url('https://www.ht2labs.com/wp-content/uploads/2016/09/ht2-labs-logo2x.png');
    background-size: 100%;
    padding-top: 19%;
    width: 166px;
    margin: 20px auto 8px;
  `;

  const Name = styled.h1`
    color: #fff;
    font-size: 45px;
    margin: 0;
    padding-right: 8px;
    text-align: center;
  `;

  const NpmLink = styled.a`
    color: #fff;
    font-style: italic;
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;

    & svg {
      font-size: 44px;
      margin-right: 8px;
    }
  `;

  const Menu = styled.nav`
    display: flex;
    flex-direction: column;
    margin-top: 20px;
  `;

  const MenuItem = styled(NavLink)`
    border-left: 4px solid #344a58;
    color: #fff;
    font-size: 20px;
    padding: 10px 20px;
    text-decoration: none;
    &:hover {
      background: #fff;
      color: #344a58;
    }
    transition: all 0.06s;
  `;

  const GithubLink = styled.a`
    font-size: 44px;
    color: #fff;
    margin: auto auto 0;
  `;

  return (
    <Sidebar>
      <SidebarFixed>
        <Name>Mural</Name>
        <Menu>
          <MenuItem to={getRootPath('/')} >Home</MenuItem>
          <MenuItem to={getRootPath('/themes')}>Themes</MenuItem>
          <MenuItem to={getRootPath('/buttons')}>Buttons</MenuItem>
          <MenuItem to={getRootPath('/cards')}>Cards</MenuItem>
          <MenuItem to={getRootPath('/forms')}>Forms</MenuItem>
          <MenuItem to={getRootPath('/headers')}>Headers</MenuItem>
          <MenuItem to={getRootPath('/icons')}>Icons</MenuItem>
          <MenuItem to={getRootPath('/lists')}>Lists</MenuItem>
          <MenuItem to={getRootPath('/media')}>Media</MenuItem>
          <MenuItem to={getRootPath('/menus')}>Menus</MenuItem>
          <MenuItem to={getRootPath('/modal')}>Modal</MenuItem>
          <MenuItem to={getRootPath('/text')}>Text</MenuItem>
        </Menu>
        <GithubLink href="https://github.com/ht2-labs/mural"><IconGithub /></GithubLink>
        <NpmLink href="https://www.npmjs.com/package/@ht2-labs/mural"><IconNpm /></NpmLink>
        <Logo />
      </SidebarFixed>
    </Sidebar>
  );
};
