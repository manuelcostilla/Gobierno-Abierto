import { nextui } from '@nextui-org/react'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/react/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        main: 'repeat(3, minmax(0, 2fr))'
      },
      gridTemplateRows: {
        'main-row': 'repeat(2, minmax(150px))'
      },
      colors: {
        'blue-header': '#0170b9',
        'gray-nav': '#E6E6E6',
        'green-nav': '#3eaf53',
        'black-footer': '#333333',
        'black-nav': '#909092',
        'blue-btn': '#4a8eff',
        'blue-title': '#00689c',
        emergencia: '#BDBFC1',
        policia: '#00AFEF',
        bombero: '#Ed3237',
        hospital: '#00A859',
        genero: '#A8518A'
      },
      fontSize: {
        xs: '.75rem',
        sm: '.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '3.75rem',
        '7xl': '4.5rem',
        '8xl': '6rem',
        '9xl': '8rem',
        'custom-size': '2.5rem' // Tamaño personalizado
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      }
    },
    screens: {
      xs: '390px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px'
    }
  },
  darkMode: 'class',
  plugins: [nextui()]
}
