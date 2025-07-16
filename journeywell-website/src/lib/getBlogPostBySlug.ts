import client from './contentful';

export async function getBlogPostBySlug(slug: string) {
  const entries = await client.getEntries({
    content_type: 'blogPost',
    'fields.slug': slug,
    limit: 1,
  });
  return entries.items[0];
} 