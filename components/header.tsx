import Link from 'next/link'
import { Brand } from './logo'
import { MobileMenu } from './mobile-menu'

export function Header() {
  return <header className="site-header">
    <div className="shell nav-inner">
      <MobileMenu />
      <Link href="/" className="brand-link"><Brand /></Link>
      <nav className="main-nav">
        <Link href="/roles">واحدها و نقش‌ها</Link><Link href="/search">Workflowها</Link><Link href="/packs">Packs</Link><Link href="/dashboard">داشبورد</Link>
      </nav>
      <div className="nav-actions"><Link href="/search" className="nav-search">جستجوی کار <span>⌘ K</span></Link><Link href="/dashboard" className="button button-primary">Toolkit من ↗</Link></div>
    </div>
  </header>
}
