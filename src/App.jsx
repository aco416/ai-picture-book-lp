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
      <header className="absolute left-0 top-0 z-50 w-full">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-8 py-8">
          <div
            className="text-3xl font-bold text-[#2f6842]"
            style={{ fontFamily: 'serif' }}
          >
            Portfolio
          </div>

          <div className="hidden gap-10 text-lg font-bold text-[#1f2937] md:flex">
            <a href="#about" className="hover:text-[#2f6842]">想い</a>
            <a href="#activities" className="hover:text-[#2f6842]">活動内容</a>
            <a href="#books" className="hover:text-[#2f6842]">書籍</a>
            <a href="#services" className="hover:text-[#2f6842]">サービス</a>
            <a href="#contact" className="hover:text-[#2f6842]">お問い合わせ</a>
          </div>
        </nav>
      </header>

      <main>
        <section className="relative min-h-screen overflow-hidden">
          <img
            src="/hero_new.png"
            alt="Hero Background"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-white/10" />

          <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-8 pt-24">
            <div className="w-full max-w-[650px] rounded-[2rem] bg-white/65 px-10 py-12 shadow-sm backdrop-blur-md md:px-16 md:py-16">
              <h1
                className="text-[42px] font-bold leading-[1.45] tracking-wide text-[#2f6842] md:text-[56px]"
                style={{ fontFamily: 'serif' }}
              >
                <span className="italic text-[#8bbd35]">AI</span>と出版の力で、<br />
                あなたの「得意」を資<br />
                産に変える。
              </h1>

              <p className="mt-8 text-xl leading-[2] text-[#4b5563]">
                三姉妹の母として、初心者に寄り添うやさしい伴走スタイルで<br />
                「出しておしまい」にしない収益導線づくりをサポートします。
              </p>

              <div className="mt-12">
                <a
                  href="#contact"
                  className="inline-block rounded-full bg-[#2f6842] px-12 py-5 text-lg font-bold text-white shadow-lg transition hover:-translate-y-1 hover:bg-[#245236]"
                >
                  相談してみる
                </a>
              </div>
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
                    難しい理論よりも、無理なく続けられる方法を。あなたの得意を、一生モノの資産に変えるお手伝いをさせてください。私はどちらのステージにいる方も、全力で応援します。
                  </p>
                </div>
              </div>

              <div className="rounded-[2rem] bg-[#f8f4ee] p-8 text-center shadow-sm">
                <div className="mx-auto max-w-sm overflow-hidden rounded-[2rem] bg-white shadow-md">
                  <img
                    src="/aco_profile.png"
                    alt="あこ（Aco）プロフィール"
                    className="h-auto w-full object-cover"
                  />
                </div>
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

            <div className="mb-14 grid gap-6 md:grid-cols-3">
              <div className="rounded-[1.5rem] bg-[#f8f4ee] px-8 py-8 text-center shadow-sm">
                <div className="text-5xl font-bold text-orange-500">12</div>
                <p className="mt-3 font-bold">Kindleベストセラー冠</p>
              </div>

              <div className="rounded-[1.5rem] bg-[#f8f4ee] px-8 py-8 text-center shadow-sm">
                <div className="text-5xl font-bold text-orange-500">85%</div>
                <p className="mt-3 font-bold">受講生出版率(2ヶ月以内)</p>
              </div>

              <div className="rounded-[1.5rem] bg-[#f8f4ee] px-8 py-8 text-center shadow-sm">
                <div className="text-5xl font-bold text-orange-500">38</div>
                <p className="mt-3 font-bold">累計サポート書籍数</p>
              </div>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              <div className="rounded-[2rem] bg-[#fff3fb] px-8 py-8 text-center shadow-sm">
                <div className="mx-auto mb-6 flex h-56 items-center justify-center">
                  <img
                    src="/book-1.png"
                    alt="ビットコイン漫画の書影"
                    className="max-h-full w-auto object-contain shadow-md"
                  />
                </div>

                <a
                  href="https://amzn.asia/d/06hSsood"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block rounded-full bg-gradient-to-b from-[#fff2a8] to-[#e4bd4c] px-10 py-2 text-lg font-medium text-[#111827] shadow-md transition hover:-translate-y-1 hover:shadow-lg"
                >
                  Amazon
                </a>
              </div>

              <div className="rounded-[2rem] bg-[#fff3fb] px-8 py-8 text-center shadow-sm">
                <div className="mx-auto mb-6 flex h-56 items-center justify-center">
                  <img
                    src="/book-2.png"
                    alt="AI絵本の作り方の書影"
                    className="max-h-full w-auto object-contain shadow-md"
                  />
                </div>

                <a
                  href="https://amzn.asia/d/060VbnCZ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block rounded-full bg-gradient-to-b from-[#fff2a8] to-[#e4bd4c] px-10 py-2 text-lg font-medium text-[#111827] shadow-md transition hover:-translate-y-1 hover:shadow-lg"
                >
                  Amazon
                </a>
              </div>

              <div className="rounded-[2rem] bg-[#fff3fb] px-8 py-8 text-center shadow-sm">
                <div className="mx-auto mb-6 flex h-56 items-center justify-center">
                  <img
                    src="/book-3.png"
                    alt="ありがとうのまほうの書影"
                    className="max-h-full w-auto object-contain shadow-md"
                  />
                </div>

                <a
                  href="https://amzn.asia/d/0496Nyn0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block rounded-full bg-gradient-to-b from-[#fff2a8] to-[#e4bd4c] px-10 py-2 text-lg font-medium text-[#111827] shadow-md transition hover:-translate-y-1 hover:shadow-lg"
                >
                  Amazon
                </a>
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
                  className="w-full rounded-full bg-[#2f6842] px-8 py-4 font-bold text-white shadow-lg hover:bg-[#245236]"
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
