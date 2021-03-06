// tslint:disable:prefer-function-over-method
// tslint:disable:max-file-line-count
// tslint:disable:no-this
// tslint:disable:no-class
import * as React from 'react';

import { Button, ButtonGhost, ButtonGroupVertical } from '../../../buttons';
import {
  DocsCardBasicCode,
  DocsCardHeaderCode,
  DocsCardHeroTextCode,
  DocsCardMediaCode,
  DocsCardOnClickCode,
  DocsCardOverlayCode,
} from '../../../cards/docs/DocsCardCode';
import {
  DocsCardBasic,
  DocsCardHeader,
  DocsCardHeroText,
  DocsCardMedia,
  DocsCardOnClick,
  DocsCardOverlay,
} from '../../../cards/docs/DocsCardPreview';
import DocsCardProps from '../../../cards/docs/DocsCardProps';
import { Grid } from '../../../layouts';
import { DocsPlayground } from '../../shared';
import DocsPageProps from './DocsPageProps';

class DocsCards extends React.Component<DocsPageProps> {
  public readonly state = {
    overlay: false,
  };

  public readonly deadClick = () => {
    return null;
  }

  public render() {
    const overlayContent = (
      <ButtonGroupVertical>
        <Button fullWidth>Edit</Button>
        <ButtonGhost fullWidth danger>
          Delete
        </ButtonGhost>
      </ButtonGroupVertical>
    );

    return (
      <>
        <DocsPlayground
          title="Basic Card"
          exampleProps={<DocsCardProps />}
          code={DocsCardBasicCode}
        >
          <Grid columns={2}>
            <DocsCardBasic />
          </Grid>
        </DocsPlayground>

        <DocsPlayground
          title="Basic Card with onClick"
          exampleProps={<DocsCardProps />}
          code={DocsCardOnClickCode}
        >
          <Grid columns={2}>
            <DocsCardOnClick />
          </Grid>
        </DocsPlayground>

        <DocsPlayground
          title="Hero Text Card"
          exampleProps={<DocsCardProps />}
          code={DocsCardHeroTextCode}
        >
          <Grid columns={2} rowHeight={'150px'}>
            <DocsCardHeroText />
          </Grid>
        </DocsPlayground>

        <DocsPlayground
          title="Card Overlay"
          exampleProps={<DocsCardProps />}
          code={DocsCardOverlayCode}
        >
          <Grid columns={2} rowHeight={'150px'}>
            <DocsCardHeader overlayContent={overlayContent} />
          </Grid>
        </DocsPlayground>

        <DocsPlayground
          title="Custom Header Card"
          exampleProps={<DocsCardProps />}
          code={DocsCardHeaderCode}
        >
          <Grid columns={2}>
            <DocsCardOverlay overlayContent={overlayContent} />
          </Grid>
        </DocsPlayground>

        <DocsPlayground
          title="Card with Media"
          exampleProps={<DocsCardProps />}
          code={DocsCardMediaCode}
        >
          <Grid columns={2}>
            <DocsCardMedia />
          </Grid>
        </DocsPlayground>
      </>
    );
  }
}

export default DocsCards;
