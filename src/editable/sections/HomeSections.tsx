import Link from 'next/link'
import { ArrowRight, BarChart3, CircleDollarSign, MonitorPlay, Search, Smartphone } from 'lucide-react'
import type { SitePost } from '@/lib/site-connector'
import type { HomeTimeSection } from '@/lib/task-data'
import type { TaskKey } from '@/lib/site-config'
import { SITE_CONFIG } from '@/lib/site-config'
import { editableDesignContract as dc } from '@/editable/layouts/design-contract'

type HomeSectionProps = {
  primaryTask: TaskKey
  primaryRoute: string
  posts: SitePost[]
  timeSections: HomeTimeSection[]
}

const benefitItems = [
  { icon: MonitorPlay, title: 'Instant Visibility', text: 'Instant access to media points, public categories, and browsing audiences.' },
  { icon: BarChart3, title: 'Exponential Reach', text: 'Get updates covered across online news, social channels, and partner surfaces.' },
  { icon: CircleDollarSign, title: 'Cost effective', text: 'A practical way to tell your story and stay visible with potential customers.' },
  { icon: Smartphone, title: 'Multimedia Content', text: 'Connect through videos, photos, infographics, documents, and clear updates.' },
]

const networkItems = [
  ['Print Media', 'Newspapers, magazines, regional and trade publications'],
  ['Social Media', 'Facebook, Twitter, YouTube, Pinterest and social communities'],
  ['News Agencies', 'National, financial, and agency-style channels'],
  ['Online Media', 'News portals, industry websites, blogs and newsletters'],
  ['Financial Media', 'Print and online financial publications and brokerage networks'],
]

function taskLabel(task: TaskKey) {
  return SITE_CONFIG.tasks.find((item) => item.key === task)?.label || task
}

export function EditableHomeHero(_props: HomeSectionProps) {
  return (
    <section className="overflow-hidden bg-white">
      <Link href="/search" className="nv-hero-kenburns group relative block min-h-[400px] overflow-hidden bg-[#2c5e9d] sm:min-h-[520px]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(255,255,255,.28),transparent_34%),linear-gradient(120deg,rgba(12,44,80,.95),rgba(44,94,157,.7)),url('/placeholder.svg?height=900&width=1600')]" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(12,44,80,.68),rgba(12,44,80,.18)),linear-gradient(180deg,transparent_0%,rgba(12,44,80,.25)_100%)]" />
        <div className="absolute left-1/2 top-[18%] w-[min(760px,92vw)] -translate-x-1/2 bg-[#123e70]/88 px-5 py-5 text-center text-white shadow-[0_18px_60px_rgba(18,62,112,.25)] sm:px-10">
          <p className="text-xl font-black uppercase leading-none sm:text-3xl">Start your <span className="text-4xl sm:text-5xl">Communication</span> Journey &</p>
          <h1 className="text-4xl font-black uppercase leading-none sm:text-5xl">Amplify Your Message</h1>
          <p className="mt-4 bg-[#2c5e9d] py-2 text-lg font-black uppercase sm:text-xl">With Media Network Services</p>
        </div>
        
        <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 gap-2">
          {[0, 1, 2, 3].map((item) => <span key={item} className={`h-2 w-2 rounded-full ${item === 3 ? 'bg-[#2f80ed]' : 'bg-white/50'}`} />)}
        </div>
      </Link>
    </section>
  )
}

export function EditableStoryRail(_props: HomeSectionProps) {
  return (
    <section className="bg-[#e7f1f5] py-11">
      <div className="mx-auto max-w-[980px] px-4 sm:px-6">
        <h2 className="nv-section-title">The Benefits You Get</h2>
        <div className="mt-10 grid gap-8 text-center sm:grid-cols-2 lg:grid-cols-4">
          {benefitItems.map((item, index) => (
            <div key={item.title} className="nv-float" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="mx-auto flex h-36 w-36 items-center justify-center rounded-full bg-[#2c5e9d] text-[#7fbd65] shadow-lg ring-8 ring-[#2c5e9d]/5">
                <item.icon className="h-16 w-16" />
              </div>
              <div className="mx-auto mt-8 h-px w-24 bg-[#2c5e9d]" />
              <h3 className="mt-5 font-black text-[#3f4b56]">{item.title}</h3>
              <p className="mx-auto mt-3 max-w-[190px] text-sm leading-6 text-[#687783]">{item.text}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link href="/signup" className="nv-blue-button">Get Started Today <ArrowRight className="h-4 w-4" /></Link>
        </div>
      </div>
    </section>
  )
}

export function EditableMagazineSplit(_props: HomeSectionProps) {
  return (
    <section className="bg-white py-10">
      <div className="text-center">
        <h2 className="nv-section-title">Our Media Network</h2>
        <p className="mt-4 text-sm text-black">NewsVoir positions your news to a large media network ensuring you get maximum visibility</p>
      </div>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5">
        {networkItems.map(([title, text], index) => (
          <div key={title} className={`${index % 2 === 0 ? 'bg-[#2c5e9d] text-white' : 'bg-[#c8dde3] text-[#2c5e9d]'} flex min-h-[150px] flex-col items-center justify-center px-6 text-center`}>
            <h3 className="text-xl font-black uppercase">{title}</h3>
            <p className="mt-4 text-base font-semibold leading-6">{text}</p>
          </div>
        ))}
      </div>
      <div className="mx-auto grid max-w-[980px] divide-y divide-[#4daf73] py-8 text-center sm:grid-cols-3 sm:divide-x sm:divide-y-0">
        {['Broad|Journalist Reach', 'Active|Publication Network', 'Many|Industry Categories'].map((item) => {
          const [number, label] = item.split('|')
          return <div key={label} className="py-4"><p className="text-4xl font-light text-[#2c5e9d]">{number}</p><p className="uppercase text-[#5d6b76]">{label}</p></div>
        })}
      </div>
    </section>
  )
}

export function EditableTimeCollections(_props: HomeSectionProps) {
  return (
    <section className="bg-[#e7f1f5] py-10">
      <div className="mx-auto max-w-[980px] px-4 sm:px-6">
        <h2 className="nv-section-title">Distribution Categories</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {['Business Announcements', 'Technology Updates', 'Public Relations', 'Industry News', 'Financial Media', 'Online Media', 'Brand Visibility', 'Reputation Updates'].map((item) => (
            <Link key={item} href={`/search?category=${encodeURIComponent(item)}`} className="bg-white px-5 py-4 text-center text-sm font-black text-[#2c5e9d] shadow-[0_8px_22px_rgba(44,94,157,.1)] transition hover:-translate-y-1 hover:text-[#4daf73]">
              {item}
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export function EditableHomeCta() {
  return (
    <section className="bg-[#e7f1f5] py-12">
      <div className={`${dc.shell.section} text-center`}>
        <p className="text-sm font-black uppercase tracking-[.2em] text-[#2c5e9d]">Search the network</p>
        <h2 className="mt-3 text-3xl font-black text-[#4daf73]">Explore media updates, categories, and announcements</h2>
        <form action="/search" className="mx-auto mt-7 flex max-w-2xl border border-[#b8cbd5] bg-white">
          <Search className="ml-4 mt-4 h-4 w-4 text-[#4daf73]" />
          <input name="q" placeholder={`Search ${taskLabel('mediaDistribution')} and latest updates`} className="min-w-0 flex-1 px-3 py-3 text-sm outline-none" />
          <button className="nv-blue-button">Search</button>
        </form>
      </div>
    </section>
  )
}
