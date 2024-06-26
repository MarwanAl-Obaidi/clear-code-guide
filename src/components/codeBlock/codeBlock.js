import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

const CodeBlock = ({ language, children }) => {
    return (
        <SyntaxHighlighter
            language={language}
            style={vscDarkPlus}
            wrapLongLines={true}
            showLineNumbers={true}>
            {children}
        </SyntaxHighlighter>
    );
};

export default CodeBlock;
