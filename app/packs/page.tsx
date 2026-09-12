import Link from 'next/link'

export default function PacksPage() {
  const packs = [['HR Manager Pack','۲۰ workflow برای People / HR','۳ رایگان + ۱۷ حرفه‌ای'],['Finance Analyst Pack','۲۰ workflow برای Finance','۳ رایگان + ۱۷ حرفه‌ای'],['Sales Manager Pack','۲۰ workflow برای Sales','۳ رایگان + ۱۷ حرفه‌ای']]
  return <section className="section shell page-top"><div className="kicker">PROMPTSHOP / PACKS</div><h1 className="page-title">یک نقش. یک Toolkit کامل.</h1><p className="page-lead">به‌جای خرید prompt تکی، ابزارهای مورد نیاز یک نقش را یکجا داشته باش.</p><div className="pack-grid">{packs.map(([name,sub,meta],i)=><div className="pack-card" key={name}><div className="pack-no">0{i+1}</div><span className="eyebrow">ROLE PACKAGE</span><h2>{name}</h2><p>{sub}</p><div className="pack-meta">{meta}</div><Link href="/roles" className="button button-ghost wide">مشاهده Toolkit ↗</Link></div>)}</div></section>
}
