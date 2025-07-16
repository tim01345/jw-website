'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import './styles.css'

// Types
interface Course {
  id: string
  title: string
  description: string
  price: string
  features: string[]
  isPopular?: boolean
  isNew?: boolean
  ctaText: string
  ctaHref: string
  category: string
}

interface Testimonial {
  id: string
  name: string
  website: string
  quote: string
  earnings?: string
  location?: string
}

interface CountdownTime {
  days: number
  hours: number
  minutes: number
  seconds: number
}

// Data based on actual Flux Academy website
const featuredCourses: Course[] = [
  {
    id: 'webflow-masterclass',
    title: 'Webflow Masterclass',
    description: 'Start building pro-grade websites that command premium rates',
    price: '$197',
    features: [
      'Fundamentals',
      'Responsiveness',
      'Animations & Interactions',
      'CMS',
      'Relume',
      'Finsweet CMS Filter',
      'Figma to Webflow',
      'Client-First Style System',
      'Client Management'
    ],
    isPopular: true,
    ctaText: 'Learn More',
    ctaHref: '/courses/webflow-masterclass',
    category: 'Design'
  },
  {
    id: 'web-career-ignite',
    title: 'Web Career Ignite',
    description: 'Our ultimate program to start a successful career in web design!',
    price: '$497',
    features: [
      'Complete Career Path',
      'Portfolio Building',
      'Client Acquisition',
      'Pricing Strategy',
      'Business Setup',
      'Marketing',
      'All Core Courses Included'
    ],
    isPopular: true,
    ctaText: 'Learn More',
    ctaHref: '/programs/web-career-ignite',
    category: 'Bundle'
  }
]

