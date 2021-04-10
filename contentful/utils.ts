import { Entry } from 'contentful';

export type HomeScreenPost = {
  id: string;
  slug: string;
  title: string;
  date: Date;
  readTime: number;
  excerpt: string;
};

interface Post {
  title: string;
  excerpt: string;
  date: Date;
  readTime: number;
  slug: number;
  content: string;
  seoTitle: string;
  seoDescription: string;
}

export interface RawPost extends Post {
  coverImage: Entry<{
    title: string;
    file: { url: string };
  }>;
}

export interface ParsedPost extends Post {
  id: string;
  coverImage: {
    alt: string;
    file: string;
  };
}

export const parsePost = (post: Entry<RawPost>): ParsedPost => {
  return {
    ...post.fields,
    id: post.sys.id,
    coverImage: {
      alt: post.fields.coverImage.fields.title,
      file: post.fields.coverImage.fields.file.url
    }
  };
};

export const parseHomeScreenPosts = (
  posts: Entry<HomeScreenPost>[]
): HomeScreenPost[] => {
  return posts.map((post) => ({
    id: post.sys.id,
    title: post.fields.title,
    date: post.fields.date,
    excerpt: post.fields.excerpt,
    readTime: post.fields.readTime,
    slug: post.fields.slug
  }));
};
