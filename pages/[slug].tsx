import matter from 'gray-matter';
import { GetStaticPaths, GetStaticProps } from 'next';
import { NextSeo } from 'next-seo';
import ErrorPage from 'next/error';
import { useRouter } from 'next/router';
import Author from '../components/author';
import Layout from '../components/layout';
import LoaderRipple from '../components/loaders/loader-ripple';
import PostBody from '../components/post-body';
import PostHeader from '../components/post-header';
import { getAllPostsWithSlug, getPostBySlug } from '../contentful';
import { ParsedPost } from '../contentful/utils';

type PostPageProps = {
  post: ParsedPost | null;
  slug: string;
};

const Post: React.FC<PostPageProps> = ({ post, slug }) => {
  const router = useRouter();

  if (!router.isFallback && !post) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <Layout>
      {router.isFallback ? (
        <LoaderRipple />
      ) : (
        <article>
          <NextSeo
            title={post.seoTitle}
            description={post.seoDescription}
            openGraph={{
              type: 'article',
              url: `https://blog.mananjoshi.me/${slug}`,
              description: post.seoDescription,
              title: post.seoTitle,
              images: [{ url: post.coverImage.file, alt: post.coverImage.alt }],
              article: {
                publishedTime: new Intl.DateTimeFormat('en-US', {
                  day: 'numeric',
                  year: 'numeric',
                  month: 'long'
                }).format(new Date(post.date)),
                tags: ['React']
              }
            }}
          />
          <PostHeader
            title={post.title}
            coverImage={{
              file: post.coverImage.file,
              alt: post.coverImage.alt
            }}
            date={new Date(post.date)}
            readTime={post.readTime}
          />
          <PostBody content={post.content} />
          <Author />
        </article>
      )}
    </Layout>
  );
};

export const getStaticProps: GetStaticProps<{
  post: null | ParsedPost;
  slug: string;
}> = async ({ params }) => {
  // TODO: Add error handling
  const { post } = await getPostBySlug(params.slug.toString());

  if (!post) {
    return {
      props: {
        post: null,
        slug: params.slug.toString()
      }
    };
  }

  const { content } = matter(post.content);

  return {
    props: {
      post: {
        ...post,
        content
      } as ParsedPost,
      slug: params.slug.toString()
    }
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { posts: allPosts } = await getAllPostsWithSlug();

  return {
    paths: allPosts?.map(({ fields }) => `/${fields.slug}`) ?? [],
    fallback: true
  };
};

export default Post;
