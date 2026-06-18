import type { Metadata } from 'next'
import Link from 'next/link'
import { buildPageMetadata } from '@/lib/seo'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'
import { EditableLocalLoginForm } from '@/editable/components/EditableLocalAuthForms'
import { pagesContent } from '@/editable/content/pages.content'

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata({ path: '/login', title: 'Login', description: pagesContent.auth.login.metadataDescription })
}

export default function LoginPage() {
  return (
    <EditableSiteShell>
      <main className="bg-[#e7f1f5] text-[#26394f]">
        <section className="mx-auto grid min-h-[calc(100vh-12rem)] max-w-[980px] bg-white shadow-[0_18px_55px_rgba(44,94,157,.14)] lg:grid-cols-[1.08fr_0.92fr]">
          <div className="relative flex flex-col justify-center overflow-hidden bg-[#2c5e9d] p-8 text-white sm:p-12 lg:p-16">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,.25),transparent_32%)]" />
            <div className="relative">
            <p className="text-xs font-black uppercase tracking-[0.28em]">{pagesContent.auth.login.badge}</p>
            <h1 className="mt-5 max-w-xl text-4xl font-black leading-tight sm:text-6xl">{pagesContent.auth.login.title}</h1>
            <p className="mt-6 max-w-lg text-sm font-semibold leading-8 text-white/75">{pagesContent.auth.login.description}</p>
            </div>
          </div>
          <div className="flex flex-col justify-center p-7 sm:p-12 lg:p-16">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-[#4daf73]">Sign in</p>
            <h2 className="mt-3 text-4xl font-black text-[#2c5e9d]">{pagesContent.auth.login.formTitle}</h2>
            <EditableLocalLoginForm />
            <p className="mt-5 border-t border-[#d7e4eb] pt-5 text-sm text-[#63727e]">New here? <Link href="/signup" className="font-black text-[#2c5e9d] underline-offset-4 hover:underline">{pagesContent.auth.login.createCta}</Link></p>
          </div>
        </section>
      </main>
    </EditableSiteShell>
  )
}
