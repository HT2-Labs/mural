import * as React from 'react';

import { FormCheckbox, FormInput, FormRadio, FormSwitch, FormTextArea } from '../../../forms';
import FormDropdown from '../../../forms/FormDropdown';
import FormDropdownOption from '../../../forms/FormDropdownOption';
import { H1, SizeType } from '../../../Text';
import { DocsPlayground } from '../../shared';

const codeSnippetInput =
`import FormInput from '@ht2-labs/mural/forms/FormInput';
<FormInput />
`;

const codeSnippetTextArea =
`import FormTextArea from '@ht2-labs/mural/forms/FormTextArea';
<FormTextArea label="Label" placeholder="Type something here..."/>
`;

const DocsForms = () => {
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
        <FormSwitch />
      </DocsPlayground>
      <DocsPlayground>
        <FormCheckbox/>
      </DocsPlayground>
      <DocsPlayground>
        <FormRadio group="group1"/>
        <FormRadio group="group1"/>
        <FormRadio group="group1"/>
        <FormRadio group="group2"/>
        <FormRadio group="group2"/>
        <FormRadio group="group2"/>
      </DocsPlayground>
      <FormDropdown>
        <FormDropdownOption > Option1</FormDropdownOption>
        <FormDropdownOption > Option2</FormDropdownOption>
        <FormDropdownOption > REEEE3</FormDropdownOption>
        <FormDropdownOption > REEEE4</FormDropdownOption>
      </FormDropdown>
      <FormDropdown>
        <FormDropdownOption > Option1</FormDropdownOption>
        <FormDropdownOption > Option2</FormDropdownOption>
        <FormDropdownOption > REEEE3</FormDropdownOption>
        <FormDropdownOption > REEEE4</FormDropdownOption>
      </FormDropdown>
    </>
  );
};

export default DocsForms;
