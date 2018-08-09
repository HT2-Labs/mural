import * as React from 'react';
import styled from 'styled-components';

import ModalProps from './ModalProps';

const ModalFooter = ({ children }: ModalProps) => {
  const Footer = styled.div`
    align-items: center;
    display: flex;
    margin-top: auto;
    width: 100%;
  `;
  return (
    <Footer>
      {children}
    </Footer>
  );
};

export default ModalFooter;
