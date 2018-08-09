// tslint:disable:max-line-length
import * as React from 'react';

import FormInput from '../forms/FormInput';
import FormTextArea from '../forms/FormTextArea';
import Switch from '../switches/Switch';
import { H1, SizeType } from '../Text';
import DocsPlayground from './DocsPlayground';

const codeSnippetInput =
  `import FormInput from '@ht2-labs/mural/forms/FormInput';
  <FormInput />
`;

const codeSnippetTextArea =
`import FormTextArea from '@ht2-labs/mural/forms/FormTextArea';
<FormTextArea label="Label" placeholder="Type something here..."/>`
;

export default () => {
  return (
    <>
      <H1 size={SizeType.ExtraLarge}>Text</H1>
      <hr />
      <DocsPlayground code={codeSnippetInput}>
        <FormInput />
      </DocsPlayground>
      <DocsPlayground code={codeSnippetTextArea}>
        <FormTextArea label="Label" placeholder="Type something here..."/>
      </DocsPlayground>
      <DocsPlayground code={codeSnippetTextArea}>
        <Switch/>
      </DocsPlayground>
    </>
  );
};
