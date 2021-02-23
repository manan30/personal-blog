import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coy } from 'react-syntax-highlighter/dist/cjs/styles/prism';

type CodeHighlightProps = {
  value: string;
  language: string;
};

const CodeHighlight: React.FC<CodeHighlightProps> = ({ value, language }) => {
  return (
    <SyntaxHighlighter
      style={coy}
      language={language}
      customStyle={{
        padding: '1rem',
        margin: '0',
        borderRadius: '0.5rem'
      }}
      codeTagProps={{
        style: {
          fontFamily: 'Nunito',
          backgroundColor: 'transparent !important',
          padding: '0',
          borderRadius: '0'
        }
      }}
    >
      {value}
    </SyntaxHighlighter>
  );
};

export default CodeHighlight;
