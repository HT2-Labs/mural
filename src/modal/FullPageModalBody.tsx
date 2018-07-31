import * as React from 'react';
import styled from 'styled-components';

import ModalProps from './ModalProps';

export default ({ children }: ModalProps) => {
  const ModalBody = styled.div`
    margin: 5% auto 0 auto;
    width: 42%;
    text-align: center;
    justify-content: center;

  `;
  return (
    <ModalBody>
      {children}
    </ModalBody>
  );
};
