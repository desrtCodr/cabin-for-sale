'use client'

import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }
  const handleSubmit = (e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    alert("Thank you for your interest! We'll contact you soon to discuss this unique property.")
    setFormData({ name: '', email: '', phone: '', message: '' })
  }
  return (
    <section id="contact" className="py-20 bg-[var(--color-bg-darker)]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8">
          Ready to{' '}
          <span className="bg-gradient-to-r from-[var(--gradient-primary-from)] to-[var(--gradient-primary-to)] bg-clip-text text-transparent">
            Escape?
          </span>
        </h2>
        <p className="text-xl text-[var(--color-text-muted)] mb-12 max-w-2xl mx-auto">
          Don&apos;t miss this rare opportunity to own a truly unique mountain retreat. Contact us today to schedule a
          private showing.
        </p>

        <div className="bg-[var(--color-bg-darkest)] p-8 rounded-2xl max-w-2xl mx-auto">
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full p-4 bg-[var(--color-bg-input)] rounded-lg focus:ring-2 focus:ring-[var(--color-primary)] focus:outline-none transition-all"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full p-4 bg-[var(--color-bg-input)] rounded-lg focus:ring-2 focus:ring-[var(--color-primary)] focus:outline-none transition-all"
                required
              />
            </div>
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full p-4 bg-[var(--color-bg-input)] rounded-lg focus:ring-2 focus:ring-[var(--color-primary)] focus:outline-none transition-all"
            />
            <textarea
              name="message"
              placeholder="Tell us about your interest in the cabin..."
              rows={4}
              value={formData.message}
              onChange={handleInputChange}
              className="w-full p-4 bg-[var(--color-bg-input)] rounded-lg focus:ring-2 focus:ring-[var(--color-primary)] focus:outline-none transition-all resize-none"
            />
            <button
              type="button"
              onClick={handleSubmit}
              className="w-full bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
            >
              Send Message
            </button>
          </div>
        </div>

        <div className="mt-12 flex flex-col sm:flex-row justify-center items-center gap-6 text-[var(--color-text-muted)]">
          <div className="flex items-center">
            <div className="w-5 h-5 bg-[var(--color-primary-light)] rounded mr-2"></div>
            <span>(555) 123-4567</span>
          </div>
          <div className="flex items-center">
            <div className="w-5 h-5 bg-[var(--color-primary-light)] rounded mr-2"></div>
            <span>info@octagonretreat.com</span>
          </div>
        </div>
      </div>
    </section>
  )
}
