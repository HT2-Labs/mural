import * as React from 'react';
import styled from 'styled-components';

import ModalProps from './ModalProps';

const FullPageModalHeader =  ({ children }: ModalProps) => {
  const Header = styled.div`
    width: 100%;
    display: flex;
    align-self: flex-start;
    text-align: center;
    justify-content: center;
  `;
  return (
    <Header>
      {children}
    </Header>
  );
};

export default FullPageModalHeader;
