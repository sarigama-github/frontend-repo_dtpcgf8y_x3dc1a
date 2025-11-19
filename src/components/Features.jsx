import { motion } from 'framer-motion'

const cards = [
  {
    title: 'Stop Paying Platform Fees. Start Owning Your Solution.',
    bullets: [
      { h: 'The Platform Problem', p: '$500-2000+/month forever. Cookie-cutter templates. Basic analytics. Locked in.' },
      { h: '3-Year Cost', p: '$18,000 - $72,000+. And you do not own anything.' },
    ],
  },
  {
    title: 'The Custom Solution',
    bullets: [
      { h: 'Competitive One-Time Cost', p: 'Typically pays for itself in 12-18 months. You own everything.' },
      { h: 'Enterprise Analytics', p: 'ClickHouse-powered, sub-second queries, RFM, cohorts, journey mapping.' },
    ],
  },
]

export default function Features() {
  return (
    <section className="relative py-20" id="advantage">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">The Inovavi Advantage</h2>
          <p className="mt-3 text-slate-300">Mobile Commerce Mastery, Tailored to Your Brand</p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {cards.map((c, idx) => (
            <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: idx * 0.1 }} className="rounded-2xl border border-white/10 bg-white/5 p-6 text-slate-200 backdrop-blur-xl">
              <h3 className="text-xl font-semibold text-white">{c.title}</h3>
              <div className="mt-4 space-y-4">
                {c.bullets.map((b, i) => (
                  <div key={i}>
                    <div className="text-sm font-semibold text-cyan-300">{b.h}</div>
                    <div className="text-sm text-slate-300/90">{b.p}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { m: 'Pay Once, Own Forever', s: '0% Revenue Share' },
            { m: 'Full-Featured Mobile Experience', s: '37% Higher Conversions' },
            { m: 'Deeper Customer Engagement', s: '6.4× Longer Sessions' },
            { m: 'Seamless Brand Integration', s: '13% Higher AOV' },
          ].map((k, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.05 }} className="rounded-xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-5">
              <div className="text-sm font-semibold text-white">{k.m}</div>
              <div className="text-sm text-slate-300">{k.s}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
