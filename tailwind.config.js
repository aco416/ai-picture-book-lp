/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#FDFBF7',
        // ボタン・アクセント：画像の「初心者OK」バッジ由来のオレンジ
        'accent-orange': '#F5A67B',
        'accent-orange-dark': '#E8895A',
        'accent-orange-light': '#FDE8D8',
        // 花畑のピンク
        'flower-pink': '#F9A8C4',
        'flower-pink-dark': '#F472B6',
        'flower-pink-light': '#FDE8EF',
        // 草原のグリーン
        'leaf-green': '#86EFAC',
        'leaf-green-dark': '#4ADE80',
        'leaf-green-mid': '#A7F3D0',
        'leaf-green-bg': '#ECFDF5',
        // 空色
        'sky-blue': '#BAE6FD',
        'sky-blue-dark': '#7DD3FC',
        'sky-blue-bg': '#F0F9FF',
        // テキスト
        'text-main': '#4A4A4A',
        'text-sub': '#7A7A7A',
        'text-light': '#A0A0A0',
      },
      fontFamily: {
        sans: ['"Hiragino Maru Gothic ProN"', '"BIZ UDPGothic"', 'Meiryo', 'sans-serif'],
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(180deg, #E0F4FF 0%, #F0FAF0 50%, #FDFBF7 100%)',
        'section-pink': 'linear-gradient(135deg, #FDE8EF 0%, #FDF6FF 100%)',
        'section-green': 'linear-gradient(135deg, #ECFDF5 0%, #F0FFF4 100%)',
      },
    },
  },
  plugins: [],
}
