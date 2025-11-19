import { useMemo } from 'react'
import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'
import { Menu, ChevronRight } from 'lucide-react'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Analytics & Insights', href: '#intelligence' },
  { label: 'Marketing Automation', href: '#intelligence' },
  { label: 'Mobile App Features', href: '#demo' },
  { label: 'Integrations', href: '#integrations' },
  { label: 'About Us', href: '#about' },
]

export default function Hero() {
  const variants = useMemo(() => ({
    hidden: { opacity: 0, y: 20 },
    show: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: 0.2 + i * 0.08, duration: 0.6, ease: 'easeOut' } }),
  }), [])

  return (
    <section id="home" className="relative min-h-[92vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/LU2mWMPbF3Qi1Qxh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/30 to-slate-950/90" />
      </div>

      <div className="relative z-10">
        <div className="mx-auto max-w-7xl px-6 pt-6">
          <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-md">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-md bg-gradient-to-br from-fuchsia-500 to-cyan-400 shadow-lg" />
              <span className="text-lg font-semibold tracking-tight text-white">inovavi</span>
            </div>
            <nav className="hidden md:flex items-center gap-6 text-sm text-slate-200/90">
              {navItems.map((n) => (
                <a key={n.label} href={n.href} className="hover:text-white transition-colors">{n.label}</a>
              ))}
            </nav>
            <div className="flex items-center gap-3">
              <button className="hidden sm:inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/10 px-3 py-1.5 text-sm text-white backdrop-blur-md hover:bg-white/20 transition">
                <span>See Our Work</span>
              </button>
              <a href="#quote" className="inline-flex items-center gap-2 rounded-lg bg-cyan-400/90 px-3.5 py-1.5 text-sm font-semibold text-slate-900 shadow-[0_8px_30px_rgba(34,211,238,0.45)] hover:bg-cyan-300 transition">
                Get Quote <ChevronRight size={16} />
              </a>
              <button className="md:hidden grid place-items-center rounded-lg border border-white/10 p-2 text-white/80"><Menu size={20} /></button>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
          <div className="grid items-center gap-14 md:grid-cols-2">
            <div>
              <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.4 }}>
                <motion.div variants={variants} custom={0} className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs text-slate-100/80 backdrop-blur-md">
                  <span>Custom Development • Not a Platform</span>
                </motion.div>
                <motion.h1 variants={variants} custom={1} className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
                  Custom Mobile Commerce Solutions
                </motion.h1>
                <motion.p variants={variants} custom={2} className="mt-4 max-w-xl text-slate-200/90">
                  Built for Data-Driven Growth. We build tailor-made Shopify mobile apps with enterprise-grade analytics and intelligent automation — at a fraction of the cost of platforms like Tapcart.
                </motion.p>
                <motion.ul variants={variants} custom={3} className="mt-6 grid gap-3 text-slate-100/90">
                  <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-cyan-400" /> Custom mobile apps designed for your brand (not templates)</li>
                  <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-cyan-400" /> Enterprise analytics with sub-second queries on millions of events</li>
                  <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-cyan-400" /> Visual automation flows that work while you sleep</li>
                  <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-cyan-400" /> Tailor-made solutions at a fraction of platform subscription costs</li>
                </motion.ul>
                <motion.div variants={variants} custom={4} className="mt-8 flex flex-wrap items-center gap-3">
                  <a href="#quote" className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-[0_8px_30px_rgba(255,255,255,0.25)] hover:shadow-[0_12px_40px_rgba(255,255,255,0.28)] transition">
                    Get Your Custom Quote
                  </a>
                  <a href="#demo" className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur-md hover:bg-white/15 transition">
                    See Our Work
                  </a>
                  <span className="ml-2 inline-flex items-center rounded-full bg-emerald-400/20 px-3 py-1 text-xs font-semibold text-emerald-300 ring-1 ring-inset ring-emerald-400/30">+37% Conversion vs. Mobile Web</span>
                </motion.div>
              </motion.div>
            </div>

            <div className="relative">
              <motion.div initial={{ opacity: 0, scale: 0.92, y: 20 }} whileInView={{ opacity: 1, scale: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: 'easeOut' }} className="mx-auto w-full max-w-sm rounded-[28px] border border-white/15 bg-white/5 p-2 backdrop-blur-xl shadow-2xl">
                <div className="rounded-[24px] border border-white/10 bg-gradient-to-b from-slate-900/60 to-slate-900/30 p-4 text-slate-100">
                  <div className="mb-3 flex items-center justify-between">
                    <span className="text-xs text-white/60">9:41</span>
                    <span className="text-sm font-semibold">Your Brand</span>
                    <div className="flex items-center gap-1 text-xs text-white/60">
                      <span>3</span><span>2</span>
                    </div>
                  </div>

                  <div className="mb-3">
                    <input className="w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm placeholder:text-white/40 focus:outline-none" placeholder="Search products..." />
                  </div>

                  <div className="space-y-3">
                    <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-white/60">New</span>
                        <button className="text-xs font-medium text-cyan-300">Shop Now</button>
                      </div>
                      <div className="mt-1 text-sm font-semibold">Featured Collection</div>
                      <div className="text-xs text-white/70">Summer Essentials</div>
                    </div>

                    <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                      <div className="mb-2 flex items-center justify-between text-xs text-white/60">
                        <span>Recommended</span>
                        <button className="text-cyan-300">View All</button>
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <div className="rounded-lg border border-white/10 bg-white/5 p-2">
                          <div className="font-medium">Premium Product</div>
                          <div className="text-white/70">$129.99</div>
                        </div>
                        <div className="rounded-lg border border-white/10 bg-white/5 p-2">
                          <div className="font-medium">Bestseller Item</div>
                          <div className="text-white/70">$89.99</div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-2 grid grid-cols-4 gap-2 text-center text-[10px] text-white/70">
                      <div className="rounded-lg border border-white/10 bg-white/5 p-2">Home</div>
                      <div className="rounded-lg border border-white/10 bg-white/5 p-2">Search</div>
                      <div className="rounded-lg border border-white/10 bg-white/5 p-2">Alerts</div>
                      <div className="rounded-lg border border-white/10 bg-white/5 p-2">Profile</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
