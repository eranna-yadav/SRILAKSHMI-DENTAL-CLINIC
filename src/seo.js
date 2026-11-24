// SEO settings. If you connect a custom domain, change siteUrl.
import { clinic, faqs, services } from './data.js'

export const siteUrl = 'https://srilakshmi-dental-clinic.vercel.app'

export function structuredData() {
  const dentist = {
    '@context': 'https://schema.org',
    '@type': 'Dentist',
    '@id': `${siteUrl}/#clinic`,
    name: clinic.name,
    url: `${siteUrl}/`,
    image: `${siteUrl}/og-image.jpg`,
    logo: `${siteUrl}/favicon.svg`,
    telephone: clinic.phoneTel,
    priceRange: '₹₹',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Ground floor, Park Rd, opp. to Sanskrutha Bhavana, Rangoli Halla',
      addressLocality: 'Hassan',
      addressRegion: 'Karnataka',
      postalCode: '573201',
      addressCountry: 'IN',
    },
    areaServed: { '@type': 'City', name: 'Hassan' },
    hasMap: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(clinic.mapQuery)}`,
    employee: { '@type': 'Person', name: clinic.doctor, jobTitle: 'Dental Surgeon' },
    availableService: services.map((s) => ({ '@type': 'MedicalProcedure', name: s.title, description: s.text })),
  }
  const faq = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }
  return [dentist, faq]
}
