import { motion } from 'framer-motion'

export default function ShopifySync() {
  return (
    <section id="integrations" className="relative py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Perfectly in Sync with Your Shopify Store</h2>
          <p className="mt-3 text-slate-300">Every product update, inventory change, and order is automatically synchronized in real-time.</p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            { t: 'Product Catalog & Inventory', d: 'Real-time synchronization ensures accurate availability' },
            { t: 'Customer Accounts & Order History', d: 'Unified customer profiles across platforms' },
            { t: 'Promotions & Discounts', d: 'Consistent application of your Shopify discount rules' },
            { t: 'Payment Methods', d: 'Support for all your existing payment options' },
            { t: 'Custom Requirements', d: 'Flexible architecture to incorporate your specific integration needs' },
          ].map((x, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.05 }} className="rounded-2xl border border-white/10 bg-white/5 p-6 text-slate-200">
              <div className="text-lg font-semibold text-white">{x.t}</div>
              <div className="mt-1 text-sm text-slate-300">{x.d}</div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-white/10 bg-gradient-to-br from-emerald-400/10 via-cyan-400/10 to-fuchsia-400/10 p-6 text-center text-slate-200">
          <div className="text-sm text-white/70">Your Shopify Store → Real-time Synchronization → Your Mobile App</div>
          <div className="mt-3 grid gap-3 sm:grid-cols-3">
            <Highlight label="Products" value="1,247" />
            <Highlight label="Orders" value="8,392" />
            <Highlight label="Customers" value="3,841" />
          </div>
        </div>
      </div>
    </section>
  )
}

function Highlight({ label, value }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-4">
      <div className="text-xs text-white/70">{label}</div>
      <div className="mt-1 text-2xl font-bold text-white">{value}</div>
    </div>
  )
}
