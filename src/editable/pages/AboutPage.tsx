import Link from 'next/link'
import { BarChart3, Globe2, Newspaper, ShieldCheck } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/site-config'
import { pagesContent } from '@/editable/content/pages.content'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'

const values = [
  { icon: Globe2, title: 'Wide discovery', text: 'Make public updates easier to find across categories, search, and related reading paths.' },
  { icon: Newspaper, title: 'Media-ready pages', text: 'Present each announcement with clean hierarchy, summary, imagery, and source context.' },
  { icon: BarChart3, title: 'Clear momentum', text: 'Help visitors move from headline to detail without losing the broader story.' },
  { icon: ShieldCheck, title: 'Reliable structure', text: 'Keep routes, post data, and publishing flows consistent while improving the experience.' },
]

export default function AboutPage() {
  return (
    <EditableSiteShell>
      <main className="bg-[#e7f1f5] text-[#26394f]">
        <section className="relative overflow-hidden bg-[#2c5e9d] text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,255,.22),transparent_35%)]" />
          <div className="relative mx-auto max-w-[980px] px-4 py-16 sm:px-6 lg:py-24">
            <p className="text-xs font-black uppercase tracking-[0.28em] text-[#b8e6c7]">{pagesContent.about.badge}</p>
            <h1 className="mt-5 max-w-4xl text-4xl font-black leading-tight sm:text-6xl">Media distribution built around clear public updates.</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/82">{pagesContent.about.description}</p>
          </div>
        </section>

        <section className="mx-auto grid max-w-[980px] gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[1.1fr_.9fr]">
          <article className="bg-white p-8 shadow-[0_12px_34px_rgba(44,94,157,.12)]">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#4daf73]">About {SITE_CONFIG.name}</p>
            <div className="article-content mt-7">
              {pagesContent.about.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
            <Link href="/search" className="nv-blue-button mt-5">Explore Distribution</Link>
          </article>
          <aside className="grid gap-4">
            {values.map((value) => (
              <div key={value.title} className="bg-white p-5 shadow-[0_8px_24px_rgba(44,94,157,.1)]">
                <div className="flex items-center gap-3 text-[#2c5e9d]"><value.icon className="h-6 w-6" /><h2 className="text-xl font-black">{value.title}</h2></div>
                <p className="mt-3 text-sm leading-6 text-[#63727e]">{value.text}</p>
              </div>
            ))}
          </aside>
        </section>
      </main>
    </EditableSiteShell>
  )
}
