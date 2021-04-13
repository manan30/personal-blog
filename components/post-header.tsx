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
    <div className="my-10 flex flex-col space-y-3">
      <div className="text-2xl md:text-4xl text-blue-600 font-bold dark:text-green-500">
        {title}
      </div>
      <PostInfo date={date} readTime={readTime} large />
      <img
        className="h-64 sm:h-72 md:h-96 object-cover shadow-xl"
        src={coverImage.file}
        alt={coverImage.alt}
        loading="lazy"
      />
    </div>
  );
};

export default PostHeader;
