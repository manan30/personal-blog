import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Blog | Manan Joshi</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <div className={styles.profileContainer}>
          <img className={styles.profilePicture} alt='' />
          <h1>Manan Joshi</h1>
          <div className={styles.profileBio}>
            I try to explain the <i>chaos</i> of my mind with <i>ordered</i>{' '}
            code
          </div>
        </div>

        <div className={styles.postsContainer}>
          <h3 className={styles.postsContainerTitle}>Recent Posts</h3>
          {new Array(5).fill(0).map((_, i) => {
            const idx = i;
            return (
              <div key={idx} className={styles.postCard}>
                <span className={styles.postLink}>
                  <a href='#'>The WET Codebase</a>
                  <div className={styles.postInfo}>
                    <div>August 21, 2020</div>
                    <div className={styles.separator} />
                    <div>1min read</div>
                  </div>
                  <div className={styles.postDescription}>
                    Description of what the post all about
                  </div>
                </span>
              </div>
            );
          })}
        </div>
      </main>

      <footer className={styles.footer}>
        <div>
          <span>
            &#169; Copyright 2020{' '}
            <a href='https://mananjoshi.me'>Manan Joshi</a>
          </span>
        </div>
        <a
          href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
          target='_blank'
          rel='noopener noreferrer'>
          Powered by Vercel
        </a>
      </footer>
    </div>
  );
}
