import { Button } from '@/components/ui/Button'
import Link from 'next/link'

interface ServiceCTAProps {
  title: string
  description: string
  primaryCTA: {
    text: string
    href: string
  }
  secondaryCTA?: {
    text: string
    href: string
  }
  contactInfo?: {
    phone: string
    email: string
  }
}

export function ServiceCTA({ title, description, primaryCTA, secondaryCTA, contactInfo }: ServiceCTAProps) {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-700">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
          {title}
        </h2>
        
        <p className="text-xl text-blue-100 mb-10 leading-relaxed">
          {description}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link href={primaryCTA.href}>
            <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200">
              {primaryCTA.text}
            </Button>
          </Link>
          
          {secondaryCTA && (
            <Link href={secondaryCTA.href}>
              <Button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-200">
                {secondaryCTA.text}
              </Button>
            </Link>
          )}
        </div>
        
        {contactInfo && (
          <div className="border-t border-blue-500 pt-8">
            <p className="text-blue-100 mb-4">
              Prefer to talk? We're here to help!
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a 
                href={`tel:${contactInfo.phone}`}
                className="flex items-center text-white hover:text-blue-200 transition-colors duration-200"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                {contactInfo.phone}
              </a>
              
              <a 
                href={`mailto:${contactInfo.email}`}
                className="flex items-center text-white hover:text-blue-200 transition-colors duration-200"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                {contactInfo.email}
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  )
} 