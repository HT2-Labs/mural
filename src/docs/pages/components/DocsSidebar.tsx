import * as React from 'react';
import styled from '../../../utils/mural-styled-components';

import { Link } from '@reach/router';

const Sidebar = styled.aside`
  display: flex;
  flex-direction: column;
  margin: 2em;
`;

const MenuItem = styled(Link)`
  color: ${(props) => props.theme.color.Button};
  font-size: 20px;
  padding: 10px 20px;
  text-decoration: none;
  border-radius: ${(props) => props.theme.radius.Medium};
  &:hover {
    background: ${(props) => props.theme.color.Button};
    color: ${(props) => props.theme.color.ButtonText };
  }
  &:focus {
    background: #0000001a;
    outline: none;
  }
  transition: all 0.06s;
`;

export default () => {
  return (
    <Sidebar>
        <MenuItem to={'./'}>Themes</MenuItem>
        <MenuItem to={'buttons'}>Buttons</MenuItem>
        <MenuItem to={'cards'}>Cards</MenuItem>
        <MenuItem to={'forms'}>Forms</MenuItem>
        <MenuItem to={'headers'}>Headers</MenuItem>
        <MenuItem to={'icons'}>Icons</MenuItem>
        <MenuItem to={'lists'}>Lists</MenuItem>
        <MenuItem to={'media'}>Media</MenuItem>
        <MenuItem to={'menus'}>Menus</MenuItem>
        <MenuItem to={'modal'}>Modal</MenuItem>
        <MenuItem to={'text'}>Text</MenuItem>
        <MenuItem to={'utils'}>Utils</MenuItem>
    </Sidebar>
  );
};
