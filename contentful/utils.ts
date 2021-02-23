import { Entry, Sys } from 'contentful';

export type RecentPost = {
  id: string;
  slug: string;
  title: string;
  date: Date;
  readTime: number;
  excerpt: string;
};

export type Post = {
  sys: Sys;
  fields: {
    title: string;
    excerpt: string;
    date: Date;
    readTime: number;
    slug: number;
    content: string;
    seoTitle: string;
    seoDescription: string;
  };
};

export const parsePost = (post) => {
  console.log(JSON.stringify(post, null, 2));
  return {
    ...post.fields,
    id: post.sys.id,
    coverImage: {
      alt: post.fields.coverImage.fields.title,
      file: post.fields.coverImage.fields.file.url
    }
  };
};

export const parseRecentPosts = (posts: Entry<RecentPost>[]): RecentPost[] => {
  return posts.map((post) => ({
    id: post.sys.id,
    title: post.fields.title,
    date: post.fields.date,
    excerpt: post.fields.excerpt,
    readTime: post.fields.readTime,
    slug: post.fields.slug
  }));
};
