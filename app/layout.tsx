import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Cabin For Sale',
  description: 'Remote Utah Cabin For Sale',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>{children}</body>
    </html>
  )
}
