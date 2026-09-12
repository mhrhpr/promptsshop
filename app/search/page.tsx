import Link from 'next/link'
import { workflows } from '@/lib/catalog'
import { WorkflowCard } from '@/components/workflow-card'

export default async function SearchPage({ searchParams }: { searchParams: Promise<{ q?: string }> }) {
  const { q = '' } = await searchParams
  const needle = q.trim().toLowerCase()
  const results = needle ? workflows.filter(w => `${w.title} ${w.description} ${w.role} ${w.dept} ${w.outcome}`.toLowerCase().includes(needle)) : workflows
  return <section className="section shell page-top"><div className="kicker">PROMPTSHOP / SEARCH</div><h1 className="page-title">مسئله‌ات را جستجو کن.</h1><form action="/search" className="search-page-form"><input name="q" defaultValue={q} placeholder="مثال: تحلیل ترک خدمت، pipeline، anomaly..."/><button className="button button-primary">جستجو</button></form><div className="result-meta">{needle ? `${results.length} نتیجه برای «${q}»` : 'Workflowهای منتخب'}</div><div className="workflow-grid">{results.map(w => <WorkflowCard key={w.id} workflow={w}/>)}</div>{!results.length && <div className="empty-state">نتیجه‌ای پیدا نشد. عبارت را ساده‌تر کن.</div>}</section>
}
