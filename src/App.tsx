import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProductSystem from './components/ProductSystem'
import Applications from './components/Applications'
import Advantage from './components/Advantage'
import HowItWorks from './components/HowItWorks'
import Professionals from './components/Professionals'
import TechnologyStory from './components/TechnologyStory'
import DealerCTA from './components/DealerCTA'
import Catalogue from './components/Catalogue'
import Footer from './components/Footer'

export default function App() {
  return (
    <div style={{ minHeight: '100vh', background: '#fff' }}>
      <Navbar />
      <main>
        <Hero />
        <ProductSystem />
        <Applications />
        <Advantage />
        <HowItWorks />
        <Professionals />
        <TechnologyStory />
        <DealerCTA />
        <Catalogue />
      </main>
      <Footer />
    </div>
  )
}
