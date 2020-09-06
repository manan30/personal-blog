import matter from 'gray-matter';
import ErrorPage from 'next/error';
import Head from 'next/head';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import Loader from '../components/loader';
import PostBody from '../components/post-body';
import PostHeader from '../components/post-header';
import { getAllPostsWithSlug, getPostBySlug } from '../contentful';
import styles from '../styles/Slug.module.css';
import Author from '../components/author';

export default function Post({ post }) {
  console.log(post);
  const router = useRouter();

  if (!router.isFallback && !post) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <div
      className={[styles.container, router.isFallback && styles.loader].join(
        ' '
      )}
    >
      {router.isFallback ? (
        <Loader />
      ) : (
        <article>
          <Head>
            <title>{post.seoTitle}</title>
            <meta property="og:image" content={post.coverImage.file} />
          </Head>
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
    </div>
  );
}

Post.propTypes = {
  post: PropTypes.objectOf(PropTypes.any).isRequired
};

export async function getStaticProps({ params }) {
  const { post } = await getPostBySlug(params.slug);

  if (!post) {
    return {
      props: {
        post: null
      }
    };
  }

  const { content } = matter(post.content);

  return {
    props: {
      post: {
        ...post,
        content
      }
    }
  };
}

export async function getStaticPaths() {
  const { posts: allPosts } = await getAllPostsWithSlug();
  return {
    paths: allPosts?.map(({ fields }) => `/${fields.slug}`) ?? [],
    fallback: true
  };
}
