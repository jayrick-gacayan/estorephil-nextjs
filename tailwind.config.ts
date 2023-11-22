import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        xxl: '1536px',
        xs: '480px',
        xxs: '320px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: '#1186FF',
        'primary-dark': '#0D2D82',
        'primary-light': '#8bb8f1',
        secondary: '#2F353D',
        'secondary-light': '#77620038',
        tertiary: '#CFCFCF',
        'tertiary-dark': '#DFD08838',
        danger: '#E74C3C',
        'danger-light': '#FFF3F3',
        success: '#27AE60',
        warning: '#F0CB24',
        'warning-light': '#FFD046',
      },
      animation: {
        'slide-botttom-up': 'slide-bottom-up 0.3s ease-in forwards',
        'slide-bottom-down': 'slide-bottom-down 0.3s ease-out forwards',
        'fadeIn': 'fadeIn 0.5s ease-in forwards',
        'fadeOut': 'fadeOut 0.5s ease-out backwards',
        'customSpin': 'customSpin 0.5s linear forwards',
        'slide-in': 'slide-in 0.4s ease-in-out forwards',
        'slide-out': 'slide-out 0.4s ease-in-out forwards',
        'fade-in': 'fade-in 0.5s ease-in forwards',
        'fade-out': 'fade-out 0.5s ease-out backwards'
      },
      keyframes: {
        'slide-bottom-up': {
          '0%': { transform: 'translateY(300%)' },
          '100%': { transform: 'translateY(-2px)' },
        },
        'slide-bottom-down': {
          '0%': { transform: 'translateY(-2px)' },
          '100%': { transform: 'translateY(300%)' },
        },
        'customSpin': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'fadeIn': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'fadeOut': {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        'slide-in': {
          '0%': { opacity: '0', transform: `translateX(100%)` },
          '100%': { opacity: '1', transform: `translate(0)` }
        },
        'slide-out': {
          '0%': { opacity: '1', transform: `translateX(0)` },
          '100%': { opacity: '0', transform: `translateX(100%)` }
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'fade-out': {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
      },
    },
  },
  plugins: [],
}
export default config
