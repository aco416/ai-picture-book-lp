import Header from './components/Header'
import Hero from './components/Hero'
import Intro from './components/Intro'
import Feature from './components/Feature'
import Step from './components/Step'
import CTA from './components/CTA'

function HomePage() {
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

function TestPage() {
  return (
    <div className="min-h-screen bg-cream font-sans">
      <section className="px-6 py-24 text-center">
        <p className="mb-4 text-sm font-bold text-orange-500">
          TEST PAGE
        </p>

        <h1 className="mb-6 text-4xl font-bold leading-tight text-gray-900">
          テストページが表示されました
        </h1>

        <p className="mx-auto max-w-2xl text-lg leading-relaxed text-gray-700">
          このページは、lp.acolabo.com の下に新しいページを追加できるか確認するためのテストページです。
        </p>
      </section>
    </div>
  )
}

export default function App() {
  const path = window.location.pathname

  if (path.startsWith('/test')) {
    return <TestPage />
  }

  return <HomePage />
}
