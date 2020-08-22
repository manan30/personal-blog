import PropTypes from 'prop-types';
import styles from '../styles/PostHeader.module.css';

function PostHeader({ title, coverImage }) {
  return (
    <>
      <h1 className={styles.postTitle}>{title}</h1>
      <img
        className={styles.coverImage}
        src={coverImage.file}
        alt={coverImage.alt}
      />
    </>
  );
}

PostHeader.propTypes = {
  title: PropTypes.string.isRequired,
  coverImage: PropTypes.shape({ file: PropTypes.string, alt: PropTypes.string })
    .isRequired
};

export default PostHeader;
