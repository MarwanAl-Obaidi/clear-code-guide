import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coy } from 'react-syntax-highlighter/dist/esm/styles/prism';

const CodeBlock = ({ language, children }) => {
    return (
        <SyntaxHighlighter language={language} style={coy}>
            {children}
        </SyntaxHighlighter>
    );
};

export default CodeBlock;