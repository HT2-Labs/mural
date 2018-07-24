declare module 'react-syntax-highlighter/prism' {
  import * as React from 'react';

  export function registerLanguage(name: string, func: any): void;

  interface SyntaxHighlighterProps {
      language?: string;
      style?: any;
      customStyle?: any;
      codeTagProps?: HTMLElement;
      useInlineStyles?: boolean;
      showLineNumbers?: boolean;
      startingLineNumber?: number;
      lineNumberStyle?: any;
      [spread: string]: any;
  }

  export default class SyntaxHighlighter extends React.Component<SyntaxHighlighterProps> {

  }
}