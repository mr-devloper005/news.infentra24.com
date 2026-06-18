'use client'

import { FileText, Mail, Megaphone } from 'lucide-react'
import { pagesContent } from '@/editable/content/pages.content'
import { EditableContactLeadForm } from '@/editable/components/EditableContactLeadForm'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'

const desks = [
  { icon: FileText, title: 'Release support', body: 'Share campaign details, source material, corrections, and publishing questions.' },
  { icon: Megaphone, title: 'Distribution planning', body: 'Discuss visibility goals, categories, partner surfaces, and audience fit.' },
  { icon: Mail, title: 'General help', body: 'Reach us for account, login, submission, or website-related help.' },
]

export default function ContactPage() {
  return (
    <EditableSiteShell>
      <main className="bg-[#e7f1f5] text-[#26394f]">
        <section className="bg-white">
          <div className="mx-auto max-w-[980px] px-4 py-14 sm:px-6 lg:py-20">
            <p className="text-xs font-black uppercase tracking-[0.28em] text-[#4daf73]">{pagesContent.contact.eyebrow}</p>
            <h1 className="mt-4 max-w-4xl text-4xl font-black leading-tight text-[#2c5e9d] sm:text-6xl">{pagesContent.contact.title}</h1>
            <p className="mt-6 max-w-2xl border-l-4 border-[#4daf73] pl-5 text-base font-semibold leading-8 text-[#63727e]">{pagesContent.contact.description}</p>
          </div>
        </section>

        <section className="mx-auto grid max-w-[980px] gap-6 px-4 py-10 sm:px-6 lg:grid-cols-[0.75fr_1.25fr]">
          <aside className="grid gap-4">
            {desks.map((desk, index) => (
              <div key={desk.title} className="bg-[#2c5e9d] p-7 text-white shadow-[0_12px_28px_rgba(44,94,157,.18)]">
                <div className="flex items-center justify-between"><desk.icon className="h-6 w-6 text-[#9bd37e]" /><span className="text-xs font-black text-white/60">0{index + 1}</span></div>
                <h2 className="mt-6 text-2xl font-black">{desk.title}</h2>
                <p className="mt-3 text-sm leading-7 text-white/75">{desk.body}</p>
              </div>
            ))}
          </aside>
          <div className="bg-white p-6 shadow-[0_12px_34px_rgba(44,94,157,.12)] sm:p-10">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-[#4daf73]">Send a message</p>
            <h2 className="mt-3 text-4xl font-black text-[#2c5e9d]">{pagesContent.contact.formTitle}</h2>
            <EditableContactLeadForm />
          </div>
        </section>
      </main>
    </EditableSiteShell>
  )
}
