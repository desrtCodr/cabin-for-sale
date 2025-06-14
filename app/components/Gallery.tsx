'use client'

import Image from 'next/image'
import { useState, useEffect, useCallback } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const images = [
  { src: '/gallery/IMG_1.jpeg', alt: 'Cabin exterior view', width: 1920, height: 1440 },
  { src: '/gallery/IMG_3.jpeg', alt: 'Mountain view', width: 1920, height: 1440 },
  { src: '/gallery/IMG_4.jpeg', alt: 'Desert landscape', width: 1920, height: 1440 },
  { src: '/gallery/IMG_5.jpeg', alt: 'Cabin details', width: 1920, height: 1440 },
  { src: '/gallery/IMG_6.JPG', alt: 'Scenic view', width: 1920, height: 1440 },
  { src: '/gallery/IMG_7.JPG', alt: 'Desert sunset', width: 1920, height: 1440 },
]

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [imageLoadError, setImageLoadError] = useState<string | null>(null)

  const currentIndex = selectedImage ? images.findIndex((img) => img.src === selectedImage) : -1

  const handlePrevious = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation()
      if (currentIndex > 0) {
        setSelectedImage(images[currentIndex - 1].src)
      }
    },
    [currentIndex],
  )

  const handleNext = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation()
      if (currentIndex < images.length - 1) {
        setSelectedImage(images[currentIndex + 1].src)
      }
    },
    [currentIndex],
  )

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImage) {
        if (e.key === 'ArrowLeft') {
          handlePrevious(e as unknown as React.MouseEvent)
        } else if (e.key === 'ArrowRight') {
          handleNext(e as unknown as React.MouseEvent)
        } else if (e.key === 'Escape') {
          setSelectedImage(null)
        }
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [selectedImage, handlePrevious, handleNext])

  return (
    <section id="gallery" className="py-16 bg-[var(--color-bg-dark)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">Gallery</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative aspect-[4/3] overflow-hidden rounded-lg cursor-pointer transform transition-transform duration-300 hover:scale-105"
              onClick={() => setSelectedImage(image.src)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                quality={75}
                priority={index < 3}
                onError={() => setImageLoadError(image.src)}
              />
            </div>
          ))}
        </div>
        {imageLoadError && <div className="mt-4 text-red-500 text-center">Error loading image: {imageLoadError}</div>}
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative w-full h-full max-w-7xl max-h-[90vh]">
            <Image
              src={selectedImage}
              alt="Selected image"
              fill
              className="object-contain"
              sizes="100vw"
              quality={90}
              priority
            />
            <button
              className="absolute top-4 right-4 text-white text-4xl hover:text-[var(--color-primary)] transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              ×
            </button>

            {/* Navigation Buttons */}
            {currentIndex > 0 && (
              <button
                className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/75 transition-colors"
                onClick={handlePrevious}
              >
                <ChevronLeft className="w-8 h-8" />
              </button>
            )}
            {currentIndex < images.length - 1 && (
              <button
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/75 transition-colors"
                onClick={handleNext}
              >
                <ChevronRight className="w-8 h-8" />
              </button>
            )}

            {/* Image Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full">
              {currentIndex + 1} / {images.length}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
