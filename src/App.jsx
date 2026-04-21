import Header from './components/Header'
import Hero from './components/Hero'
import Intro from './components/Intro'
import Feature from './components/Feature'
import Step from './components/Step'
import CTA from './components/CTA'

export default function App() {
  return (
    <div className="min-h-screen bg-cream font-sans">
      <Header />
      <main>
        <Hero />
        <Intro />
        <Feature />
        <Step />
        <CTA />
      </main>
    </div>
  )
}
