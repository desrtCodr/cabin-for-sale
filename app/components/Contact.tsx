'use client'

import { useState } from 'react'
import { Mail, Phone, Send } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) throw new Error('Failed to send message')

      setStatus('success')
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      console.error('Error sending message:', error)
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="py-16 bg-gradient-to-b from-[var(--color-bg-dark)] to-[var(--color-bg-darker)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">Contact</h2>

        <div className="max-w-6xl mx-auto">
          <div className="bg-[var(--color-bg-light)] rounded-lg shadow-xl border-2 border-[var(--color-primary)] overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Contact Form */}
              <div className="p-8 border-b lg:border-b-0 lg:border-r border-gray-700">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-lg font-medium text-white mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full p-4 bg-[var(--color-bg-dark)] text-white rounded-lg border-2 border-gray-700 focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)] focus:outline-none transition-all"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-lg font-medium text-white mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full p-4 bg-[var(--color-bg-dark)] text-white rounded-lg border-2 border-gray-700 focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)] focus:outline-none transition-all"
                      placeholder="Your email address"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-lg font-medium text-white mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full p-4 bg-[var(--color-bg-dark)] text-white rounded-lg border-2 border-gray-700 focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)] focus:outline-none transition-all resize-none"
                      placeholder="Tell us about your interest in the cabin..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full flex items-center justify-center px-6 py-4 border border-transparent text-lg font-medium rounded-lg text-white bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--color-primary)] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-105"
                  >
                    {status === 'loading' ? (
                      'Sending...'
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </button>

                  {status === 'success' && (
                    <p className="text-green-500 text-center text-lg">Message sent successfully!</p>
                  )}
                  {status === 'error' && (
                    <p className="text-red-500 text-center text-lg">Failed to send message. Please try again.</p>
                  )}
                </form>
              </div>

              {/* Direct Contact */}
              <div className="p-8 bg-[var(--color-bg-dark)]">
                <h3 className="text-2xl font-medium text-white mb-6">Direct Contact</h3>
                <div className="space-y-6">
                  <div className="bg-[var(--color-bg-darker)] p-6 rounded-lg">
                    <a
                      href="tel:+19706838982"
                      className="flex items-center text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors text-lg group"
                    >
                      <div className="w-12 h-12 rounded-full bg-[var(--color-primary)]/20 flex items-center justify-center mr-4 group-hover:bg-[var(--color-primary)]/30 transition-colors">
                        <Phone className="w-6 h-6 text-[var(--color-primary)]" />
                      </div>
                      <div>
                        <div className="text-sm text-[var(--color-text-muted-dark)]">Phone</div>
                        <span className="select-none">(970) 683-8982</span>
                      </div>
                    </a>
                  </div>

                  <div className="bg-[var(--color-bg-darker)] p-6 rounded-lg">
                    <a
                      href="mailto:steph@stephdavis.co"
                      className="flex items-center text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors text-lg group"
                    >
                      <div className="w-12 h-12 rounded-full bg-[var(--color-primary)]/20 flex items-center justify-center mr-4 group-hover:bg-[var(--color-primary)]/30 transition-colors">
                        <Mail className="w-6 h-6 text-[var(--color-primary)]" />
                      </div>
                      <div>
                        <div className="text-sm text-[var(--color-text-muted-dark)]">Email</div>
                        <span className="select-none">steph@stephdavis.co</span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
