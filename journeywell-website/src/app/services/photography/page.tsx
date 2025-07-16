import { ServiceHero } from '@/components/services/ServiceHero'
import { ServiceOverview } from '@/components/services/ServiceOverview'
import { PricingSection } from '@/components/services/PricingSection'
import { ServiceCTA } from '@/components/services/ServiceCTA'

export default function PhotographyPage() {
  const heroData = {
    title: "Professional Photography Services",
    tagline: "Capture Your Story",
    description: "Create stunning visual content with our professional photography services. From portraits to product photography, we capture the moments and images that tell your unique story.",
    primaryCTA: {
      text: "Book Your Session",
      href: "/contact"
    },
    features: [
      "Professional photography equipment",
      "High-end equipment and lighting",
      "Exclusive online gallery access",
      "Professional editing and retouching",
      "Multiple outfit changes available",
      "Lifetime memories captured with artistic excellence"
    ]
  }

  const processData = {
    title: "Our Photography Process",
    steps: [
      {
        number: "1",
        title: "Consultation",
        description: "We discuss your vision, style preferences, and specific needs for your photography session."
      },
      {
        number: "2",
        title: "Session Planning",
        description: "Location scouting, outfit planning, and detailed preparation for your perfect shoot."
      },
      {
        number: "3",
        title: "Photography Session",
        description: "Professional photography with high-end equipment and expert lighting techniques."
      },
      {
        number: "4",
        title: "Editing & Delivery",
        description: "Professional editing and retouching with delivery through an exclusive online gallery."
      }
    ]
  }

  const benefitsData = {
    title: "Why Choose JourneyWell for Photography?",
    items: [
      {
        icon: "📸",
        title: "Professional Equipment",
        description: "High-end cameras, lenses, and lighting equipment for exceptional image quality."
      },
      {
        icon: "🎨",
        title: "Artistic Excellence",
        description: "Creative composition and artistic vision that captures your unique personality and story."
      },
      {
        icon: "✨",
        title: "Professional Editing",
        description: "Expert post-processing and retouching to ensure every image looks its absolute best."
      },
      {
        icon: "🌐",
        title: "Online Gallery",
        description: "Exclusive online gallery access for easy viewing, sharing, and downloading of your images."
      },
      {
        icon: "👗",
        title: "Flexible Options",
        description: "Multiple outfit changes and styling options to capture different looks and moods."
      },
      {
        icon: "💎",
        title: "Lifetime Memories",
        description: "Professional quality images that you'll treasure for years to come."
      }
    ]
  }

  const detailsData = {
    title: "Photography Services",
    items: [
      "Portrait and headshot photography",
      "Business and corporate photography",
      "Product and commercial photography",
      "Event and celebration photography",
      "Real estate and property photography",
      "Brand and lifestyle photography",
      "Family and individual portraits",
      "Professional headshots",
      "Social media content photography",
      "Marketing and advertising photography",
      "Creative and artistic photography",
      "Custom photography projects"
    ]
  }

  const pricingData = {
    title: "Photography Packages",
    subtitle: "Professional photography packages designed to capture your perfect moments",
    packages: [
      {
        name: "Basic Package",
        price: "$300",
        description: "Perfect for individuals",
        features: [
          "1 outfit change",
          "1-hour session",
          "25-30 professionally edited photos",
          "Online gallery access",
          "High-resolution downloads",
          "Basic retouching included"
        ],
        ctaText: "Book Basic",
        ctaHref: "/contact"
      },
      {
        name: "Premium Package",
        price: "$500",
        description: "Most popular choice",
        features: [
          "2 outfit changes",
          "2-hour session",
          "35-50 professionally edited photos",
          "Online gallery access",
          "High-resolution downloads",
          "Professional retouching",
          "Print release included",
          "Social media sized images"
        ],
        popular: true,
        ctaText: "Book Premium",
        ctaHref: "/contact"
      },
      {
        name: "Professional Package",
        price: "$750",
        description: "Complete photography experience",
        features: [
          "3 outfit changes",
          "3-hour session",
          "50-75 professionally edited photos",
          "Online gallery access",
          "High-resolution downloads",
          "Advanced retouching",
          "Print release included",
          "Social media content",
          "Rush delivery available"
        ],
        ctaText: "Book Professional",
        ctaHref: "/contact"
      }
    ],
    customQuoteText: "Need commercial photography, event coverage, or specialized shoots? Contact us for custom pricing tailored to your specific requirements."
  }

  const ctaData = {
    title: "Ready to Capture Your Story?",
    description: "Let us create beautiful, professional images that tell your story and showcase your best self. Book your photography session today and experience the JourneyWell difference.",
    primaryCTA: {
      text: "Schedule Your Shoot",
      href: "/contact"
    },
    secondaryCTA: {
      text: "View Portfolio",
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