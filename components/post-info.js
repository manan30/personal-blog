import PropTypes from 'prop-types';
import styles from '../styles/PostInfo.module.css';

function PostInfo({ date, readTime, large }) {
  return (
    <div className={[styles.postInfo, large && styles.large].join(' ')}>
      <div>
        {date.getDate()}{' '}
        {date.toLocaleString('default', {
          month: 'short'
        })}
        , {date.getFullYear()}
      </div>
      <div className={[styles.separator, large && styles.large].join(' ')} />
      <div>{readTime}min read</div>
    </div>
  );
}

PostInfo.propTypes = {
  date: PropTypes.objectOf(Date).isRequired,
  readTime: PropTypes.number.isRequired,
  large: PropTypes.bool
};

PostInfo.defaultProps = {
  large: false
};

export default PostInfo;
