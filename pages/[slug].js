import matter from 'gray-matter';
import { NextSeo } from 'next-seo';
import ErrorPage from 'next/error';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import Author from '../components/author';
import Layout from '../components/layout';
import Loader from '../components/loader';
import PostBody from '../components/post-body';
import PostHeader from '../components/post-header';
import { getAllPostsWithSlug, getPostBySlug } from '../contentful';
import styles from '../styles/Slug.module.css';

export default function Post({ post, slug }) {
  const router = useRouter();

  if (!router.isFallback && !post) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <Layout>
      <div
        className={[styles.container, router.isFallback && styles.loader].join(
          ' '
        )}
      >
        {router.isFallback ? (
          <Loader />
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
                images: [
                  { url: post.coverImage.file, alt: post.coverImage.alt }
                ],
                article: {
                  publishedTime: post.date,
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
      </div>
    </Layout>
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
        post: null,
        slug: params.slug
      }
    };
  }

  const { content } = matter(post.content);

  return {
    props: {
      post: {
        ...post,
        content
      },
      slug: params.slug
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
