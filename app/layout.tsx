import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://dc26.eoflux.com'),
  title: {
    default: 'Σχολή Οδηγών Δήμητρα Χριστοθανοπούλου | DC Drive Αθήνα',
    template: '%s | Σχολή Οδηγών Δήμητρα Χριστοθανοπούλου',
  },
  description: 'Σχολή οδηγών Δήμητρα Χριστοθανοπούλου στην Αθήνα. Διπλώματα Β, Α, Γ, Δ. Υψηλό ποσοστό επιτυχίας, εμπειρία από το 1979. Κλείστε ραντεβού σήμερα.',
  keywords: ['σχολή οδηγών', 'Δήμητρα Χριστοθανοπούλου', 'DC Drive', 'δίπλωμα οδήγησης', 'Αθήνα', 'κατηγορία Β', 'μοτοσυκλέτα', 'επαγγελματικό δίπλωμα', 'σχολή οδηγών Αθήνα', 'ανανέωση διπλώματος', 'μετεκπαίδευση'],
  authors: [{ name: 'DC Drive' }],
  creator: 'Eternal Optimists',
  openGraph: {
    type: 'website',
    locale: 'el_GR',
    url: 'https://dc26.eoflux.com',
    siteName: 'Σχολή Οδηγών Δήμητρα Χριστοθανοπούλου',
    title: 'Σχολή Οδηγών Δήμητρα Χριστοθανοπούλου | DC Drive Αθήνα',
    description: 'Σχολή οδηγών Δήμητρα Χριστοθανοπούλου στην Αθήνα. Διπλώματα Β, Α, Γ, Δ. Υψηλό ποσοστό επιτυχίας, εμπειρία από το 1979.',
    images: [
      {
        url: '/assets/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'DC Drive — Σχολή Οδηγών Αθήνα',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Σχολή Οδηγών Δήμητρα Χριστοθανοπούλου | DC Drive',
    description: 'Σχολή οδηγών Δήμητρα Χριστοθανοπούλου στην Αθήνα από το 1979. Διπλώματα Β, Α, Γ, Δ.',
    images: ['/assets/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://dc26.eoflux.com',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'DrivingSchool',
  name: 'Σχολή Οδηγών Δήμητρα Χριστοθανοπούλου',
  alternateName: 'DC Drive',
  description: 'Σχολή οδηγών Δήμητρα Χριστοθανοπούλου στην Αθήνα από το 1979. Διπλώματα Β, Α, Γ, Δ.',
  url: 'https://dc26.eoflux.com',
  telephone: '+302105718756',
  foundingDate: '1979',
  founder: {
    '@type': 'Person',
    name: 'Dimitra Christothanopoulou',
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Αθήνα',
    addressCountry: 'GR',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Κατηγορίες Διπλωμάτων',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Δίπλωμα Κατηγορίας Β — Αυτοκίνητο' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Δίπλωμα Κατηγορίας Α — Μοτοσυκλέτα' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Επαγγελματικά Διπλώματα Γ/Δ' } },
    ],
  },
  sameAs: [],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="el">
      <head>
        <meta name="theme-color" content="#0f0f12" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
