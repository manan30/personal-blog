import { NextSeo } from 'next-seo';
import AllPosts from '../components/all-posts';
import Error from '../components/error';
import Layout from '../components/layout';
import Loader from '../components/loader';
import { getAllPosts } from '../contentful';
import { HomeScreenPost } from '../contentful/utils';

type HomePageProps = {
  allPosts: HomeScreenPost[];
  error: boolean;
};

const Home: React.FC<HomePageProps> = ({ allPosts, error }) => {
  console.log({ allPosts });
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
      <div className="min-h-screen mx-auto px-6 max-w-lg md:px-0 md:max-w-xl lg:max-w-4xl">
        <div className="flex flex-col items-center mx-12 mt-12">
          <img
            className="h-32 w-32 rounded-full bg-center bg-no-repeat bg-contain"
            alt="Profile"
            src="/images/profile-picture.jpg"
            loading="lazy"
          />
          <h1 className="text-4xl my-4 font-medium">Manan Joshi</h1>
          <div className="text-center text-base">
            I try to explain the <i>chaos</i> in my mind with <i>ordered</i>{' '}
            code
          </div>
        </div>
        {allPosts.length === 0 ? <Loader /> : <AllPosts posts={allPosts} />}
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
};

export const getStaticProps = async () => {
  const { posts, error } = await getAllPosts();
  return { props: { allPosts: posts, error } };
};

export default Home;
