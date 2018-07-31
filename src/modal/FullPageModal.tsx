// tslint:disable:no-class
// tslint:disable:no-this

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import styled from 'styled-components';

export interface IModalProps {
  readonly children?: React.ReactNode;
  readonly onCloseFn?: (e: any) => void;
  readonly open?: boolean;
}

export interface IModal {
  readonly el: any;
}

const modalRoot = document.getElementById('modal-root');

class Modal extends React.Component<IModalProps> {
  private readonly el: any;

  constructor(props: IModalProps) {
    super(props);
    this.el = document.createElement('div');
  }

  public componentDidMount() {
    if (modalRoot !== null) {
      modalRoot.appendChild(this.el);
    }
  }

  public componentWillUnmount() {
    if (modalRoot !== null) {
      modalRoot.removeChild(this.el);
    }
  }

  public render() {
    return ReactDOM.createPortal(
      this.props.children,
      this.el,
    );
  }
}

export default (props: IModalProps) => {

  const isModalOpen = props.open !== undefined ? props.open : false;

  const PageCover = styled.div`
    flex-direction: column;
    justify-content: center;
    background-color: #fff;
    bottom: 0px;
    display: ${isModalOpen ? 'flex' : 'none'};
    left: 0px;
    position: fixed;
    right: 0px;
    top: 0px;
    z-index: 1400;
  `;

  return (
    <Modal>
      <PageCover>
        {props.children}
      </PageCover>
    </Modal>
  );
};
