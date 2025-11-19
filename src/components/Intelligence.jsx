import { motion } from 'framer-motion'

const items = [
  {
    t: 'Know Your Customers Better Than Ever Before',
    d: 'Transform anonymous visitors into known customers with actionable data',
    bullets: [
      'Customer Segmentation: Automatically categorize customers based on purchase history, browsing behavior, and engagement patterns',
      'Behavioral Insights: Understand exactly how customers interact with your products and what drives their purchasing decisions',
      'AI-Powered Recommendations: Deliver personalized product suggestions that feel handpicked for each customer',
      'Precision Marketing: Target specific customer segments with relevant promotions and content that drives conversions',
      'Performance Analytics: Track the impact of personalization on key metrics like average order value and repeat purchase rate',
    ],
  },
]

export default function Intelligence() {
  return (
    <section id="intelligence" className="relative py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-start gap-12 md:grid-cols-2">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs text-slate-100/80 backdrop-blur-md">
              Customer Intelligence Dashboard
            </div>
            <h3 className="mt-4 text-3xl font-bold text-white">{items[0].t}</h3>
            <p className="mt-2 text-slate-300">{items[0].d}</p>
            <ul className="mt-6 space-y-3 text-slate-100/90">
              {items[0].bullets.map((b, i) => (
                <li key={i} className="flex items-start gap-3"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan-400" />{b}</li>
              ))}
            </ul>
          </div>
          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-6 backdrop-blur-xl">
            <div className="flex items-center justify-between text-white/80">
              <span className="text-sm font-semibold">inovavi</span>
              <div className="flex gap-3 text-xs">
                <span>Active Users</span>
                <span>Conversion</span>
                <span>Segments</span>
              </div>
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              <Stat label="Active Users" value="2,847" />
              <Stat label="Conversion Rate" value="32.6%" />
              <Stat label="Retention" value="68.5%" />
              <Stat label="AOV" value="$87.32" />
              <Stat label="Engagement" value="4.7/5" />
              <Stat label="Loyal Customers" value="40%" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function Stat({ label, value }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-center">
      <div className="text-xs text-white/70">{label}</div>
      <div className="mt-1 text-xl font-bold text-white">{value}</div>
    </div>
  )
}
