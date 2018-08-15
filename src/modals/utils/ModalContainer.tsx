// tslint:disable:no-class
// tslint:disable:no-this
import * as React from 'react';
import * as ReactDOM from 'react-dom';

export interface ModalContainerProps {
  readonly children?: React.ReactNode;
  readonly onCloseFn?: (e: any) => void;
}

const modalRoot = document.getElementById('modal-root');

class ModalContainer extends React.Component<ModalContainerProps> {

  private readonly element: HTMLDivElement;

  constructor(props: ModalContainerProps) {
    super(props);
    this.element = document.createElement('div');
  }

  public componentDidMount() {
    if (modalRoot !== null) {
      modalRoot.appendChild(this.element);
    }
  }

  public componentWillUnmount() {
    if (modalRoot !== null) {
      modalRoot.removeChild(this.element);
    }
  }

  public render() {
    return ReactDOM.createPortal(
      this.props.children,
      this.element,
    );
  }
}

export default ModalContainer;
