'use client'

import Link from 'next/link'
import { Search } from 'lucide-react'
import { useEditableLocalAuthSession } from '@/editable/components/EditableLocalAuthForms'

export function EditableNavbar() {
  const { session, logout } = useEditableLocalAuthSession()
  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ]

  return (
    <header className="sticky top-0 z-50 bg-white text-[#26394f] shadow-[0_2px_12px_rgba(18,62,112,.16)]">
      <div className="bg-[#2c5e9d] text-white">
        <div className="mx-auto flex min-h-11 max-w-[980px] flex-wrap items-center justify-center gap-x-6 gap-y-2 px-4 py-2 text-xs font-black sm:flex-nowrap sm:px-6">
          <Link href="/" className="mr-1 inline-flex items-center" aria-label="Home">
            <img src="/favicon.png" alt="NewsVoir" className="h-8 w-auto rounded bg-white/95 px-1 py-0.5" />
          </Link>
          {navLinks.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
          <form action="/search" className="flex h-8 min-w-[170px] items-center overflow-hidden rounded bg-white text-[#26394f]">
            <input name="q" type="search" placeholder="Search..." className="min-w-0 flex-1 bg-transparent px-2 text-xs font-semibold outline-none placeholder:text-[#71808b]" />
            <button type="submit" className="flex h-full w-8 items-center justify-center text-[#4daf73]" aria-label="Search">
              <Search className="h-4 w-4" />
            </button>
          </form>
          {session ? (
            <>
              <span className="font-black text-white/90">{session.name}</span>
              <button type="button" onClick={logout} className="font-black text-white">
                Logout
              </button>
            </>
          ) : (
            <>
              <Link href="/login">Login</Link>
              <Link href="/signup">Register</Link>
            </>
          )}
        </div>
      </div>
    </header>
  )
}
