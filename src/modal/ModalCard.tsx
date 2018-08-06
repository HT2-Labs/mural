import * as React from 'react';
import styled from 'styled-components';

export interface ModalCardProps {
  readonly children?: React.ReactNode;
}

export default ({ children }: ModalCardProps) => {

  const ModalCard = styled.div`
    border-radius: ${({ theme }: any) => theme.radius.Button};
    background-color: #fff;
    height: auto;
    max-width: 600px;
    padding: 20px;
    position: absolute;
    width: 100%;
    z-index: 1600;
  `;

  return (
    <ModalCard>
      {children}
    </ModalCard>
  );
};
