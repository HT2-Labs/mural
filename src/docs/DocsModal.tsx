// tslint:disable:no-this
// tslint:disable:prefer-function-over-method
// tslint:disable:no-class
import * as React from 'react';

import { H1, H3, P, SizeType } from '../Text';

import { Button, ButtonGroup, ButtonType } from '../Button';
import { IconClose } from '../Icon';
import Modal from '../modal/Modal';
import ModalActions from '../modal/ModalActions';
import ModalBody from '../modal/ModalBody';
import ModalFooter from '../modal/ModalFooter';
import ModalHeader from '../modal/ModalHeader';

export default class DocsModal extends React.Component {
  public readonly state = {
    modalOpen: true,
  };

  public readonly openModal = () => {
    this.setState({
      modalOpen: true,
    });
  }

  public readonly closeModal = () => {
    this.setState({
      modalOpen: false,
    });
  }

  public render() {
    return (
      <>
        <H1 size={SizeType.ExtraLarge}>Headers</H1>
        <hr />
        <Button onClick={this.openModal}>Open Modal</Button>
        <Modal open={this.state.modalOpen} onCloseFn={this.closeModal}>
          <ModalHeader>
            <H3 size={SizeType.Large}>This is a Modal</H3>
            <ModalActions>
              <Button type={ButtonType.Invisible} onClick={this.closeModal}>
                <IconClose />
              </Button>
            </ModalActions>
          </ModalHeader>

          <ModalBody>
            <P>Oh what a cool thing!</P>
            <P>Oh what a cool thing!</P>
            <P>Oh what a cool thing!</P>
            <P>Oh what a cool thing!</P>
            <P>Oh what a cool thing!</P>
            <P>Oh what a cool thing!</P>
          </ModalBody>

          <ModalFooter>
            <P>Oh what a cool thing!</P>
            <ModalActions>
              <ButtonGroup>
                <Button>Yes</Button>
                <Button type={ButtonType.Ghost}>Hmm</Button>
                <Button onClick={this.closeModal} danger>No!</Button>
              </ButtonGroup>
            </ModalActions>
          </ModalFooter>
        </Modal>
      </>
    );
  }
}
