export default function CTA() {
  return (
    <section id="cta" className="py-24 px-6 relative overflow-hidden bg-gradient-to-b from-flower-pink-light via-accent-orange-light to-cream">
      {/* 背景デコレーション：花 */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-flower-pink/20 rounded-full -translate-x-1/2 -translate-y-1/2 blur-2xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-56 h-56 bg-leaf-green/20 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/3 right-8 w-24 h-24 bg-sky-blue/20 rounded-full blur-2xl pointer-events-none"></div>

      <div className="max-w-3xl mx-auto text-center relative z-10">
        {/* 花デコレーション */}
        <div className="flex justify-center gap-3 mb-6 text-3xl">
          <span>🌸</span><span>📖</span><span>🌿</span><span>✨</span><span>🐼</span>
        </div>

        <p className="text-accent-orange font-bold text-sm mb-3 tracking-widest">JOIN US</p>
        <h2 className="text-3xl md:text-5xl font-bold text-text-main mb-6 leading-tight">
          あなたの物語を、<br />
          <span className="text-accent-orange">絵本にしませんか？</span>
        </h2>
        <p className="text-text-sub text-lg mb-4 leading-relaxed">
          絵が苦手でも大丈夫。AIとあなたの想いで、<br className="hidden md:block" />
          世界にたったひとつの絵本を作りましょう。
        </p>
        {/* メインCTAボタン */}
        <a
          href="https://www.acolabo.com/order"
          className="btn-primary inline-block text-xl px-14 py-5 shadow-xl"
        >
          講座に申し込む →
        </a>

        {/* フッター */}
        <div className="mt-16 pt-8 border-t border-flower-pink/30">
          <nav className="mb-4">
            <a
              href="https://www.acolabo.com/"
              className="text-text-sub hover:text-text-main text-sm transition-colors duration-200"
            >
              HOME
            </a>
          </nav>
          <p className="text-text-light text-sm">
            © 2026 AI絵本作り講座｜すべての女性の「作りたい」を応援します
          </p>
        </div>
      </div>
    </section>
  )
}
