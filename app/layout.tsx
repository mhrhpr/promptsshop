import type { Metadata } from 'next'
import { Vazirmatn } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/header'

const vazirmatn = Vazirmatn({
  subsets: ['arabic'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-fa',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'OMIND — PromptShop | AI Workflows for Real Work',
  description: 'Professional AI workflows for real work. Built by OMIND.',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fa" dir="rtl" className={vazirmatn.variable}>
      <body>
        <div className="ambient ambient-a" />
        <div className="ambient ambient-b" />
        <Header />
        <main>{children}</main>
        <footer className="site-footer">
          <div className="shell footer-inner">
            <div><strong>OMIND</strong><span className="footer-divider">/</span>PromptShop</div>
            <span>Professional AI workflows for real work.</span>
          </div>
        </footer>
      </body>
    </html>
  )
}
