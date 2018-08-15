export default (
`import * as React from 'react';

import { Button, ButtonGhost, ButtonGroup } from '@ht2-labs/mural/buttons';
import {
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from '@ht2-labs/mural/modals';
import { H3, P, SizeType } from '@ht2-labs/mural/text';
import { Align } from '@ht2-labs/mural/utils/AlignmentProps';

export default (props: any) => {
  return(
    <Modal open={props.modalOpen} onCloseFn={props.modalClose}>
      <ModalHeader>
        <H3 size={SizeType.Large}>This is a Modal</H3>
      </ModalHeader>

      <ModalBody>
        <P>Delightful unreserved impossible few estimating men favourable see entreaties.</P>
        <P>She propriety immediate was improving. He or entrance humoured likewise moderate.</P>
        <P>Much nor game son say feel. Fat make met can must form into gate.</P>
        <input value={props.text} onChange={props.changeText}/>
      </ModalBody>

      <ModalFooter>
        <P>Footer text example</P>
        <ButtonGroup alignment={Align.Right}>
          <Button>Default</Button>
          <ButtonGhost>Ghost</ButtonGhost>
          <Button onClick={props.closeModal} danger>Danger!</Button>
        </ButtonGroup>
      </ModalFooter>
    </Modal>
  );
};`
);
