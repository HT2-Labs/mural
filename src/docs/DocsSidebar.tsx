import * as React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export default () => {
  const Sidebar = styled.aside`
    width: 250px;
  `;

  const Logo = styled.div `
    background-image: url('https://www.ht2labs.com/wp-content/uploads/2016/09/ht2-labs-logo2x.png');
    background-size: 100%;
    padding-top: 27%;
    width: 250px;
  `;

  const Name = styled.h1`
    color: #344a58;
    font-size: 45px;
    margin: 0;
    padding-right: 8px;
    text-align: right;
  `;

  const Menu = styled.nav`
    display: flex;
    flex-direction: column;
    margin-top: 60px;
  `;

  const MenuItem = styled(NavLink)`
    border-left: 4px solid #344a58;
    color: #344a58;
    font-size: 20px;
    padding: 10px 20px;
    text-decoration: none;
    &:hover {
      background: #344a58;
      color: #fff;
    }
    transition: all 0.06s;
  `;

  return (
    <Sidebar>
      <Logo />
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
        <MenuItem to="/text">Text</MenuItem>
      </Menu>
    </Sidebar>
  );
};
