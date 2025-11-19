import { motion } from 'framer-motion'

const stats = [
  { n: '35%', d: 'Higher Conversion Rates for Mobile Apps vs. Mobile Web' },
  { n: '27%', d: 'Increase in Customer Retention with Personalized Mobile Experiences' },
  { n: '49%', d: 'More Repeat Purchases through Native Mobile Apps' },
  { n: '3.7x', d: 'Higher Average Order Value with AI-Powered Recommendations' },
]

export default function Numbers() {
  return (
    <section className="relative py-20" id="results">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Market-Proven Results</h2>
          <p className="mt-3 text-slate-300">The Mobile Commerce Advantage: By the Numbers</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.05 }} className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-xl">
              <div className="text-4xl font-extrabold tracking-tight text-white">{s.n}</div>
              <div className="mt-2 text-sm text-slate-300">{s.d}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
