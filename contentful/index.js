import { createClient } from 'contentful';

const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN
});

export async function getRecentPosts() {
  try {
    const { items } = await client.getEntries({
      limit: 5,
      order: 'sys.createdAt'
    });
    if (items) return items;
  } catch (e) {
    console.error(e);
    return [];
  }
}
