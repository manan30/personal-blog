import { NextSeo } from 'next-seo';
import Error from '../components/error';
import Layout from '../components/layout';
import Loader from '../components/loader';
import RecentPosts from '../components/recent-posts';
import { getRecentPosts } from '../contentful';
import styles from '../styles/Home.module.css';

export default function Home({ recentPosts, error }) {
  return (
    <Layout>
      <NextSeo
        title="Blog | Manan Joshi"
        description="Manan Joshi is a passionate full-stack developer and loves working with web technologies. He is interested in building software that empowers the lives of people. He recently graduated with a Master's degree from Rochester Institute of Technology. He is currently working as a Software Engineer at Egen Solutions and lives in Naperville, Illinois."
        canonical="https://blog.mananjoshi.me"
        openGraph={{
          description:
            "Manan Joshi is a passionate full-stack developer and loves working with web technologies. He is interested in building software that empowers the lives of people. He recently graduated with a Master's degree from Rochester Institute of Technology. He is currently working as a Software Engineer at Egen Solutions and lives in Naperville, Illinois."
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

export const getStaticProps = async () => {
  const { posts, error } = await getRecentPosts();
  return { props: { recentPosts: posts, error } };
};
