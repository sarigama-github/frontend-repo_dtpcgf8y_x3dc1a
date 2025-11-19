import { motion } from 'framer-motion'

export default function Demo() {
  return (
    <section id="demo" className="relative py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs text-slate-100/80 backdrop-blur-md">
              See Your Brand in Action
            </div>
            <h3 className="mt-4 text-3xl font-bold text-white">Experience the mobile journey that converts</h3>
            <ul className="mt-6 space-y-3 text-slate-100/90">
              <li className="flex items-start gap-3"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan-400" />Personalized Recommendations — Increase AOV by 31%</li>
              <li className="flex items-start gap-3"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan-400" />Seamless Checkout — Reduce cart abandonment</li>
              <li className="flex items-start gap-3"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan-400" />Intuitive Mobile Experience — Smooth animations and native feel</li>
            </ul>
            <div className="mt-8 flex gap-3">
              <a href="#quote" className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-[0_8px_30px_rgba(255,255,255,0.25)] hover:shadow-[0_12px_40px_rgba(255,255,255,0.28)] transition">Get Started</a>
              <a href="#faq" className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur-md hover:bg-white/15 transition">Learn More</a>
            </div>
          </div>

          <motion.div initial={{ opacity: 0, scale: 0.96 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mx-auto w-full max-w-md rounded-[28px] border border-white/15 bg-white/5 p-2 backdrop-blur-xl shadow-2xl">
            <div className="rounded-[24px] border border-white/10 bg-gradient-to-b from-slate-900/60 to-slate-900/30 p-4 text-slate-100">
              <div className="mb-3 flex items-center justify-between">
                <span className="text-xs text-white/60">9:41</span>
                <span className="text-sm font-semibold">Your Brand</span>
                <div className="flex items-center gap-1 text-xs text-white/60">
                  <span>3</span><span>2</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-white/60">Based on your browsing</span>
                  </div>
                  <div className="mt-2 grid grid-cols-2 gap-2 text-sm">
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
                <div className="grid grid-cols-4 gap-2 text-center text-[10px] text-white/70">
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
    </section>
  )
}
