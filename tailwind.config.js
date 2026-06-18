/** @type {import('tailwindcss').Config} */

export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        space: {
          900: '#1A1F4B',
          800: '#232A5C',
          700: '#2E3670',
        },
        nebula: '#7B61FF',
        star: '#FFD166',
        mint: '#06D6A0',
        coral: '#EF476F',
        ocean: '#118AB2',
      },
      fontFamily: {
        display: ['Fredoka', 'sans-serif'],
        body: ['Nunito', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 24px rgba(123, 97, 255, 0.35)',
        'glow-sm': '0 0 12px rgba(123, 97, 255, 0.25)',
        soft: '0 10px 30px rgba(26, 31, 75, 0.12)',
      },
      animation: {
        float: 'float 4s ease-in-out infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
    },
  },
  plugins: [],
};
