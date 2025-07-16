import { ServiceHero } from '@/components/services/ServiceHero'
import { ServiceOverview } from '@/components/services/ServiceOverview'
import { PricingSection } from '@/components/services/PricingSection'
import { ServiceCTA } from '@/components/services/ServiceCTA'

export default function VideoContentPage() {
  const heroData = {
    title: "Professional Video Content Creation",
    tagline: "Cinematic Video Production",
    description: "Bring your vision to life with our comprehensive video production services. From concept to final cut, we create compelling video content that engages your audience and elevates your brand.",
    primaryCTA: {
      text: "Start Your Project",
      href: "/contact"
    },
    features: [
      "Professional camera equipment and setup",
      "Advanced lighting design and implementation",
      "Multi-track audio recording and mixing",
      "Expert composition and cinematography",
      "Complete post-production editing services",
      "Multiple format delivery for all platforms"
    ]
  }

  const processData = {
    title: "Our Video Production Process",
    steps: [
      {
        number: "1",
        title: "Pre-Production",
        description: "Concept development, storyboarding, location scouting, and detailed planning for your video project."
      },
      {
        number: "2",
        title: "Production",
        description: "Professional filming with high-end equipment, expert lighting, and multi-camera setups."
      },
      {
        number: "3",
        title: "Post-Production",
        description: "Expert editing, color grading, audio mixing, and motion graphics to bring your vision to life."
      },
      {
        number: "4",
        title: "Delivery",
        description: "Final video delivery in multiple formats optimized for your specific platforms and needs."
      }
    ]
  }

  const benefitsData = {
    title: "Why Choose JourneyWell for Video Content?",
    items: [
      {
        icon: "🎥",
        title: "Professional Equipment",
        description: "High-end cameras, lenses, and stabilization equipment for cinematic quality footage."
      },
      {
        icon: "💡",
        title: "Advanced Lighting",
        description: "Professional lighting setups that create the perfect mood and atmosphere for your content."
      },
      {
        icon: "🎵",
        title: "Multi-Track Audio",
        description: "Crystal-clear audio recording and mixing for professional sound quality."
      },
      {
        icon: "🎨",
        title: "Creative Direction",
        description: "Expert cinematography and creative direction to make your content stand out."
      },
      {
        icon: "⚡",
        title: "Fast Turnaround",
        description: "Efficient workflow and quick delivery without compromising on quality."
      },
      {
        icon: "📱",
        title: "Multi-Platform Ready",
        description: "Content optimized for social media, websites, and broadcast platforms."
      }
    ]
  }

  const detailsData = {
    title: "Video Content Services",
    items: [
      "Corporate videos and commercials",
      "Social media content creation",
      "Product demonstrations and reviews",
      "Event coverage and documentation",
      "Testimonial and interview videos",
      "Brand storytelling and documentaries",
      "Training and educational content",
      "Music videos and creative projects",
      "Real estate and property videos",
      "Live streaming and webinar production",
      "Motion graphics and animation",
      "Video SEO optimization"
    ]
  }

  const pricingData = {
    title: "Video Content Packages",
    subtitle: "Professional video production tailored to your budget and needs",
    packages: [
      {
        name: "Basic Video",
        price: "$800",
        description: "Single camera, half-day shoot",
        features: [
          "4-hour production time",
          "Single camera setup",
          "Basic lighting",
          "Professional audio",
          "Basic editing (2-3 revisions)",
          "1 final video up to 3 minutes",
          "HD delivery"
        ],
        ctaText: "Book Basic",
        ctaHref: "/contact"
      },
      {
        name: "Professional Video",
        price: "$1,500",
        description: "Multi-camera, full-day shoot",
        features: [
          "8-hour production time",
          "Multi-camera setup",
          "Professional lighting",
          "Multi-track audio",
          "Advanced editing",
          "Color correction",
          "Motion graphics",
          "Up to 5 minutes final video",
          "4K delivery"
        ],
        popular: true,
        ctaText: "Book Professional",
        ctaHref: "/contact"
      },
      {
        name: "Premium Production",
        price: "$2,500",
        description: "Cinematic multi-day production",
        features: [
          "Multi-day production",
          "Cinematic equipment",
          "Advanced lighting design",
          "Professional audio mixing",
          "Advanced post-production",
          "Color grading",
          "Custom motion graphics",
          "Multiple deliverables",
          "4K/6K delivery",
          "Social media versions"
        ],
        ctaText: "Book Premium",
        ctaHref: "/contact"
      }
    ],
    customQuoteText: "Need ongoing video content? Ask about our monthly retainer packages for consistent content creation with significant savings."
  }

  const ctaData = {
    title: "Ready to Create Amazing Video Content?",
    description: "Let's transform your ideas into compelling video content that captures attention and drives results. From concept to completion, we're here to bring your vision to life.",
    primaryCTA: {
      text: "Get Started Today",
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