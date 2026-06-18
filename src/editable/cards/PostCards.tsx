import Link from 'next/link'
import { ArrowRight, Clock3 } from 'lucide-react'
import type { SitePost } from '@/lib/site-connector'
import type { TaskKey } from '@/lib/site-config'
import { editableDesignContract as dc, editablePalette as pal } from '@/editable/layouts/design-contract'

export function getEditablePostImage(post?: SitePost | null) {
  const media = Array.isArray(post?.media) ? post.media : []
  const mediaUrl = media.find((item) => typeof item?.url === 'string' && item.url)?.url
  const content = post?.content && typeof post.content === 'object' ? post.content as Record<string, unknown> : {}
  const images = Array.isArray(content.images) ? content.images : []
  const contentImage = images.find((value): value is string => typeof value === 'string' && Boolean(value))
  const directImage = ['featuredImage', 'image', 'thumbnail', 'coverImage', 'logo']
    .map((key) => content[key])
    .find((value): value is string => typeof value === 'string' && Boolean(value))
  return mediaUrl || directImage || contentImage || '/placeholder.svg?height=900&width=1400'
}

export function getEditableExcerpt(post?: SitePost | null, limit = 150) {
  const content = post?.content && typeof post.content === 'object' ? post.content as Record<string, unknown> : {}
  const raw =
    (typeof content.description === 'string' && content.description) ||
    (typeof content.summary === 'string' && content.summary) ||
    (typeof content.body === 'string' && content.body) ||
    post?.summary ||
    ''
  const clean = raw.replace(/<[^>]*>/g, ' ').replace(/&[a-z]+;/gi, ' ').replace(/\s+/g, ' ').trim()
  return clean.length > limit ? `${clean.slice(0, limit).trim()}...` : clean
}

export function getEditableCategory(post?: SitePost | null) {
  const content = post?.content && typeof post.content === 'object' ? post.content as Record<string, unknown> : {}
  return (typeof content.category === 'string' && content.category) || post?.tags?.[0] || 'Latest'
}

export function postHref(task: TaskKey, post: SitePost, route = `/${task}`) {
  return `${route}/${post.slug}`
}

export function EditorialFeatureCard({ post, href, label = 'Cover story' }: { post: SitePost; href: string; label?: string }) {
  return (
    <Link href={href} className="group block min-w-0 bg-[#2c5e9d] text-white shadow-[0_18px_45px_rgba(44,94,157,.2)]">
      <div className="relative aspect-[16/10] min-h-[360px] overflow-hidden">
        <img src={getEditablePostImage(post)} alt={post.title} className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-[1.025]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(18,62,112,.08),rgba(18,62,112,.86))]" />
        <div className="absolute inset-x-0 bottom-0 p-6 sm:p-9">
          <span className="bg-[#4daf73] px-3 py-2 text-[10px] font-black uppercase tracking-[.18em]">{label}</span>
          <h3 className="mt-5 max-w-4xl text-3xl font-black leading-tight sm:text-5xl">{post.title}</h3>
          <p className="mt-5 max-w-2xl text-sm leading-7 text-white/80 sm:text-base">{getEditableExcerpt(post, 190)}</p>
        </div>
      </div>
    </Link>
  )
}

export function RailPostCard({ post, href, index }: { post: SitePost; href: string; index: number }) {
  const imageFirst = index % 3 === 2
  return (
    <Link href={href} className={`group ${dc.layout.minRailCard} block bg-white shadow-[0_8px_24px_rgba(44,94,157,.12)] transition duration-300 hover:-translate-y-1 ${imageFirst ? 'pt-0' : 'border-t-4 border-[#4daf73]'}`}>
      <div className={`relative overflow-hidden bg-[var(--slot4-media-bg)] ${imageFirst ? 'aspect-[5/4]' : 'aspect-[16/10]'}`}>
        <img src={getEditablePostImage(post)} alt={post.title} className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105" />
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between gap-3 text-[10px] font-black uppercase tracking-[.14em] text-[#4daf73]">
          <span>{getEditableCategory(post)}</span><span>{String(index + 1).padStart(2, '0')}</span>
        </div>
        <h3 className="mt-3 line-clamp-3 text-lg font-black leading-tight text-[#26394f]">{post.title}</h3>
      </div>
    </Link>
  )
}

export function CompactIndexCard({ post, href, index }: { post: SitePost; href: string; index: number }) {
  return (
    <Link href={href} className="group grid min-w-0 grid-cols-[46px_1fr] gap-4 border-t border-[#b8d2de] py-5 first:border-t-0">
      <span className="text-3xl font-black leading-none text-[#2c5e9d]">{String(index + 1).padStart(2, '0')}</span>
      <div className="min-w-0">
        <p className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[.14em] text-[#71808b]"><Clock3 className="h-3 w-3" /> {getEditableCategory(post)}</p>
        <h3 className="mt-2 line-clamp-3 text-lg font-black leading-tight text-[#26394f] group-hover:text-[#4daf73]">{post.title}</h3>
      </div>
    </Link>
  )
}

export function ArticleListCard({ post, href, index }: { post: SitePost; href: string; index: number }) {
  return (
    <Link href={href} className="group grid min-w-0 border-t border-[#d3e1e8] py-6 sm:grid-cols-[120px_minmax(0,1fr)_140px] sm:gap-5">
      <div className="relative aspect-square overflow-hidden border border-dashed border-red-400 bg-[var(--slot4-media-bg)]">
        <img src={getEditablePostImage(post)} alt={post.title} className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105" />
      </div>
      <div className="min-w-0 pt-4 sm:pt-1">
        <p className="text-xs text-[#0052a3]">{getEditableCategory(post)}</p>
        <h2 className="mt-1 line-clamp-2 text-lg font-black leading-tight text-[#0052a3] group-hover:text-[#4daf73]">{post.title}</h2>
        <p className={`mt-2 line-clamp-2 text-sm leading-6 ${pal.mutedText}`}>{getEditableExcerpt(post, 210)}</p>
        <span className="mt-3 inline-flex items-center gap-2 text-xs text-[#0052a3]">Read More <ArrowRight className="h-3 w-3" /></span>
      </div>
      <div className="hidden items-center justify-end gap-2 text-xs text-[#71808b] sm:flex">
        <span className="border border-[#d9e8ed] bg-[#f1f7f9] px-2 py-1">JPG</span>
        <span className="border border-[#d9e8ed] bg-white px-2 py-1">Share</span>
      </div>
    </Link>
  )
}
