// tslint:disable:max-line-length
import * as React from 'react';

import FormInput from '../forms/FormInput';
import { H1, SizeType } from '../Text';
import DocsPlayground from './DocsPlayground';

const codeSnippet =
  `import FormInput from '@ht2-labs/mural/forms/FormInput';
  <FormInput />
`;

export default () => {
  return (
    <>
      <H1 size={SizeType.ExtraLarge}>Text</H1>
      <hr />
      <DocsPlayground code={codeSnippet}>
        <FormInput />
      </DocsPlayground>
    </>
  );
};
