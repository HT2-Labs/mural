import * as React from 'react';
import styled from 'styled-components';

import ModalProps from './ModalProps';

export default ({ children }: ModalProps) => {
  const ModalFooter = styled.div`
    align-items: center;
    display: flex;
    margin-top: auto;
    width: 100%;
  `;
  return (
    <ModalFooter>
      {children}
    </ModalFooter>
  );
};
