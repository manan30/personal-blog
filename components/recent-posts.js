import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

function RecentPosts({ posts }) {
  return (
    <div className={styles.postsContainer}>
      <h3 className={styles.postsContainerTitle}>Recent Posts</h3>
      {posts.map((post) => {
        const date = new Date(post.date);
        return (
          <div key={post.id} className={styles.postCard}>
            <span className={styles.postLink}>
              <Link href="/[slug]" as={`/${post.slug}`}>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a>{post.title}</a>
              </Link>
              <div className={styles.postInfo}>
                <div>
                  {date.getDate()}{' '}
                  {date.toLocaleString('default', {
                    month: 'short'
                  })}
                  , {date.getFullYear()}
                </div>
                <div className={styles.separator} />
                <div>{post.readTime}min read</div>
              </div>
              <div className={styles.postDescription}>{post.excerpt}</div>
            </span>
          </div>
        );
      })}
    </div>
  );
}

RecentPosts.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.any).isRequired
};

export default RecentPosts;