const allCourses: Course[] = [
  {
    id: 'framer-masterclass',
    title: 'Framer Masterclass',
    description: 'Build stunning websites using Framer – fast!',
    price: '$147',
    features: [
      'Fundamentals',
      'Layout',
      'Animations & Interactions',
      'CMS',
      'Components',
      'Variables',
      '3D Integration'
    ],
    ctaText: 'Learn More',
    ctaHref: '/courses/framer-masterclass',
    category: 'Design'
  },
  {
    id: 'figma-web-designers',
    title: 'Figma For Web Designers',
    description: 'Master Figma, create stunning & responsive websites, and collaborate like a pro.',
    price: '$147',
    features: [
      'Basics of Figma',
      'Layout',
      'Responsiveness',
      'Variables',
      'Auto-Layout',
      'Components',
      'Modes',
      'Prototyping',
      'Advanced Features'
    ],
    isNew: true,
    ctaText: 'Learn More',
    ctaHref: '/courses/figma-web-designers',
    category: 'Design'
  },
  {
    id: 'web-design-masterclass',
    title: 'Web Design Masterclass',
    description: 'Conquer the blank canvas & master the art of web design.',
    price: '$197',
    features: [
      'Creative Process',
      'Blank Canvas Syndrome',
      'Visual Style Development',
      'Timeless Design Principles',
      'Design Trends',
      'Responsive Design',
      'Advanced Figma',
      'Inspiration'
    ],
    ctaText: 'Learn More',
    ctaHref: '/courses/web-design-masterclass',
    category: 'Design'
  },
  {
    id: 'brand-design-mastery',
    title: 'Brand Design Mastery',
    description: 'Offer complete brand design services',
    price: '$197',
    features: [
      'Visual Identity Design',
      'Logo Design',
      'Creative Direction',
      'Brand Strategy'
    ],
    ctaText: 'Learn More',
    ctaHref: '/courses/brand-design-mastery',
    category: 'Design'
  },
  {
    id: 'core-design-skills',
    title: 'Core Design Skills',
    description: 'Develop the essential skills needed for a successful web designer',
    price: '$97',
    features: [
      'Imagery',
      'Color',
      'Type',
      'Layout'
    ],
    ctaText: 'Learn More',
    ctaHref: '/courses/core-design-skills',
    category: 'Design'
  },
  {
    id: 'freelancing-web-designers',
    title: 'Freelancing For Web Designers',
    description: 'Jumpstart & scale your creative freelance business',
    price: '$247',
    features: [
      'Operations',
      'Negotiation',
      'Pricing',
      'Finances',
      'Marketing',
      'Sales',
      'Niching',
      'Client Management',
      'Design Process'
    ],
    ctaText: 'Learn More',
    ctaHref: '/courses/freelancing-web-designers',
    category: 'Business'
  },
  {
    id: 'writesite-copywriting',
    title: 'WriteSite: Content-First Design',
    description: 'Offer strategic copywriting services with confidence',
    price: '$147',
    features: [
      'Content Strategy',
      'Content-First Design',
      'Copywriting'
    ],
    ctaText: 'Learn More',
    ctaHref: '/courses/writesite-copywriting',
    category: 'Content'
  }
]

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Andy Mullady',
    website: 'andymullady.com',
    quote: 'Flux helped me get comfortable with Webflow, after trying to learn from YouTube tutorials. My recent branding and website clients have paid $25k, or $5,000 USD per month on a retainer basis.',
    earnings: '$25k projects'
  },
  {
    id: '2',
    name: 'Jen Chuah',
    website: 'jenuinecreative.com',
    quote: 'Please know that you have changed my life for the better with your courses. I went from having no clients at all to having 5-6 projects at any given time and often hit $10k in months. Keep it up!',
    earnings: '$10k months'
  },
  {
    id: '3',
    name: 'Hannes Haderer',
    website: 'pagex.io',
    quote: 'Everything I learned in design and Webflow I learned from Flux. It brought me to quit my job and move to Bali to work fully as a freelancer. Since then, I have doubled my sales every year, and I plan to get to 6-figures next year.',
    earnings: '6-figure goal'
  },
  {
    id: '4',
    name: 'Tony Jeffers',
    website: '',
    quote: 'When I had a new client interested in a website, I decided to join The Webflow Masterclass. I met with my client weekly hitting design milestones and saw them light up as the web design came to life. It was an amazing feeling to see the headaches of coding and hours of troubleshooting fade away.',
    earnings: 'Client success'
  },
  {
    id: '5',
    name: 'Francesca Sauls',
    website: 'ethosbydesign.com',
    quote: 'One of the best courses I\'ve ever taken. I signed a six-figure web design contract with a client, which in addition to other client work, makes this year my highest grossing year to date. Ran and the community were very supportive of my growth.',
    earnings: '6-figure contract'
  },
  {
    id: '6',
    name: 'Tresa Deepak',
    website: '',
    quote: 'Getting feedback for our work is the best way to get better, and at the Flux Academy, the coaches are very prompt in getting back with feedback and answers to the queries we put forward.',
    earnings: 'Coaching success'
  },
  {
    id: '7',
    name: 'Gabriel Irina',
    website: '',
    quote: 'I rarely buy courses, but this one was worth the gamble. The content was more than what you\'d find on the Flux YT channel and more focused. Great value for money.',
    earnings: 'Value driven'
  },
  {
    id: '8',
    name: 'Schneur Smith',
    website: '',
    quote: 'I am a proud student of all 5 courses at Flux Academy, each one of these courses taught me something special. I went from charging $200 per website to over $2000 per website in a matter of months. And it\'s only up from here, the sky is the limit.',
    earnings: '10x pricing'
  }
]

// Components
function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<CountdownTime>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    const targetDate = new Date()
    targetDate.setDate(targetDate.getDate() + 3)

    const timer = setInterval(() => {
      const now = new Date().getTime()
      const distance = targetDate.getTime() - now

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        })
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="flux-countdown">
      <div className="flux-countdown-item">
        <div className="flux-countdown-digit">
          {String(timeLeft.days).padStart(2, '0')}
        </div>
        <div className="flux-countdown-label">Days</div>
      </div>
      <div className="flux-countdown-item">
        <div className="flux-countdown-digit">
          {String(timeLeft.hours).padStart(2, '0')}
        </div>
        <div className="flux-countdown-label">Hours</div>
      </div>
      <div className="flux-countdown-item">
        <div className="flux-countdown-digit">
          {String(timeLeft.minutes).padStart(2, '0')}
        </div>
        <div className="flux-countdown-label">Mins</div>
      </div>
      <div className="flux-countdown-item">
        <div className="flux-countdown-digit">
          {String(timeLeft.seconds).padStart(2, '0')}
        </div>
        <div className="flux-countdown-label">Secs</div>
      </div>
    </div>
  )
}

