import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Chloe Bally',
  description: 'Personal page of Chloe Bally',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div className="container">
          {children}
        </div>
      </body>
    </html>
  )
}