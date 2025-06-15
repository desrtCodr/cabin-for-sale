import { features } from '../data/features'
import { FeatureIcon } from './FeatureIcon'

export default function Features() {
  return (
    <section id="features" className="py-16 bg-[var(--color-bg-dark)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-[var(--color-bg-darker)] p-6 rounded-lg">
              <div className="flex items-center gap-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[var(--color-primary)]/20 flex items-center justify-center">
                  <FeatureIcon iconName={feature.iconName} className="w-6 h-6 text-[var(--color-primary)]" />
                </div>
                <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
              </div>
              <p className="text-[var(--color-text-muted)]">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