function CourseCard({ course, featured = false }: { course: Course; featured?: boolean }) {
  return (
    <div className="flux-card">
      {/* Course Header */}
      <div className="flux-card-image">
        {/* Course Title Initial */}
        <div style={{ 
          color: 'rgba(255, 255, 255, 0.3)', 
          fontSize: '4rem', 
          fontWeight: '700',
          position: 'absolute',
          zIndex: 1
        }}>
          {course.title.split(' ')[0].charAt(0)}
        </div>
        
        {/* Play Button */}
        <div className="flux-card-play">
          <div style={{
            width: '0',
            height: '0',
            borderLeft: '12px solid white',
            borderTop: '8px solid transparent',
            borderBottom: '8px solid transparent',
            marginLeft: '3px'
          }}></div>
        </div>
      </div>
      
      {/* Badges */}
      {(course.isNew || course.isPopular) && (
        <>
          {course.isNew && (
            <span className="flux-card-badge flux-card-badge-new">
              New Course
            </span>
          )}
          {course.isPopular && (
            <span className="flux-card-badge">
              Most Popular
            </span>
          )}
        </>
      )}

      {/* Course Content */}
      <div>
        <h3 className="flux-card-title">
          {course.title}
        </h3>
        <p className="flux-card-description">{course.description}</p>
        
        <div className="flux-card-features">
          <div className="flux-card-features-title">You'll Learn</div>
          <div className="flux-card-features-list">
            {course.features.slice(0, featured ? 8 : 6).map((feature, index) => (
              <div key={index} className="flux-card-feature">
                <div className="flux-card-feature-dot"></div>
                {feature}
              </div>
            ))}
          </div>
          {course.features.length > (featured ? 8 : 6) && (
            <div style={{ fontSize: '0.875rem', color: 'rgba(255, 255, 255, 0.5)', marginTop: '0.5rem' }}>
              +{course.features.length - (featured ? 8 : 6)} more topics
            </div>
          )}
        </div>

        <div className="flux-card-bottom">
          <div className="flux-card-price">{course.price}</div>
          <div className="flux-card-actions">
            <button className="flux-button-tertiary">
              Watch Trailer
            </button>
            <Link href={course.ctaHref} className="flux-button-primary">
              {course.ctaText}
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="flux-testimonial">
      <blockquote className="flux-testimonial-quote">
        "{testimonial.quote}"
      </blockquote>
      
      <div className="flux-testimonial-author">
        <div className="flux-testimonial-info">
          <div className="flux-testimonial-name">{testimonial.name}</div>
          {testimonial.website && (
            <Link href={`https://${testimonial.website}`} className="flux-testimonial-link">
              {testimonial.website}
            </Link>
          )}
        </div>
        {testimonial.earnings && (
          <div className="flux-testimonial-badge">
            {testimonial.earnings}
          </div>
        )}
      </div>
    </div>
  )
}

