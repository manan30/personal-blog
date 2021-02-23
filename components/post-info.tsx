import styles from '../styles/PostInfo.module.css';

type PostInfoProps = {
  date: Date;
  readTime: number;
  large?: boolean;
};

const PostInfo: React.FC<PostInfoProps> = ({ date, readTime, large }) => {
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
};

export default PostInfo;
