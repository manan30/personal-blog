import styles from '../styles/PostHeader.module.css';
import PostInfo from './post-info';

type PostHeaderProps = {
  title: string;
  coverImage: { file: string; alt: string };
  date: Date;
  readTime: number;
};

const PostHeader: React.FC<PostHeaderProps> = ({
  title,
  coverImage,
  date,
  readTime
}) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.postTitle}>{title}</h1>
      <PostInfo date={date} readTime={readTime} large />
      <img
        className={styles.coverImage}
        src={coverImage.file}
        alt={coverImage.alt}
        loading="lazy"
      />
    </div>
  );
};

export default PostHeader;
