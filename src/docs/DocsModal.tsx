// tslint:disable:no-this
// tslint:disable:prefer-function-over-method
// tslint:disable:no-class
// tslint:disable:max-file-line-count
import * as React from 'react';

import { H1, H3, P, SizeType } from '../Text';

import { Button, ButtonGroup, GhostButton, IconInvisibleButton } from '../Button';
import { IconClose } from '../Icon';
import FullPageModal from '../modal/FullPageModal';
import FullPageModalActions from '../modal/FullPageModalActions';
import FullPageModalBody from '../modal/FullPageModalBody';
import FullPageModalHeader from '../modal/FullPageModalHeader';
import Modal from '../modal/Modal';
import ModalActions from '../modal/ModalActions';
import ModalBody from '../modal/ModalBody';
import ModalFooter from '../modal/ModalFooter';
import ModalHeader from '../modal/ModalHeader';
import { Align } from '../utils/AlignmentProps';
import DocsPlayground from './DocsPlayground';

const codeSnippet =
  `
//Modal
<Modal open={this.state.modalOpen} onCloseFn={this.closeModal}>
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
</Modal>

//FullPage Modal
<FullPageModal open={this.state.fullpageModalOpen}>
  <FullPageModalHeader>
    <ModalActions>
      <IconInvisibleButton onClick={this.closeFullpageModal}>
        <IconClose />
      </IconInvisibleButton>
    </ModalActions>
  </FullPageModalHeader>
<FullPageModalBody>
  <H3 size={SizeType.Large} >This is a Fullpage Modal</H3>
  <p>Blah</p>
<FullPageModalActions>
  <ButtonGroup>
    <Button danger> DO NOT CLICK</Button>
    < Button> Do Click </Button>
  </ButtonGroup>
</FullPageModalActions>
</FullPageModalBody>
<ModalFooter>
</ModalFooter>
</FullPageModal>`;

export default class DocsModal extends React.Component {
  public readonly state = {
    fullpageModalOpen: false,
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
  public readonly openFullpageModal = () => {
    this.setState({
      fullpageModalOpen: true,
    });
  }

  public readonly closeFullpageModal = () => {
    this.setState({
      fullpageModalOpen: false,
    });
  }

  public render() {
    return (
      <>

        <H1 size={SizeType.ExtraLarge}>Headers</H1>
        <hr />
        <DocsPlayground code={codeSnippet}>
          <ButtonGroup>
            <Button onClick={this.openModal}>Open Modal</Button>
            <Button onClick={this.openFullpageModal}>Open Fullpage Modal</Button>
          </ButtonGroup>
          <Modal open={this.state.modalOpen} onCloseFn={this.closeModal}>
            <ModalHeader>
              <H3 size={SizeType.Large}>This is a Modal</H3>
              <ModalActions>
                <IconInvisibleButton onClick={this.closeModal}>
                  <IconClose />
                </IconInvisibleButton>
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

          <FullPageModal open={this.state.fullpageModalOpen}>
            <FullPageModalHeader>
              <ModalActions>
                <IconInvisibleButton onClick={this.closeFullpageModal}>
                  <IconClose />
                </IconInvisibleButton>
              </ModalActions>
            </FullPageModalHeader>
            <FullPageModalBody>
              <H3 size={SizeType.Large} >This is a Fullpage Modal</H3>
              Blah
            <FullPageModalActions>
                <ButtonGroup alignment={Align.Center}>
                  <Button danger> DO NOT CLICK</Button>
                  <Button> Do Click </Button>
                </ButtonGroup>
              </FullPageModalActions>
            </FullPageModalBody>
            <ModalFooter>
            </ModalFooter>
          </FullPageModal>
        </DocsPlayground>
      </>
    );
  }
}
