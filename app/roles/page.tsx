import Link from 'next/link'
import { roles } from '@/lib/catalog'

const units = [
  ['People / HR','آدم‌ها، عملکرد، استخدام و workforce','HR'],
  ['Finance & Accounting','بودجه، cash-flow، کنترل و گزارش','₣'],
  ['Sales & Business Development','Pipeline، deal، forecast و revenue','S'],
  ['Marketing & Communications','Campaign، funnel، audience و content','M'],
  ['Operations','فرآیند، capacity، SLA و bottleneck','O'],
  ['Supply Chain & Procurement','تأمین، خرید، موجودی و logistics','SC'],
  ['Data & Analytics','KPI، quality، insight و decision','D'],
  ['Product & Engineering','Product، software، delivery و technical work','P'],
]

export default function RolesPage() {
  return <section className="section shell page-top"><div className="kicker">OMIND / ORGANIZATION MAP</div><h1 className="page-title">واحد را انتخاب کن.<br/><em>نقش خودت را باز کن.</em></h1><p className="page-lead">ساختار PromptShop از سازمان → واحد → نقش → مسئله → Workflow می‌رود؛ تا مسیر انتخاب کوتاه بماند.</p><div className="unit-grid role-units">{units.map(([name,desc,icon]) => <Link href="#roles" className="unit-card" key={name}><span className="unit-icon">{icon}</span><h3>{name}</h3><p>{desc}</p><span className="unit-arrow">↓</span></Link>)}</div><div id="roles" className="section-head tight"><div><span className="section-index">01</span><div><h2>نقش‌های در دسترس</h2><p>هر نقش = یک Role Package با Workflowهای تخصصی.</p></div></div><span>۳ کلیک تا اجرا</span></div><div className="role-list">{roles.map(role => <Link key={role.id} href={`/roles/${role.id.toLowerCase()}`} className="role-large"><span className="role-icon">{role.icon}</span><div><span className="eyebrow">{role.dept}</span><h2>{role.name}</h2><p>{role.summary}</p><div className="task-row">{role.tasks.map(t => <span key={t}>{t}</span>)}</div></div><span className="big-arrow">↗</span></Link>)}</div></section>
}
