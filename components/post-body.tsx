import ReactMarkdown from 'react-markdown/with-html';

type PostBodyProps = {
  content: string;
};

const PostBody: React.FC<PostBodyProps> = ({ content }) => {
  return (
    <div className="prose sm:prose-lg lg:prose-xl prose-blue dark:prose-dark transition duration-500">
      <ReactMarkdown escapeHtml={false} source={content} />
    </div>
  );
};

export default PostBody;
