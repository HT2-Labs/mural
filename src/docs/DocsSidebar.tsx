// tslint:disable:max-file-line-count
import * as React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { IconGithub, IconNpm } from '../Icon';

// tslint:disable:no-class
// tslint:disable:no-this
// tslint:disable:max-line-length
// tslint:disable:prefer-function-over-method
export default class MenuItem extends React.Component {
  public constructor(props: String | Boolean) {
    super(props);
    this.state = { to: new String() };
    this.state = { active: new Boolean() };
  }
  public render() {
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

    // tslint:disable-next-line:no-shadowed-variable
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
    return (
      <Sidebar>
        <SidebarFixed>
          <Name>Mural</Name>
          <Menu>
            <MenuItem exact to="/">Home</MenuItem>
            <MenuItem activeStyle={active} to="/themes">Themes</MenuItem>
            <MenuItem activeStyle={active} to="/buttons">Buttons</MenuItem>
            <MenuItem activeStyle={active} to="/cards">Cards</MenuItem>
            <MenuItem activeStyle={active} to="/forms">Forms</MenuItem>
            <MenuItem activeStyle={active} to="/headers">Headers</MenuItem>
            <MenuItem activeStyle={active} to="/icons">Icons</MenuItem>
            <MenuItem activeStyle={active} to="/lists">Lists</MenuItem>
            <MenuItem activeStyle={active} to="/menus">Menus</MenuItem>
            <MenuItem activeStyle={active} to="/modal">Modal</MenuItem>
            <MenuItem activeStyle={active} to="/text">Text</MenuItem>
          </Menu>
          <GithubLink href="https://github.com/ht2-labs/mural"><IconGithub /></GithubLink>
          <NpmLink href="https://www.npmjs.com/package/@ht2-labs/mural"><IconNpm /></NpmLink>
          <Logo />
        </SidebarFixed>
      </Sidebar>
    );
  }
}
