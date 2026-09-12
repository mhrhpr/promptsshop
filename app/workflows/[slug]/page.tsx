import Link from 'next/link'
import { notFound } from 'next/navigation'
import { workflows } from '@/lib/catalog'

export default async function WorkflowPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const workflow = workflows.find(w => w.id.toLowerCase() === slug.toLowerCase())
  if (!workflow) notFound()
  return <section className="section shell page-top"><Link href="/search" className="back">← Workflowها</Link><div className="workflow-detail"><div className="detail-main"><div className="card-top"><span className={workflow.free ? 'pill pill-free' : 'pill pill-pro'}>{workflow.free ? 'FREE' : 'PRO'}</span><span className="eyebrow">{workflow.dept}</span></div><h1 className="page-title">{workflow.title}</h1><p className="page-lead">{workflow.description}</p><div className="outcome-panel"><span>OUTCOME</span><h2>{workflow.outcome}</h2><div className="result-preview"><div><b>Executive answer</b><small>خلاصه تصمیم‌پذیر برای مدیر</small></div><div><b>Evidence</b><small>Facts / calculations / assumptions</small></div><div><b>Next actions</b><small>اقدام، مالک، اولویت</small></div></div></div><div className="detail-block"><span className="eyebrow">HOW IT WORKS</span><ol><li>Context و input را وارد می‌کنی.</li><li>Workflow کمبود داده و تناقض را چک می‌کند.</li><li>خروجی را برای کار حرفه‌ای تحویل می‌گیری.</li></ol></div></div><aside className="detail-side"><div className="execute-card"><span>ROLE</span><b>{workflow.role}</b><span>MODEL</span><b>ChatGPT / Claude / Gemini</b><span>ACCESS</span><b>{workflow.free ? 'رایگان' : 'نیازمند Pack'}</b><Link href={workflow.free ? '/search' : '/packs'} className="button button-primary wide">{workflow.free ? 'اجرای Workflow →' : 'باز کردن Pack →'}</Link></div></aside></div></section>
}
