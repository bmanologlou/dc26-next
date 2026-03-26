import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'DC Drive — Σχολή Οδηγών Αθήνα',
  description: 'Σχολή οδηγών DC Drive στην Αθήνα.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="el">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" rel="stylesheet" />
              <meta name="theme-color" content="#0f0f12" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
      </head>
      <body>{children}</body>
    </html>
  )
}
