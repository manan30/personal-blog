import Link from 'next/link';
import PropTypes from 'prop-types';
import React from 'react';
import { RecentPost } from '../contentful/utils';
import styles from '../styles/RecentPosts.module.css';
import PostInfo from './post-info';

type RecentPostsProps = {
  posts: RecentPost[];
};

const RecentPosts: React.FC<RecentPostsProps> = ({ posts }) => {
  return (
    <div className="flex flex-col mt-12">
      <h3 className="my-4 font-medium text-xl">Recent Posts</h3>
      <div className="space-y-5">
        {posts.map((post) => (
          <div
            key={post.id}
            className="px-4 py-3 rounded-xl hover:shadow-lg transition duration-500 ease-in-out"
          >
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
    </div>
  );
};

RecentPosts.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.any).isRequired
};

export default RecentPosts;
