export default function Footer() {
  return (
    <footer className="bg-[var(--color-bg-dark)] py-8 border-t border-[var(--color-bg-darkest)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="text-2xl font-bold bg-[var(--gradient-primary)] bg-clip-text text-transparent mb-4">
          Octagon Retreat
        </div>
        <p className="text-[var(--color-text-muted-dark)]">Your gateway to Utah&apos;s most spectacular wilderness</p>
        <p className="text-[var(--color-text-muted-darker)] text-sm mt-4">
          © 2025 Octagon Retreat. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
