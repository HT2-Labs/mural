import * as React from 'react';
import styled from 'styled-components';

import ModalProps from './ModalProps';

export default ({ children }: ModalProps) => {
  const ModalHeader = styled.div`
    width: 100%;
    display: flex;
    align-self: flex-start;
    text-align: center;
    justify-content: center;
  `;
  return (
    <ModalHeader>
      {children}
    </ModalHeader>
  );
};
