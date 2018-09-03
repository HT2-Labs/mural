// tslint:disable:max-line-length
// tslint:disable:max-file-line-count
import * as React from 'react';

import { Table, TableCell, TableRow } from '../../../tables';
import { H1, H2, H3, H4, Link, P, SizeType } from '../../../text';
import { DocsDescription, DocsPlayground, DocsPropsTableHeader } from '../../shared';
import DocsPageProps from './DocsPageProps';

const codeSnippet = `import { H1, H2, H3, H4, P, SizeType } from '@ht2-labs/mural/Text';

<H1 size={SizeType.ExtraLarge}>Header 1 Element</H1>
<H2 size={SizeType.Large}>Header 2 Element</H2>
<H3 size={SizeType.Medium}>Header 3 Element</H3>
<H4 size={SizeType.Small}>Header 4 Element</H4>
<P size={SizeType.Body}>Paragraph Element</P>
<P>Paragraph Element</P>
`;

const availableProps = (
  <Table>
    <DocsPropsTableHeader />
    <TableRow>
      <TableCell>size</TableCell>
      <TableCell>
        SizeType.Body, SizeType.Small, SizeType.Medium, SizeType.Large, SizeType.ExtraLarge
      </TableCell>
      <TableCell>SizeType.Body </TableCell>
      <TableCell>Defines the text size of the header</TableCell>
    </TableRow>
    <TableRow>
      <TableCell>color</TableCell>
      <TableCell>string</TableCell>
      <TableCell> undefined </TableCell>
      <TableCell>Overrides the default color</TableCell>
    </TableRow>
  </Table>
);

const DocsText = ({  }: DocsPageProps) => {
  return (
    <>
      <H1 size={SizeType.ExtraLarge}>Text</H1>
      <DocsDescription>
        <P>
          The component you use H1, H2, P, ect... depends only on your symantec structure. How the
          element looks depends on the <code>size</code> prop.
        </P>
        <DocsPlayground code={codeSnippet} exampleProps={availableProps}>
          <H3 color="#888" italic size={SizeType.Body} margin>
            H1 : Header 1 Element : ExtraLarge
          </H3>
          <H1>The quick brown fox jumps over the lazy dog</H1>
          <hr />
          <H3 color="#888" italic size={SizeType.Body} margin>
            H1 : Header 1 Element : Medium
          </H3>
          <H1 size={SizeType.Medium}>The quick brown fox jumps over the lazy dog</H1>
          <hr />
          <H3 color="#888" italic size={SizeType.Body} margin>
            H2 : Header 2 Element
          </H3>
          <H2>The quick brown fox jumps over the lazy dog</H2>
          <hr />
          <H3 color="#888" italic size={SizeType.Body} margin>
            H3 : Header 3 Element
          </H3>
          <H3>The quick brown fox jumps over the lazy dog</H3>
          <hr />
          <H3 color="#888" italic size={SizeType.Body} margin>
            H4 : Header 4 Element
          </H3>
          <H4>The quick brown fox jumps over the lazy dog</H4>
          <hr />
          <H3 color="#888" italic size={SizeType.Body} margin>
            P : Paragraph Element
          </H3>
          <P>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec commodo, ante a fermentum
            malesuada, diam lacus aliquet justo, sed tincidunt augue ante nec dolor. In et egestas
            ex. Quisque ex lectus, tempor vel viverra eu, mattis vel magna. Aliquam erat volutpat.
            Donec feugiat purus et scelerisque ultrices. Sed et lorem leo. Nulla pharetra turpis vel
            velit finibus, nec interdum nibh gravida. Sed aliquam suscipit diam vel accumsan. Fusce
            mollis est quis nulla pharetra, non mattis velit euismod. Morbi tincidunt, augue ac
            ultricies faucibus, nulla ex bibendum lectus, nec iaculis leo augue sed ex. Quisque eget
            posuere orci. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos.
          </P>
          <hr />
          <H3 color="#888" italic size={SizeType.Body} margin>
            P : Small Paragraph Element
          </H3>
          <P size={SizeType.Small}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec commodo, ante a fermentum
            malesuada, diam lacus aliquet justo, sed tincidunt augue ante nec dolor. In et egestas
            ex. Quisque ex lectus, tempor vel viverra eu, mattis vel magna. Aliquam erat volutpat.
            Donec feugiat purus et scelerisque ultrices. Sed et lorem leo. Nulla pharetra turpis vel
            velit finibus, nec interdum nibh gravida. Sed aliquam suscipit diam vel accumsan. Fusce
            mollis est quis nulla pharetra, non mattis velit euismod. Morbi tincidunt, augue ac
            ultricies faucibus, nulla ex bibendum lectus, nec iaculis leo augue sed ex. Quisque eget
            posuere orci. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos.
          </P>
          <hr />
          <H3 color="#888" italic size={SizeType.Body} margin>
            Link : Text links
          </H3>
          <P>
            <Link href="https://www.ht2labs.com">yellow gems</Link>
          </P>
          <P>
            <Link color="red">yellow gems</Link>
          </P>
          <P>
            <Link external color="blue">
              yellow gems
            </Link>
          </P>
        </DocsPlayground>
      </DocsDescription>
    </>
  );
};

export default DocsText;
