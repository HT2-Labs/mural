// tslint:disable:no-this
// tslint:disable:prefer-function-over-method
// tslint:disable:no-class
import * as React from 'react';

import { Button, ButtonGroup } from '../../../buttons';
import DocsBasicModalCode from '../../../modals/BasicModal/docs/DocsBasicModalCode';
import DocsBasicModalPreview from '../../../modals/BasicModal/docs/DocsBasicModalPreview';
import DocsBasicModalProps from '../../../modals/BasicModal/docs/DocsBasicModalProps';
import DocsFullPageModalCode from '../../../modals/FullPageModal/docs/DocsFullPageModalCode';
import DocsFullPageModalPreview from '../../../modals/FullPageModal/docs/DocsFullPageModalPreview';
import DocsFullPageModalProps from '../../../modals/FullPageModal/docs/DocsFullPageModalProps';
import { H1, SizeType } from '../../../text';
import { DocsPlayground } from '../../shared';
import DocsPageProps from './DocsPageProps';

const element = document.getElementsByClassName('app')[0];
class DocsModals extends React.Component<DocsPageProps> {

  public readonly state = {
    fullPageModalOpen: false,
    modalOpen: false,
    text: '',
  };

  public readonly modalOpen = () => {
    this.setState({ modalOpen: true });
    element.style.filter = 'blur(4px)';
  }

  public readonly modalClose = () => {
    this.setState({ modalOpen: false });
    element.style.filter = 'blur(0)';
  }

  public readonly fullPageModalOpen = () => {
    this.setState({ fullPageModalOpen: true });
  }

  public readonly fullPageModalClose = () => {
    this.setState({ fullPageModalOpen: false });
  }

  public readonly changeText = (event: any) => {
    this.setState({ text: event.target.value });
  }

  public render() {
    return (
      <>
        <H1 size={SizeType.ExtraLarge}>Headers</H1>
        <hr />
        <DocsPlayground
          code={DocsBasicModalCode}
          exampleProps={<DocsBasicModalProps />}
          title="Basic Modal"
        >
          <ButtonGroup>
            <Button onClick={this.modalOpen}>Open Modal</Button>
          </ButtonGroup>

          <DocsBasicModalPreview
            modalOpen={this.state.modalOpen}
            modalClose={this.modalClose}
            text={this.state.text}
            changeText={this.changeText}
          />
        </DocsPlayground>

        <DocsPlayground
          code={DocsFullPageModalCode}
          exampleProps={<DocsFullPageModalProps />}
          title="Full Page Modal"
        >
          <ButtonGroup>
            <Button onClick={this.fullPageModalOpen}>Open FullPage Modal</Button>
          </ButtonGroup>

          <DocsFullPageModalPreview
            modalOpen={this.state.fullPageModalOpen}
            modalClose={this.fullPageModalClose}
            text={this.state.text}
            changeText={this.changeText}
          />
        </DocsPlayground>
      </>
    );
  }
}

export default DocsModals;
