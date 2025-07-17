import client from './contentful';

export async function getBlogPostById(id: string) {
  return await client.getEntry(id);
} 