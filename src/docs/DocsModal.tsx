// tslint:disable:no-this
// tslint:disable:prefer-function-over-method
// tslint:disable:no-class
// tslint:disable:max-file-line-count
import * as React from 'react';

import { H1, H2, H3, P, SizeType } from '../Text';

import { Button, ButtonGroup, GhostButton, InvisibleButton } from '../Button';
import { IconClose } from '../Icon';
import Modal from '../modal/Modal';
import ModalActions from '../modal/ModalActions';
import ModalBody from '../modal/ModalBody';
import ModalFooter from '../modal/ModalFooter';
import ModalHeader from '../modal/ModalHeader';
import DocsCode from './DocsCode';

const codeSnippet =
  `<Modal open={this.state.modalOpen} onCloseFn={this.closeModal}>
<ModalHeader>
  <H3 size={SizeType.Large}>This is a Modal</H3>
  <ModalActions>
    <InvisibleButton onClick={this.closeModal}>
      <IconClose />
    </InvisbleButton>
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
      <GhostButton>Hmm</GhostButton>
      <Button onClick={this.closeModal} danger>No!</Button>
    </ButtonGroup>
  </ModalActions>
</ModalFooter>
</Modal>`;

export default class DocsModal extends React.Component {
  public readonly state = {
    modalOpen: false,
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
              <InvisibleButton onClick={this.closeModal}>
                <IconClose />
              </InvisibleButton>
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
                <GhostButton>Hmm</GhostButton>
                <Button onClick={this.closeModal} danger>No!</Button>
              </ButtonGroup>
            </ModalActions>
          </ModalFooter>
        </Modal>

        <H2 size={SizeType.Large}>Examples</H2>
        <hr />
        <DocsCode code={codeSnippet} />
      </>
    );
  }
}
