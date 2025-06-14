'use client'

export default function Nav() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-black/40 backdrop-blur-sm border-b border-[var(--color-border-light)] text-[var(--color-text-light)] transition-all duration-300`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <span className="text-2xl font-bold bg-gradient-to-r from-[var(--gradient-primary-from)] to-[var(--gradient-primary-to)] bg-clip-text text-transparent drop-shadow-[0_2px_6px_rgba(0,0,0,0.7)]">
            Octagon Cabin For Sale
          </span>

          <div className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection('features')}
              className="hover:text-[var(--color-primary-light)] transition-colors"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection('location')}
              className="hover:text-[var(--color-primary-light)] transition-colors"
            >
              Location
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="hover:text-[var(--color-primary-light)] transition-colors"
            >
              Contact
            </button>
          </div>
          <button
            onClick={() => scrollToSection('contact')}
            className="bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] px-6 py-2 rounded-full font-semibold transition-colors"
          >
            Inquire Now
          </button>
        </div>
      </div>
    </nav>
  )
}
