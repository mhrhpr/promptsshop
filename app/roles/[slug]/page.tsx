import Link from 'next/link'
import { notFound } from 'next/navigation'
import { roles, workflows } from '@/lib/catalog'
import { WorkflowCard } from '@/components/workflow-card'

export default async function RolePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const role = roles.find(r => r.id.toLowerCase() === slug.toLowerCase())
  if (!role) notFound()
  const roleWorkflows = workflows.filter(w => w.role === role.name)
  return <section className="section shell page-top"><Link href="/roles" className="back">← نقش‌ها</Link><div className="role-hero"><div><div className="kicker">{role.dept}</div><h1 className="page-title">AI Toolkit برای<br/><em>{role.name}</em></h1><p className="page-lead">{role.summary}</p></div><div className="role-hero-card"><span>ROLE PACKAGE</span><b>20</b><small>workflow</small><div>۳ Free / ۱۷ Pro</div></div></div><div className="section-head tight"><h2>Workflowهای این نقش</h2><span>۳ کلیک تا اجرا</span></div><div className="workflow-grid">{roleWorkflows.length ? roleWorkflows.map(w => <WorkflowCard key={w.id} workflow={w}/>) : <div className="empty-state">Workflowهای این نقش در حال آماده‌سازی‌اند.</div>}</div></section>
}
