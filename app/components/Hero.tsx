'use client'

import { ChevronDown } from 'lucide-react'
import Image from 'next/image'

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image src="/cabin1.JPG" alt="Mountain cabin retreat" className="w-full h-full object-cover" fill />
        {/* Dark overlay for better text contrast */}
        <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px]" />
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-white">
          Your{' '}
          <span className="bg-gradient-to-r from-[var(--gradient-primary-from)] to-[var(--gradient-primary-to)] bg-clip-text text-transparent">
            Perfect
          </span>
          <br />
          Desert Getaway
        </h1>
        <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto leading-relaxed">
          Purchase your dream octagon cabin on 20 private acres, featuring solar power and stunning desert and mountain
          views. Nestled in Utah&apos;s Abajo foothills, enjoy off-grid solitude with serene wilderness at your
          doorstep.{' '}
          <span className="text-2xl font-bold">Perfect for group getaways and ready for Airbnb opportunities.</span>
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => scrollToSection('contact')}
            className="bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105"
          >
            Schedule a Visit
          </button>
          <button
            onClick={() => scrollToSection('features')}
            className="border-2 border-white hover:bg-white hover:text-[var(--color-bg-dark)] px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300"
          >
            View Details
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-white" />
      </div>
    </section>
  )
}
