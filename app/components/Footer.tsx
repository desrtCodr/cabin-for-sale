export default function Footer() {
  return (
    <footer className="bg-[var(--color-bg-darker)] py-8 border-t border-[var(--color-bg-darkest)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="text-2xl font-bold bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-light)] bg-clip-text text-transparent mb-4">
          Your New Cabin Awaits!
        </div>
        <p className="text-[var(--color-text-muted-dark)] mb-4">
          A unique desert getaway in Utah&apos;s spectacular wilderness
        </p>
        <div className="text-[var(--color-text-muted-darker)] text-sm space-y-1">
          <p>Private cabin sale by owner</p>
          <p>steph@stephdavis.co</p>
        </div>
      </div>
    </footer>
  )
}
