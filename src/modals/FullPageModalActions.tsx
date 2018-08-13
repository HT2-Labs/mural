import * as React from 'react';
import styled from 'styled-components';

import ModalProps from './ModalProps';

export default ({ children }: ModalProps) => {
  const ModalActions = styled.div`
    display: flex;
    align-content: center;
    padding-top: 10px;
  `;
  return (
    <ModalActions>
      {children}
    </ModalActions>
  );
};
