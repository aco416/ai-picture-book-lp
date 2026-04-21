export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-flower-pink/30 shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-2xl">📖</span>
          <span className="text-lg font-bold text-text-main tracking-wide">
            AI絵本作り講座
          </span>
        </div>
        <a href="#cta" className="btn-secondary text-sm hidden sm:inline-block">
          講座に申し込む
        </a>
      </div>
    </header>
  )
}
