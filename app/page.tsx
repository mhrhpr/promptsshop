import Link from 'next/link'
import { roles, workflows } from '@/lib/catalog'
import { WorkflowCard } from '@/components/workflow-card'
import { OmindChat } from '@/components/omind-chat'

const units = [
  ['01','People / HR','آدم‌ها، عملکرد، استخدام و ریسک منابع انسانی','HR'],
  ['02','Finance & Accounting','اعداد، بودجه، cash-flow و گزارش مدیریتی','₣'],
  ['03','Sales & Business Development','Pipeline، deal، forecast و رشد درآمد','S'],
  ['04','Marketing & Communications','Campaign، funnel، audience و insight','M'],
  ['05','Operations','فرآیند، ظرفیت، SLA و bottleneck','O'],
  ['06','Supply Chain','تأمین، موجودی، لجستیک و demand','SC'],
  ['07','Data & Analytics','KPI، quality، anomaly و decision','D'],
  ['08','Product & Engineering','Problem، roadmap، API و delivery','P'],
]

export default function Home() {
  const free = workflows.filter(w => w.free).slice(0, 4)
  return <>
    <section className="hero">
      <div className="shell hero-grid">
        <div className="hero-copy"><div className="kicker"><span className="pulse"/> OMIND / PROMPTSHOP</div><h1>AI برای <em>کار واقعی.</em><br/>یک مسئله، یک Workflow، یک خروجی.</h1><p className="hero-sub">برای نقش خودت وارد شو، مسئله را انتخاب کن و در چند دقیقه خروجی قابل استفاده بگیر.</p><form action="/search" className="hero-search"><input name="q" placeholder="چه کاری باید انجام بدهی؟ مثال: تحلیل ترک خدمت" aria-label="جستجوی workflow"/><button type="submit">پیدا کن <span>↗</span></button></form><div className="hero-meta"><span>۳۰۰۰+ Workflow در نقشه محصول</span><span>۳ Workflow رایگان برای شروع</span><span>Built by OMIND</span></div></div>
        <div className="hero-visual"><div className="hero-orbit orbit-one"/><div className="hero-orbit orbit-two"/><div className="hero-spark spark-a"/><div className="hero-spark spark-b"/><div className="workflow-window glass-card"><div className="window-top"><span className="window-dots">•••</span><span>OMIND COPILOT / LIVE</span><span>AI READY</span></div><div className="window-body"><small>WORKFLOW</small><h3>Employee Turnover Diagnosis</h3><div className="signal-row"><span>INPUT</span><b>Data + Context</b></div><div className="scan-line"/><div className="signal-row"><span>OUTCOME</span><b className="accent-text">۳ driver + ۲ segment + ۵ action</b></div><div className="mini-result"><b>Evidence</b><b>Risk</b><b>Next Action</b></div><Link href="/workflows/hr-turnover" className="mini-button">مشاهده خروجی ↗</Link></div></div></div>
      </div>
    </section>

    <section className="section shell units-section"><div className="section-head"><div><span className="section-index">01</span><div><h2>واحدت را انتخاب کن</h2><p>کارت‌های کاربردی به‌جای فهرست خشک دسته‌بندی‌ها.</p></div></div><Link href="/roles">همه نقش‌ها ↗</Link></div><div className="unit-grid">{units.map(([n,name,desc,icon]) => <Link href="/roles" className="unit-card" key={name}><span className="unit-no">{n}</span><span className="unit-icon">{icon}</span><h3>{name}</h3><p>{desc}</p><span className="unit-arrow">↗</span></Link>)}</div></section>

    <section className="section section-soft"><div className="shell"><div className="section-head"><div><span className="section-index">02</span><div><h2>نقش → مسئله → Workflow</h2><p>حداکثر سه حرکت تا کار اصلی.</p></div></div><Link href="/search">جستجو ↗</Link></div><div className="workflow-grid">{free.map(w => <WorkflowCard key={w.id} workflow={w}/>)}</div></div></section>

    <OmindChat />

    <section className="section shell dashboard-teaser"><div className="dash-card"><div className="dash-copy"><span className="section-index">05</span><h2>کار تو، در یک Dashboard.</h2><p>Workflowهای ذخیره‌شده، آخرین خروجی‌ها، بسته‌های فعال و مسیرهای پرتکرار را یک‌جا ببین.</p><Link className="button button-primary" href="/dashboard">ورود به داشبورد ↗</Link></div><div className="dash-preview"><div className="dash-top"><span>MY TOOLKIT</span><b>۳ Active</b></div><div className="dash-stat-grid"><div><strong>12</strong><small>Workflow</small></div><div><strong>08</strong><small>Output</small></div><div><strong>03</strong><small>Packs</small></div></div><div className="dash-list"><span>Employee Turnover Diagnosis</span><span>Financial Variance Analysis</span><span>Campaign Analysis</span></div></div></div></section>

    <section className="cta"><div className="shell cta-inner"><div><span className="kicker">BUILT BY OMIND</span><h2>Prompt را نمی‌فروشیم.<br/><em>Outcome را قابل تکرار می‌کنیم.</em></h2></div><Link href="/roles" className="button button-primary">شروع کار با OMIND →</Link></div></section>
  </>
}
