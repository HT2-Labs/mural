// tslint:disable:max-line-length
import * as React from 'react';

import FormInput from '../forms/FormInput';
import { H1, SizeType } from '../Text';
import DocsPlayground from './DocsPlayground';

const codeSnippet =
  `import { H1, H2, H3, H4, P, SizeType } from '@ht2-labs/mural/Text';

<H1 size={SizeType.ExtraLarge}>Header 1 Element</H1>
<H2 size={SizeType.Large}>Header 2 Element</H2>
<H3 size={SizeType.Medium}>Header 3 Element</H3>
<H4 size={SizeType.Small}>Header 4 Element</H4>
<P size={SizeType.Body}>Paragraph Element</P>
<P>Paragraph Element</P>
`;

const availableProps = 'Prop: size - Default: body';

export default () => {
  return (
    <>
      <H1 size={SizeType.ExtraLarge}>Text</H1>
      <hr />
      <DocsPlayground code={codeSnippet} props={availableProps}>
        <FormInput />
      </DocsPlayground>
    </>
  );
};
