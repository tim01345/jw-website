import { Navigation } from '@/components/layout/Navigation'
import { Footer } from '@/components/layout/Footer'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'
import { getBlogPost, getBlogPosts } from '@/lib/sanity'
import { urlFor } from '@/lib/sanity'
import { BlogPost } from '@/types/sanity'
import { PortableText } from '@/components/PortableText'
import { notFound } from 'next/navigation'

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  // For now, show static content to avoid Sanity connection issues
  const safePost = {
    title: 'Welcome to JourneyWell - Supporting Baton Rouge Businesses',
    author: { name: 'Tim Simmons', bio: 'Founder & Creative Director at JourneyWell' },
    categories: [{ title: 'Community News' }],
    mainImage: null,
    body: [],
    excerpt: 'Introducing JourneyWell - your partner in discovering and supporting the amazing local businesses that make Baton Rouge special.',
    readTime: 3,
    publishedAt: '2025-01-15T12:00:00Z'
  }

  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      
      {/* Article Header */}
      <article className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          {/* Category and Back Link */}
          <div className="flex items-center justify-between mb-8">
            <Link 
              href="/blog"
              className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors"
            >
              <span>←</span>
              <span>Back to Blog</span>
            </Link>
            
            {safePost.categories && safePost.categories.length > 0 && (
              <span 
                className="px-3 py-1 text-sm font-medium rounded-full"
                style={{
                  backgroundColor: '#EEF2FF',
                  color: '#3730A3'
                }}
              >
                {safePost.categories[0].title}
              </span>
            )}
          </div>

          {/* Article Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            {safePost.title}
          </h1>

          {/* Article Meta */}
          <div className="flex items-center space-x-6 mb-12 text-gray-600">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600 font-semibold">
                  {safePost.author.name.charAt(0)}
                </span>
              </div>
              <div>
                <div className="font-medium text-gray-900">{safePost.author.name}</div>
                <div className="text-sm text-gray-500">
                  {new Date(safePost.publishedAt).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </div>
              </div>
            </div>
            <div className="text-sm">
              {safePost.readTime} min read
            </div>
          </div>

          {/* Featured Image */}
          {safePost.mainImage && (
            <div className="mb-12">
              <img
                src={urlFor(safePost.mainImage).width(800).height(450).url()}
                alt={safePost.title}
                className="w-full h-auto rounded-xl shadow-lg"
              />
            </div>
          )}

          {/* Article Excerpt */}
          <div className="text-xl text-gray-700 mb-12 leading-relaxed font-light">
            {safePost.excerpt}
          </div>

          {/* Article Body */}
          <div className="prose prose-lg max-w-none">
            <div className="text-gray-700 leading-relaxed space-y-6">
              <p>
                Welcome to JourneyWell, your premier creative content and digital marketing studio in Baton Rouge, Louisiana. We're excited to introduce ourselves and share our mission of supporting local businesses throughout the region.
              </p>
              
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Our Story</h2>
              <p>
                JourneyWell was born from a passion for storytelling and a deep love for the vibrant business community in Baton Rouge. We recognized that many amazing local businesses had incredible stories to tell but lacked the resources or expertise to share them effectively with their audiences.
              </p>
              
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">What We Do</h2>
              <p>
                We specialize in helping businesses bring their vision to life through:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Professional podcast production and hosting</li>
                <li>High-quality video content creation</li>
                <li>Brand development and visual identity design</li>
                <li>Photography services for businesses and events</li>
                <li>Social media strategy and content creation</li>
                <li>Professional studio rentals for content creators</li>
              </ul>
              
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Why Choose JourneyWell?</h2>
              <p>
                What sets us apart is our deep understanding of the Louisiana market and our commitment to building genuine relationships with our clients. We're not just a service provider - we're your creative partners, invested in your success and growth.
              </p>
              
              <p>
                Whether you're a small startup looking to make your mark or an established business ready to refresh your brand, we're here to guide you through every step of your journey. Our team combines creative expertise with local market knowledge to deliver results that matter.
              </p>
              
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Get Started Today</h2>
              <p>
                Ready to take your brand to the next level? We'd love to hear your story and discuss how JourneyWell can help you achieve your goals. Contact us today to schedule a consultation and let's start creating something amazing together.
              </p>
              
              <div className="bg-blue-50 p-6 rounded-lg mt-8">
                <h3 className="text-lg font-semibold text-blue-900 mb-2">Ready to Begin Your Journey?</h3>
                <p className="text-blue-800 mb-4">
                  Contact us today to discuss your project and learn how we can help bring your vision to life.
                </p>
                <div className="space-y-2 text-sm text-blue-700">
                  <p><strong>Phone:</strong> (225) 435-8771</p>
                  <p><strong>Email:</strong> team@journeywell.io</p>
                  <p><strong>Location:</strong> Baton Rouge, Louisiana</p>
                </div>
              </div>
            </div>
          </div>

          {/* Article Footer */}
          <div className="mt-16 pt-8 border-t border-gray-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-semibold text-xl">
                    {safePost.author.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900 text-lg">{safePost.author.name}</div>
                  {safePost.author.bio && (
                    <div className="text-gray-600 text-sm">{safePost.author.bio}</div>
                  )}
                </div>
              </div>
              
              <Button variant="primary" size="medium" asChild>
                <Link href="/blog">
                  More Articles
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  )
}

// Generate static params for all blog posts
export async function generateStaticParams() {
  // Temporarily return empty array to skip static generation
  return []
} 