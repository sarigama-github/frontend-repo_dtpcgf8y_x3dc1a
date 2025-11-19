import { motion } from 'framer-motion'

const steps = [
  { n: '1', t: 'Discovery & Strategy', d: 'We align on goals, KPIs, and the roadmap.' },
  { n: '2', t: 'Design & Prototype', d: 'We explore UI/UX and interactions tailored to your brand.' },
  { n: '3', t: 'Build & Integrate', d: 'We implement, integrate Shopify, and set up analytics.' },
  { n: '4', t: 'Launch & Scale', d: 'We ship, monitor, and optimize for growth.' },
]

export default function Process() {
  return (
    <section id="process" className="relative py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">How It Works</h2>
          <p className="mt-3 text-slate-300">From discovery to launch, a proven process for custom mobile commerce.</p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.05 }} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
              <div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-cyan-400/20 text-sm font-semibold text-cyan-300 ring-1 ring-inset ring-cyan-400/30">{s.n}</div>
              <div className="mt-3 text-lg font-semibold text-white">{s.t}</div>
              <div className="mt-1 text-sm text-slate-300">{s.d}</div>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center text-white/70">
          <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs">
            <span>4-6 Weeks • Typical timeline</span>
            <span>•</span>
            <span>100% Custom</span>
          </div>
        </div>
      </div>
    </section>
  )
}
