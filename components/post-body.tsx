import ReactMarkdown from 'react-markdown/with-html';
import styles from '../styles/PostBody.module.css';
import CodeHighlight from './code-highlight';

type PostBodyProps = {
  content: string;
};

const PostBody: React.FC<PostBodyProps> = ({ content }) => {
  return (
    <ReactMarkdown
      escapeHtml={false}
      source={content}
      className={styles.postBody}
      renderers={{ code: CodeHighlight }}
    />
  );
};

export default PostBody;
