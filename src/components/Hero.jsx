export default function Hero() {
  return (
    <section className="pt-24 pb-0 bg-hero-gradient overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 pt-8 pb-0 flex flex-col lg:flex-row items-center gap-10">

        {/* テキストエリア */}
        <div className="flex-1 text-center lg:text-left z-10">
          {/* バッジ */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-2 mb-5">
            <span className="inline-block bg-accent-orange text-white text-sm font-bold px-4 py-1.5 rounded-full shadow">
              初心者OK
            </span>
            <span className="inline-block bg-leaf-green text-text-main text-sm font-bold px-4 py-1.5 rounded-full shadow">
              2ヶ月で絵本作家デビュー
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-[3.2rem] font-bold text-text-main leading-tight mb-5">
            絵が描けなくても、<br />
            <span className="text-accent-orange">あなたの絵本</span>が<br />
            出版できる。
          </h1>
          <p className="text-text-sub text-lg md:text-xl mb-8 leading-relaxed">
            AIとあなたの想いを組み合わせて、<br className="hidden md:block" />
            世界にひとつだけの絵本を、たった2ヶ月で。
          </p>

          <a href="https://www.acolabo.com/order" className="btn-primary inline-block mb-4">
            講座に申し込む →
          </a>
        </div>

        {/* ヒーロー画像：大きく・下端が切れない */}
        <div className="flex-1 w-full max-w-xl lg:max-w-2xl self-end">
          <div className="relative">
            {/* 背後のふわっとした光彩 */}
            <div className="absolute -inset-6 bg-sky-blue/30 rounded-full blur-3xl"></div>
            <img
              src="/hero-image.png"
              alt="AI絵本づくり＆出版サポート講座 ― 花畑に座る女の子とパンダ"
              className="relative w-full h-auto object-contain drop-shadow-xl"
            />
          </div>
        </div>
      </div>

      {/* 草原ウェーブ */}
      <div className="w-full overflow-hidden leading-none mt-2">
        <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-16 md:h-20">
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="#ECFDF5" />
        </svg>
      </div>
    </section>
  )
}
