import ReactMarkdown from 'react-markdown/with-html';
import styles from '../styles/PostBody.module.css';
import CodeHighlight from './code-highlight';

type PostBodyProps = {
  content: string;
};

const PostBody: React.FC<PostBodyProps> = ({ content }) => {
  return (
    <div className="prose sm:prose-lg lg:prose-xl prose-blue">
      <ReactMarkdown
        escapeHtml={false}
        source={content}
        renderers={{ code: CodeHighlight }}
      />
    </div>
  );
};

export default PostBody;
