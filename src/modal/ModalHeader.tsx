import * as React from 'react';
import styled from 'styled-components';

import ModalProps from './ModalProps';

const ModalHeader = ({ children }: ModalProps) => {
  const Header = styled.div`
    width: 100%;
    display: flex;
  `;
  return (
    <Header>
      {children}
    </Header>
  );
};

export default ModalHeader;
