// tslint:disable:no-this
// tslint:disable:prefer-function-over-method
// tslint:disable:no-class
// tslint:disable:max-file-line-count
import * as React from 'react';

import { H1, H3, P, SizeType } from '../Text';

import { Button, ButtonGhost, ButtonGroup, IconButtonInvisible } from '../buttons';
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
import Table from '../tables/Table';
import TableCell from '../tables/TableCell';
import TableRow from '../tables/TableRow';
import { Align } from '../utils/AlignmentProps';
import DocsPlayground from './DocsPlayground';
import DocsPropsTableHeader from './DocsPropsTableHeader';

const codeSnippet =
  `import { H1, H3, P, SizeType } from '../Text';

import { Button, ButtonGroup, ButtonGhost, IconButtonInvisible } from '@ht2-labs/mural/Button';
import { IconClose } from '@ht2-labs/mural/Icon';
import FullPageModal from '@ht2-labs/mural/modal/FullPageModal';
import FullPageModalActions from '@ht2-labs/mural/modal/FullPageModalActions';
import FullPageModalBody from '@ht2-labs/mural/modal/FullPageModalBody';
import FullPageModalHeader from '@ht2-labs/mural/modal/FullPageModalHeader';
import Modal from '@ht2-labs/mural/modal/Modal';
import ModalActions from '@ht2-labs/mural/modal/ModalActions';
import ModalBody from '@ht2-labs/mural/modal/ModalBody';
import ModalFooter from '@ht2-labs/mural/modal/ModalFooter';
import ModalHeader from '@ht2-labs/mural/modal/ModalHeader';
import { Align } from '@ht2-labs/mural/utils/AlignmentProps';
//Modal
<Modal open={this.state.modalOpen} onCloseFn={this.closeModal}>
<ModalHeader>
  <H3 size={SizeType.Large}>This is a Modal</H3>
  <ModalActions>
    <ButtonInvisible onClick={this.closeModal}>
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
      <ButtonGhost>Hmm</ButtonGhost>
      <Button onClick={this.closeModal} danger>No!</Button>
    </ButtonGroup>
  </ModalActions>
</ModalFooter>
</Modal>

//FullPage Modal
<FullPageModal open={this.state.fullpageModalOpen}>
  <FullPageModalHeader>
    <ModalActions>
      <IconButtonInvisible onClick={this.closeFullpageModal}>
        <IconClose />
      </IconButtonInvisible>
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

const availableProps =
<Table>
<DocsPropsTableHeader/>
  <TableRow>
    <TableCell>open</TableCell>
    <TableCell>Boolean</TableCell>
    <TableCell>Undefined </TableCell>
    <TableCell>Defines whether the modal is open</TableCell>
  </TableRow>
  <TableRow>
    <TableCell>onCloseFn</TableCell>
    <TableCell>Function</TableCell>
    <TableCell>Undefined</TableCell>
    <TableCell>A function to call when a user attempts to close the modal</TableCell>
  </TableRow>
</Table>;

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
        <DocsPlayground code={codeSnippet} props={availableProps}>
          <ButtonGroup>
            <Button onClick={this.openModal}>Open Modal</Button>
            <Button onClick={this.openFullpageModal}>Open Fullpage Modal</Button>
          </ButtonGroup>
          <Modal open={this.state.modalOpen} onCloseFn={this.closeModal}>
            <ModalHeader>
              <H3 size={SizeType.Large}>This is a Modal</H3>
              <ModalActions>
                <IconButtonInvisible onClick={this.closeModal}>
                  <IconClose />
                </IconButtonInvisible>
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
                  <ButtonGhost>Hmm</ButtonGhost>
                  <Button onClick={this.closeModal} danger>No!</Button>
                </ButtonGroup>
              </ModalActions>
            </ModalFooter>
          </Modal>

          <FullPageModal open={this.state.fullpageModalOpen}>
            <FullPageModalHeader>
              <ModalActions>
                <IconButtonInvisible onClick={this.closeFullpageModal}>
                  <IconClose />
                </IconButtonInvisible>
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
