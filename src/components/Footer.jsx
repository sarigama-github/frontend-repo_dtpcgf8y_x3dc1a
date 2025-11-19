export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-slate-950/60">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-md bg-gradient-to-br from-fuchsia-500 to-cyan-400" />
              <span className="text-lg font-semibold tracking-tight text-white">inovavi</span>
            </div>
            <p className="mt-3 text-sm text-slate-300">Premium custom app at a fraction of typical costs—yours forever with one payment.</p>
          </div>
          <div>
            <div className="text-sm font-semibold text-white">Navigation</div>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              <li><a href="#home">Home</a></li>
              <li><a href="#advantage">The Inovavi Advantage</a></li>
              <li><a href="#results">Market-Proven Results</a></li>
              <li><a href="#intelligence">Customer Intelligence</a></li>
              <li><a href="#integrations">Shopify Integration</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#quote">Contact</a></li>
            </ul>
          </div>
          <div>
            <div className="text-sm font-semibold text-white">Contact Information</div>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              <li>Email: contact@inovavi.com</li>
              <li>Phone: +971 58 272 2339</li>
            </ul>
          </div>
          <div>
            <div className="text-sm font-semibold text-white">Get Started</div>
            <a href="#quote" className="mt-3 inline-block rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow">Increase Sales Now</a>
          </div>
        </div>
        <div className="mt-10 text-center text-xs text-white/60">Copyright © 2025 Inovavi</div>
      </div>
    </footer>
  )
}
