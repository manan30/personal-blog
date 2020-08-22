import Head from 'next/head';
import PropTypes from 'prop-types';
import Loader from '../components/loader';
import RecentPosts from '../components/recent-posts';
import Error from '../components/error';
import { getRecentPosts } from '../contentful';
import styles from '../styles/Home.module.css';

export default function Home({ recentPosts, error }) {
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
            I try to explain the <i>chaos</i> in my mind with <i>ordered</i>{' '}
            code
          </div>
        </div>
        {recentPosts.length === 0 ? (
          <Loader />
        ) : (
          <RecentPosts posts={recentPosts} />
        )}

        <div className={styles.tagsContainer}>
          <h3 className={styles.tagsContainerTitle}>Tags</h3>
          <div className={styles.tagsGrid}>
            <div className={styles.tagCard}>All Posts</div>
            <div className={styles.tagCard}>React</div>
          </div>
        </div>
      </main>

      {error && <Error message="Error occurred while fetching recent posts" />}

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

Home.propTypes = {
  recentPosts: PropTypes.arrayOf(PropTypes.any).isRequired
};

export const getStaticProps = async () => {
  const { posts, error } = await getRecentPosts();
  return { props: { recentPosts: posts, error } };
};
