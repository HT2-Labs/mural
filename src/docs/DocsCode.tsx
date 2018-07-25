import * as React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter/prism';
import { tomorrow } from 'react-syntax-highlighter/styles/prism';
import styled from 'styled-components';

export default ({ code = 'Code Demo' }) => {
  const Code = styled.div`
    max-width: 657px;
  `;
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
