import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { createClient } from 'contentful';
import styles from '../styles/Home.module.css';

const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN
});

export default function Home() {
  const [posts, setPosts] = useState([]);

  async function getRecentPosts() {
    try {
      const { items } = await client.getEntries({
        limit: 5,
        order: 'sys.createdAt'
      });
      if (items) setPosts(items);
    } catch (e) {
      console.error(e);
    }
  }

  useEffect(() => {
    getRecentPosts();
  }, []);

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
