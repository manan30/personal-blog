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
