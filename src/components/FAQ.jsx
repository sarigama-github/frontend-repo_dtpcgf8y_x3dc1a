import { useState } from 'react'

const faqs = [
  {
    q: "How is this different from Shopify's mobile experience?",
    a: 'Our native app solution offers push notifications, offline browsing, faster performance, and a more immersive brand experience than mobile-responsive websites. Market data shows this leads to 35% higher conversion rates and significantly better customer retention.'
  },
  { q: 'How does the app integrate with my existing Shopify store?', a: 'We sync products, orders, customers, discounts, and more in real time using Shopify APIs—no duplicate management.' },
  { q: 'What integrations do you support beyond Shopify?', a: 'Analytics pipelines, marketing automation, CRM, CDP, payments, warehousing, and custom APIs.' },
  { q: 'How do you use AI to increase sales?', a: 'We personalize product recommendations, predict churn, and automate campaigns using behavioral data.' },
  { q: 'How can I target specific customer segments?', a: 'Segment by RFM, cohort, engagement, and purchase history—then trigger bespoke campaigns automatically.' },
  { q: 'Do I get full ownership of the app code?', a: 'Yes. Pay once, own forever. No subscriptions, no revenue share.' },
  { q: 'How customized will my app be?', a: 'Completely bespoke to your brand, UI, and business logic. No templates.' },
  { q: 'What platforms do you support?', a: 'iOS and Android native apps, with your Shopify backend.' },
  { q: 'What kind of ROI can I expect?', a: 'Most clients see payback within 12–18 months through higher conversion, AOV, and retention.' },
]

export default function FAQ() {
  const [open, setOpen] = useState(0)
  return (
    <section id="faq" className="relative py-20">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Answers to Your Questions</h2>
          <p className="mt-3 text-slate-300">Everything you need to know about our mobile commerce solutions</p>
        </div>

        <div className="mt-10 divide-y divide-white/10 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl">
          {faqs.map((f, i) => (
            <button key={i} onClick={() => setOpen(open === i ? -1 : i)} className="w-full text-left">
              <div className="px-6 py-5">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-semibold text-white">{f.q}</div>
                  <div className="text-white/60">{open === i ? '-' : '+'}</div>
                </div>
                {open === i && (
                  <div className="mt-2 text-sm text-slate-300">{f.a}</div>
                )}
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
