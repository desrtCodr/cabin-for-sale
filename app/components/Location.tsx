export default function Location() {
  return (
    <section id="location" className="py-20 bg-[var(--color-bg-dark)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Prime{' '}
            <span className="bg-gradient-to-r from-[var(--gradient-primary-from)] to-[var(--gradient-primary-to)] bg-clip-text text-transparent">
              Utah Location
            </span>
          </h2>
          <p className="text-xl text-[var(--color-text-muted)] max-w-3xl mx-auto">
            Perfectly positioned near Monticello in the heart of Utah&apos;s adventure landscape
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-semibold mb-6">Foothills of the Abajo Mountains</h3>
            <div className="space-y-4 text-[var(--color-text-muted)]">
              <p className="text-lg">
                Nestled in the peaceful foothills near Monticello, Utah, this unique octagon cabin offers unparalleled
                access to some of the Southwest&apos;s most spectacular outdoor recreation.
              </p>
              <p className="text-lg">
                Just minutes from the world-renowned Indian Creek climbing area, you&apos;re perfectly positioned for
                adventure or complete relaxation in one of Utah&apos;s most scenic and pristine locations.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="bg-[var(--color-bg-darker)] p-4 rounded-lg">
                <h4 className="font-semibold text-[var(--color-primary-light)] mb-2">Nearby Adventures</h4>
                <ul className="text-sm text-[var(--color-text-muted)] space-y-1">
                  <li>• Indian Creek Climbing</li>
                  <li>• Canyonlands National Park</li>
                  <li>• Bears Ears National Monument</li>
                  <li>• Moab (45 minutes)</li>
                </ul>
              </div>
              <div className="bg-[var(--color-bg-darker)] p-4 rounded-lg">
                <h4 className="font-semibold text-[var(--color-primary-light)] mb-2">Perfect Views</h4>
                <ul className="text-sm text-[var(--color-text-muted)] space-y-1">
                  <li>• La Sal Mountains</li>
                  <li>• Abajo Mountains</li>
                  <li>• Red Rock Canyons</li>
                  <li>• Endless Desert Vistas</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-[var(--gradient-primary)] p-8 rounded-3xl">
              <div className="bg-[var(--color-bg-darker)] p-6 rounded-2xl">
                <h4 className="text-2xl font-semibold mb-4 text-center">The Perfect Escape</h4>
                <div className="space-y-3">
                  {[
                    'Complete solitude on 10 private acres',
                    'Dark skies perfect for stargazing',
                    'Complete digital detox environment',
                    "Gateway to Utah's adventure playground",
                  ].map((item, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-5 h-5 bg-[var(--color-primary-light)] rounded-full flex items-center justify-center mr-3">
                        <div className="w-2 h-2 bg-[var(--color-bg-darker)] rounded-full"></div>
                      </div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
