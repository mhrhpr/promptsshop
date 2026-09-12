import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const { message } = await request.json().catch(() => ({ message: '' }))
  if (!message?.trim()) return NextResponse.json({ reply: 'پیامت را کمی دقیق‌تر بنویس.' }, { status: 400 })
  const key = process.env.OPENAI_API_KEY
  if (!key) return NextResponse.json({ reply: 'حالت دمو فعال است. برای ChatGPT واقعی، OPENAI_API_KEY را در Vercel تنظیم کن. در همین UI مسیر گفتگو و انتخاب Workflow آماده است.' })
  try {
    const response = await fetch('https://api.openai.com/v1/responses', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${key}` },
      body: JSON.stringify({ model: process.env.OPENAI_MODEL || 'gpt-5-mini', input: `You are OMIND AI Copilot for PromptShop. Reply in Persian. Given this user's work problem, recommend the most relevant professional workflow and ask at most one critical follow-up question. User problem: ${message}` }),
      cache: 'no-store',
    })
    if (!response.ok) throw new Error('OpenAI request failed')
    const data = await response.json()
    const reply = data.output_text || data.output?.flatMap((x: any) => x.content || []).map((x: any) => x.text).filter(Boolean).join(' ') || 'پاسخ AI دریافت نشد.'
    return NextResponse.json({ reply })
  } catch {
    return NextResponse.json({ reply: 'اتصال به مدل AI برقرار نشد. تنظیمات OPENAI_API_KEY و OPENAI_MODEL را بررسی کن.' }, { status: 502 })
  }
}
