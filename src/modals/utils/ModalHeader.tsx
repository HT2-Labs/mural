import * as React from 'react';
import styled from 'styled-components';

const Header = styled.div`
  width: 100%;
  display: flex;
`;

const ModalHeader = ({children}: {readonly children: React.ReactNode}) => {
  return <Header>{children}</Header>;
};

export default ModalHeader;
