'use client'

import Image from 'next/image'
import { useState, useEffect, useCallback } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

// This will be populated with your gallery images
const images = [
  { src: '/gallery/gallery-01.jpg', alt: 'Cabin for sale photo' },
  { src: '/gallery/gallery-02.jpg', alt: 'Cabin for sale photo' },
  { src: '/gallery/gallery-03.jpg', alt: 'Cabin for sale photo' },
  { src: '/gallery/gallery-04.jpg', alt: 'Cabin for sale photo' },
  { src: '/gallery/gallery-05.jpg', alt: 'Cabin for sale photo' },
  { src: '/gallery/gallery-06.jpg', alt: 'Cabin for sale photo' },
  { src: '/gallery/gallery-07.jpg', alt: 'Cabin for sale photo' },
  { src: '/gallery/gallery-08.jpg', alt: 'Cabin for sale photo' },
  { src: '/gallery/gallery-09.jpg', alt: 'Cabin for sale photo' },
  { src: '/gallery/gallery-10.jpg', alt: 'Cabin for sale photo' },
  { src: '/gallery/gallery-11.jpg', alt: 'Cabin for sale photo' },
  { src: '/gallery/gallery-12.jpg', alt: 'Cabin for sale photo' },
  { src: '/gallery/gallery-13.jpg', alt: 'Cabin for sale photo' },
  { src: '/gallery/gallery-14.jpg', alt: 'Cabin for sale photo' },
  { src: '/gallery/gallery-15.jpg', alt: 'Cabin for sale photo' },
]

export default function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isFullscreen, setIsFullscreen] = useState(false)

  const handlePrevious = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }, [])

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }, [])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        handlePrevious()
      } else if (e.key === 'ArrowRight') {
        handleNext()
      } else if (e.key === 'Escape' && isFullscreen) {
        setIsFullscreen(false)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [handlePrevious, handleNext, isFullscreen])

  return (
    <section id="gallery" className="py-16 bg-[var(--color-bg-darker)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">Gallery</h2>

        {/* Main Image Slider */}
        <div className="relative aspect-[16/9] mb-4 rounded-lg overflow-hidden">
          <Image
            src={images[currentIndex].src}
            alt={images[currentIndex].alt}
            fill
            className="object-cover cursor-pointer"
            onClick={() => setIsFullscreen(true)}
            priority
          />

          {/* Navigation Buttons */}
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/75 transition-colors"
            onClick={handlePrevious}
          >
            <ChevronLeft className="w-8 h-8" />
          </button>
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/75 transition-colors"
            onClick={handleNext}
          >
            <ChevronRight className="w-8 h-8" />
          </button>

          {/* Image Counter */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full">
            {currentIndex + 1} / {images.length}
          </div>
        </div>

        {/* Thumbnails */}
        <div className="grid grid-cols-4 md:grid-cols-8 gap-2">
          {images.map((image, index) => (
            <div
              key={index}
              className={`relative aspect-square cursor-pointer rounded-lg overflow-hidden ${
                index === currentIndex ? 'ring-2 ring-[var(--color-primary)]' : ''
              }`}
              onClick={() => setCurrentIndex(index)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 25vw, 12.5vw"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Fullscreen View */}
      {isFullscreen && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setIsFullscreen(false)}
        >
          <div className="relative w-full h-full max-w-7xl max-h-[90vh]">
            <Image
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />
            <button
              className="absolute top-4 right-4 text-white text-4xl hover:text-[var(--color-primary)] transition-colors"
              onClick={() => setIsFullscreen(false)}
            >
              ×
            </button>
          </div>
        </div>
      )}
    </section>
  )
}
