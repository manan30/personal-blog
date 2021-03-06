import { GetStaticProps } from 'next';
import { NextSeo } from 'next-seo';
import AllPosts from '../components/all-posts';
import Error from '../components/error';
import Layout from '../components/layout';
import { getAllPosts } from '../contentful';
import { HomeScreenPost } from '../contentful/utils';

type HomePageProps = {
  allPosts: HomeScreenPost[];
  error: boolean;
};

const Home: React.FC<HomePageProps> = ({ allPosts, error }) => {
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
      <div className="flex flex-col items-center mt-8 md:mt-12">
        <img
          className="h-24 w-24 md:h-32 md:w-32 rounded-full object-cover object-center shadow-lg"
          alt="Profile"
          src="/images/profile-picture.webp"
          loading="lazy"
        />
        <h1 className="md:text-4xl text-2xl my-4 font-medium text-center dark:text-gray-200 transition duration-500">
          Manan Joshi
        </h1>
        <div className="text-center text-sm md:text-base dark:text-gray-300 transition duration-500">
          I try to explain the <i>chaos</i> in my mind with <i>ordered</i> code
        </div>
      </div>
      <AllPosts posts={allPosts} />
      {/* <div className={styles.tagsContainer}>
          <h3 className={styles.tagsContainerTitle}>Tags</h3>
          <div className={styles.tagsGrid}>
            <div className={styles.tagCard}>All Posts</div>
            <div className={styles.tagCard}>React</div>
          </div>
        </div> */}
      {error && <Error message="Error occurred while fetching posts" />}
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const { posts, error } = await getAllPosts();
  return { props: { allPosts: posts, error } };
};

export default Home;
