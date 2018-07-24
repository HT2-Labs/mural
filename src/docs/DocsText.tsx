// tslint:disable:max-file-line-count
import * as React from 'react';
// Import styled from 'styled-components';

import Text from '../text/Text';

// Import SyntaxHighlighter from 'react-syntax-highlighter';
// Import { obsidian } from 'react-syntax-highlighter/styles/hljs';
import { ElementType, SizeType } from '../utils/TextProps';
import DocsSectionTitle from './DocsSectionTitle';

export default () => {

  // Const ButtonGrid = styled.div`
  //   Display: grid;
  //   Grid-column-gap: 20px;
  //   Grid-row-gap: 14px;
  //   Grid-template-columns: repeat(2, 260px);
  //   Margin-bottom: 40px;
  // `;

  return (
    <>
      <DocsSectionTitle id="Text">Text</DocsSectionTitle>
      <Text type={ElementType.H1} size={SizeType.ExtraLarge}>Header 1 Element</Text>
      <Text type={ElementType.H2} size={SizeType.ExtraLarge}>Header 2 Element</Text>
      <Text type={ElementType.H3} size={SizeType.ExtraLarge}>Header 3 Element</Text>
      <Text type={ElementType.H4} size={SizeType.ExtraLarge}>Header 4 Element</Text>

      <Text type={ElementType.H1} size={SizeType.Large}>Header 1 Element</Text>
      <Text type={ElementType.H2} size={SizeType.Large}>Header 2 Element</Text>
      <Text type={ElementType.H3} size={SizeType.Large}>Header 3 Element</Text>
      <Text type={ElementType.H4} size={SizeType.Large}>Header 4 Element</Text>

      <Text type={ElementType.H1} size={SizeType.Medium}>Header 1 Element</Text>
      <Text type={ElementType.H2} size={SizeType.Medium}>Header 2 Element</Text>
      <Text type={ElementType.H3} size={SizeType.Medium}>Header 3 Element</Text>
      <Text type={ElementType.H4} size={SizeType.Medium}>Header 4 Element</Text>

      <Text type={ElementType.H1} size={SizeType.Small}>Header 1 Element</Text>
      <Text type={ElementType.H2} size={SizeType.Small}>Header 2 Element</Text>
      <Text type={ElementType.H3} size={SizeType.Small}>Header 3 Element</Text>
      <Text type={ElementType.H4} size={SizeType.Small}>Header 4 Element</Text>
      <hr />
    </>
  );
};
