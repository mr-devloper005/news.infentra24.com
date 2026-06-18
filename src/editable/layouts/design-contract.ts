import type { CSSProperties } from 'react'

export const editableRootStyle = {
  '--slot4-page-bg': '#eaf3f6',
  '--slot4-page-text': '#26394f',
  '--slot4-panel-bg': '#dcebf0',
  '--slot4-surface-bg': '#ffffff',
  '--slot4-muted-text': '#5d6b76',
  '--slot4-soft-muted-text': '#71808b',
  '--slot4-accent': '#4daf73',
  '--slot4-accent-fill': '#2c5e9d',
  '--slot4-accent-soft': '#cfe6d7',
  '--slot4-dark-bg': '#123e70',
  '--slot4-dark-text': '#ffffff',
  '--slot4-media-bg': '#d9e8ed',
  '--slot4-cream': '#eaf3f6',
  '--slot4-warm': '#ffffff',
  '--slot4-lavender': '#4daf73',
  '--slot4-gray': '#d7e6eb',
  '--slot4-body-gradient': 'linear-gradient(180deg, #f2f8fa 0%, #e7f1f5 48%, #ffffff 100%)',
} as CSSProperties

export const editablePalette = {
  pageBg: 'bg-[var(--slot4-page-bg)]',
  pageText: 'text-[var(--slot4-page-text)]',
  panelBg: 'bg-[var(--slot4-panel-bg)]',
  panelText: 'text-[var(--slot4-page-text)]',
  surfaceBg: 'bg-[var(--slot4-surface-bg)]',
  surfaceText: 'text-[var(--slot4-page-text)]',
  mutedText: 'text-[var(--slot4-muted-text)]',
  softMutedText: 'text-[var(--slot4-soft-muted-text)]',
  accentText: 'text-[var(--slot4-accent)]',
  accentBg: 'bg-[var(--slot4-accent-fill)]',
  accentSoftBg: 'bg-[var(--slot4-accent-soft)]',
  accentSoftText: 'text-[var(--slot4-accent-soft)]',
  darkBg: 'bg-[var(--slot4-dark-bg)]',
  darkText: 'text-[var(--slot4-dark-text)]',
  mediaBg: 'bg-[var(--slot4-media-bg)]',
  creamBg: 'bg-[var(--slot4-cream)]',
  warmBg: 'bg-[var(--slot4-warm)]',
  lavenderBg: 'bg-[var(--slot4-lavender)]',
  grayBg: 'bg-[var(--slot4-gray)]',
  border: 'border-black/15',
  darkBorder: 'border-white/20',
  shadow: 'shadow-[0_10px_30px_rgba(17,17,17,0.08)]',
  shadowStrong: 'shadow-[0_24px_70px_rgba(17,17,17,0.18)]',
  overlay: 'bg-[linear-gradient(180deg,rgba(0,0,0,0.02),rgba(0,0,0,0.78))]',
} as const

export const editableDesignContract = {
  shell: {
    page: `min-h-screen ${editablePalette.pageBg} ${editablePalette.pageText}`,
    section: 'mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-10',
    sectionY: 'py-12 sm:py-16 lg:py-20',
  },
  layout: {
    safeGrid: 'grid gap-px bg-black/15 md:grid-cols-2 xl:grid-cols-3',
    featureGrid: 'grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-start',
    rail: 'flex snap-x gap-4 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden',
    minRailCard: 'w-[230px] shrink-0 snap-start sm:w-[260px]',
  },
  type: {
    eyebrow: 'text-[11px] font-black uppercase tracking-[0.2em]',
    heroTitle: 'text-4xl font-black leading-[0.94] tracking-[-0.055em] sm:text-6xl lg:text-[5.4rem]',
    sectionTitle: 'text-3xl font-black leading-none tracking-[-0.045em] sm:text-4xl',
    body: 'text-base leading-8',
  },
  surface: {
    card: `border ${editablePalette.border} ${editablePalette.surfaceBg}`,
    soft: `border ${editablePalette.border} ${editablePalette.surfaceBg}`,
    dark: `${editablePalette.darkBg} ${editablePalette.darkText}`,
  },
  button: {
    primary: `inline-flex items-center justify-center gap-2 bg-[var(--slot4-dark-bg)] px-7 py-3.5 text-xs font-black uppercase tracking-[0.12em] text-white transition hover:bg-[var(--slot4-accent)]`,
    secondary: `inline-flex items-center justify-center gap-2 border border-[#2c5e9d]/30 bg-white px-7 py-3.5 text-xs font-black uppercase tracking-[0.12em] text-[#2c5e9d] transition hover:bg-[#2c5e9d] hover:text-white`,
    accent: `inline-flex items-center justify-center gap-2 bg-[var(--slot4-accent-fill)] px-7 py-3.5 text-xs font-black uppercase tracking-[0.12em] text-white transition hover:bg-[var(--slot4-accent)]`,
  },
  media: {
    frame: `relative overflow-hidden ${editablePalette.mediaBg}`,
    ratio: 'aspect-[4/3]',
  },
  motion: {
    lift: 'transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_48px_rgba(17,17,17,0.14)]',
    fade: 'transition duration-300 hover:opacity-75',
  },
} as const

export const aiLayoutRules = [
  'All visible layout decisions belong inside src/editable; keep data, SEO, API, and route logic untouched.',
  'Use a media-distribution portal look with blue masthead bars, green headings, pale blue panels, and list-heavy news sections.',
  'Keep dynamic post fetching intact and never replace backend posts with mock arrays.',
  'Use postHref() for all post links so route aliases and task-specific detail pages remain functional.',
  'Prioritize readable desktop and mobile layouts with broad story columns and a focused long-form article measure.',
  'Branding must remain dynamic from SITE_CONFIG; never hardcode a reference publication name or logo.',
] as const
