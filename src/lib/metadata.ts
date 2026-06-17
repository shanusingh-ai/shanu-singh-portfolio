import type { Metadata } from 'next';

export const siteConfig = {
  name: 'Shanu Singh',
  title: 'Shanu Singh — AI Engineer & Python Developer',
  description:
    'Portfolio of Shanu Singh — Aspiring AI Engineer, Python Developer, and MCA student at IIIT Vadodara. Specializing in Machine Learning, Computer Vision, and Software Development.',
  url: 'https://shanusingh.dev',
  ogImage: '/images/og-image.jpg',
  keywords: [
    'Shanu Singh',
    'AI Engineer',
    'Python Developer',
    'Machine Learning',
    'Computer Vision',
    'IIIT Vadodara',
    'MCA',
    'Deep Learning',
    'Software Developer',
    'Portfolio',
  ],
};

export const siteMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} — Portfolio`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: '@shanusingh',
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
};

export const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Shanu Singh',
  jobTitle: 'Aspiring AI Engineer',
  description: siteConfig.description,
  url: siteConfig.url,
  sameAs: [
    'https://github.com/shanusingh-ai',
    'https://www.linkedin.com/in/shanusinghai',
  ],
  alumniOf: {
    '@type': 'CollegeOrUniversity',
    name: 'Indian Institute of Information Technology Vadodara',
  },
  knowsAbout: [
    'Artificial Intelligence',
    'Machine Learning',
    'Python',
    'Computer Vision',
    'Deep Learning',
    'Software Development',
  ],
};
