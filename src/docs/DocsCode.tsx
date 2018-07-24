import * as React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter/prism';
import { tomorrow } from 'react-syntax-highlighter/styles/prism';

export default ({ code = 'Code Demo' }) => {
  return (
    <SyntaxHighlighter language="jsx" style={tomorrow}>{code}</SyntaxHighlighter>
  );
};
