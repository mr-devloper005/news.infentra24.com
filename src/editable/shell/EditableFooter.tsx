'use client'

import Link from 'next/link'
import { SITE_CONFIG } from '@/lib/site-config'
import { useEditableLocalAuthSession } from '@/editable/components/EditableLocalAuthForms'

export function EditableFooter() {
  const year = new Date().getFullYear()
  const { session, logout } = useEditableLocalAuthSession()
  const emailHost = SITE_CONFIG.baseUrl.replace(/^https?:\/\//, '').replace(/\/$/, '') || SITE_CONFIG.name.toLowerCase().replace(/\s+/g, '')
  const footerLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ]

  return (
    <footer className="bg-[#123e70] text-white">
      <section className="bg-[#2c5e9d] py-4 text-center text-2xl font-black uppercase tracking-tight sm:text-3xl">
        Distribution Highlights
      </section>

      <section className="relative overflow-hidden bg-[#d8e8ee] text-[#17436f]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(255,255,255,.84),transparent_42%),linear-gradient(90deg,rgba(44,94,157,.24),transparent,rgba(44,94,157,.22))]" />
        <div className="relative mx-auto grid max-w-[980px] gap-8 px-4 py-10 text-center sm:grid-cols-3 sm:px-6">
          {['BRAND TEAMS', 'EDUCATION', 'INDUSTRY DESKS'].map((name) => (
            <div key={name} className="footer-highlight">
              <div className="mx-auto h-36 w-36 overflow-hidden rounded-full border-[10px] border-[#173e67] bg-white shadow-xl">
                <img src={`/placeholder.svg?height=240&width=240&text=${encodeURIComponent(name)}`} alt="" className="h-full w-full object-cover" />
              </div>
              <h3 className="mt-6 text-xl font-black">{name}</h3>
              <p className="mt-2 text-sm leading-6 text-[#102f4f]">&quot;Clear distribution and dependable visibility for public updates.&quot;</p>
              <Link href="/about" className="mt-2 inline-flex text-xs text-[#2c5e9d]">Read more</Link>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#d7ebf1] text-[#2c5e9d]">
        <div className="mx-auto flex max-w-[980px] flex-wrap items-center justify-center gap-5 px-4 py-4 sm:px-6">
          
       
        </div>
      </section>

      <div className="mx-auto max-w-[980px] px-4 py-8 sm:px-6">
        <div className="grid gap-8 lg:grid-cols-[.8fr_.8fr_1.4fr]">
          <div>
            <h3 className="text-sm font-semibold">Quick Links</h3>
            <div className="mt-4 grid gap-3 text-xs text-white/82">
              {footerLinks.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold">Access</h3>
            <div className="mt-4 grid gap-3 text-xs text-white/82">
              {session ? (
                <button type="button" onClick={logout} className="w-fit text-left font-black text-white">
                  Logout
                </button>
              ) : (
                <>
                  <Link href="/login">Sign In</Link>
                  <Link href="/signup">Register</Link>
                </>
              )}
            </div>
          </div>
          
        </div>
      </div>

      <div className="border-t border-white/10 bg-white px-4 py-4 text-xs text-[#2c5e9d]">Copyright {year}, {SITE_CONFIG.name} - All rights reserved</div>
    </footer>
  )
}
