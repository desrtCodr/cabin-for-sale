'use client'

import Image from 'next/image'
import { useState } from 'react'
import { X, Mountain, Trees, Compass, Map, Car, ParkingCircle, Truck, Navigation } from 'lucide-react'

const locationImages = [
  { src: '/location/location-01.jpg', alt: 'Aerial view of property location' },
  { src: '/location/location-02.jpg', alt: 'Property boundaries and surrounding area' },
]

export default function Location() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <section id="location" className="py-16 bg-[var(--color-bg-darker)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">Location</h2>

        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-[var(--color-text-muted)] text-lg mb-6">
            Located just minutes from Canyonlands National Park, the Abajo Mountains, and Indian Creek, this 20-acre
            property offers the perfect balance of seclusion and accessibility. The property borders BLM land, providing
            endless opportunities for exploration and adventure.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">Nearby Attractions</h3>
              <ul className="text-[var(--color-text-muted)] space-y-3">
                <li className="flex items-center gap-3">
                  <Mountain className="w-5 h-5 text-[var(--color-primary)]" />
                  <span>Canyonlands National Park</span>
                </li>
                <li className="flex items-center gap-3">
                  <Trees className="w-5 h-5 text-[var(--color-primary)]" />
                  <span>Abajo Mountains</span>
                </li>
                <li className="flex items-center gap-3">
                  <Compass className="w-5 h-5 text-[var(--color-primary)]" />
                  <span>Indian Creek</span>
                </li>
                <li className="flex items-center gap-3">
                  <Map className="w-5 h-5 text-[var(--color-primary)]" />
                  <span>BLM Land</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">Access</h3>
              <ul className="text-[var(--color-text-muted)] space-y-3">
                <li className="flex items-center gap-3">
                  <Car className="w-5 h-5 text-[var(--color-primary)]" />
                  <span>Drive-in access</span>
                </li>
                <li className="flex items-center gap-3">
                  <ParkingCircle className="w-5 h-5 text-[var(--color-primary)]" />
                  <span>Parking for multiple vehicles</span>
                </li>
                <li className="flex items-center gap-3">
                  <Truck className="w-5 h-5 text-[var(--color-primary)]" />
                  <span>Space for camping vehicles</span>
                </li>
                <li className="flex items-center gap-3">
                  <Navigation className="w-5 h-5 text-[var(--color-primary)]" />
                  <span>Easy access to main roads</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Location Images Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {locationImages.map((image, index) => (
            <div
              key={index}
              className="relative aspect-[4/3] rounded-lg overflow-hidden cursor-pointer group"
              onClick={() => setSelectedImage(image.src)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        {/* Fullscreen View */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative w-full h-full max-w-7xl max-h-[90vh]">
              <Image
                src={selectedImage}
                alt="Selected location view"
                fill
                className="object-contain"
                sizes="100vw"
                priority
              />
              <button
                className="absolute top-4 right-4 text-white text-4xl hover:text-[var(--color-primary)] transition-colors"
                onClick={() => setSelectedImage(null)}
              >
                <X className="w-8 h-8" />
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
