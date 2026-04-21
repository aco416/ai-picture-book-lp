const worries = [
  { icon: '😔', text: '絵が上手く描けないから、絵本なんて無理だと思っていた' },
  { icon: '💭', text: 'こどもに読み聞かせる絵本を自分で作りたいが、どこから始めればいいか分からない' },
  { icon: '😮‍💨', text: 'イラストレーターに依頼するとお金がかかりすぎる…' },
  { icon: '🌙', text: 'ずっと温めていたアイデアがあるのに、形にできずにいる' },
  { icon: '🤔', text: 'AIって難しそう、自分には使いこなせないと感じている' },
  { icon: '📚', text: '出版って、有名人や専門家だけのものだと思っていた' },
]

export default function Intro() {
  return (
    <section id="intro" className="py-20 px-6 bg-leaf-green-bg">
      <div className="max-w-4xl mx-auto">
        <p className="text-accent-orange font-bold text-sm text-center mb-2 tracking-widest">WORRIES</p>
        <h2 className="section-title">こんなお悩み、<br className="sm:hidden" />ありませんか？</h2>
        <p className="section-subtitle">あなただけじゃない。多くの方が同じ悩みを抱えています。</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {worries.map((item, i) => (
            <div
              key={i}
              className="flex items-start gap-4 bg-white rounded-2xl p-5 shadow-sm border border-leaf-green/40 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
            >
              <span className="text-3xl flex-shrink-0">{item.icon}</span>
              <p className="text-text-sub text-base leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center bg-gradient-to-r from-flower-pink-light via-white to-leaf-green-bg rounded-3xl p-8 border border-flower-pink/20 shadow-sm">
          <p className="text-2xl font-bold text-text-main mb-3">
            そのお悩み、<span className="text-accent-orange">すべて解決</span>できます。
          </p>
          <p className="text-text-sub text-lg">
            AIの力を使えば、絵が描けなくても<strong>あなただけの絵本</strong>が作れます。
          </p>
        </div>
      </div>

      {/* ウェーブ区切り */}
      <div className="w-full overflow-hidden leading-none mt-16 -mb-20">
        <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-12 md:h-16">
          <path d="M0,30 C480,60 960,0 1440,30 L1440,60 L0,60 Z" fill="#FDE8EF" />
        </svg>
      </div>
    </section>
  )
}
