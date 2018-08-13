import * as React from 'react';
import styled from 'styled-components';

import ModalProps from './ModalProps';

const ModalBody = ({ children }: ModalProps) => {
  const Body = styled.div`
    width: 100%;
  `;
  return (
    <Body>
      {children}
    </Body>
  );
};

export default ModalBody;
