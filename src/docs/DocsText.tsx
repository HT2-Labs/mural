// tslint:disable:max-file-line-count
import * as React from 'react';
// Import styled from 'styled-components';

import { H1, H2, H3, H4, P, SizeType } from '../text/Text';

// Import SyntaxHighlighter from 'react-syntax-highlighter';
// Import { obsidian } from 'react-syntax-highlighter/styles/hljs';
import DocsSectionTitle from './DocsSectionTitle';

export default () => {
  return (
    <>
      <DocsSectionTitle id="Text">Text</DocsSectionTitle>
      <H1 size={SizeType.ExtraLarge}>Header 1 Element</H1>
      <H2 size={SizeType.Large}>Header 2 Element</H2>
      <H3 size={SizeType.Medium}>Header 3 Element</H3>
      <H4 size={SizeType.Small}>Header 4 Element</H4>
      <P size={SizeType.Body}>Paragraph Element</P>
      <hr />
    </>
  );
};
