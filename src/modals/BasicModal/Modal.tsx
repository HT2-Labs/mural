import * as React from 'react';
import FocusTrap from 'react-focus-trap';
import styled from 'styled-components';
import ModalClickScreen from '../utils/ModalClickScreen';
import ModalContainer from '../utils/ModalContainer';
import ModalCard from './ModalCard';

export interface ModalProps {
  readonly children?: React.ReactNode;
  readonly onCloseFn?: (e: any) => void;
  readonly open?: boolean;
}

const PageCover = styled.div`
  align-items: center;
  background-color: rgba(0, 0, 0, 0.3);
  bottom: 0px;
  display: flex;
  justify-content: center;
  left: 0px;
  position: fixed;
  right: 0px;
  top: 0px;
  z-index: 1000;
`;

const Modal = (props: ModalProps) => {
  return (
    <ModalContainer>
      <FocusTrap onExit={props.onCloseFn} active={props.open}>
        <PageCover>
          <ModalCard onClick={props.onCloseFn}>
            {props.children}
          </ModalCard>
          <ModalClickScreen onClick={props.onCloseFn} />
        </PageCover>
      </FocusTrap>
    </ModalContainer>
  );
};

export default Modal;
