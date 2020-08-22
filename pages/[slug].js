import matter from 'gray-matter';
import ErrorPage from 'next/error';
import { useRouter } from 'next/router';
import ReactMarkdown from 'react-markdown/with-html';
import { getAllPostsWithSlug, getPostBySlug } from '../contentful';
import styles from '../styles/Slug.module.css';

export default function Post({ post }) {
  const router = useRouter();

  if (!router.isFallback && !post) {
    return <ErrorPage statusCode={404} />;
  }

  console.log(post.content);

  return (
    <div className={styles.container}>
      <h1 className={styles.postTitle}>{post.title}</h1>
      <article>
        <ReactMarkdown escapeHtml={false} source={post.content.content} />
      </article>
    </div>
  );
}

export async function getStaticProps({ params }) {
  const { post } = await getPostBySlug(params.slug);

  if (post.length) {
    return {
      props: {
        post: {
          ...post[0].fields,
          content: matter(post[0].fields.content)
        }
      }
    };
  }

  return {
    props: {
      post: null
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
