// tslint:disable:max-line-length
import * as React from 'react';

import { H1, H2, P, SizeType } from '../Text';
import DocsCode from './DocsCode';

const codeSnippet =
`const theme = {
  color: {
    BodyText: '#2f2f2f',
    Button: '#076699',
    ButtonText: '#ffffff',
    Danger: '#ff0000',
    Disabled: '#eeeeee',
    DisabledText: '#5d5d5d',
    Primary: '#41bfee',
    PrimaryText: '#ffffff',
    Secondary: '#344a58',
    SecondaryText: '#ffffff',
  },
  radius: {
    Button: '2px',
    Card: '12px',
  },
  shadow: {
    Large: '0 2px 2px 2px rgba(0, 0, 0, 0.12)',
    Main: '0 2px 2px 0 rgba(0, 0, 0, 0.24)',
  },
};
`;

export default () => {
  return (
    <>
      <H1 size={SizeType.ExtraLarge}>Theme</H1>
      <hr />
      <P>Mural uses Styled Components themes to configure styling. You can override the theme using <a href="https://www.styled-components.com/docs/advanced#theming">the theme prop</a> (only do this if you have a good reason).</P>

      <H2 size={SizeType.Large}>Examples</H2>
      <hr />
      <DocsCode code={codeSnippet} />
    </>
  );
};
