'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function ApolloAcademyPage() {
  const [email, setEmail] = useState('')
  const [emailSubmitted, setEmailSubmitted] = useState(false)

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setEmailSubmitted(true)
    setTimeout(() => setEmailSubmitted(false), 3000)
  }

  return (
    <div className="bg-white relative w-full">
      <div className="bg-[#17152f] min-h-screen flex flex-col items-center justify-start pt-0 pb-12 px-0">
        
        {/* Hero Section */}
        <section className="relative w-full">
          <div className="overflow-hidden relative w-full h-full">
            <div className="flex flex-col items-start justify-start pb-8 md:pb-16 pt-32 md:pt-64 lg:pt-96 px-4 md:px-16 lg:px-32 xl:px-96 relative w-full">
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-no-repeat bg-center"
                style={{
                  backgroundImage: "url('/images/67d3a592f66f20c271abcda3_Home Hero Opt in BG.avif')",
                  backgroundSize: '100% 117%'
                }}
              />
              
              {/* Hero Content */}
              <div className="h-64 md:h-80 lg:h-96 relative w-full">
                <div className="absolute flex flex-col items-center justify-start max-w-xs sm:max-w-2xl md:max-w-3xl lg:max-w-4xl px-4 md:px-12 py-0 top-0 left-1/2 transform -translate-x-1/2">
                  <div className="flex flex-col justify-center text-center text-white">
                    <h1 className="font-inter font-semibold text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-normal mb-0 capitalize">
                      3 Steps to Build a Thriving
                    </h1>
                    <h1 className="font-inter font-semibold text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-normal capitalize">
                      Web Design Career
                    </h1>
                  </div>
                </div>
                
                <div className="absolute flex flex-col items-center justify-start max-w-xs sm:max-w-lg md:max-w-xl lg:max-w-2xl px-1 py-0 top-32 md:top-40 lg:top-48 left-1/2 transform -translate-x-1/2">
                  <div className="flex flex-col justify-center text-center text-gray-300">
                    <p className="font-inter text-sm md:text-base leading-relaxed mb-0">
                      Discover how to master in-demand skills, create a standout portfolio, and land
                    </p>
                    <p className="font-inter text-sm md:text-base leading-relaxed">
                      high-paying clients—even if you're just starting out.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* See The Difference Section */}
        <section className="relative w-full">
          <div className="overflow-hidden relative w-full h-full">
            <div className="flex flex-col items-start justify-start px-4 md:px-8 lg:px-16 xl:px-28 py-0 relative w-full">
              <div className="max-w-7xl mx-auto relative w-full">
                <div className="flex flex-col items-center max-w-full relative w-full h-full">
                  <div className="flex flex-col items-center justify-start max-w-full pt-16 md:pt-24 lg:pt-32 px-4 md:px-8 lg:px-16 xl:px-32 relative w-full">
                    
                    {/* Section Header */}
                    <div className="flex flex-col gap-2 md:gap-4 items-center justify-start max-w-4xl p-0 relative text-center">
                      <div className="font-inter font-bold text-[#ffd9d9] text-lg md:text-xl tracking-wide capitalize">
                        <p className="leading-6">See The Difference</p>
                      </div>
                      <div className="font-inter font-semibold text-white text-3xl md:text-4xl lg:text-5xl xl:text-6xl capitalize">
                        <p className="leading-tight">Designs Our Students Created</p>
                      </div>
                      <div className="font-inter text-gray-300 text-sm md:text-base tracking-wide max-w-2xl">
                        <p className="leading-relaxed">
                          Explore the remarkable designs created by our students after completing our courses.
                        </p>
                      </div>
                    </div>

                    {/* Student Work Gallery - Responsive Grid */}
                    <div className="mt-8 md:mt-12 lg:mt-16 w-full">
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 max-w-7xl mx-auto">
                        {[1, 2, 3, 4, 5, 6].map((i) => (
                          <div key={i} className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700 shadow-2xl">
                            <div className="aspect-[4/3] bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center">
                              <div className="text-white text-2xl md:text-3xl lg:text-4xl font-bold opacity-30">
                                {i}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Courses Section */}
        <section className="flex flex-col gap-8 md:gap-12 lg:gap-16 items-center justify-start pb-0 pt-8 md:pt-12 lg:pt-16 px-4 md:px-8 relative w-full">
          <div className="flex flex-col gap-2 md:gap-4 items-center justify-start max-w-4xl p-0 relative text-center">
            <div className="font-inter font-bold text-[#ffd9d9] text-lg md:text-xl tracking-wide capitalize">
              <p className="leading-6">Most Popular</p>
            </div>
            <div className="font-inter font-semibold text-white text-3xl md:text-4xl lg:text-5xl xl:text-6xl capitalize">
              <p className="leading-tight">Featured Courses</p>
            </div>
            <div className="font-inter text-gray-300 text-sm md:text-base tracking-wide max-w-2xl">
              <p className="leading-relaxed">
                Master Webflow with our top-rated course or unlock a world of knowledge with our All Access program.
              </p>
            </div>
          </div>

          {/* Course Cards */}
          <div className="flex flex-col lg:flex-row gap-6 md:gap-8 items-start justify-center p-0 relative w-full max-w-6xl">
            {/* Webflow Masterclass Card */}
            <div className="bg-white bg-opacity-5 rounded-2xl md:rounded-3xl border border-white border-opacity-20 overflow-hidden w-full lg:flex-1">
              <div className="flex flex-col-reverse h-full items-start justify-start p-px relative">
                <div className="bg-cover bg-center h-64 md:h-80 lg:h-96 w-full" 
                     style={{backgroundImage: "url('/images/tim.png')"}}
                />
                <div className="relative w-full">
                  <div className="flex flex-col gap-4 md:gap-6 lg:gap-8 items-start justify-start p-4 md:p-6 relative w-full">
                    <div className="flex flex-col gap-3 md:gap-4 items-start justify-start p-0 relative w-full">
                      <div className="flex flex-col items-center justify-start p-0 relative w-full">
                        <div className="font-inter font-bold text-white text-xl md:text-2xl text-center tracking-wide capitalize w-full">
                          <p className="leading-6 md:leading-8">Webflow Masterclass</p>
                        </div>
                      </div>
                      <div className="flex flex-col items-center justify-start p-0 relative w-full">
                        <div className="font-inter text-gray-300 text-sm md:text-base text-center tracking-wide w-full">
                          <p className="leading-relaxed">
                            The most up-to-date and complete course to master Webflow!
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3 md:gap-4 items-center justify-center p-0 relative w-full">
                      <div className="bg-[#ffd9d9] flex flex-row items-center justify-center py-2 md:py-3 px-4 md:px-6 relative rounded-lg w-full sm:w-auto">
                        <div className="font-inter font-semibold text-[#232323] text-sm md:text-base text-center tracking-wide capitalize">
                          <p className="leading-6">learn more</p>
                        </div>
                      </div>
                      <div className="bg-[#232139] border border-white flex flex-row items-center justify-center py-2 md:py-3 px-4 md:px-6 relative rounded-lg w-full sm:w-auto">
                        <div className="font-inter font-semibold text-white text-sm md:text-base text-center tracking-wide capitalize">
                          <p className="leading-6">watch trailer</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Web Career Ignite Card */}
            <div className="bg-white bg-opacity-5 rounded-2xl md:rounded-3xl border border-white border-opacity-20 overflow-hidden w-full lg:flex-1">
              <div className="flex flex-col-reverse h-full items-start justify-start p-px relative">
                <div className="bg-cover bg-center h-64 md:h-80 lg:h-96 w-full" 
                     style={{backgroundImage: "url('/images/tim.png')"}}
                />
                <div className="relative w-full">
                  <div className="flex flex-col gap-4 md:gap-6 lg:gap-8 items-start justify-start p-4 md:p-6 relative w-full">
                    <div className="flex flex-col gap-3 md:gap-4 items-start justify-start p-0 relative w-full">
                      <div className="flex flex-col items-center justify-start p-0 relative w-full">
                        <div className="font-inter font-bold text-white text-xl md:text-2xl text-center tracking-wide capitalize w-full">
                          <p className="leading-6 md:leading-8">Web Career Ignite</p>
                        </div>
                      </div>
                      <div className="flex flex-col items-center justify-start p-0 relative w-full">
                        <div className="font-inter text-gray-300 text-sm md:text-base text-center tracking-wide w-full">
                          <p className="leading-relaxed">
                            Our ultimate program to start a successful career in web design!
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3 md:gap-4 items-center justify-center p-0 relative w-full">
                      <div className="bg-[#ffd9d9] flex flex-row items-center justify-center py-2 md:py-3 px-4 md:px-6 relative rounded-lg w-full sm:w-auto">
                        <div className="font-inter font-semibold text-[#232323] text-sm md:text-base text-center tracking-wide capitalize">
                          <p className="leading-6">learn more</p>
                        </div>
                      </div>
                      <div className="bg-[#232139] border border-white flex flex-row items-center justify-center py-2 md:py-3 px-4 md:px-6 relative rounded-lg w-full sm:w-auto">
                        <div className="font-inter font-semibold text-white text-sm md:text-base text-center tracking-wide capitalize">
                          <p className="leading-6">watch trailer</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Learn With Us Section */}
        <section className="flex flex-col gap-8 md:gap-12 lg:gap-16 items-center justify-start pb-0 pt-8 md:pt-12 lg:pt-16 px-4 md:px-8 relative w-full">
          <div className="flex flex-col gap-2 md:gap-4 items-center justify-start max-w-4xl p-0 relative text-center">
            <div className="font-inter font-bold text-[#ffd9d9] text-lg md:text-xl tracking-wide capitalize">
              <p className="leading-6">The Flux Advantage</p>
            </div>
            <div className="font-inter font-semibold text-white text-3xl md:text-4xl lg:text-5xl xl:text-6xl capitalize">
              <p className="leading-tight">Why Learn With Us?</p>
            </div>
            <div className="font-inter text-gray-300 text-sm md:text-base tracking-wide max-w-2xl">
              <p className="leading-relaxed">
                5 reasons to take your web design career to the next level with Flux Academy.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-start justify-start max-w-6xl pb-8 md:pb-16 pt-0 px-4 md:px-8 lg:px-16 xl:px-32 relative w-full">
            {/* Feature rows */}
            <div className="flex flex-col lg:flex-row-reverse gap-6 md:gap-8 lg:gap-16 items-center justify-center p-0 relative w-full mb-8 md:mb-12 lg:mb-16">
              <div className="flex-1 relative w-full">
                <div className="flex flex-col gap-2 items-start justify-start p-4 md:p-8 lg:p-16 relative w-full">
                  <div className="flex flex-col items-start justify-start pb-3 pt-0 px-0 relative">
                    <div className="bg-transparent border border-white border-opacity-20 rounded-lg shadow-lg flex flex-row items-center justify-center p-2 relative">
                      <div className="w-6 h-6 md:w-8 md:h-8 bg-gray-600 rounded"></div>
                    </div>
                  </div>
                  <div className="font-inter font-bold text-white text-xl md:text-2xl text-left tracking-wide capitalize">
                    <p className="leading-6 md:leading-8">Learn at Your Own Pace</p>
                  </div>
                  <div className="flex flex-col items-start justify-start pr-0 md:pr-6 relative">
                    <div className="font-inter text-gray-300 text-sm md:text-base text-left tracking-wide">
                      <p className="leading-relaxed mb-0">
                        Study action-packed videos anytime, anywhere. Complete
                      </p>
                      <p className="leading-relaxed">
                        projects at your own pace.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1 bg-cover bg-center h-48 md:h-64 lg:h-96 rounded-lg w-full" 
                   style={{backgroundImage: "url('/images/tim.png')"}}
              />
            </div>

            <div className="flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-16 items-center justify-center p-0 relative w-full mb-8 md:mb-12 lg:mb-16">
              <div className="flex-1 bg-cover bg-center h-48 md:h-64 lg:h-96 rounded-lg w-full order-2 lg:order-1" 
                   style={{backgroundImage: "url('/images/tim.png')"}}
              />
              <div className="flex-1 relative w-full order-1 lg:order-2">
                <div className="flex flex-col gap-2 items-start justify-start p-4 md:p-8 lg:p-16 relative w-full">
                  <div className="flex flex-col items-start justify-start pb-3 pt-0 px-0 relative">
                    <div className="bg-transparent border border-white border-opacity-20 rounded-lg shadow-lg flex flex-row items-center justify-center p-2 relative">
                      <div className="w-6 h-6 md:w-8 md:h-8 bg-gray-600 rounded"></div>
                    </div>
                  </div>
                  <div className="font-inter font-bold text-white text-xl md:text-2xl text-left tracking-wide capitalize">
                    <p className="leading-6 md:leading-8">Access to Mentors</p>
                  </div>
                  <div className="flex flex-col items-start justify-start pr-0 md:pr-4 relative">
                    <div className="font-inter text-gray-300 text-sm md:text-base text-left tracking-wide">
                      <p className="leading-relaxed mb-0">
                        Get personalized feedback from our experts. Learn from the
                      </p>
                      <p className="leading-relaxed">
                        best practitioners & mentors in the field.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row-reverse gap-6 md:gap-8 lg:gap-16 items-center justify-center p-0 relative w-full">
              <div className="flex-1 relative w-full">
                <div className="flex flex-col gap-2 items-start justify-start p-4 md:p-8 lg:p-16 relative w-full">
                  <div className="flex flex-col items-start justify-start pb-3 pt-0 px-0 relative">
                    <div className="bg-transparent border border-white border-opacity-20 rounded-lg shadow-lg flex flex-row items-center justify-center p-2 relative">
                      <div className="w-6 h-6 md:w-8 md:h-8 bg-gray-600 rounded"></div>
                    </div>
                  </div>
                  <div className="font-inter font-bold text-white text-xl md:text-2xl text-left tracking-wide capitalize">
                    <p className="leading-6 md:leading-8">Get Better, Faster</p>
                  </div>
                  <div className="flex flex-col items-start justify-start pr-0 md:pr-6 relative">
                    <div className="font-inter text-gray-300 text-sm md:text-base text-left tracking-wide">
                      <p className="leading-relaxed mb-0">
                        Improve your skills faster with hands-on projects. Advance
                      </p>
                      <p className="leading-relaxed">
                        your career with complete confidence.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1 bg-cover bg-center h-48 md:h-64 lg:h-96 rounded-lg w-full" 
                   style={{backgroundImage: "url('/images/tim.png')"}}
              />
            </div>
          </div>
        </section>

        {/* New Course Section - Figma */}
        <section className="flex flex-col gap-12 md:gap-20 lg:gap-32 items-center justify-start pb-8 md:pb-12 lg:pb-16 pt-8 md:pt-12 lg:pt-16 px-4 md:px-8 relative w-full">
          <div className="flex flex-col gap-2 md:gap-4 items-center justify-start max-w-4xl p-0 relative">
            <div className="font-inter font-bold text-[#ffd9d9] text-lg md:text-xl text-center tracking-wide capitalize">
              <p className="leading-6">New Course</p>
            </div>
            <div className="flex flex-col items-center justify-start px-2 py-0 relative">
              <div className="font-inter font-semibold text-white text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center capitalize">
                <p className="leading-tight mb-0">Master Figma. Design Websites</p>
                <p className="leading-tight">That Win Clients.</p>
              </div>
            </div>
          </div>

          <div className="bg-[#232139] relative rounded-2xl md:rounded-3xl w-full max-w-6xl border border-white border-opacity-20">
            <div className="flex flex-col lg:flex-row items-start justify-center overflow-hidden p-px relative">
              <div className="w-full lg:flex-1 bg-cover bg-center h-48 md:h-64 lg:h-96" 
                   style={{backgroundImage: "url('/images/tim.png')"}}
              />
              <div className="w-full lg:flex-1 relative">
                <div className="flex flex-col gap-4 md:gap-6 items-start justify-start p-4 md:p-6 lg:p-16 relative w-full">
                  <div className="flex flex-col items-start justify-start relative">
                    <div className="font-inter font-bold text-white text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-left capitalize">
                      <p className="leading-tight mb-0">Figma For Web</p>
                      <p className="leading-tight">Designers</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col items-start justify-start relative">
                    <div className="font-inter text-gray-300 text-sm md:text-base text-left tracking-wide">
                      <p className="leading-relaxed mb-0">Master Figma, create stunning & responsive websites, and</p>
                      <p className="leading-relaxed">collaborate like a pro.</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col gap-3 items-start justify-start relative w-full">
                    <div className="flex flex-col items-start justify-start p-0 relative w-full">
                      <div className="font-inter text-gray-300 text-xs md:text-sm text-left tracking-wide">
                        <p className="leading-5">You'll Learn</p>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 md:gap-3 relative w-full">
                      {['Basics of Figma', 'Layout', 'Responsiveness', 'Auto-Layout', 'Components', 'Advanced Features'].map((skill, index) => (
                        <div key={index} className="flex flex-row items-center justify-start px-3 py-2 rounded-full border border-white border-opacity-20">
                          <div className="font-inter text-gray-300 text-xs md:text-sm text-left tracking-wide">
                            <p className="leading-5 whitespace-nowrap">{skill}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex flex-col items-start justify-start pt-2 md:pt-4 relative">
                    <div className="flex flex-row items-center justify-center p-0 relative">
                      <div className="bg-[#ffd9d9] flex flex-row items-center justify-center py-2 md:py-3 px-4 md:px-6 relative rounded-lg">
                        <div className="font-inter font-semibold text-[#232323] text-sm md:text-base text-center tracking-wide capitalize">
                          <p className="leading-6">learn more</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Student Success Stories Section */}
        <section className="relative w-full py-8 md:py-12 lg:py-16 px-4 md:px-8">
          <div className="flex flex-col gap-4 md:gap-8 items-center justify-start max-w-4xl mx-auto p-0 mb-8 md:mb-12">
            <div className="font-inter font-semibold text-white text-3xl md:text-4xl lg:text-5xl text-center">
              <p className="leading-tight">10,400+ designers Strong</p>
            </div>
            <div className="flex flex-col items-center justify-start p-0 relative">
              <div className="font-inter text-gray-300 text-sm md:text-base text-center tracking-wide max-w-2xl">
                <p className="leading-relaxed mb-0">
                  Join a global network of freelancers who have achieved success through our courses.
                </p>
                <p className="leading-relaxed">
                  Collaborate, seek advice, and continue growing alongside peers who understand your journey.
                </p>
              </div>
            </div>
          </div>

          {/* Testimonial Carousel */}
          <div className="flex flex-col items-center justify-center relative max-w-5xl mx-auto">
            <div className="bg-[#232139] border border-white border-opacity-20 rounded-2xl md:rounded-3xl shadow-2xl flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-16 items-start justify-center p-4 md:p-6 lg:p-8 relative w-full">
              <div className="bg-cover bg-center h-48 md:h-64 lg:h-96 w-full lg:w-72 rounded-2xl md:rounded-3xl shadow-2xl flex-shrink-0" 
                   style={{backgroundImage: "url('/images/tim.png')"}}
              />
              <div className="flex flex-col gap-4 md:gap-6 lg:gap-8 items-start justify-center px-0 py-0 lg:py-12 relative w-full lg:max-w-md">
                <div className="flex flex-col items-start justify-start p-0 relative w-full">
                  <div className="font-inter text-white text-sm md:text-base text-left tracking-wide w-full">
                    <p className="leading-relaxed mb-0">
                      Flux helped me get comfortable with Webflow, after trying to learn from YouTube tutorials. My recent branding and website clients have paid $25k, or $5,000 USD per month on a retainer basis.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start pb-2 pt-0 px-0 relative w-full">
                  <div className="flex flex-col items-start justify-start mb-0 p-0 relative w-full">
                    <div className="font-inter font-bold text-white text-lg md:text-xl text-left tracking-wide w-full">
                      <p className="leading-6 md:leading-8">Andy Mullady</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start mb-0 p-0 relative w-full">
                    <div className="font-inter text-[#ffd9d9] text-sm md:text-base text-left tracking-wide w-full">
                      <p className="leading-relaxed">andymullady.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation arrows - hidden on mobile, visible on larger screens */}
            <div className="hidden lg:block absolute left-4 xl:left-8 top-1/2 transform -translate-y-1/2">
              <div className="bg-white backdrop-blur-sm rounded-full w-12 h-12 xl:w-16 xl:h-16 flex items-center justify-center cursor-pointer hover:bg-gray-100 transition-colors">
                <div className="text-black text-lg xl:text-xl">‹</div>
              </div>
            </div>
            <div className="hidden lg:block absolute right-4 xl:right-8 top-1/2 transform -translate-y-1/2">
              <div className="bg-white backdrop-blur-sm rounded-full w-12 h-12 xl:w-16 xl:h-16 flex items-center justify-center cursor-pointer hover:bg-gray-100 transition-colors">
                <div className="text-black text-lg xl:text-xl">›</div>
              </div>
            </div>

            {/* Mobile navigation */}
            <div className="lg:hidden flex flex-row gap-4 items-center justify-center mt-4">
              <div className="bg-white backdrop-blur-sm rounded-full w-10 h-10 flex items-center justify-center cursor-pointer">
                <div className="text-black text-lg">‹</div>
              </div>
              <div className="bg-white backdrop-blur-sm rounded-full w-10 h-10 flex items-center justify-center cursor-pointer">
                <div className="text-black text-lg">›</div>
              </div>
            </div>
          </div>

          {/* Read more button */}
          <div className="flex justify-center mt-8 md:mt-12">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm border border-white border-opacity-20 flex flex-row items-center justify-center py-3 px-6 relative rounded-lg">
              <div className="font-inter font-semibold text-white text-sm md:text-base text-center tracking-wide capitalize">
                <p className="leading-6">read more student Reviews</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-white bg-opacity-5 border border-white border-opacity-20 flex flex-col gap-4 md:gap-6 items-center justify-start px-6 md:px-12 lg:px-16 xl:px-24 py-8 md:py-12 lg:py-16 relative rounded-2xl md:rounded-3xl w-full max-w-4xl mt-8 md:mt-12 lg:mt-16 mx-4 md:mx-8">
          <div className="bg-cover bg-center h-12 md:h-14 w-24 md:w-32" 
               style={{backgroundImage: "url('/images/tim.png')"}}
          />
          <div className="font-inter font-bold text-white text-xl md:text-2xl text-center tracking-wide capitalize">
            <p className="leading-6 md:leading-8">Still have questions?</p>
          </div>
          <div className="flex flex-col items-center justify-start px-1 py-0 relative">
            <div className="font-inter text-gray-300 text-sm md:text-base text-center tracking-wide max-w-lg">
              <p className="leading-relaxed mb-0">
                Can't find the answer you're looking for? Not sure which course is right for
              </p>
              <p className="leading-relaxed">
                you? Please chat to our friendly team.
              </p>
            </div>
          </div>
          <div className="bg-[#ffd9d9] flex flex-row items-center justify-center py-2 md:py-3 px-4 md:px-6 relative rounded-lg">
            <div className="font-inter font-semibold text-[#232323] text-sm md:text-base text-center tracking-wide capitalize">
              <p className="leading-6">get in touch</p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="h-auto relative w-full max-w-6xl mt-8 md:mt-12 lg:mt-16 px-4 md:px-8">
          <div className="flex flex-col lg:flex-row gap-8 md:gap-12 lg:gap-16 items-start justify-start p-0 relative w-full">
            <div className="w-full lg:flex-1 flex flex-col gap-3 md:gap-4 items-start justify-start p-0 relative">
              <div className="flex flex-col items-start justify-start pb-2 pt-0 px-0 relative w-full">
                <div className="font-inter font-bold text-white text-lg md:text-xl lg:text-2xl text-left tracking-wide capitalize w-full">
                  <p className="leading-6">Courses</p>
                </div>
              </div>
              <div className="flex flex-row gap-2 items-start justify-start p-0 relative w-full">
                <div className="flex flex-col items-start justify-start p-0 relative">
                  <div className="font-inter font-medium text-gray-300 text-sm text-left tracking-wide">
                    <p className="leading-5">The Webflow Masterclass</p>
                  </div>
                </div>
                <div className="bg-[#816cff] flex flex-col items-center justify-start py-1 px-2 relative rounded-full">
                  <div className="font-inter font-medium text-white text-xs text-center tracking-wide uppercase">
                    <p className="leading-3">new</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start p-0 relative w-full">
                <div className="font-inter font-medium text-gray-300 text-sm text-left tracking-wide">
                  <p className="leading-5">The Framer Masterclass</p>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start p-0 relative w-full">
                <div className="font-inter font-medium text-gray-300 text-sm text-left tracking-wide">
                  <p className="leading-5">Figma For Web Designers</p>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start p-0 relative w-full">
                <div className="font-inter font-medium text-gray-300 text-sm text-left tracking-wide">
                  <p className="leading-5">Web Design Masterclass</p>
                </div>
              </div>
            </div>

            <div className="w-full lg:flex-1 flex flex-col gap-6 md:gap-8 items-start justify-start p-0 relative">
              <div className="flex flex-col gap-3 md:gap-4 items-start justify-start p-0 relative w-full">
                <div className="flex flex-col items-start justify-start pb-2 pt-0 px-0 relative w-full">
                  <div className="font-inter font-bold text-white text-lg md:text-xl lg:text-2xl text-left tracking-wide capitalize w-full">
                    <p className="leading-6">Bundle</p>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start p-0 relative w-full">
                  <div className="font-inter font-medium text-gray-300 text-sm text-left tracking-wide w-full">
                    <p className="leading-5">Web Career Ignite</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-3 md:gap-4 items-start justify-start p-0 relative w-full">
                <div className="flex flex-col items-start justify-start pb-2 pt-0 px-0 relative w-full">
                  <div className="font-inter font-bold text-white text-lg md:text-xl lg:text-2xl text-left tracking-wide capitalize w-full">
                    <p className="leading-6">Company</p>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start p-0 relative w-full">
                  <div className="font-inter font-medium text-gray-300 text-sm text-left tracking-wide w-full">
                    <p className="leading-5">About</p>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start p-0 relative w-full">
                  <div className="font-inter font-medium text-gray-300 text-sm text-left tracking-wide w-full">
                    <p className="leading-5">Terms and Conditions</p>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start p-0 relative w-full">
                  <div className="font-inter font-medium text-gray-300 text-sm text-left tracking-wide w-full">
                    <p className="leading-5">Privacy Policy</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full lg:flex-1 relative">
              <div className="flex flex-col gap-3 md:gap-4 items-start justify-start p-0 relative w-full">
                <div className="flex flex-col items-start justify-start pb-2 pt-0 px-0 relative w-full">
                  <div className="font-inter font-bold text-white text-lg md:text-xl lg:text-2xl text-left tracking-wide capitalize w-full">
                    <p className="leading-6">Follow Us</p>
                  </div>
                </div>
                <div className="bg-white bg-opacity-5 border border-white border-opacity-20 flex flex-col gap-4 md:gap-6 items-start justify-start p-4 md:p-6 lg:p-8 relative rounded-2xl md:rounded-3xl w-full">
                  <div className="flex flex-col items-start justify-start p-0 relative w-full">
                    <div className="font-inter font-bold text-gray-300 text-lg md:text-xl lg:text-2xl text-left tracking-wide capitalize w-full">
                      <p className="leading-6 md:leading-8 mb-0">Join 150K+ Designers for weekly</p>
                      <p className="leading-6 md:leading-8">creative insights</p>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3 md:gap-4 items-stretch justify-start p-0 relative w-full">
                    <div className="flex-1 bg-[#17152f] border border-white border-opacity-10 h-10 md:h-12 min-h-10 md:min-h-12 relative rounded-lg">
                      <div className="overflow-hidden relative w-full h-full">
                        <div className="flex flex-col h-10 md:h-12 items-start justify-center min-h-10 md:min-h-12 px-3 md:px-4 py-0 relative w-full">
                          <div className="flex flex-col items-start justify-start overflow-hidden p-0 relative w-full">
                            <div className="font-inter text-white text-opacity-50 text-sm md:text-base text-left w-full">
                              <p>Enter your best email</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-[#5928e5] flex flex-row items-center justify-center overflow-hidden py-2 md:py-3 px-4 md:px-6 relative rounded-lg sm:flex-shrink-0">
                      <div className="font-inter font-semibold text-white text-sm md:text-base text-center tracking-wide capitalize">
                        <p className="leading-6">sign up now</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start p-0 relative w-full">
                    <div className="font-inter text-gray-300 text-xs text-left tracking-wide w-full">
                      <p className="leading-5 mb-0">
                        We respect your privacy and never use your email for spam. Subscribe
                      </p>
                      <p className="leading-5">
                        with confidence, unsubscribe anytime.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4 md:gap-8 lg:gap-16 items-center md:items-start justify-between border-t border-white border-opacity-15 pb-0 pt-6 md:pt-8 px-0 relative w-full mt-8 md:mt-12">
            <div className="flex flex-col items-center md:items-start justify-start relative">
              <div className="text-white text-xl md:text-2xl font-bold">FLUX</div>
            </div>
            <div className="flex flex-col gap-2 items-center md:items-end justify-end p-0 relative">
              <div className="flex flex-col items-center md:items-start justify-start p-0 relative">
                <div className="flex flex-row gap-2 items-center justify-start p-0 relative">
                  <div className="flex flex-col items-start justify-start p-0 relative">
                    <div className="font-inter text-gray-300 text-xs md:text-sm text-center md:text-left tracking-wide">
                      <p className="leading-6">Proudly built with</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start relative">
                    <div className="text-white text-xs md:text-sm">Webflow</div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start p-0 relative">
                <div className="font-inter text-gray-300 text-xs md:text-sm text-center md:text-left tracking-wide">
                  <p className="leading-6">© 2025 Flux Academy</p>
                </div>
              </div>
            </div>
          </div>
        </footer>

      </div>
    </div>
  )
} 