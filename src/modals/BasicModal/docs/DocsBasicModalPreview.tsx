import * as React from 'react';

import { Button, ButtonGhost, ButtonGroup } from '../../../buttons';
import { FormInput } from '../../../forms';
import {
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from '../../../modals';
import { H3, P } from '../../../text';
import { Align } from '../../../utils/AlignmentProps';
import { Size } from '../../../utils/sizes';

export default (props: any) => {
  return(
    <Modal open={props.modalOpen} onCloseFn={props.modalClose}>
      <ModalHeader>
        <H3 size={Size.Large}>This is a Modal</H3>
      </ModalHeader>

      <ModalBody>
        <P>Delightful unreserved impossible few estimating men favourable see entreaties.</P>
        <P>She propriety immediate was improving. He or entrance humoured likewise moderate.</P>
        <P>Much nor game son say feel. Fat make met can must form into gate.</P>
        <FormInput value={props.text} onChange={props.changeText}/>
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
};
