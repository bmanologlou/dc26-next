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
      </head>
      <body>{children}</body>
    </html>
  )
}
