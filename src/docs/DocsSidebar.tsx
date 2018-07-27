// tslint:disable:max-file-line-count
import * as React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { IconNpm } from '../Icon';
import IconGithub from '../icons/IconGithub';

// tslint:disable-next-line:no-class
export default () => {

  const Sidebar = styled.div`
    background-color: #344a58;
  `;

  const SidebarFixed = styled.aside`
    width: 250px;
    display: flex;
    flex-direction: column;
    position: fixed;
    height: 100vh;
  `;

  const Logo = styled.div `
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
          <MenuItem to="/">Home</MenuItem>
          <MenuItem to="/themes">Themes</MenuItem>
          <MenuItem to="/buttons">Buttons</MenuItem>
          <MenuItem to="/cards">Cards</MenuItem>
          <MenuItem to="/forms">Forms</MenuItem>
          <MenuItem to="/headers">Headers</MenuItem>
          <MenuItem to="/icons">Icons</MenuItem>
          <MenuItem to="/lists">Lists</MenuItem>
          <MenuItem to="/menus">Menus</MenuItem>
          <MenuItem to="/modal">Modal</MenuItem>
          <MenuItem to="/text">Text</MenuItem>
        </Menu>
        <GithubLink href="https://github.com/ht2-labs/mural"><IconGithub /></GithubLink>
        <NpmLink href="https://www.npmjs.com/package/@ht2-labs/mural"><IconNpm /></NpmLink>
        <Logo />
      </SidebarFixed>
    </Sidebar>
  );
};
