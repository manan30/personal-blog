import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

function RecentPosts({ posts }) {
  return (
    <div className={styles.postsContainer}>
      <h3 className={styles.postsContainerTitle}>Recent Posts</h3>
      {posts.map(({ fields, sys }) => {
        const date = new Date(fields.postDate);
        return (
          <div key={sys.id} className={styles.postCard}>
            <span className={styles.postLink}>
              <Link href="/[slug]" as={`/${fields.slugUrl}`}>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a>{fields.postTitle}</a>
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
                <div>{fields.readTime}min read</div>
              </div>
              <div className={styles.postDescription}>
                Description of what the post all about
              </div>
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
