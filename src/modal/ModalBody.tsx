import * as React from 'react';
import styled from 'styled-components';

import ModalProps from './ModalProps';

export default ({ children }: ModalProps) => {
  const ModalBody = styled.div`
    width: 100%;
  `;
  return (
    <ModalBody>
      {children}
    </ModalBody>
  );
};
