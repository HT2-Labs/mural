// tslint:disable:max-file-line-count
import * as React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { IconGithub, IconNpm } from '../Icon';
import checkForGithubPages from '../utils/checkForGithubPages';

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

  const active = {
    backgroundColor: '#fff',
    color: '#344a58',
  };

  const path = checkForGithubPages() ? 'mural' : '';

  return (
    <Sidebar>
      <SidebarFixed>
        <Name>Mural</Name>
        <Menu>
          <MenuItem activeStyle={active} to={`${path}/`} exact>Home</MenuItem>
          <MenuItem activeStyle={active} to={`${path}/themes`}>Themes</MenuItem>
          <MenuItem activeStyle={active} to={`${path}/buttons`}>Buttons</MenuItem>
          <MenuItem activeStyle={active} to={`${path}/cards`}>Cards</MenuItem>
          <MenuItem activeStyle={active} to={`${path}/forms`}>Forms</MenuItem>
          <MenuItem activeStyle={active} to={`${path}/headers`}>Headers</MenuItem>
          <MenuItem activeStyle={active} to={`${path}/icons`}>Icons</MenuItem>
          <MenuItem activeStyle={active} to={`${path}/lists`}>Lists</MenuItem>
          <MenuItem activeStyle={active} to={`${path}/menus`}>Menus</MenuItem>
          <MenuItem activeStyle={active} to={`${path}/modal`}>Modal</MenuItem>
          <MenuItem activeStyle={active} to={`${path}/text`}>Text</MenuItem>
        </Menu>
        <GithubLink href="https://github.com/ht2-labs/mural"><IconGithub /></GithubLink>
        <NpmLink href="https://www.npmjs.com/package/@ht2-labs/mural"><IconNpm /></NpmLink>
        <Logo />
      </SidebarFixed>
    </Sidebar>
  );
};
