// tslint:disable:max-line-length
import * as React from 'react';

import { H1, H2, H3, H4, P, SizeType } from '../Text';
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

const availableProps =
'Prop: size - Default: body';
export default () => {
  return (
    <>
    <DocsPlayground code={codeSnippet} props={availableProps}>
      <H1 size={SizeType.ExtraLarge}>Text</H1>
      <hr />
      <P>The component you use H1, H2, P, ect... depends only on your symantec structure. How the element looks depends on the <code>size</code> prop.</P>
      <H1 size={SizeType.ExtraLarge}>Header 1 Element</H1>
      <H2 size={SizeType.Large}>Header 2 Element</H2>
      <H3 size={SizeType.Medium}>Header 3 Element</H3>
      <H4 size={SizeType.Small}>Header 4 Element</H4>
      <P size={SizeType.Body}>Paragraph Element</P>
      <H1>Header 1 Element</H1>

      <H2 size={SizeType.Large}>Examples</H2>
      <hr />

      <H2 size={SizeType.Large}>Props</H2>
      <hr />
      </DocsPlayground>
    </>
  );
};
