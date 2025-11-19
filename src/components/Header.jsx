import { Menu, ChevronRight } from 'lucide-react'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Analytics & Insights', href: '#intelligence' },
  { label: 'Marketing Automation', href: '#intelligence' },
  { label: 'Mobile App Features', href: '#demo' },
  { label: 'Integrations', href: '#integrations' },
  { label: 'About Us', href: '#about' },
]

export default function Header() {
  return (
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
  )
}
