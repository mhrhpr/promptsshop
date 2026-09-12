import Link from 'next/link'
import type { Workflow } from '@/lib/catalog'

export function WorkflowCard({ workflow }: { workflow: Workflow }) {
  return (
    <Link href={`/workflows/${workflow.id.toLowerCase()}`} className="workflow-card">
      <div className="card-top"><span className={workflow.free ? 'pill pill-free' : 'pill pill-pro'}>{workflow.free ? 'FREE' : 'PRO'}</span><span className="card-arrow">↗</span></div>
      <div className="eyebrow">{workflow.dept}</div>
      <h3>{workflow.title}</h3>
      <p>{workflow.description}</p>
      <div className="outcome-line"><span>Outcome</span><strong>{workflow.outcome}</strong></div>
    </Link>
  )
}
