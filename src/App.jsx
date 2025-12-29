import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Tanitim from './components/Tanitim'
import Katkisi from './components/Katkisi'
import Demo from './components/Demo'
import Icerikler from './components/Icerikler'
import BizKimiz from './components/BizKimiz'
import FAQ from './components/FAQ'
import TalepFormu from './components/TalepFormu'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Tanitim />
      <Katkisi />
      <Demo />
      <Icerikler />
      <BizKimiz />
      <FAQ />
      <TalepFormu />
      <Footer />
    </div>
  )
}

export default App

