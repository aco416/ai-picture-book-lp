const steps = [
  {
    num: '01',
    icon: '✏️',
    title: 'ストーリーを考える',
    description: '伝えたいテーマや主人公を決めます。ストーリー作りをお手伝いするGPTsもお渡ししますので誰でも素敵な物語が作れます。',
    bg: 'bg-flower-pink-light',
    border: 'border-flower-pink/40',
    numColor: 'text-accent-orange',
    circleBorder: 'border-accent-orange/50',
  },
  {
    num: '02',
    icon: '🤖',
    title: 'AIでイラストを生成',
    description: '物語からAIがプロンプトを自動で作成し素敵な挿絵を生成します。何度でも修正でき理想のビジュアルに近づけます。',
    bg: 'bg-sky-blue-bg',
    border: 'border-sky-blue/40',
    numColor: 'text-sky-blue-dark',
    circleBorder: 'border-sky-blue-dark/50',
  },
  {
    num: '03',
    icon: '📝',
    title: 'レイアウト・仕上げ',
    description: 'テキストと画像を組み合わせ、絵本らしいページレイアウトに仕上げます。テンプレートで簡単。',
    bg: 'bg-accent-orange-light',
    border: 'border-accent-orange/30',
    numColor: 'text-accent-orange-dark',
    circleBorder: 'border-accent-orange/50',
  },
  {
    num: '04',
    icon: '🎉',
    title: '出版・プレゼント',
    description: '世界に一冊の絵本が完成！電子書籍や紙の絵本としてあのAmazonで販売されます。売れるとあなたに印税が入ります。',
    bg: 'bg-leaf-green-bg',
    border: 'border-leaf-green/40',
    numColor: 'text-leaf-green-dark',
    circleBorder: 'border-leaf-green-dark/50',
  },
]

export default function Step() {
  return (
    <section id="step" className="pt-24 pb-20 px-6 bg-leaf-green-bg">
      <div className="max-w-4xl mx-auto">
        <p className="text-accent-orange font-bold text-sm text-center mb-2 tracking-widest">STEPS</p>
        <h2 className="section-title">出版までの<span className="text-accent-orange">4ステップ</span></h2>
        <p className="section-subtitle">シンプルなプロセスで、誰でも絵本作家になれます。</p>

        <div className="relative">
          {/* 縦ライン */}
          <div className="hidden md:block absolute left-1/2 top-8 bottom-8 w-0.5 bg-gradient-to-b from-flower-pink via-sky-blue to-leaf-green -translate-x-1/2 opacity-40"></div>

          <div className="space-y-8">
            {steps.map((step, i) => (
              <div
                key={i}
                className={`relative flex flex-col md:flex-row items-center gap-6 ${
                  i % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* カード */}
                <div className={`flex-1 ${step.bg} rounded-3xl p-6 border ${step.border} shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-0.5`}>
                  <div className="flex items-start gap-4">
                    <span className="text-4xl">{step.icon}</span>
                    <div>
                      <p className={`text-xs font-bold ${step.numColor} mb-1`}>STEP {step.num}</p>
                      <h3 className="text-lg font-bold text-text-main mb-2">{step.title}</h3>
                      <p className="text-text-sub text-sm leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </div>

                {/* 中央サークル */}
                <div className={`flex-shrink-0 w-14 h-14 rounded-full bg-white border-4 ${step.circleBorder} flex items-center justify-center shadow-md z-10`}>
                  <span className={`text-lg font-black ${step.numColor}`}>{step.num}</span>
                </div>

                {/* スペーサー */}
                <div className="flex-1 hidden md:block"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
