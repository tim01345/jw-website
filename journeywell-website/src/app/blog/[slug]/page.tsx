import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import Link from 'next/link';
import { getBlogPostById } from '@/lib/getBlogPostBySlug';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Document } from '@contentful/rich-text-types';

function isContentfulDocument(doc: unknown): doc is Document {
  return (
    typeof doc === 'object' &&
    doc !== null &&
    'nodeType' in doc &&
    (doc as any).nodeType === 'document' &&
    'content' in doc &&
    Array.isArray((doc as any).content)
  );
}

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = await getBlogPostById(params.slug);

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

  // Extract fields with type guards
  let categoryName = '';
  if (
    Array.isArray(post.fields.category) &&
    post.fields.category[0] &&
    typeof post.fields.category[0] === 'object' &&
    post.fields.category[0] !== null &&
    'fields' in post.fields.category[0] &&
    post.fields.category[0].fields &&
    typeof post.fields.category[0].fields === 'object' &&
    post.fields.category[0].fields !== null &&
    'name' in post.fields.category[0].fields &&
    typeof post.fields.category[0].fields.name === 'string'
  ) {
    categoryName = post.fields.category[0].fields.name;
  }
  let authorName = '';
  if (
    post.fields.author &&
    typeof post.fields.author === 'object' &&
    post.fields.author !== null &&
    'fields' in post.fields.author &&
    post.fields.author.fields &&
    typeof post.fields.author.fields === 'object' &&
    post.fields.author.fields !== null &&
    'name' in post.fields.author.fields &&
    typeof post.fields.author.fields.name === 'string'
  ) {
    authorName = post.fields.author.fields.name;
  }
  let formattedDate = '';
  if (post.fields.postDate && typeof post.fields.postDate === 'string') {
    formattedDate = formatDate(post.fields.postDate);
  }
  let content: Document | null = null;
  if (
    post.fields.post &&
    typeof post.fields.post === 'object' &&
    post.fields.post !== null &&
    'nodeType' in post.fields.post &&
    post.fields.post.nodeType === 'document' &&
    'content' in post.fields.post &&
    Array.isArray(post.fields.post.content)
  ) {
    content = post.fields.post as Document;
  }

  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <article className="max-w-3xl mx-auto px-6 py-16">
        <Link href="/blog" className="text-blue-600 hover:underline mb-8 inline-block">← Back to Blog</Link>
        {/* Category */}
        {categoryName && (
          <div className="font-normal text-[#080808] text-xs tracking-[1.2px] uppercase leading-[15.6px] mb-2">
            {categoryName}
          </div>
        )}
        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-[#080808] mb-4 leading-tight">{post.fields.title}</h1>
        {/* Author and Date */}
        <div className="flex items-center gap-3 mb-8 text-gray-500 text-sm">
          {authorName && <span>By {authorName}</span>}
          {authorName && formattedDate && <span>•</span>}
          {formattedDate && <span>{formattedDate}</span>}
        </div>
        {/* Main Content */}
        <div className="prose prose-lg max-w-none text-[#080808]">
          {isContentfulDocument(content)
            ? documentToReactComponents(content)
            : <p>No content available.</p>}
        </div>
      </article>
      <Footer />
    </main>
  );
} 