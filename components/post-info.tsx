import cn from 'classnames';

type PostInfoProps = {
  date: Date;
  readTime: number;
  large?: boolean;
};

const PostInfo: React.FC<PostInfoProps> = ({ date, readTime, large }) => {
  return (
    <div
      className={cn(
        'flex items-center text-xxs md:text-xs text-gray-500 tracking-tight space-x-2',
        large && 'text-xs md:text-sm'
      )}
    >
      <div>
        {date.getDate()}{' '}
        {date.toLocaleString('default', {
          month: 'short'
        })}
        , {date.getFullYear()}
      </div>
      <svg height="8" width="8" className="fill-current text-gray-500">
        <circle cx="4" cy="4" r="2" />
      </svg>
      <div>{readTime} min read</div>
    </div>
  );
};

export default PostInfo;
