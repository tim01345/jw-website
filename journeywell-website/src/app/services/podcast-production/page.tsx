import { ServiceHero } from '@/components/services/ServiceHero'
import { ServiceOverview } from '@/components/services/ServiceOverview'
import { PricingSection } from '@/components/services/PricingSection'
import { ServiceCTA } from '@/components/services/ServiceCTA'

export default function PodcastProductionPage() {
  const heroData = {
    title: "Professional Podcast Production",
    tagline: "Complete Podcast Solutions",
    description: "Transform your ideas into professional podcast content with our dedicated recording suites and comprehensive production services. From recording to final edit, we handle everything so you can focus on your message.",
    primaryCTA: {
      text: "Book Studio Time",
      href: "/contact"
    },
    features: [
      "Two dedicated podcast recording spaces",
      "Accommodates 1-4 people comfortably",
      "Multi-angle recording (2-3 camera setup)",
      "Professional audio editing included",
      "Custom room and set design",
      "Raw full-length video footage provided"
    ]
  }

  const processData = {
    title: "Our Podcast Production Process",
    steps: [
      {
        number: "1",
        title: "Consultation",
        description: "We discuss your podcast vision, format, and technical requirements to ensure the perfect setup."
      },
      {
        number: "2",
        title: "Studio Setup",
        description: "Custom room design and professional equipment setup tailored to your brand and style."
      },
      {
        number: "3",
        title: "Recording",
        description: "Professional multi-angle recording with high-quality audio capture in our dedicated spaces."
      },
      {
        number: "4",
        title: "Post-Production",
        description: "Expert audio editing, color correction, and final delivery of all raw and edited content."
      }
    ]
  }

  const benefitsData = {
    title: "Why Choose JourneyWell for Podcast Production?",
    items: [
      {
        icon: "🎙️",
        title: "Professional Equipment",
        description: "State-of-the-art recording equipment and acoustically treated spaces for crystal-clear audio quality."
      },
      {
        icon: "🎬",
        title: "Multi-Camera Setup",
        description: "2-3 camera angles capture every moment, giving you professional video content for multiple platforms."
      },
      {
        icon: "✂️",
        title: "Expert Editing",
        description: "Professional audio editing and post-production services to make your podcast sound polished and engaging."
      },
      {
        icon: "🎨",
        title: "Custom Branding",
        description: "Personalized set design and branding elements that reflect your podcast's unique identity and style."
      },
      {
        icon: "📁",
        title: "Complete Package",
        description: "Receive both raw footage and professionally edited content, giving you flexibility for different uses."
      },
      {
        icon: "⚡",
        title: "Quick Turnaround",
        description: "Fast delivery of your edited podcast content so you can maintain a consistent publishing schedule."
      }
    ]
  }

  const detailsData = {
    title: "What's Included in Every Session",
    items: [
      "Professional podcast recording studio",
      "Multi-track audio recording and mixing",
      "2-3 camera angle video recording",
      "Professional lighting setup",
      "Custom set design and branding",
      "Raw full-length video footage",
      "Professional audio editing",
      "Color correction and video enhancement",
      "Multiple export formats for different platforms",
      "Backup recordings for security",
      "Technical support throughout session",
      "Post-production consultation"
    ]
  }

  const pricingData = {
    title: "Podcast Production Packages",
    subtitle: "Choose the package that fits your podcast needs and budget",
    packages: [
      {
        name: "Essential Recording",
        price: "$200",
        description: "Per 2-hour session",
        features: [
          "2-hour studio time",
          "Multi-angle video recording",
          "Professional audio capture",
          "Basic audio editing",
          "Raw footage delivery"
        ],
        ctaText: "Book Essential",
        ctaHref: "/contact"
      },
      {
        name: "Professional Package",
        price: "$350",
        description: "Per 3-hour session",
        features: [
          "3-hour studio time",
          "Multi-angle video recording",
          "Professional audio editing",
          "Color correction",
          "Custom set design",
          "Raw + edited footage",
          "Multiple export formats"
        ],
        popular: true,
        ctaText: "Book Professional",
        ctaHref: "/contact"
      },
      {
        name: "Premium Production",
        price: "$500",
        description: "Per 4-hour session",
        features: [
          "4-hour studio time",
          "Multi-angle video recording",
          "Advanced audio editing",
          "Color correction & enhancement",
          "Custom branding elements",
          "Raw + edited footage",
          "Multiple export formats",
          "Social media clips",
          "Same-day delivery"
        ],
        ctaText: "Book Premium",
        ctaHref: "/contact"
      }
    ],
    customQuoteText: "Need ongoing podcast production? We offer monthly retainer packages for regular podcast creators with significant discounts and priority booking."
  }

  const ctaData = {
    title: "Ready to Start Your Podcast Journey?",
    description: "Join the growing number of creators who trust JourneyWell for their podcast production needs. Let's bring your voice to the world with professional quality that stands out.",
    primaryCTA: {
      text: "Schedule Your Session",
      href: "/contact"
    },
    secondaryCTA: {
      text: "View Our Portfolio",
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