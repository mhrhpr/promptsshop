import Link from 'next/link'
import { Brand } from './logo'

export function Header() {
  return (
    <header className="site-header">
      <div className="shell nav-inner">
        <Link href="/" className="brand-link"><Brand /></Link>
        <nav className="main-nav">
          <Link href="/roles">نقش‌ها</Link>
          <Link href="/search">Workflowها</Link>
          <Link href="/packs">Packs</Link>
        </nav>
        <div className="nav-actions">
          <Link href="/search" className="nav-search">جستجوی کار <span>⌘ K</span></Link>
          <Link href="/packs" className="button button-ghost">ورود</Link>
        </div>
      </div>
    </header>
  )
}
