import ReactMarkdown from 'react-markdown/with-html';

type PostBodyProps = {
  content: string;
};

const PostBody: React.FC<PostBodyProps> = ({ content }) => {
  return (
    <div className="prose sm:prose-lg lg:prose-xl prose-blue dark:prose-dark transition-all duration-500 max-w-full">
      <ReactMarkdown escapeHtml={false} source={content} />
    </div>
  );
};

export default PostBody;
