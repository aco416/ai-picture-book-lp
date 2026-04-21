const features = [
  {
    icon: '📅',
    badge: '強み 01',
    title: 'たった2ヶ月で出版',
    description:
      '独自のカリキュラムで、ストーリー作りからAIイラスト生成、製本・出版まで最短2ヶ月でゴール。長期間モチベーションを保つ心配がありません。',
    bg: 'bg-flower-pink-light',
    border: 'border-flower-pink/50',
    badgeBg: 'bg-accent-orange text-white',
    iconBg: 'bg-flower-pink/40',
  },
  {
    icon: '🎬',
    badge: '強み 02',
    title: '動画を見て真似するだけ',
    description:
      'すべての講義は分かりやすい動画形式。AIツールの操作もステップごとに解説するので、パソコンが苦手な方でも迷わず進められます。',
    bg: 'bg-leaf-green-bg',
    border: 'border-leaf-green/50',
    badgeBg: 'bg-leaf-green-dark text-white',
    iconBg: 'bg-leaf-green/40',
  },
  {
    icon: '💬',
    badge: '強み 03',
    title: '質問し放題のサポート',
    description:
      '受講期間中はLINEグループやオンライン相談で何でも質問OK。つまずいても一人で悩まなくて済む環境を用意しています。',
    bg: 'bg-sky-blue-bg',
    border: 'border-sky-blue/50',
    badgeBg: 'bg-sky-blue-dark text-white',
    iconBg: 'bg-sky-blue/40',
  },
]

export default function Feature() {
  return (
    <section id="feature" className="pt-24 pb-20 px-6 bg-flower-pink-light">
      <div className="max-w-5xl mx-auto">
        <p className="text-accent-orange font-bold text-sm text-center mb-2 tracking-widest">FEATURES</p>
        <h2 className="section-title">この講座の<span className="text-accent-orange">3つの強み</span></h2>
        <p className="section-subtitle">初めてでも安心して出版まで辿り着ける理由があります。</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div
              key={i}
              className={`relative ${f.bg} rounded-3xl p-7 border ${f.border} shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-2`}
            >
              <span className={`inline-block text-xs font-bold px-3 py-1 rounded-full mb-5 ${f.badgeBg}`}>
                {f.badge}
              </span>
              <div className={`w-16 h-16 ${f.iconBg} rounded-2xl flex items-center justify-center text-4xl mb-4`}>
                {f.icon}
              </div>
              <h3 className="text-xl font-bold text-text-main mb-3">{f.title}</h3>
              <p className="text-text-sub text-sm leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ウェーブ */}
      <div className="w-full overflow-hidden leading-none mt-16 -mb-20">
        <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-12 md:h-16">
          <path d="M0,20 C360,60 1080,0 1440,40 L1440,60 L0,60 Z" fill="#ECFDF5" />
        </svg>
      </div>
    </section>
  )
}
