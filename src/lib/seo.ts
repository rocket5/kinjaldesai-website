import { type Metadata } from 'next'

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://kinjaldesai.ca'
export const siteName = 'Kinjal Desai, PhD'
export const siteTitle = 'Kinjal Desai, PhD - Senior Research Associate'
export const siteDescription = 'Dr. Kinjal Desai is a Senior Research Associate specializing in cancer biology, developmental stem cell biology, and pediatric neuro-oncology at The Hospital for Sick Children.'

export const defaultKeywords = [
  'Kinjal Desai',
  'cancer biology', 
  'pediatric neuro-oncology',
  'medulloblastoma',
  'stem cell biology',
  'Hospital for Sick Children',
  'SickKids',
  'research associate',
  'epigenomics',
  'transcriptional regulation',
  'OLIG2',
  'brain cancer research',
  'tumor biology',
  'PhD researcher'
]

export const defaultOpenGraph = {
  type: 'profile' as const,
  locale: 'en_US',
  siteName,
  images: [
    {
      url: '/og-kinjal-desai.png',
      width: 1200,
      height: 630,
      alt: 'Dr. Kinjal Desai - Senior Research Associate',
    }
  ]
}

export const defaultTwitter = {
  card: 'summary' as const,
  images: ['/og-kinjal-desai.png']
}

export function generatePageMetadata({
  title,
  description,
  keywords = [],
  path = '/',
  images = defaultOpenGraph.images
}: {
  title: string
  description: string
  keywords?: string[]
  path?: string
  images?: Array<{ url: string; width: number; height: number; alt: string }>
}): Metadata {
  const fullTitle = title === siteTitle ? title : `${title} | ${siteName}`
  const canonicalUrl = `${siteUrl}${path}`
  
  return {
    title: fullTitle,
    description,
    keywords: [...defaultKeywords, ...keywords],
    openGraph: {
      ...defaultOpenGraph,
      title: fullTitle,
      description,
      url: canonicalUrl,
      images
    },
    twitter: {
      ...defaultTwitter,
      title: fullTitle,
      description,
      images: images.map(img => img.url)
    },
    alternates: {
      canonical: canonicalUrl
    }
  }
}

export const structuredDataPerson = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Kinjal Desai",
  honorificPrefix: "Dr.",
  honorificSuffix: "PhD",
  jobTitle: "Senior Research Associate",
  worksFor: {
    "@type": "Organization", 
    name: "The Hospital for Sick Children",
    alternateName: "SickKids",
    url: "https://www.sickkids.ca/",
    address: {
      "@type": "PostalAddress",
      streetAddress: "686 Bay Street",
      addressLocality: "Toronto",
      addressRegion: "ON",
      postalCode: "M5G 0A4",
      addressCountry: "CA"
    }
  },
  knowsAbout: [
    "Cancer Biology",
    "Pediatric Neuro-oncology", 
    "Medulloblastoma",
    "Developmental Stem Cell Biology",
    "Epigenomics",
    "Transcriptional Regulation",
    "Functional Genomics",
    "Bioinformatics",
    "Computational Epigenetics",
    "Preclinical Drug Targeting"
  ],
  url: siteUrl,
  image: `${siteUrl}/og-kinjal-desai.png`,
  sameAs: [
    "https://scholar.google.com/citations?user=UTi1S1YAAAAJ&hl=en",
    "https://www.linkedin.com/in/kinjal-desai-966371132/",
    "https://orcid.org/0009-0002-5825-089X"
  ],
  email: "kinjal.desai@sickkids.ca",
  alumniOf: {
    "@type": "Organization",
    name: "Dartmouth College"
  }
}

export function generateStructuredData(additionalData?: object) {
  return {
    ...structuredDataPerson,
    ...additionalData
  }
}