import Hero from './components/Hero'
import Features from './components/Features'
import Numbers from './components/Numbers'
import Intelligence from './components/Intelligence'
import ShopifySync from './components/ShopifySync'
import Demo from './components/Demo'
import Process from './components/Process'
import FAQ from './components/FAQ'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Hero />
      <Features />
      <Numbers />
      <Intelligence />
      <ShopifySync />
      <Demo />
      <Process />
      <FAQ />
      <Footer />
    </div>
  )
}

export default App
