import { Flame, Home, Heart, Eye, Moon, Sun } from 'lucide-react'

export default function Features() {
  return (
    <section id="features" className="py-20 bg-[var(--color-bg-darker)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Unique{' '}
            <span className="bg-gradient-to-r from-[var(--gradient-primary-from)] to-[var(--gradient-primary-to)] bg-clip-text text-transparent">
              Octagon Design
            </span>
          </h2>
          <p className="text-xl text-[var(--color-text-muted)] max-w-3xl mx-auto">
            Experience the harmony of geometric architecture blended with rustic mountain living
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: <Sun className="w-8 h-8 text-[var(--color-text-light)]" />,
              title: 'Complete Off-Grid',
              description:
                'Solar panel and battery system provide sustainable power. Disconnect from the world and reconnect with nature.',
            },
            {
              icon: <Flame className="w-8 h-8 text-[var(--color-text-light)]" />,
              title: 'Cozy Fireplace',
              description:
                'Warm up by the fireplace after days exploring the stunning Utah wilderness surrounding your private retreat.',
            },
            {
              icon: <Home className="w-8 h-8 text-[var(--color-text-light)]" />,
              title: 'Kitchenette',
              description:
                'Kitchenette with sink, small fridge, propane stove top, microwave, and coffee maker. No running water.',
            },
            {
              icon: <Heart className="w-8 h-8 text-[var(--color-text-light)]" />,
              title: 'Queen Bed',
              description: 'Comfortable queen-size bed ensures restful nights under the star-filled desert sky.',
            },
            {
              icon: <Eye className="w-8 h-8 text-[var(--color-text-light)]" />,
              title: 'Panoramic Views',
              description:
                'Wake up to breathtaking views of the La Sal Mountains from your private 10-acre sanctuary. Picture windows on all sides allowing for 360 degree views.',
            },
            {
              icon: <Moon className="w-8 h-8 text-[var(--color-text-light)]" />,
              title: 'Total Privacy',
              description:
                '10 acres of complete solitude near Indian Creek, perfect for meditation, stargazing, and digital detox.',
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="group bg-[var(--color-bg-darkest)] p-8 rounded-2xl transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="w-16 h-16 bg-[var(--color-primary)] rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-[var(--color-text-muted)]">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
