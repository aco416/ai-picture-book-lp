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

function MainPage() {
  return (
    <div className="min-h-screen bg-[#f8f4ee] text-[#1f2937]">
      <header className="fixed left-0 top-0 z-50 w-full bg-white/85 backdrop-blur border-b border-[#eadfD2]">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="text-xl font-bold tracking-wide">Portfolio</div>
          <div className="hidden gap-6 text-sm font-medium md:flex">
            <a href="#about" className="hover:text-orange-500">想い</a>
            <a href="#activities" className="hover:text-orange-500">活動内容</a>
            <a href="#books" className="hover:text-orange-500">書籍</a>
            <a href="#services" className="hover:text-orange-500">サービス</a>
            <a href="#contact" className="hover:text-orange-500">お問い合わせ</a>
          </div>
        </nav>
      </header>

      <main>
        <section className="relative flex min-h-screen items-center overflow-hidden px-6 pt-24">
          <div className="absolute inset-0 bg-gradient-to-br from-[#fff7ed] via-[#f8f4ee] to-[#e8f5f0]" />
          <div className="relative z-10 mx-auto max-w-6xl py-24">
            <p className="mb-6 inline-block rounded-full bg-white/80 px-5 py-2 text-sm font-bold text-orange-500 shadow-sm">
              AI × 出版で未来を創る
            </p>
            <h1 className="max-w-4xl text-4xl font-bold leading-tight tracking-tight text-[#111827] md:text-6xl">
              AIと出版の力で、<br />
              あなたの「得意」を<br className="md:hidden" />
              資産に変える。
            </h1>
            <p className="mt-8 max-w-3xl text-lg leading-relaxed text-gray-700 md:text-xl">
              三姉妹の母として、初心者に寄り添うやさしい伴走スタイルで
              「出しておしまい」にしない収益導線づくりをサポートします。
            </p>
            <div className="mt-10">
              <a
                href="#contact"
                className="inline-block rounded-full bg-orange-500 px-8 py-4 font-bold text-white shadow-lg transition hover:-translate-y-1 hover:bg-orange-600"
              >
                相談してみる
              </a>
            </div>
          </div>
        </section>

        <section id="about" className="px-6 py-24 bg-white">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-14 text-center text-3xl font-bold md:text-4xl">
              私の想い
            </h2>
            <div className="grid gap-12 md:grid-cols-2 md:items-center">
              <div>
                <h3 className="mb-6 text-2xl font-bold leading-relaxed">
                  「できなかった側」だからこそ、<br />
                  伝えられることがあります。
                </h3>
                <div className="space-y-5 leading-relaxed text-gray-700">
                  <p>
                    こんにちは、あこ（Aco）です。三姉妹の母として家事や育児に追われる毎日の中で、私はAIと出会い、自分の知識や経験を「本」という形にする喜びを知りました。
                  </p>
                  <p>
                    「得意を資産化すること」は、すでに活動されている個人事業主さまはもちろん、これから挑戦したい初心者さんにとっても、未来を支える大きな力になります。
                  </p>
                  <p>
                    難しい理論よりも、無理なく続けられる方法を。あなたの得意を、一生モノの資産に変えるお手伝いをさせてください。
                  </p>
                </div>
              </div>
              <div className="rounded-[2rem] bg-[#f8f4ee] p-8 text-center shadow-sm">
                <div className="mx-auto flex h-72 max-w-sm items-center justify-center rounded-[2rem] bg-white text-gray-400">
                  プロフィール画像エリア
                </div>
                <p className="mt-4 text-sm text-gray-500">
                  ※ aco_profile.png を追加すると画像表示できます
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="activities" className="px-6 py-24 bg-[#f8f4ee]">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-8 text-center text-3xl font-bold md:text-4xl">
              活動内容
            </h2>
            <p className="mx-auto mb-12 max-w-3xl rounded-2xl bg-white px-6 py-5 text-center font-bold shadow-sm">
              活動の核：あなたの「得意」を一生モノの資産にするお手伝い
            </p>

            <div className="grid gap-8 md:grid-cols-2">
              <div className="rounded-[2rem] bg-white p-8 shadow-sm">
                <div className="mb-5 text-4xl">📚</div>
                <h3 className="mb-3 text-2xl font-bold">① 出版事業</h3>
                <p className="mb-5 font-bold text-orange-500">
                  「あなたの知見を世に広める」
                </p>
                <p className="mb-6 leading-relaxed text-gray-700">
                  あなたの得意をコンテンツ化して収益に変えるだけでなく、「著者」としての権威性を高め、Amazonという巨大マーケットを通じてあなたの活動を世界へ広げます。
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>・Kindle出版代行・伴走支援</li>
                  <li>・Udemy講座づくりサポート</li>
                  <li>・AI絵本づくりサポート</li>
                </ul>
              </div>

              <div className="rounded-[2rem] bg-white p-8 shadow-sm">
                <div className="mb-5 text-4xl">🤖</div>
                <h3 className="mb-3 text-2xl font-bold">② AI事業</h3>
                <p className="mb-5 font-bold text-orange-500">
                  「インパクトある広報を実現」
                </p>
                <p className="mb-6 leading-relaxed text-gray-700">
                  AIの力を活用し、一瞬で目を引く広報手段を提供。あなたの活動をより多くの人に、より強く届けるための強力なツールとなります。
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>・AI漫画制作（書籍・SNS・LP用）</li>
                  <li>・Webページ制作（活動の拠点作り）</li>
                  <li>・アプリ開発（集客を最大化する特典アプリ）</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="books" className="px-6 py-24 bg-white">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
              実績・書籍紹介
            </h2>

            <div className="mb-12 grid gap-6 md:grid-cols-3">
              <div className="rounded-3xl bg-[#f8f4ee] p-8 text-center">
                <div className="text-5xl font-bold text-orange-500">12</div>
                <p className="mt-3 font-bold">Kindleベストセラー冠</p>
              </div>
              <div className="rounded-3xl bg-[#f8f4ee] p-8 text-center">
                <div className="text-5xl font-bold text-orange-500">85%</div>
                <p className="mt-3 font-bold">受講生出版率(2ヶ月以内)</p>
              </div>
              <div className="rounded-3xl bg-[#f8f4ee] p-8 text-center">
                <div className="text-5xl font-bold text-orange-500">4</div>
                <p className="mt-3 font-bold">累計出版数</p>
              </div>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              <div className="flex h-64 items-center justify-center rounded-[2rem] bg-gradient-to-br from-orange-100 to-emerald-100 p-8 text-center text-xl font-bold">
                AI絵本ノウハウ本<br />
                （2日でベストセラー5冠達成）
              </div>
              <div className="flex h-64 items-center justify-center rounded-[2rem] bg-gradient-to-br from-blue-100 to-orange-100 p-8 text-center text-xl font-bold">
                ビットコイン漫画<br />
                （コンテスト準大賞）
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="px-6 py-24 bg-[#f8f4ee]">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
              サービスの紹介
            </h2>

            <div className="grid gap-8 md:grid-cols-3">
              <div className="rounded-[2rem] bg-white p-8 shadow-sm">
                <h3 className="mb-4 text-xl font-bold">📖 出版サポート</h3>
                <p className="leading-relaxed text-gray-700">
                  ただ本を出すだけでなく、その後の収益導線まで設計。あなたの得意を「資産」として残すための最初の一歩を伴走します。
                </p>
              </div>
              <div className="rounded-[2rem] bg-white p-8 shadow-sm">
                <h3 className="mb-4 text-xl font-bold">🎨 AI漫画・広報支援</h3>
                <p className="leading-relaxed text-gray-700">
                  AI漫画によるストーリー発信や、集客効果抜群の「診断アプリ」開発など。インパクトのある見せ方でファンを増やします。
                </p>
              </div>
              <div className="rounded-[2rem] bg-white p-8 shadow-sm">
                <h3 className="mb-4 text-xl font-bold">💻 Web制作</h3>
                <p className="leading-relaxed text-gray-700">
                  あなたの活動の拠点となるHPを作成。信頼感とあなたらしさを大切にしたデザインで制作いたします。
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="px-6 py-24 bg-white">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-8 text-center text-3xl font-bold md:text-4xl">
              お問い合わせ
            </h2>
            <div className="rounded-[2rem] bg-[#f8f4ee] p-8 shadow-sm">
              <p className="mb-8 text-center text-gray-700">
                お気軽にご相談ください。2営業日以内にご返信いたします。
              </p>
              <form className="space-y-5">
                <div>
                  <label className="mb-2 block font-bold">お名前</label>
                  <input
                    type="text"
                    placeholder="山田 花子"
                    className="w-full rounded-xl border border-gray-200 px-4 py-3"
                  />
                </div>
                <div>
                  <label className="mb-2 block font-bold">メールアドレス</label>
                  <input
                    type="email"
                    placeholder="example@mail.com"
                    className="w-full rounded-xl border border-gray-200 px-4 py-3"
                  />
                </div>
                <div>
                  <label className="mb-2 block font-bold">ご相談内容</label>
                  <textarea
                    rows="5"
                    placeholder="こちらにご記入ください"
                    className="w-full rounded-xl border border-gray-200 px-4 py-3"
                  />
                </div>
                <button
                  type="button"
                  className="w-full rounded-full bg-orange-500 px-8 py-4 font-bold text-white shadow-lg hover:bg-orange-600"
                >
                  送信する
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#111827] px-6 py-8 text-center text-sm text-white">
        <p>&copy; 2026 Portfolio. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default function App() {
  const path = window.location.pathname

  if (path.startsWith('/test')) {
    return <TestPage />
  }

  if (path.startsWith('/main')) {
    return <MainPage />
  }

  return <HomePage />
}
