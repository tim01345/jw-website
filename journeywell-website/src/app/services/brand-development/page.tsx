import { ServiceHero } from '@/components/services/ServiceHero'
import { ServiceOverview } from '@/components/services/ServiceOverview'
import { PricingSection } from '@/components/services/PricingSection'
import { ServiceCTA } from '@/components/services/ServiceCTA'

export default function BrandDevelopmentPage() {
  const heroData = {
    title: "Brand Identity Development",
    tagline: "Strategic Brand Building",
    description: "Create a powerful brand identity that resonates with your audience and sets you apart from the competition. From logo design to brand strategy, we help you build a memorable and impactful brand.",
    primaryCTA: {
      text: "Build Your Brand",
      href: "/contact"
    },
    features: [
      "Professional logo design and branding",
      "Brand voice development and guidelines",
      "Market research and competitive analysis",
      "Strategic brand positioning and planning",
      "Complete brand identity systems",
      "Brand guidelines and style guides"
    ]
  }

  const processData = {
    title: "Our Brand Development Process",
    steps: [
      {
        number: "1",
        title: "Discovery & Research",
        description: "We dive deep into your business, target audience, and market to understand your unique positioning."
      },
      {
        number: "2",
        title: "Strategy Development",
        description: "Create a comprehensive brand strategy including messaging, voice, and visual direction."
      },
      {
        number: "3",
        title: "Design & Creation",
        description: "Design your logo, visual identity, and all brand elements that bring your strategy to life."
      },
      {
        number: "4",
        title: "Implementation",
        description: "Deliver complete brand guidelines and support you in implementing your new brand across all touchpoints."
      }
    ]
  }

  const benefitsData = {
    title: "Why Choose JourneyWell for Brand Development?",
    items: [
      {
        icon: "🎨",
        title: "Creative Excellence",
        description: "Award-winning design team that creates memorable and impactful brand identities."
      },
      {
        icon: "🔍",
        title: "Strategic Approach",
        description: "Data-driven brand strategy based on market research and competitive analysis."
      },
      {
        icon: "💼",
        title: "Professional Standards",
        description: "Complete brand systems with detailed guidelines for consistent implementation."
      },
      {
        icon: "🎯",
        title: "Market Positioning",
        description: "Strategic positioning that differentiates you from competitors and resonates with your audience."
      },
      {
        icon: "📈",
        title: "Business Growth",
        description: "Brands designed to drive business growth and customer loyalty."
      },
      {
        icon: "🤝",
        title: "Collaborative Process",
        description: "We work closely with you throughout the process to ensure your vision comes to life."
      }
    ]
  }

  const detailsData = {
    title: "Brand Development Services",
    items: [
      "Brand strategy and positioning",
      "Logo design and visual identity",
      "Brand voice and messaging development",
      "Market research and analysis",
      "Competitive analysis and insights",
      "Brand guidelines and style guides",
      "Business card and collateral design",
      "Website design and development",
      "Social media brand assets",
      "Packaging and product design",
      "Brand implementation support",
      "Ongoing brand consultation"
    ]
  }

  const pricingData = {
    title: "Brand Development Packages",
    subtitle: "Comprehensive brand development solutions for businesses of all sizes",
    packages: [
      {
        name: "Brand Essentials",
        price: "$2,500",
        description: "Perfect for startups and small businesses",
        features: [
          "Logo design (3 concepts)",
          "Basic brand guidelines",
          "Business card design",
          "Basic color palette",
          "Typography selection",
          "2 revision rounds"
        ],
        ctaText: "Start Essential",
        ctaHref: "/contact"
      },
      {
        name: "Complete Brand",
        price: "$5,000",
        description: "Comprehensive brand development",
        features: [
          "Full brand strategy",
          "Logo design (5 concepts)",
          "Complete brand guidelines",
          "Color palette and typography",
          "Brand voice development",
          "Business collateral design",
          "Social media templates",
          "3 revision rounds",
          "Brand consultation"
        ],
        popular: true,
        ctaText: "Go Complete",
        ctaHref: "/contact"
      },
      {
        name: "Premium Brand",
        price: "$8,500",
        description: "Enterprise-level brand development",
        features: [
          "Comprehensive brand strategy",
          "Market research and analysis",
          "Logo design (unlimited concepts)",
          "Complete brand system",
          "Brand voice and messaging",
          "Marketing collateral suite",
          "Website design mockups",
          "Social media brand kit",
          "Unlimited revisions",
          "6-month brand support"
        ],
        ctaText: "Go Premium",
        ctaHref: "/contact"
      }
    ],
    customQuoteText: "Need a complete brand overhaul or have specific industry requirements? We offer custom brand development packages for complex projects and large organizations."
  }

  const ctaData = {
    title: "Ready to Build a Powerful Brand?",
    description: "Your brand is more than just a logo—it's the foundation of your business success. Let us help you create a brand that tells your story, connects with your audience, and drives growth.",
    primaryCTA: {
      text: "Start Your Brand Journey",
      href: "/contact"
    },
    secondaryCTA: {
      text: "View Brand Portfolio",
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