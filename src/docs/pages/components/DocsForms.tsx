import * as React from 'react';

import { FormCheckbox, FormInput, FormRadio, FormSwitch, FormTextArea } from '../../../forms';
import { H1, SizeType } from '../../../text';
import { DocsPlayground } from '../../shared';
import DocsPageProps from './DocsPageProps';

const codeSnippetInput = `import FormInput from '@ht2-labs/mural/forms/FormInput';
<FormInput />
`;

const codeSnippetTextArea = `import FormTextArea from '@ht2-labs/mural/forms/FormTextArea';
<FormTextArea label="Label" placeholder="Type something here..."/>
`;

const DocsForms = ({  }: DocsPageProps) => {
  return (
    <>
      <H1 size={SizeType.ExtraLarge}>Text</H1>
      <hr />
      <DocsPlayground code={codeSnippetInput}>
        <FormInput label={<span>Some Label:</span>} />
      </DocsPlayground>
      <DocsPlayground code={codeSnippetTextArea}>
        <FormTextArea label="Label" placeholder="Type something here..." />
      </DocsPlayground>
      <DocsPlayground code={codeSnippetTextArea}>
        <FormSwitch />
      </DocsPlayground>
      <DocsPlayground>
        <FormCheckbox />
      </DocsPlayground>
      <DocsPlayground>
        <FormRadio group="group1" />
        <FormRadio group="group1" />
        <FormRadio group="group1" />
        <FormRadio group="group2" />
        <FormRadio group="group2" />
        <FormRadio group="group2" />
      </DocsPlayground>
    </>
  );
};

export default DocsForms;
