import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import { getRecentPosts } from '../contentful';

export default function Home({ posts }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Blog | Manan Joshi</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.profileContainer}>
          <img className={styles.profilePicture} alt="" />
          <h1>Manan Joshi</h1>
          <div className={styles.profileBio}>
            I try to explain the <i>chaos</i> of my mind with <i>ordered</i>{' '}
            code
          </div>
        </div>

        <div className={styles.postsContainer}>
          <h3 className={styles.postsContainerTitle}>Recent Posts</h3>
          {posts.map(({ fields, sys }) => (
            <div key={sys.id} className={styles.postCard}>
              <span className={styles.postLink}>
                <Link href="/[pid]" as={`/${fields.slugUrl}`}>
                  <a>{fields.postTitle}</a>
                </Link>
                <div className={styles.postInfo}>
                  <div>{new Date(fields.postDate).getDate()}</div>
                  <div className={styles.separator} />
                  <div>{fields.readTime}min read</div>
                </div>
                <div className={styles.postDescription}>
                  Description of what the post all about
                </div>
              </span>
            </div>
          ))}
        </div>
      </main>

      <footer className={styles.footer}>
        <div>
          <span>
            &#169; Copyright 2020{' '}
            <a href="https://mananjoshi.me">Manan Joshi</a>
          </span>
        </div>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by Vercel
        </a>
      </footer>
    </div>
  );
}

export const getStaticProps = async () => {
  const posts = await getRecentPosts();
  return { props: { posts } };
};
