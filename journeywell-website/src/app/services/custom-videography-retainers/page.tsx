import { ServiceHero } from '@/components/services/ServiceHero'
import { ServiceOverview } from '@/components/services/ServiceOverview'
import { PricingSection } from '@/components/services/PricingSection'
import { ServiceCTA } from '@/components/services/ServiceCTA'

export default function CustomVideographyRetainersPage() {
  const heroData = {
    title: "Custom Videography Retainers",
    tagline: "Ongoing Video Content Solutions",
    description: "Ensure consistent, high-quality video content for your business with our custom videography retainer packages. Perfect for businesses that need regular video content without the hassle of project-by-project coordination.",
    primaryCTA: {
      text: "Discuss Your Needs",
      href: "/contact"
    },
    features: [
      "Dedicated videography team",
      "Priority booking and scheduling",
      "Consistent brand storytelling",
      "Bulk pricing discounts",
      "Ongoing creative collaboration",
      "Flexible content delivery schedules"
    ]
  }

  const processData = {
    title: "Our Retainer Process",
    steps: [
      {
        number: "1",
        title: "Strategy Session",
        description: "We develop a comprehensive video content strategy aligned with your business goals and marketing calendar."
      },
      {
        number: "2",
        title: "Content Planning",
        description: "Monthly content planning sessions to ensure your video content supports your marketing objectives."
      },
      {
        number: "3",
        title: "Regular Production",
        description: "Consistent video production with dedicated team members who understand your brand and vision."
      },
      {
        number: "4",
        title: "Ongoing Optimization",
        description: "Regular review and optimization of content performance to maximize your video marketing ROI."
      }
    ]
  }

  const benefitsData = {
    title: "Why Choose Video Retainers?",
    items: [
      {
        icon: "📅",
        title: "Consistent Content",
        description: "Regular video content delivery that keeps your audience engaged and your brand visible."
      },
      {
        icon: "💰",
        title: "Cost Savings",
        description: "Significant savings compared to project-by-project pricing with bulk retainer discounts."
      },
      {
        icon: "⭐",
        title: "Priority Access",
        description: "Priority booking and dedicated team members who understand your brand and requirements."
      },
      {
        icon: "🎯",
        title: "Strategic Approach",
        description: "Long-term video strategy that aligns with your business goals and marketing objectives."
      },
      {
        icon: "🤝",
        title: "Partnership Approach",
        description: "Ongoing collaboration and creative partnership that evolves with your business needs."
      },
      {
        icon: "📈",
        title: "Scalable Solutions",
        description: "Flexible retainer packages that can scale up or down based on your changing needs."
      }
    ]
  }

  const detailsData = {
    title: "Retainer Services Included",
    items: [
      "Monthly strategy and planning sessions",
      "Regular video content production",
      "Dedicated project management",
      "Priority booking and scheduling",
      "Brand-consistent storytelling",
      "Multi-platform content optimization",
      "Performance tracking and reporting",
      "Content calendar management",
      "Creative concept development",
      "Post-production and editing",
      "Rush delivery when needed",
      "Ongoing creative consultation"
    ]
  }

  const pricingData = {
    title: "Custom Retainer Packages",
    subtitle: "Tailored video content solutions for your ongoing needs",
    packages: [
      {
        name: "Starter Retainer",
        price: "$2,500",
        description: "Per month, 2 videos",
        features: [
          "2 professional videos per month",
          "Up to 4 hours production time",
          "Basic editing and post-production",
          "Monthly planning session",
          "Priority booking",
          "20% savings vs project pricing"
        ],
        ctaText: "Start Retainer",
        ctaHref: "/contact"
      },
      {
        name: "Professional Retainer",
        price: "$5,000",
        description: "Per month, 4-5 videos",
        features: [
          "4-5 professional videos per month",
          "Up to 12 hours production time",
          "Advanced editing and graphics",
          "Bi-weekly planning sessions",
          "Dedicated project manager",
          "Multi-platform optimization",
          "30% savings vs project pricing"
        ],
        popular: true,
        ctaText: "Go Professional",
        ctaHref: "/contact"
      },
      {
        name: "Enterprise Retainer",
        price: "$10,000",
        description: "Per month, unlimited videos",
        features: [
          "Unlimited video production",
          "Dedicated video team",
          "Weekly strategy sessions",
          "Advanced post-production",
          "Rush delivery included",
          "Performance analytics",
          "Creative consultation",
          "40% savings vs project pricing"
        ],
        ctaText: "Go Enterprise",
        ctaHref: "/contact"
      }
    ],
    customQuoteText: "Need a custom retainer package for your specific industry or unique requirements? We create tailored solutions for businesses with specialized video content needs."
  }

  const ctaData = {
    title: "Ready for Consistent Video Content?",
    description: "Stop worrying about video content and start focusing on your business. Our retainer packages ensure you always have high-quality video content ready when you need it.",
    primaryCTA: {
      text: "Discuss Your Retainer",
      href: "/contact"
    },
    secondaryCTA: {
      text: "View Our Work",
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