import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
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
        danger: '#E74C3C',
        'danger-light': '#FFF3F3',
        success: '#27AE60',
        warning: '#F0CB24',
        'warning-light': '#FFD046',
      }
    },
  },
  plugins: [],
}
export default config
