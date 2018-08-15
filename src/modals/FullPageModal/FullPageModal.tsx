import * as React from 'react';
import FocusTrap from 'react-focus-trap';
import ModalContainer from '../utils/ModalContainer';
import FullPageModalCard from './FullPageModalCard';

export interface IModalProps {
  readonly children?: React.ReactNode;
  readonly onCloseFn?: (e: any) => void;
  readonly open?: boolean;
}

export default (props: IModalProps) => {
  return (
    <ModalContainer>
      <FocusTrap onExit={props.onCloseFn} active={props.open}>
        <FullPageModalCard onClick={props.onCloseFn}>
          {props.children}
        </FullPageModalCard>
      </FocusTrap>
    </ModalContainer>
  );
};