export default function FluxAcademyClonePage() {
  const [email, setEmail] = useState('')
  const [emailSubmitted, setEmailSubmitted] = useState(false)

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setEmailSubmitted(true)
    setTimeout(() => setEmailSubmitted(false), 3000)
  }

  return (
    <div className="flux-page">
      {/* Top Banner */}
      <div className="flux-banner">
        <div className="flux-banner-content">
          <span className="flux-banner-text">30% OFF</span>
          <span>Summer Upskill Week</span>
          <span className="flux-banner-badge">Limited Time</span>
          <span>⏰</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="flux-hero">
        <div className="flux-hero-content">
          <h1 className="flux-hero-title">
            3 Steps to Build a Thriving<br />
            <span className="flux-hero-accent">Web Design Career</span>
          </h1>
          <p className="flux-hero-subtitle">
            Discover how to master in-demand skills, create a standout portfolio, and land high-paying clients—even if you're just starting out.
          </p>

          <CountdownTimer />

          {/* Email Capture Form */}
          <div className="flux-form-container">
            <form onSubmit={handleEmailSubmit}>
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flux-input"
              />
              <button type="submit" className="flux-button-primary">
                {emailSubmitted ? 'Success! Check your email' : 'Get Free 3-Step Guide'}
              </button>
            </form>
            {emailSubmitted && (
              <p style={{ color: 'var(--success)', fontSize: '0.875rem', marginTop: '1rem', textAlign: 'center' }}>
                Success! Please allow 10 minutes for your resource to arrive and check your Spam folder.
              </p>
            )}
            <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.875rem', marginTop: '1rem', textAlign: 'center' }}>
              Trusted by 200K+ designers worldwide
            </p>
          </div>

          {/* Trust Indicators */}
          <div className="flux-trust-indicators">
            {['Netflix', 'Spotify', 'Airbnb', 'Uber', 'Dropbox', 'Slack'].map((company, i) => (
              <div key={i} className="flux-trust-item">
                {company}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* See The Difference Section */}
      <section className="flux-section">
        <div className="flux-section-container">
          <span className="flux-section-tag">See The Difference</span>
          <h2 className="flux-section-title">
            Designs Our Students Created
          </h2>
          <p className="flux-section-subtitle">
            Explore the remarkable designs created by our students after completing our courses.
          </p>

          <div className="flux-grid-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flux-card">
                <div className="flux-card-image">
                  <div style={{ 
                    color: 'rgba(255, 255, 255, 0.3)', 
                    fontSize: '3rem', 
                    fontWeight: '700'
                  }}>
                    {i}
                  </div>
                </div>
                <div>
                  <h3 className="flux-card-title">Student Project {i}</h3>
                  <p className="flux-card-description">E-commerce Website</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="flux-section">
        <div className="flux-section-container">
          <span className="flux-section-tag">Most Popular</span>
          <h2 className="flux-section-title">
            Featured Courses
          </h2>
          <p className="flux-section-subtitle">
            Master Webflow with our top-rated course or unlock a world of knowledge with our All Access program.
          </p>

          <div className="flux-grid-2">
            {featuredCourses.map((course) => (
              <CourseCard key={course.id} course={course} featured={true} />
            ))}
          </div>
        </div>
      </section>

      {/* All Courses */}
      <section className="flux-section">
        <div className="flux-section-container">
          <h2 className="flux-section-title">
            All Courses
          </h2>
          <p className="flux-section-subtitle">
            Build your skills with our comprehensive course library
          </p>

          <div className="flux-grid-3">
            {allCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Learn With Us */}
      <section className="flux-section">
        <div className="flux-section-container">
          <span className="flux-section-tag">The Flux Advantage</span>
          <h2 className="flux-section-title">
            Why Learn With Us?
          </h2>
          <p className="flux-section-subtitle">
            5 reasons to take your web design career to the next level with Flux Academy.
          </p>

          <div className="flux-grid-3">
            {[
              {
                title: 'Learn at Your Own Pace',
                description: 'Study action-packed videos anytime, anywhere. Complete projects at your own pace.',
                icon: '📚'
              },
              {
                title: 'Access to Mentors',
                description: 'Get personalized feedback from our experts. Learn from the best practitioners & mentors in the field.',
                icon: '👨‍🏫'
              },
              {
                title: 'Get Better, Faster',
                description: 'Improve your skills faster with hands-on projects. Advance your career with complete confidence.',
                icon: '⚡'
              },
              {
                title: 'Become Certified',
                description: 'Earn certifications to showcase your skills. Prove your expertise and stand out from the crowd.',
                icon: '🏆'
              },
              {
                title: 'Stay Up-to-Date',
                description: 'Stay current with the latest web design software features with regular course updates for free.',
                icon: '🔄'
              },
              {
                title: 'Join Our Community',
                description: 'Connect with 10,400+ designers worldwide. Get support, feedback, and networking opportunities.',
                icon: '🌐'
              }
            ].map((benefit, index) => (
              <div key={index} className="flux-feature-card">
                <div className="flux-feature-icon">{benefit.icon}</div>
                <h3 className="flux-feature-title">{benefit.title}</h3>
                <p className="flux-feature-description">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Success Stories */}
      <section className="flux-section">
        <div className="flux-section-container">
          <h2 className="flux-section-title">
            10,400+ designers Strong
          </h2>
          <p className="flux-section-subtitle">
            Join a global network of freelancers who have achieved success through our courses.<br />
            Collaborate, seek advice, and continue growing alongside peers who understand your journey.
          </p>

          <div className="flux-grid-4">
            {testimonials.slice(0, 8).map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/testimonials" className="flux-button-secondary">
              read more student Reviews
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="flux-section">
        <div className="flux-section-container" style={{ textAlign: 'center' }}>
          <h2 className="flux-section-title">
            Still have questions?
          </h2>
          <p className="flux-section-subtitle">
            Can't find the answer you're looking for? Not sure which course is right for you?<br />
            Please chat to our friendly team.
          </p>
          <Link href="/contact" className="flux-button-primary">
            get in touch
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="flux-footer">
        <div className="flux-section-container">
          <div className="flux-footer-grid">
            <div>
              <h4 className="flux-footer-category">Courses</h4>
              <div className="flux-footer-links">
                <Link href="/courses/webflow" className="flux-footer-link">The Webflow Masterclass</Link>
                <Link href="/courses/framer" className="flux-footer-link">The Framer Masterclass</Link>
                <Link href="/courses/figma" className="flux-footer-link">Figma For Web Designers</Link>
                <Link href="/courses/web-design" className="flux-footer-link">Web Design Masterclass</Link>
                <Link href="/courses/brand" className="flux-footer-link">Brand Design Mastery</Link>
                <Link href="/courses/core" className="flux-footer-link">Core Design Skills</Link>
                <Link href="/courses/freelancing" className="flux-footer-link">Freelancing for Web Designers</Link>
                <Link href="/courses/writesite" className="flux-footer-link">WriteSite: Strategic Copywriting</Link>
              </div>
            </div>
            
            <div>
              <h4 className="flux-footer-category">Bundle</h4>
              <div className="flux-footer-links">
                <Link href="/bundle" className="flux-footer-link">Web Career Ignite</Link>
              </div>
            </div>
            
            <div>
              <h4 className="flux-footer-category">Company</h4>
              <div className="flux-footer-links">
                <Link href="/about" className="flux-footer-link">About</Link>
                <Link href="/terms" className="flux-footer-link">Terms and Conditions</Link>
                <Link href="/privacy" className="flux-footer-link">Privacy Policy</Link>
                <Link href="/conduct" className="flux-footer-link">Code Of Conduct</Link>
                <Link href="/refunds" className="flux-footer-link">Refunds & Cancellation Policy</Link>
              </div>
            </div>
            
            <div>
              <h4 className="flux-footer-category">Resources</h4>
              <div className="flux-footer-links">
                <Link href="/blog" className="flux-footer-link">Blog</Link>
              </div>
              
              <div style={{ marginTop: '2rem' }}>
                <h4 className="flux-footer-category">Follow Us</h4>
                <div>
                  <p style={{ color: 'rgba(255, 255, 255, 0.5)', fontSize: '0.875rem', marginBottom: '0.5rem' }}>
                    Join 150K+ Designers for weekly creative insights
                  </p>
                  <div className="flux-footer-newsletter">
                    <input 
                      type="email" 
                      placeholder="Email address"
                    />
                    <button className="flux-button-primary">Subscribe</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flux-footer-bottom">
            <p className="flux-footer-credits">
              We respect your privacy and never use your email for spam. Subscribe with confidence, unsubscribe anytime.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem' }}>
              <span className="flux-footer-credits">Proudly built with</span>
              <Link href="https://webflow.com" className="flux-footer-link">Webflow</Link>
            </div>
            <p className="flux-footer-credits">© 2025 Flux Academy</p>
          </div>
        </div>
      </footer>
    </div>
  )
} 