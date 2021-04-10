import { createClient } from 'contentful';
import {
  parsePost,
  parseHomeScreenPosts,
  RawPost,
  HomeScreenPost
} from './utils';

const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN
});

export const getRecentPosts = async () => {
  try {
    const { items } = await client.getEntries<HomeScreenPost>({
      content_type: 'blogPost',
      limit: 5,
      select:
        'sys.id,fields.slug,fields.title,fields.date,fields.readTime,fields.excerpt',
      order: '-fields.date'
    });
    if (items.length)
      return { posts: parseHomeScreenPosts(items), error: false };
    return { posts: [], error: false };
  } catch (e) {
    console.error(e);
    return { posts: [], error: true };
  }
};

export const getAllPosts = async () => {
  try {
    const { items } = await client.getEntries<HomeScreenPost>({
      content_type: 'blogPost',
      select:
        'sys.id,fields.slug,fields.title,fields.date,fields.readTime,fields.excerpt',
      order: '-fields.date'
    });
    if (items.length)
      return { posts: parseHomeScreenPosts(items), error: false };
    return { posts: [], error: false };
  } catch (e) {
    console.error(e);
    return { posts: [], error: true };
  }
};

export const getPostBySlug = async (slug: string) => {
  try {
    const { items } = await client.getEntries<RawPost>({
      content_type: 'blogPost',
      limit: 1,
      'fields.slug[in]': slug
    });

    if (items.length) return { post: parsePost(items[0]), error: false };
    return { post: null, error: false };
  } catch (e) {
    console.error(e);
    return { post: null, error: true };
  }
};

export const getAllPostsWithSlug = async () => {
  try {
    const { items } = await client.getEntries<{ slug: string }>({
      content_type: 'blogPost',
      select: 'fields.slug'
    });

    if (items.length) return { posts: items, error: false };
    return { posts: [], error: false };
  } catch (e) {
    console.error(e);
    return { posts: [], error: true };
  }
};
