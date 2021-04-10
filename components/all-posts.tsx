import Link from 'next/link';
import React from 'react';
import { HomeScreenPost } from '../contentful/utils';
import PostInfo from './post-info';

type AllPostsProps = {
  posts: HomeScreenPost[];
};

const AllPosts: React.FC<AllPostsProps> = ({ posts }) => {
  return (
    <div className="flex flex-col mt-12">
      <h3 className="my-4 font-medium text-xl px-3">All Posts</h3>
      <div className="space-y-5">
        {posts.map((post) => (
          <div
            key={post.id}
            className="px-4 py-3 rounded-xl hover:shadow-lg transition duration-500 ease-in-out flex flex-col space-y-2"
          >
            <Link href="/[slug]" as={`/${post.slug}`}>
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a className="font-semibold text-xl text-blue-700">
                {post.title}
              </a>
            </Link>
            <PostInfo
              date={new Date(post.date)}
              readTime={post.readTime}
              large={false}
            />
            <div className="text-sm font-medium">{post.excerpt}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllPosts;
