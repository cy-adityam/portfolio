import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        cyber: {
          dark: '#0A1128',
          darker: '#050814',
          primary: '#00B4DB',
          secondary: '#0083B0',
          accent: '#00FFFF',
          highlight: '#0077B6',
          glow: '#00B4D8',
        },
        neural: {
          light: '#E8F4F8',
          bg: '#F0F8FF',
          primary: '#4A90E2',
          secondary: '#7BA7CC',
        }
      },
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'],
        mono: ['Roboto Mono', 'monospace'],
        sans: ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-cyber': 'linear-gradient(135deg, #00B4DB, #0083B0)',
        'gradient-button': 'linear-gradient(90deg, #0077B6, #00B4D8)',
        'gradient-dark': 'linear-gradient(180deg, #0A1128 0%, #050814 100%)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'typing': 'typing 3.5s steps(40, end)',
        'blink': 'blink 0.75s step-end infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px #00FFFF, 0 0 10px #00FFFF' },
          '100%': { boxShadow: '0 0 10px #00FFFF, 0 0 20px #00FFFF, 0 0 30px #00FFFF' },
        },
        typing: {
          'from': { width: '0' },
          'to': { width: '100%' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
    },
  },
  plugins: [],
}
export default config
