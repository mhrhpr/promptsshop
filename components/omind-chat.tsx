'use client'

import { useState } from 'react'

type Message = { role: 'user' | 'assistant'; text: string }

export function OmindChat() {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', text: 'سلام. من Copilot اومايند هستم. مسئله کاری‌ات را بگو تا بهترین Workflow را پیدا کنیم.' },
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)

  async function send() {
    const value = input.trim()
    if (!value || loading) return
    setMessages(m => [...m, { role: 'user', text: value }])
    setInput('')
    setLoading(true)
    try {
      const res = await fetch('/api/chat', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ message: value }) })
      const data = await res.json()
      setMessages(m => [...m, { role: 'assistant', text: data.reply || 'پیامت دریافت شد. یک Workflow مناسب از کاتالوگ پیدا می‌کنیم.' }])
    } catch {
      setMessages(m => [...m, { role: 'assistant', text: 'فعلاً حالت دمو فعال است. برای پاسخ واقعی ChatGPT باید OPENAI_API_KEY روی سرور تنظیم شود.' }])
    } finally {
      setLoading(false)
    }
  }

  return <section className="chat-section shell">
    <div className="chat-head"><div><span className="section-index">04</span><h2>با AI مسئله‌ات را تعریف کن</h2><p>یک گفت‌وگوی کوتاه؛ سپس Workflow مناسب برای کارت پیشنهاد می‌شود.</p></div><span className="chat-status"><i/> AI COPILOT</span></div>
    <div className="chat-box">
      <div className="chat-messages">
        {messages.map((m, i) => <div key={i} className={`chat-message ${m.role}`}><span className="chat-avatar">{m.role === 'assistant' ? 'O' : 'You'}</span><div className="chat-bubble">{m.text}</div></div>)}
        {loading && <div className="chat-message assistant"><span className="chat-avatar">O</span><div className="chat-bubble typing"><i/><i/><i/></div></div>}
      </div>
      <div className="chat-suggestions">{['می‌خواهم ترک خدمت را تحلیل کنم','گزارش مدیریتی ماهانه می‌خواهم','Pipeline فروش افت کرده'].map(s => <button key={s} onClick={() => setInput(s)}>{s}</button>)}</div>
      <div className="chat-input"><textarea rows={2} value={input} onChange={e => setInput(e.target.value)} onKeyDown={e => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); send() } }} placeholder="مسئله کاری‌ات را بنویس…"/><button onClick={send} disabled={loading}>ارسال ↗</button></div>
    </div>
  </section>
}
