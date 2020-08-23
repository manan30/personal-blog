import PropTypes from 'prop-types';
import styles from '../styles/PostHeader.module.css';
import PostInfo from './post-info';

function PostHeader({ title, coverImage, date, readTime }) {
  return (
    <div className={styles.container}>
      <h1 className={styles.postTitle}>{title}</h1>
      <PostInfo date={date} readTime={readTime} large />
      <img
        className={styles.coverImage}
        src={coverImage.file}
        alt={coverImage.alt}
      />
    </div>
  );
}

PostHeader.propTypes = {
  title: PropTypes.string.isRequired,
  coverImage: PropTypes.shape({ file: PropTypes.string, alt: PropTypes.string })
    .isRequired,
  date: PropTypes.objectOf(Date).isRequired,
  readTime: PropTypes.number.isRequired
};

export default PostHeader;
