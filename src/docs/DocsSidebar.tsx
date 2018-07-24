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
  `;

  return (
    <Sidebar>
      <Logo />
      <Name>Mural</Name>
      <Menu>
        <MenuItem to="/Buttons">Buttons</MenuItem>
        <MenuItem to="/Cards">Cards</MenuItem>
        <MenuItem to="/Forms">Forms</MenuItem>
        <MenuItem to="/Headers">Headers</MenuItem>
        <MenuItem to="/Icons">Icons</MenuItem>
        <MenuItem to="/Menus">Menus</MenuItem>
        <MenuItem to="/Text">Text</MenuItem>
      </Menu>
    </Sidebar>
  );
};
