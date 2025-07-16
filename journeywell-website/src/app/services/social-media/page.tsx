import { ServiceHero } from '@/components/services/ServiceHero'
import { ServiceOverview } from '@/components/services/ServiceOverview'
import { PricingSection } from '@/components/services/PricingSection'
import { ServiceCTA } from '@/components/services/ServiceCTA'

export default function SocialMediaPage() {
  const heroData = {
    title: "Social Media Management",
    tagline: "Strategic Social Media Growth",
    description: "Grow your brand's online presence with our comprehensive social media management services. We create engaging content, manage your communities, and drive real results for your business.",
    primaryCTA: {
      text: "Get Started",
      href: "/contact"
    },
    features: [
      "3-4 unique, creative posts per week",
      "Customized social media strategies",
      "Optimal posting timing and scheduling",
      "Event and special promotion management",
      "Monthly content calendars",
      "Comprehensive analytics and reporting"
    ]
  }

  const processData = {
    title: "Our Social Media Management Process",
    steps: [
      {
        number: "1",
        title: "Strategy Development",
        description: "We analyze your brand, audience, and goals to create a customized social media strategy that drives results."
      },
      {
        number: "2",
        title: "Content Creation",
        description: "Our team creates engaging, on-brand content including graphics, videos, and copy that resonates with your audience."
      },
      {
        number: "3",
        title: "Scheduling & Publishing",
        description: "We schedule and publish your content at optimal times to maximize engagement and reach."
      },
      {
        number: "4",
        title: "Analytics & Optimization",
        description: "Monthly reporting and continuous optimization based on performance data and audience insights."
      }
    ]
  }

  const benefitsData = {
    title: "Why Choose JourneyWell for Social Media?",
    items: [
      {
        icon: "📱",
        title: "Consistent Posting",
        description: "3-4 high-quality posts per week to keep your audience engaged and your brand top-of-mind."
      },
      {
        icon: "🎯",
        title: "Strategic Approach",
        description: "Data-driven strategies tailored to your specific business goals and target audience."
      },
      {
        icon: "🎨",
        title: "Creative Content",
        description: "Eye-catching graphics, videos, and copy that reflects your brand personality and values."
      },
      {
        icon: "⏰",
        title: "Optimal Timing",
        description: "Posts scheduled at peak engagement times for maximum visibility and interaction."
      },
      {
        icon: "📊",
        title: "Detailed Analytics",
        description: "Monthly reports showing growth, engagement, and ROI with actionable insights."
      },
      {
        icon: "🎉",
        title: "Event Management",
        description: "Special promotion and event coverage to maximize your marketing campaigns."
      }
    ]
  }

  const detailsData = {
    title: "Social Media Services Included",
    items: [
      "Custom social media strategy development",
      "Content creation (graphics, videos, copy)",
      "3-4 posts per week across platforms",
      "Optimal posting time scheduling",
      "Community management and engagement",
      "Monthly content calendar planning",
      "Event and promotion management",
      "Hashtag research and optimization",
      "Brand voice development",
      "Competitor analysis and insights",
      "Monthly analytics and reporting",
      "Strategy adjustments based on performance"
    ]
  }

  const pricingData = {
    title: "Social Media Management Packages",
    subtitle: "Professional social media management that fits your budget and grows with your business",
    packages: [
      {
        name: "Starter Package",
        price: "$800",
        description: "Per month, 1 platform",
        features: [
          "1 social media platform",
          "3 posts per week",
          "Basic graphics and copy",
          "Optimal posting times",
          "Monthly analytics report",
          "Email support"
        ],
        ctaText: "Start Basic",
        ctaHref: "/contact"
      },
      {
        name: "Professional Package",
        price: "$1,200",
        description: "Per month, 2-3 platforms",
        features: [
          "2-3 social media platforms",
          "4 posts per week",
          "Custom graphics and videos",
          "Community management",
          "Monthly content calendar",
          "Detailed analytics",
          "Event promotion support",
          "Priority support"
        ],
        popular: true,
        ctaText: "Go Professional",
        ctaHref: "/contact"
      },
      {
        name: "Premium Package",
        price: "$2,000",
        description: "Per month, all platforms",
        features: [
          "All major platforms",
          "5-6 posts per week",
          "Custom graphics and videos",
          "Stories and reels content",
          "Community management",
          "Monthly strategy calls",
          "Advanced analytics",
          "Event and campaign management",
          "Dedicated account manager"
        ],
        ctaText: "Go Premium",
        ctaHref: "/contact"
      }
    ],
    customQuoteText: "Need social media management for multiple locations or specialized industries? We offer custom packages for enterprise clients and franchise businesses."
  }

  const ctaData = {
    title: "Ready to Grow Your Social Media Presence?",
    description: "Let us handle your social media so you can focus on running your business. Our proven strategies will help you build a strong online community and drive real business results.",
    primaryCTA: {
      text: "Start Growing Today",
      href: "/contact"
    },
    secondaryCTA: {
      text: "See Our Work",
      href: "/portfolio"
    },
    contactInfo: {
      phone: "(225) 435-8771",
      email: "team@journeywell.io"
    }
  }

  return (
    <div>
      <ServiceHero {...heroData} />
      <ServiceOverview 
        process={processData}
        benefits={benefitsData}
        details={detailsData}
      />
      <PricingSection {...pricingData} />
      <ServiceCTA {...ctaData} />
    </div>
  )
} 