import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import Link from 'next/link';
import { getBlogPosts } from '@/lib/getBlogPosts';

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

const categories = [
  { name: 'Design', slug: 'design' },
  { name: 'Development', slug: 'development' },
  { name: 'Engineering', slug: 'engineering' },
  { name: 'Inside Webflow', slug: 'inside-webflow' },
  { name: 'Inspiration', slug: 'inspiration' },
  { name: 'Strategy', slug: 'strategy' },
];

const img686Eb75Ea0F3E6Bf9031D520BlogIx3Hero2400X1260Jpg = "http://localhost:3845/assets/f79d5e537d0ebb9809dbb9322acbfad74dc2bfc7.png";
const img6741169B9Ee6142D1B12694DEngineeringDesignBlogHeader2400X126012P2000Png = "http://localhost:3845/assets/b08ebe9d5a13aaa1a5c5854d47849bae9580192a.png";
const img681939F9B63D135342853E40OptimizeBlogHeader2400X12602P2000Png = "http://localhost:3845/assets/e6487e41b21958747a13928605b6be33d31b89fc.png";
const img680116B5B8Bef00A95Aed7D9BlogHeader2400X1260P2000Webp = "http://localhost:3845/assets/0c7f547542354ceded69b72982197ce1e9608c00.png";
const img67F419C033E1E75288Da2F59651Ed3B1B771Fd2Bb0Bcc2C5BlogHeader11BestFontsForWebDesign2400X1260Jpeg = "http://localhost:3845/assets/71c6ebd35782a4c9e71fa5547bc3403dc9176d13.png";
const img671832B8E6Bd637B8D9Dcac1Composable20CmsDesignBlogHeader072400X126017Png = "http://localhost:3845/assets/49d25a8fbd512db2b2184bf05d1dbf65ef64e1fe.png";

