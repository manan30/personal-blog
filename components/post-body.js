import React from 'react';
import ReactMarkdown from 'react-markdown/with-html';
import styles from '../styles/PostBody.module.css';

function PostBody({ content }) {
  return (
    <ReactMarkdown
      escapeHtml={false}
      source={content}
      className={styles.postBody}
    />
  );
}

export default PostBody;
