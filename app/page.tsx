import Nav from './components/Nav'
import Hero from './components/Hero'
import Location from './components/Location'
import Features from './components/Features'
import Contact from './components/Contact'
import Gallery from './components/Gallery'
import Footer from './components/Footer'

export default function CabinLandingPage() {
  return (
    <div className="bg-[var(--color-bg-dark)] text-[var(--color-text-light)] min-h-screen">
      <Nav />
      <Hero />
      <Location />
      <Features />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  )
}
