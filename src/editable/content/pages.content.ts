import { slot4BrandConfig } from '@/editable/theme/brand.config'

export const pagesContent = {
  home: {
    metadata: {
      title: 'Media distribution and press release visibility',
      description: 'Distribute announcements, press releases, company updates, and public information through a media-focused publishing experience.',
      openGraphTitle: 'Media distribution and press release visibility',
      openGraphDescription: 'Explore press releases, media updates, announcement categories, and distribution-ready public information.',
      keywords: ['media distribution', 'press release distribution', 'news media', 'public announcements'],
    },
    hero: {
      badge: 'Media distribution services',
      title: ['Amplify your message', 'through news and media networks.'],
      description: 'Browse distributed press releases, company announcements, media coverage, and public updates organized for quick discovery.',
      primaryCta: { label: 'Browse latest releases', href: '/search' },
      secondaryCta: { label: 'Contact distribution support', href: '/contact' },
      searchPlaceholder: 'Search releases, companies, categories, and updates',
      focusLabel: 'Focus',
      featureCardBadge: 'latest cover rotation',
      featureCardTitle: 'Latest posts shape the visual identity of the homepage.',
      featureCardDescription: 'Recent images and stories stay at the center of the experience without changing any core platform behavior.',
    },
    intro: {
      badge: 'About distribution',
      title: 'Built for press releases, brand visibility, and public announcements.',
      paragraphs: [
        'This site presents announcements and media-ready updates in a format that is easy for visitors to scan, search, and share.',
        'Press releases, company news, category pages, and related updates stay connected so each story has a clearer path to discovery.',
        'Whether someone starts on the homepage, a release detail page, or a search result, the experience keeps the focus on the message.',
      ],
      sideBadge: 'At a glance',
      sidePoints: [
        'Reading-first homepage with stronger emphasis on stories and imagery.',
        'Connected sections for articles, visuals, listings, and supporting resources.',
        'Cleaner browsing rhythm designed to make exploration feel easier.',
        'Lightweight interactions that keep the experience fast and readable.',
      ],
      primaryLink: { label: 'Browse releases', href: '/search' },
      secondaryLink: { label: 'Contact support', href: '/contact' },
    },
    cta: {
      badge: 'Start distribution',
      title: 'Put announcements in front of readers with a clearer release experience.',
      description: 'Move from headline to detail, category, search, and contact through one media-focused visual system.',
      primaryCta: { label: 'Browse Releases', href: '/article' },
      secondaryCta: { label: 'Contact Support', href: '/contact' },
    },
    taskSection: {
      heading: 'Latest {label}',
      descriptionSuffix: 'Browse the newest media distribution updates in this section.',
    },
  },
  about: {
    badge: 'About Distribution',
    title: 'A clearer way to distribute public announcements.',
    description: `${slot4BrandConfig.siteName} helps present press releases, company updates, and media-ready announcements in a structured public website experience.`,
    paragraphs: [
      'The site is organized around fast discovery: strong headlines, summaries, media blocks, categories, and clear paths into detail pages.',
      'Each release can stand on its own while still connecting visitors to related updates, search, contact, and account access.',
    ],
    values: [
      {
        title: 'Release-first experience',
        description: 'We prioritize headline clarity, summary context, and visible calls to action for public announcements.',
      },
      {
        title: 'Connected media surfaces',
        description: 'Categories, latest updates, search, and related release cards work together for smoother discovery.',
      },
      {
        title: 'Simple and readable',
        description: 'The layout keeps navigation, release details, contact options, and account access easy to understand.',
      },
    ],
  },
  contact: {
    eyebrow: `Contact ${slot4BrandConfig.siteName}`,
    title: 'Talk to us about your announcement or media distribution needs.',
    description: 'Share what you want to publish, promote, correct, or clarify. The contact form is shaped for release support, campaign planning, and account questions.',
    formTitle: 'Send distribution request',
  },

  search: {
    metadata: {
      title: 'Search',
      description: 'Search posts, topics, categories, and content across the site.',
    },
    hero: {
      badge: 'Search the archive',
      title: 'Find press releases, topics, and media updates faster.',
      description: 'Use keywords, categories, and content types to discover announcements from every active section of the site.',
      placeholder: 'Search by company, topic, release, or category',
    },
    resultsTitle: 'Latest searchable content',
  },
  create: {
    metadata: {
      title: 'Create',
      description: 'Create and submit new content for the site.',
    },
    locked: {
      badge: 'Creator access',
      title: 'Login to create new content.',
      description: 'Use your account to open the publishing workspace and create posts for the active sections of this site.',
    },
    hero: {
      badge: 'Publishing workspace',
      title: 'Create a media-ready announcement.',
      description: 'Add the release details, summary, media, links, and body content needed for a clear public update.',
    },
    formTitle: 'Release details',
    submitLabel: 'Submit release',
    successTitle: 'Release submitted successfully.',
  },
  auth: {
    login: {
      metadataDescription: 'Login page for this site.',
      badge: 'Media access',
      title: 'Sign in to manage distribution activity.',
      description: 'Login to continue with release submissions, account access, and media distribution support.',
      formTitle: 'Sign in',
      submitLabel: 'Sign in',
      noAccount: 'No account matched these details. Create an account first, then login.',
      success: 'Login successful. Redirecting...',
      createCta: 'Create an account',
    },
    signup: {
      metadataDescription: 'Registration page for this site.',
      badge: 'Register',
      title: 'Create an account for media distribution access.',
      description: 'Register to prepare release submissions, save contact details, and request support through the site.',
      formTitle: 'Register account',
      submitLabel: 'Register',
      passwordShort: 'Use at least 4 characters for the password.',
      success: 'Account registered successfully. Redirecting...',
      loginCta: 'Sign in',
    },
  },
  detailPages: {
    article: {
      relatedTitle: 'Related articles',
      fallbackTitle: 'Article details',
    },
    listing: {
      relatedTitle: 'Related listings',
      fallbackTitle: 'Listing details',
    },
    image: {
      relatedTitle: 'Related visuals',
      fallbackTitle: 'Image details',
    },
    profile: {
      relatedTitle: 'Suggested articles',
      fallbackDescription: 'Profile details will appear here once available.',
      visitButton: 'Visit Official Site',
    },
  },
} as const
