import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/typography', '/preview'],
    },
    sitemap: 'https://dc26.eoflux.com/sitemap.xml',
  }
}
