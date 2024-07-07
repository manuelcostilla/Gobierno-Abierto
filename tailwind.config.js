/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        main: 'repeat(3, minmax(0, 2fr))'
      },
      gridTemplateRows: {
        // Simple 8 row grid
        'main-row': 'repeat(2, minmax(150px))'
      },
      colors: {
        'blue-header': '#0170b9',
        'gray-nav': '#E6E6E6',
        'green-nav': '#3eaf53',
        'black-footer': '#333333',
        'blue-btn': '#4a8eff',
        'blue-title': '#00689c',
        emergencia: '#BDBFC1',
        policia: '#00AFEF',
        bombero: '#Ed3237',
        hospital: '#00A859',
        genero: '#A8518A'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      }
    }
  },
  plugins: []
}
