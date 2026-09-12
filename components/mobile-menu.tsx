'use client'

import Link from 'next/link'
import { useState } from 'react'

export function MobileMenu() {
  const [open, setOpen] = useState(false)
  return (
    <div className="mobile-menu">
      <button className="hamburger" aria-label="باز کردن منو" aria-expanded={open} onClick={() => setOpen(v => !v)}>
        <span/><span/><span/>
      </button>
      {open && <div className="mobile-drawer">
        <div className="mobile-drawer-head"><strong>OMIND<span> / PromptShop</span></strong><button onClick={() => setOpen(false)}>×</button></div>
        <Link onClick={() => setOpen(false)} href="/">خانه</Link>
        <Link onClick={() => setOpen(false)} href="/roles">واحدها و نقش‌ها</Link>
        <Link onClick={() => setOpen(false)} href="/search">جستجوی Workflow</Link>
        <Link onClick={() => setOpen(false)} href="/packs">Role Packs</Link>
        <Link onClick={() => setOpen(false)} href="/dashboard">داشبورد کاربر</Link>
      </div>}
    </div>
  )
}