export default async function BlogPage() {
  const posts = await getBlogPosts();
  if (!posts || posts.length === 0) {
    return (
      <main className="min-h-screen bg-white">
        <Navigation />
        <section className="py-20 max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-8">Blog Posts</h1>
          <p>No posts found.</p>
        </section>
        <Footer />
      </main>
    );
  }

  // Sort posts by postDate descending
  const sortedPosts = posts.slice().sort((a: any, b: any) => {
    const dateA = new Date(a.fields.postDate || 0).getTime();
    const dateB = new Date(b.fields.postDate || 0).getTime();
    return dateB - dateA;
  });

  const recentPosts = sortedPosts.slice(0, 3);
  const restPosts = sortedPosts.slice(3);

  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      {/* Figma Hero/Featured Section */}
      <div className="relative w-full" style={{ minHeight: 800 }}>
        <div className="relative w-full">
          <div className="flex flex-col items-start justify-start pb-10 pt-[39px] px-20 w-full">
            <div className="flex flex-col items-start justify-start max-w-[1280px] w-[1280px] mx-auto">
              <div className="flex flex-row gap-12 items-end justify-center w-full">
                {/* Left: Featured Image and Text */}
                <div className="flex flex-col h-[781px] items-start justify-start w-[748.8px]">
                  <div className="flex flex-col gap-0.5 items-start justify-start w-full">
                    <div className="h-[396.86px] overflow-clip w-full relative">
                      <div
                        className="absolute inset-0 bg-no-repeat bg-top"
                        style={{ backgroundImage: `url('${img686Eb75Ea0F3E6Bf9031D520BlogIx3Hero2400X1260Jpg}')`, backgroundSize: 'cover' }}
                      />
                    </div>
                    <div className="bg-[#080808] h-[366.59px] w-full relative">
                      <div className="absolute flex flex-col items-start left-12 right-12 top-[78.545px]">
                        <div className="flex flex-col font-bold leading-[49.92px] text-white text-[44.44px] tracking-[0.48px]">
                          <p className="mb-0">Unlock GSAP-powered</p>
                          <p>motion — visually in Webflow</p>
                        </div>
                      </div>
                      <div className="absolute flex flex-col items-start left-12 right-12 top-[194.2px]">
                        <div className="flex flex-col font-normal leading-[28.8px] text-white text-[18px]">
                          <p className="mb-0">Unlock visual-first motion development, a new horizontal timeline, reusable</p>
                          <p className="mb-0">interactions, & more with Webflow’s newest version of Interactions, powered</p>
                          <p>by GSAP.</p>
                        </div>
                      </div>
                      <div className="absolute flex flex-row items-center left-12 right-12 top-[296.79px]">
                        <div className="flex flex-col pr-[3.2px]">
                          <div className="font-bold text-white text-[16px] tracking-[0.32px] leading-[20.8px]">by</div>
                        </div>
                        <div className="flex flex-col pb-[0.8px]">
                          <div className="font-bold text-white text-[15px] tracking-[0.32px] leading-[20.8px]">Caroline Ren</div>
                        </div>
                        <div className="flex flex-col pr-[3.2px]">
                          <div className="font-bold text-white text-[16px] tracking-[0.32px] leading-[20.8px]">,</div>
                        </div>
                        <div className="flex flex-col pb-[0.8px]">
                          <div className="font-bold text-white text-[15.25px] tracking-[0.32px] leading-[20.8px]">Emma Genesen</div>
                        </div>
                      </div>
                      <div className="absolute flex flex-col items-start left-12 right-12 top-12">
                        <div className="font-normal text-white text-[10.5px] tracking-[1.2px] uppercase leading-[15.6px]">Inside Webflow</div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Right: Sidebar "New" and List */}
                <div className="flex flex-row items-end self-stretch">
                  <div className="flex flex-col gap-[31.99px] h-full items-start justify-start w-[483.2px]">
                    <div className="flex flex-col w-full">
                      <div className="font-bold text-[#080808] text-[85px] leading-[88.41px] tracking-[0.85px] w-full">New</div>
                    </div>
                    <div className="flex flex-col gap-5 w-full">
                      {/* Map recent posts here */}
                      {recentPosts.map((post: any) => (
                        <div key={post.sys.id} className="flex flex-col-reverse gap-[14.98px] pb-[22px] w-full border-b-2 border-black">
                          {/* Category above title */}
                          <div className="font-normal text-[#080808] text-[10.5px] tracking-[1.2px] uppercase leading-[15.6px]">
                            {post.fields.category && post.fields.category[0]?.fields?.name}
                          </div>
                          <div className="font-bold text-[#080808] text-[35.99px] leading-[38.49px] tracking-[0.74px] w-full">
                            <Link href={`/blog/${post.fields.id || post.sys.id}`}>
                              <p className="mb-0">{post.fields.title}</p>
                            </Link>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                {/* End sidebar */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Figma Popular Section */}
      <div className="relative w-full">
        <div className="relative w-full">
          <div className="flex flex-col items-start justify-start px-20 py-10 w-full">
            <div className="flex flex-col gap-8 items-start justify-start max-w-[1280px] w-[1280px] mx-auto">
              <div className="flex flex-col items-start w-full">
                <div className="font-bold text-[#080808] text-[52.83px] leading-[58.24px] tracking-[0.56px] w-full">Popular</div>
              </div>
              <div className="flex flex-row gap-12 items-start justify-center w-full">
                {/* Left column of popular posts */}
                <div className="flex flex-col grow items-start justify-start self-stretch w-1/2">
                  <div className="flex flex-col gap-0.5 items-start w-full">
                    {/* List item 1 */}
                    <div className="flex flex-row gap-4 items-center w-full">
                      <div className="grow h-[159px] overflow-clip relative">
                        <div className="absolute inset-0 bg-no-repeat bg-top" style={{ backgroundImage: `url('${img6741169B9Ee6142D1B12694DEngineeringDesignBlogHeader2400X126012P2000Png}')`, backgroundSize: 'cover' }} />
                      </div>
                      <div className="flex flex-col-reverse gap-4 grow px-0 py-4 w-full">
                        <div className="font-normal text-[#080808] text-[10.5px] tracking-[1.2px] uppercase leading-[15.6px]">Engineering</div>
                        <div className="font-bold text-[#080808] text-[22.5px] leading-[31.2px] tracking-[0.48px] w-full">
                          <p className="mb-0">How AI-powered</p>
                          <p className="mb-0">prototyping is changing</p>
                          <p>design at Webflow</p>
                        </div>
                      </div>
                    </div>
                    {/* List item 2 */}
                    <div className="flex flex-row gap-4 items-center w-full">
                      <div className="grow h-[159px] overflow-clip relative">
                        <div className="absolute inset-0 bg-no-repeat bg-top" style={{ backgroundImage: `url('${img681939F9B63D135342853E40OptimizeBlogHeader2400X12602P2000Png}')`, backgroundSize: 'cover' }} />
                      </div>
                      <div className="flex flex-col-reverse gap-4 grow px-0 py-4 w-full">
                        <div className="font-normal text-[#080808] text-[10.31px] tracking-[1.2px] uppercase leading-[15.6px]">Strategy</div>
                        <div className="font-bold text-[#080808] text-[22.13px] leading-[31.2px] tracking-[0.48px] w-full">
                          <p className="mb-0">The art of optimizing</p>
                          <p>conversions for growth</p>
                        </div>
                      </div>
                    </div>
                    {/* List item 3 */}
                    <div className="flex flex-row gap-4 items-center w-full">
                      <div className="grow h-[159px] overflow-clip relative">
                        <div className="absolute inset-0 bg-no-repeat bg-top" style={{ backgroundImage: `url('${img680116B5B8Bef00A95Aed7D9BlogHeader2400X1260P2000Webp}')`, backgroundSize: 'cover' }} />
                      </div>
                      <div className="flex flex-col-reverse gap-4 grow px-0 py-4 w-full">
                        <div className="font-normal text-[#080808] text-[10.5px] tracking-[1.2px] uppercase leading-[15.6px]">Inside Webflow</div>
                        <div className="font-bold text-[#080808] text-[22.13px] leading-[31.2px] tracking-[0.48px] w-full">
                          <p className="mb-0">Webflow Conf 2025</p>
                          <p>registration is now open</p>
                        </div>
                      </div>
                    </div>
                    {/* List item 4 */}
                    <div className="flex flex-row gap-4 items-center w-full">
                      <div className="grow h-[159px] overflow-clip relative">
                        <div className="absolute inset-0 bg-no-repeat bg-top" style={{ backgroundImage: `url('${img67F419C033E1E75288Da2F59651Ed3B1B771Fd2Bb0Bcc2C5BlogHeader11BestFontsForWebDesign2400X1260Jpeg}')`, backgroundSize: 'cover' }} />
                      </div>
                      <div className="flex flex-col-reverse gap-4 grow px-0 py-4 w-full">
                        <div className="font-normal text-[#080808] text-[11.06px] tracking-[1.2px] uppercase leading-[15.6px]">Design</div>
                        <div className="font-bold text-[#080808] text-[21.56px] leading-[31.2px] tracking-[0.48px] w-full">
                          <p className="mb-0">11 best fonts for web</p>
                          <p>design</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Right column: Large card */}
                <div className="flex flex-col grow items-start justify-start self-stretch w-1/2">
                  <div className="flex flex-col gap-0.5 items-start w-full">
                    <div className="h-[326.47px] overflow-clip w-full relative">
                      <div className="absolute inset-0 bg-no-repeat bg-top" style={{ backgroundImage: `url('${img671832B8E6Bd637B8D9Dcac1Composable20CmsDesignBlogHeader072400X126017Png}')`, backgroundSize: 'cover' }} />
                    </div>
                    <div className="bg-[#ed52cb] h-[416.5px] w-full relative">
                      <div className="absolute flex flex-col items-start left-12 right-12 top-[78.5px]">
                        <div className="flex flex-col font-bold leading-[49.92px] text-[#080808] text-[45.19px] tracking-[0.48px]">
                          <p className="mb-0">The next generation of</p>
                          <p className="mb-0">CMS: A Website</p>
                          <p>Experience Platform</p>
                        </div>
                      </div>
                      <div className="absolute flex flex-col items-start left-12 right-12 top-[244.11px]">
                        <div className="flex flex-col font-normal leading-[28.8px] text-[#080808] text-[18px]">
                          <p className="mb-0">Content management systems are changing. Our Website</p>
                          <p className="mb-0">Experience Platform was designed to empower businesses</p>
                          <p>to optimize teams, resources, and time-to-market.</p>
                        </div>
                      </div>
                      <div className="absolute flex flex-row items-center left-12 right-12 top-[346.7px]">
                        <div className="flex flex-col mr-[-0.01px] pr-[3.2px]">
                          <div className="font-bold text-[#080808] text-[16px] tracking-[0.32px] leading-[20.8px]">by</div>
                        </div>
                        <div className="flex flex-col mr-[-0.01px] pb-[0.8px]">
                          <div className="font-bold text-[#080808] text-[15px] tracking-[0.32px] leading-[20.8px]">Brett Domeny</div>
                        </div>
                      </div>
                      <div className="absolute flex flex-col items-start left-12 right-12 top-12">
                        <div className="font-normal text-[#080808] text-[10.69px] tracking-[1.2px] uppercase leading-[15.6px]">Inspiration</div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End right column */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-4">Webflow Blog</h1>
          <p className="text-xl text-gray-600 mb-8">Stories, insights, and advice that will transform how you design and build for the web.</p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {categories.map((cat) => (
              <Link key={cat.slug} href={`/blog/category/${cat.slug}`} className="px-4 py-2 rounded-full bg-gray-100 text-gray-700 hover:bg-blue-600 hover:text-white transition-colors text-sm font-medium">
                {cat.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {restPosts.map((post: any) => (
              <article key={post.sys.id} className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow flex flex-col">
                {/* Image Placeholder */}
                <div className="aspect-[4/2] bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                  <span className="text-5xl">📰</span>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  {/* Category */}
                  {post.fields.category && post.fields.category.length > 0 && (
                    <span className="inline-block mb-2 px-3 py-1 text-xs font-semibold rounded-full bg-blue-50 text-blue-700">
                      {post.fields.category[0]?.fields?.name || 'Category'}
                    </span>
                  )}
                  {/* Title */}
                  <h2 className="text-2xl font-bold mb-2">
                    <Link href={`/blog/${post.fields.id || post.sys.id}`}>{post.fields.title}</Link>
                  </h2>
                  {/* Excerpt */}
                  <p className="text-gray-600 mb-4">
                    {post.fields.post?.content?.[0]?.content?.[0]?.value?.slice(0, 120) || ''}...
                  </p>
                  {/* Author and Date */}
                  <div className="flex items-center gap-3 mt-auto">
                    <span className="text-sm text-gray-500">By {post.fields.author?.fields?.name || 'Unknown'}</span>
                    <span className="text-xs text-gray-400">•</span>
                    <span className="text-sm text-gray-500">{post.fields.postDate ? formatDate(post.fields.postDate) : ''}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-blue-50 border-t border-b border-blue-100">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Unlock exclusive content</h2>
          <p className="text-lg text-blue-900 mb-6">Subscribe for best practices, research reports, and more.</p>
          <form className="flex flex-col sm:flex-row gap-4 justify-center">
            <input type="email" placeholder="Enter your email" className="flex-1 px-4 py-3 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all bg-white border-blue-200 text-gray-900" />
            <button type="submit" className="px-8 py-3 font-semibold rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors">Subscribe</button>
          </form>
        </div>
      </section>
      <Footer />
    </main>
  );
} 