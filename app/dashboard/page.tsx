import Link from 'next/link'

const recent = [
  ['Employee Turnover Diagnosis','مدیر منابع انسانی','۲ ساعت پیش','خروجی آماده'],
  ['Financial Variance Analysis','تحلیلگر مالی','دیروز','ذخیره شده'],
  ['Campaign Analysis','مدیر بازاریابی','۳ روز پیش','در حال تکمیل'],
]

export default function DashboardPage() {
  return <section className="section shell page-top dashboard-page">
    <div className="dash-header"><div><span className="kicker">OMIND / MY TOOLKIT</span><h1 className="page-title">داشبورد <em>کار تو.</em></h1><p className="page-lead">همه Workflowها، خروجی‌ها و Role Packهای فعال یک‌جا.</p></div><Link href="/search" className="button button-primary">+ Workflow جدید</Link></div>
    <div className="metric-grid"><div className="metric-card"><span>WORKFLOWS</span><strong>12</strong><small>۸ اجرا در این ماه</small></div><div className="metric-card metric-blue"><span>OUTPUTS</span><strong>08</strong><small>۳ خروجی آماده اشتراک</small></div><div className="metric-card metric-yellow"><span>ACTIVE PACKS</span><strong>03</strong><small>۴۸ Workflow در دسترس</small></div><div className="metric-card metric-orange"><span>TIME SAVED</span><strong>6.4h</strong><small>برآورد این ماه</small></div></div>
    <div className="dashboard-grid"><div className="dashboard-panel"><div className="panel-head"><div><span className="section-index">01</span><h2>آخرین فعالیت</h2></div><span>RECENT</span></div><div className="activity-list">{recent.map(([name,role,time,status]) => <Link href="/workflows/hr-turnover" key={name} className="activity-item"><span className="activity-dot"/><div><strong>{name}</strong><small>{role} · {time}</small></div><b>{status}</b><span>↗</span></Link>)}</div></div><div className="dashboard-panel spotlight-panel"><div className="panel-head"><div><span className="section-index">02</span><h2>پیشنهاد امروز</h2></div><span>OMIND AI</span></div><div className="spotlight"><div className="spot-icon">AI</div><span className="eyebrow">BASED ON YOUR ACTIVITY</span><h3>Weekly Sales Action Plan</h3><p>Pipeline reviewهای اخیرت نشان می‌دهد این Workflow می‌تواند review هفتگی را سریع‌تر کند.</p><Link href="/search" className="button button-primary wide">مشاهده Workflow ↗</Link></div></div></div>
    <div className="dashboard-panel saved-panel"><div className="panel-head"><div><span className="section-index">03</span><h2>ابزارهای من</h2></div><Link href="/packs">مدیریت Packs ↗</Link></div><div className="toolkit-row"><span>HR Manager Pack <b>20</b></span><span>Analytics Starter <b>12</b></span><span>Sales Essentials <b>20</b></span><span className="toolkit-add">+ افزودن Pack</span></div></div>
  </section>
}
