import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown/with-html';
import styles from '../styles/PostBody.module.css';
import CodeHighlight from './code-highlight';

function PostBody({ content }) {
  return (
    <ReactMarkdown
      escapeHtml={false}
      source={content}
      className={styles.postBody}
      renderers={{ code: CodeHighlight }}
    />
  );
}

PostBody.propTypes = {
  content: PropTypes.string.isRequired
};

export default PostBody;
