import client from './contentful';

export async function getBlogPosts() {
  const entries = await client.getEntries({ content_type: 'blogPost', include: 2 });
  return entries.items;
} 