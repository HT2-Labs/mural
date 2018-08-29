import * as React from 'react';

import { DocsMediaBannerCode, DocsMediaSquareCode } from '../../../media/docs/DocsMediaCode';
import { DocsMediaBanner, DocsMediaSquare } from '../../../media/docs/DocsMediaPreview';
import DocsMediaProps from '../../../media/docs/DocsMediaProps';
import { DocsPlayground } from '../../shared';
import DocsPageProps from './DocsPageProps';

const DocsCards = ({}: DocsPageProps) => {
  return (
    <>
      <DocsPlayground
        title="Media Banner"
        exampleProps={<DocsMediaProps />}
        code={DocsMediaBannerCode}
      >
        <DocsMediaBanner />
      </DocsPlayground>

      <DocsPlayground
        title="Media Square"
        exampleProps={<DocsMediaProps />}
        code={DocsMediaSquareCode}
      >
        <DocsMediaSquare />
      </DocsPlayground>
      </>
    );
  };

export default DocsCards;
