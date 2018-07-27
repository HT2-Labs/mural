import * as React from 'react';
import styled from 'styled-components';

import ModalProps from './ModalProps';

export default ({ children }: ModalProps) => {
  const ModalActions = styled.div`
    margin-left: auto;
  `;
  return (
    <ModalActions>
      {children}
    </ModalActions>
  );
};
