import Link from 'next/link'
import { roles } from '@/lib/catalog'

export default function RolesPage() {
  return <section className="section shell page-top"><div className="kicker">PROMPTSHOP / ROLES</div><h1 className="page-title">Toolkit شغلی خودت را بساز.</h1><p className="page-lead">هر Role یک بسته کاری است: مسئله‌های واقعی، workflowهای آماده و outcome قابل مشاهده.</p><div className="role-list">{roles.map(role => <Link key={role.id} href={`/roles/${role.id.toLowerCase()}`} className="role-large"><span className="role-icon">{role.icon}</span><div><span className="eyebrow">{role.dept}</span><h2>{role.name}</h2><p>{role.summary}</p><div className="task-row">{role.tasks.map(t => <span key={t}>{t}</span>)}</div></div><span className="big-arrow">↗</span></Link>)}</div></section>
}
