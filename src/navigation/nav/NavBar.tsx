import styled from '../../utils/mural-styled-components';

interface TabMenuProps {
  readonly children: React.ReactNode;
  readonly ariaLabel?: string | undefined;
}

const NavBar = styled.nav.attrs<TabMenuProps>({
  role: 'presentation',
})`
  display: flex;
  height: 60px;
  width: 100%;
  box-sizing: border-box;
  border-bottom: 6px solid ${(props) => props.theme.color.Primary};
  background: ${(props) => props.theme.color.White};
  box-shadow: ${(props) => props.theme.shadow.Medium};
  position: relative;
`;

export default NavBar;
