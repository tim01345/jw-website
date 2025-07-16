import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import Link from 'next/link';
import { getBlogPostBySlug } from '@/lib/getBlogPostBySlug';

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = await getBlogPostBySlug(params.slug);

  if (!post) {
    return (
      <main className="min-h-screen bg-white">
        <Navigation />
        <section className="py-20 max-w-2xl mx-auto px-6">
          <h1 className="text-3xl font-bold mb-4">Post not found</h1>
          <Link href="/blog" className="text-blue-600 hover:underline">Back to Blog</Link>
        </section>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <article className="py-20 max-w-2xl mx-auto px-6">
        <Link href="/blog" className="text-blue-600 hover:underline mb-4 inline-block">← Back to Blog</Link>
        <h1 className="text-4xl font-bold mb-4">{post.fields.title}</h1>
        {post.fields.description && (
          <p className="text-lg text-gray-700 mb-6">{post.fields.description}</p>
        )}
        {/* Render more fields as needed, e.g. post.fields.body */}
      </article>
      <Footer />
    </main>
  );
} 