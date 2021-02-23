import Link from 'next/link';
import PropTypes from 'prop-types';
import React from 'react';
import styles from '../styles/RecentPosts.module.css';
import PostInfo from './post-info';

function RecentPosts({ posts }) {
  return (
    <div className={styles.postsContainer}>
      <h3 className={styles.postsContainerTitle}>Recent Posts</h3>
      {posts.map((post) => (
        <div key={post.id} className={styles.postCard}>
          <span className={styles.postLink}>
            <Link href="/[slug]" as={`/${post.slug}`}>
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a>{post.title}</a>
            </Link>
            <PostInfo
              date={new Date(post.date)}
              readTime={post.readTime}
              large={false}
            />
            <div className={styles.postDescription}>{post.excerpt}</div>
          </span>
        </div>
      ))}
    </div>
  );
}

RecentPosts.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.any).isRequired
};

export default RecentPosts;
