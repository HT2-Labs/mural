import * as React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter/prism';
import { tomorrow } from 'react-syntax-highlighter/styles/prism';
import styled from 'styled-components';

const Code = styled.div`
  width: 100%;
`;

const DocsCode = ({ code = 'Code Demo ...' }) => {
  return (
    <Code>
      <SyntaxHighlighter
        language="jsx"
        showLineNumbers
        style={tomorrow}
      >
        {code}
      </SyntaxHighlighter>
    </Code>
  );
};

export default DocsCode;
