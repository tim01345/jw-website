import { Navigation } from '@/components/layout/Navigation'
import { Footer } from '@/components/layout/Footer'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'
import { getBlogPosts } from '@/lib/sanity'
import { urlFor } from '@/lib/sanity'
import { BlogPost } from '@/types/sanity'

// This is now a server component that fetches real data
export default async function BlogPage() {
  // Fetch real blog posts from Sanity
  const posts = await getBlogPosts()
  
  // Get featured post (first one marked as featured, or first post)
  const featuredPost = posts.find((post: BlogPost) => post.featured) || posts[0]
  
  // Get remaining posts for the grid
  const otherPosts = posts.filter((post: BlogPost) => post._id !== featuredPost?._id)

  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section 
        className="py-20 relative overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #F8FAFC 0%, #E5E7EB 100%)'
        }}
      >
        <div 
          className="absolute inset-0"
          style={{ backgroundColor: 'rgba(37, 99, 235, 0.05)' }}
        />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h1 
              className="text-4xl md:text-6xl font-bold mb-6"
              style={{ color: '#111827' }}
            >
              Stories from the
              <span style={{ color: '#2563eb' }}> Heart of Louisiana</span>
            </h1>
            <p 
              className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed"
              style={{ color: '#6B7280' }}
            >
              Discover the businesses, creators, and innovators shaping Baton Rouge's creative landscape.
            </p>
          </div>

          {/* Featured Article - Real Content */}
          {featuredPost && (
            <div className="max-w-4xl mx-auto">
              <div 
                className="group bg-white rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1"
                style={{
                  backgroundColor: '#FFFFFF',
                  border: '1px solid #E5E7EB',
                  borderRadius: '16px',
                  boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
                }}
              >
                <div className="grid md:grid-cols-2 gap-0">
                  {/* Featured Image */}
                  <div className="relative aspect-[4/3] md:aspect-auto">
                    {featuredPost.mainImage ? (
                      <img
                        src={urlFor(featuredPost.mainImage).width(600).height(400).url()}
                        alt={featuredPost.mainImage.alt || featuredPost.title}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    ) : (
                      <div 
                        className="absolute inset-0 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center"
                        style={{ backgroundColor: '#F3F4F6' }}
                      >
                        <div className="text-center">
                          <div className="text-4xl mb-2">📝</div>
                          <div style={{ color: '#6B7280' }}>Featured Article</div>
                        </div>
                      </div>
                    )}
                    
                    {/* Category Tag */}
                    {featuredPost.categories && featuredPost.categories.length > 0 && (
                      <div className="absolute top-4 left-4">
                        <span 
                          className="px-3 py-1 text-sm font-medium"
                          style={{
                            backgroundColor: '#2563eb',
                            color: '#FFFFFF',
                            borderRadius: '6px'
                          }}
                        >
                          {featuredPost.categories[0].title}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Article Content */}
                  <div style={{ padding: '32px' }}>
                    <div className="space-y-4">
                      <h2 
                        className="text-2xl md:text-3xl font-semibold leading-tight group-hover:text-blue-600 transition-colors"
                        style={{ 
                          color: '#111827',
                          fontWeight: '600'
                        }}
                      >
                        {featuredPost.title}
                      </h2>
                      
                      <p 
                        className="text-lg leading-relaxed"
                        style={{ 
                          color: '#6B7280',
                          lineHeight: '1.6'
                        }}
                      >
                        {featuredPost.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between pt-4">
                        <div className="flex items-center space-x-4">
                          <span 
                            className="text-sm"
                            style={{ color: '#9CA3AF', fontSize: '14px' }}
                          >
                            By {featuredPost.author.name}
                          </span>
                          <span 
                            className="text-sm"
                            style={{ color: '#9CA3AF', fontSize: '14px' }}
                          >
                            {featuredPost.readTime} min read
                          </span>
                        </div>
                        
                        <Button variant="primary" size="medium" asChild>
                          <Link href={`/blog/${featuredPost.slug.current}`}>
                            Read Story →
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-3">
              {/* Recent Articles Header */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Recent Articles</h2>
                <p className="text-gray-600">Latest insights and stories from the Baton Rouge business community</p>
              </div>

              {/* Articles Grid - Real Content */}
              {otherPosts.length > 0 ? (
                <div className="grid md:grid-cols-2 gap-8">
                                     {otherPosts.map((post: BlogPost) => (
                    <article 
                      key={post._id}
                      className="group bg-white rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                      style={{
                        backgroundColor: '#FFFFFF',
                        border: '1px solid #E5E7EB',
                        borderRadius: '12px',
                        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)'
                      }}
                    >
                      {/* Image */}
                      <div className="relative aspect-video overflow-hidden">
                        {post.mainImage ? (
                          <img
                            src={urlFor(post.mainImage).width(400).height(225).url()}
                            alt={post.mainImage.alt || post.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        ) : (
                          <div 
                            className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center"
                            style={{ backgroundColor: '#F3F4F6' }}
                          >
                            <div className="text-center">
                              <div className="text-2xl mb-2">📰</div>
                              <div style={{ color: '#6B7280' }}>Article</div>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Content */}
                      <div style={{ padding: '24px' }}>
                        <div className="space-y-3">
                          {/* Category Tag */}
                          {post.categories && post.categories.length > 0 && (
                            <span 
                              className="inline-block px-2 py-1 text-xs font-medium rounded"
                              style={{
                                backgroundColor: '#EEF2FF',
                                color: '#3730A3',
                                borderRadius: '4px',
                                padding: '4px 8px'
                              }}
                            >
                              {post.categories[0].title}
                            </span>
                          )}

                          <h3 
                            className="text-lg font-semibold leading-tight group-hover:text-blue-600 transition-colors"
                            style={{
                              color: '#111827',
                              fontWeight: '600'
                            }}
                          >
                            {post.title}
                          </h3>

                          <p 
                            className="text-sm leading-relaxed"
                            style={{
                              color: '#6B7280',
                              lineHeight: '1.6'
                            }}
                          >
                            {post.excerpt}
                          </p>

                          <div className="flex items-center justify-between pt-2">
                            <div className="flex items-center space-x-3">
                              <span 
                                className="text-xs"
                                style={{ color: '#9CA3AF', fontSize: '14px' }}
                              >
                                {post.author.name}
                              </span>
                              <span 
                                className="text-xs"
                                style={{ color: '#9CA3AF', fontSize: '14px' }}
                              >
                                {post.readTime} min read
                              </span>
                            </div>
                            
                            <Link 
                              href={`/blog/${post.slug.current}`}
                              className="text-sm font-medium hover:underline transition-colors"
                              style={{
                                color: '#2563eb',
                                textDecoration: 'none'
                              }}
                            >
                              Read More →
                            </Link>
                          </div>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <div className="text-6xl mb-4">📝</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">More Articles Coming Soon</h3>
                  <p className="text-gray-600">We're working on bringing you more great content about Baton Rouge businesses.</p>
                </div>
              )}

              {/* Show message if only featured post exists */}
              {posts.length === 1 && (
                <div className="text-center py-12 bg-gray-50 rounded-xl">
                  <div className="text-4xl mb-4">🚀</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Just Getting Started!</h3>
                  <p className="text-gray-600">This is our first post - more amazing content about Baton Rouge businesses is coming soon!</p>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-8">
              {/* Newsletter Signup */}
              <div 
                className="rounded-2xl p-8"
                style={{
                  background: 'linear-gradient(135deg, #EEF2FF 0%, #E0E7FF 100%)'
                }}
              >
                <div 
                  className="bg-white rounded-xl p-6"
                  style={{
                    backgroundColor: '#FFFFFF',
                    border: '1px solid #E5E7EB',
                    borderRadius: '16px',
                    padding: '32px',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)'
                  }}
                >
                  <h3 
                    className="text-xl font-bold mb-3"
                    style={{
                      color: '#111827',
                      fontWeight: '700'
                    }}
                  >
                    Stay Connected
                  </h3>
                  <p 
                    className="text-sm mb-6"
                    style={{ color: '#6B7280' }}
                  >
                    Get weekly insights from Baton Rouge's creative community delivered to your inbox.
                  </p>
                  
                  <form className="space-y-4">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                      style={{
                        backgroundColor: '#F9FAFB',
                        border: '1px solid #E5E7EB',
                        color: '#111827',
                        borderRadius: '8px'
                      }}
                    />
                    <button 
                      type="submit"
                      className="w-full py-3 font-medium rounded-lg transition-colors"
                      style={{
                        backgroundColor: '#2563eb',
                        color: '#FFFFFF',
                        borderRadius: '8px'
                      }}
                    >
                      Subscribe
                    </button>
                  </form>
                </div>
              </div>

              {/* Categories */}
              <div 
                className="bg-white rounded-xl p-6"
                style={{
                  backgroundColor: '#FFFFFF',
                  border: '1px solid #E5E7EB',
                  borderRadius: '12px',
                  padding: '20px'
                }}
              >
                <h3 
                  className="text-lg font-semibold mb-6"
                  style={{ color: '#111827' }}
                >
                  Browse Topics
                </h3>
                
                <div className="space-y-3">
                  {[
                    'Local Business Spotlight',
                    'Industry Insights',
                    'Community News',
                    'Business Resources'
                  ].map((category) => (
                    <Link 
                      key={category}
                      href={`/blog/category/${category.toLowerCase().replace(/\s+/g, '-')}`}
                      className="block text-sm hover:text-blue-600 transition-colors"
                      style={{ color: '#9CA3AF' }}
                    >
                      {category} →
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
} 