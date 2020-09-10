import Head from 'next/head';
import { NextSeo } from 'next-seo';
import PropTypes from 'prop-types';
import Loader from '../components/loader';
import RecentPosts from '../components/recent-posts';
import Error from '../components/error';
import { getRecentPosts } from '../contentful';
import styles from '../styles/Home.module.css';
import Layout from '../components/layout';

export default function Home({ recentPosts, error }) {
  return (
    <Layout>
      <NextSeo
        title="Blog | Manan Joshi"
        description=""
        canonical="https://blog.mananjoshi.me"
        openGraph={{
          description: ''
        }}
      />
      <div className={styles.container}>
        <div className={styles.profileContainer}>
          <img
            className={styles.profilePicture}
            alt="Profile"
            src="/images/profile-picture.jpg"
            loading="lazy"
          />
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
        {/* <div className={styles.tagsContainer}>
          <h3 className={styles.tagsContainerTitle}>Tags</h3>
          <div className={styles.tagsGrid}>
            <div className={styles.tagCard}>All Posts</div>
            <div className={styles.tagCard}>React</div>
          </div>
        </div> */}
      </div>
      {error && <Error message="Error occurred while fetching recent posts" />}
    </Layout>
  );
}

Home.propTypes = {
  recentPosts: PropTypes.arrayOf(PropTypes.any).isRequired
};

export const getStaticProps = async () => {
  const { posts, error } = await getRecentPosts();
  return { props: { recentPosts: posts, error } };
};
