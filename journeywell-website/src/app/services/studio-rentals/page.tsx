import { ServiceHero } from '@/components/services/ServiceHero'
import { ServiceOverview } from '@/components/services/ServiceOverview'
import { PricingSection } from '@/components/services/PricingSection'
import { ServiceCTA } from '@/components/services/ServiceCTA'

export default function StudioRentalsPage() {
  const heroData = {
    title: "Professional Studio Rentals",
    tagline: "Creative Space for Your Vision",
    description: "Rent our versatile, professional studio space for your creative projects. Our warehouse-style studio features a professional cyclorama wall, customizable sets, and all the amenities you need for photography, videography, and content creation.",
    primaryCTA: {
      text: "Book Studio Time",
      href: "/contact"
    },
    features: [
      "Versatile warehouse-style studio environment",
      "Professional cyclorama wall for seamless backgrounds",
      "Customizable set designs for any project",
      "Professional lighting equipment available",
      "Hourly rental with optional add-on services",
      "Perfect for photography, videography, and content creation"
    ]
  }

  const processData = {
    title: "Studio Rental Process",
    steps: [
      {
        number: "1",
        title: "Consultation",
        description: "Discuss your project needs, timeline, and any special requirements for your studio session."
      },
      {
        number: "2",
        title: "Booking & Setup",
        description: "Reserve your time slot and coordinate any custom set design or equipment needs."
      },
      {
        number: "3",
        title: "Your Session",
        description: "Create in our professional studio space with optional technical support and assistance."
      },
      {
        number: "4",
        title: "Wrap & Support",
        description: "Clean-up assistance and any post-production support you may need for your project."
      }
    ]
  }

  const benefitsData = {
    title: "Why Choose JourneyWell Studio?",
    items: [
      {
        icon: "🏢",
        title: "Versatile Space",
        description: "Large warehouse-style studio that can be configured for any type of creative project."
      },
      {
        icon: "🎬",
        title: "Professional Cyclorama",
        description: "Seamless white cyclorama wall for clean, professional backgrounds and unlimited creative possibilities."
      },
      {
        icon: "🎨",
        title: "Custom Set Design",
        description: "Flexible set design options that can be customized to match your creative vision and brand."
      },
      {
        icon: "💡",
        title: "Professional Lighting",
        description: "High-end lighting equipment available for rent to ensure perfect illumination for your project."
      },
      {
        icon: "🛠️",
        title: "Technical Support",
        description: "Optional technical assistance and equipment support to help you achieve professional results."
      },
      {
        icon: "📍",
        title: "Convenient Location",
        description: "Easily accessible location in Baton Rouge with parking and amenities for your team."
      }
    ]
  }

  const detailsData = {
    title: "Studio Amenities & Features",
    items: [
      "Large warehouse-style studio space",
      "Professional white cyclorama wall",
      "Customizable set design options",
      "Professional lighting equipment rental",
      "High-speed internet and WiFi",
      "Climate-controlled environment",
      "Convenient parking available",
      "Loading dock for large equipment",
      "Green room and client area",
      "Professional audio equipment",
      "Backdrop and prop storage",
      "Technical support available"
    ]
  }

  const pricingData = {
    title: "Studio Rental Rates",
    subtitle: "Flexible hourly rates with optional services to support your creative projects",
    packages: [
      {
        name: "Basic Studio Rental",
        price: "$100",
        description: "Per hour, studio only",
        features: [
          "Studio space access",
          "Basic lighting setup",
          "Cyclorama wall access",
          "Climate control",
          "WiFi access",
          "Basic cleaning included"
        ],
        ctaText: "Book Basic",
        ctaHref: "/contact"
      },
      {
        name: "Studio + Equipment",
        price: "$175",
        description: "Per hour, with equipment",
        features: [
          "Studio space access",
          "Professional lighting package",
          "Camera equipment rental",
          "Audio equipment access",
          "Custom set design",
          "Technical consultation",
          "Equipment setup assistance"
        ],
        popular: true,
        ctaText: "Book with Equipment",
        ctaHref: "/contact"
      },
      {
        name: "Full Production Support",
        price: "$250",
        description: "Per hour, full service",
        features: [
          "Studio space access",
          "Complete equipment package",
          "Dedicated technical support",
          "Custom set design and setup",
          "Professional lighting design",
          "Audio/video equipment",
          "Production assistance",
          "Post-production consultation"
        ],
        ctaText: "Book Full Service",
        ctaHref: "/contact"
      }
    ],
    customQuoteText: "Need the studio for a full day or multi-day project? Contact us for custom pricing on extended rentals and production packages."
  }

  const ctaData = {
    title: "Ready to Create in Our Studio?",
    description: "Book our professional studio space and bring your creative vision to life. Whether you're shooting photos, filming videos, or creating content, our studio provides the perfect environment for professional results.",
    primaryCTA: {
      text: "Reserve Studio Time",
      href: "/contact"
    },
    secondaryCTA: {
      text: "Take a Virtual Tour",
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