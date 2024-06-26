import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

const CodeBlock = ({ language, children }) => {
    const codeBlockStyles = {
        borderRadius: '5px',
    }

    return (
        <SyntaxHighlighter
            language={language}
            style={vscDarkPlus}
            wrapLongLines={false}
            showLineNumbers={true}
            customStyle={codeBlockStyles}>
            {children}
        </SyntaxHighlighter>
    );
};

export default CodeBlock;
