import { createClient } from 'contentful';

const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN
});

export async function getRecentPosts() {
  try {
    const { items } = await client.getEntries({
      content_type: 'blogPost',
      limit: 5,
      select:
        'sys.id,fields.slug,fields.title,fields.date,fields.readTime,fields.excerpt',
      order: '-fields.date'
    });
    if (items.length) return { posts: items, error: false };
    return { posts: [], error: false };
  } catch (e) {
    console.error(e);
    return { posts: [], error: true };
  }
}

export async function getPostBySlug(slug) {
  try {
    const { items } = await client.getEntries({
      content_type: 'blogPost',
      limit: 1,
      'fields.slug[in]': slug
    });

    if (items.length) return { post: items, error: false };
    return { post: null, error: false };
  } catch (e) {
    console.error(e);
    return { post: null, error: true };
  }
}

export async function getAllPostsWithSlug() {
  try {
    const { items } = await client.getEntries({
      content_type: 'blogPost',
      select: 'fields.slug'
    });

    if (items.length) return { posts: items, error: false };
    return { posts: [], error: false };
  } catch (e) {
    console.error(e);
    return { posts: [], error: true };
  }
}
