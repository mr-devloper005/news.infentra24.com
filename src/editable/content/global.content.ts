import { slot4BrandConfig } from '@/editable/theme/brand.config'

export const globalContent = {
  site: {
    name: slot4BrandConfig.siteName,
    tagline: slot4BrandConfig.tagline || 'Media distribution and press release visibility',
    domain: slot4BrandConfig.domain,
    baseUrl: slot4BrandConfig.baseUrl,
  },
  nav: {
    tagline: 'Media distribution and public announcements',
    primaryLinks: [
      { label: 'Home', href: '/' },
      { label: 'About', href: '/about' },
      { label: 'Contact', href: '/contact' },
      { label: 'Login', href: '/login' },
      { label: 'Register', href: '/signup' },
    ],
    actions: {
      primary: { label: 'Register', href: '/signup' },
      secondary: { label: 'Contact', href: '/contact' },
    },
  },
  footer: {
    tagline: 'Media distribution for announcements and press releases',
    description: 'A media distribution website for press releases, company announcements, public updates, category discovery, and brand visibility.',
    columns: [
      {
        title: 'Explore',
        links: [
          { label: 'Home', href: '/' },
          { label: 'About', href: '/about' },
          { label: 'Contact', href: '/contact' },
          { label: 'Login', href: '/login' },
          { label: 'Register', href: '/signup' },
        ],
      },
      {
        title: 'Site',
        links: [
          { label: 'About', href: '/about' },
          { label: 'Contact', href: '/contact' },
        ],
      },
    ],
    bottomNote: 'Built for fast, flexible, and category-led media distribution.',
  },
  commonLabels: {
    readMore: 'Read more',
    viewAll: 'View all',
    explore: 'Explore',
    latest: 'Latest',
    related: 'Related',
    published: 'Published',
  },
} as const
