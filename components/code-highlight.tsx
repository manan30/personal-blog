import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coy } from 'react-syntax-highlighter/dist/cjs/styles/prism';

type CodeHighlightProps = {
  value: string;
  language: string;
};

const CodeHighlight: React.FC<CodeHighlightProps> = ({ value, language }) => {
  return (
    <SyntaxHighlighter style={coy} language={language}>
      {value}
    </SyntaxHighlighter>
  );
};

export default CodeHighlight;
