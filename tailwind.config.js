/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#E8EBF3',
          100: '#C5CCDE',
          200: '#9FACCA',
          300: '#798CB6',
          400: '#576BA5',
          500: '#3D4F8B',
          600: '#1E2761',
          700: '#182054',
          800: '#121846',
          900: '#0C1039',
        },
        teal: {
          50: '#E6F4F7',
          100: '#CCE9EF',
          200: '#99D3DF',
          300: '#66BDCF',
          400: '#40A7BE',
          500: '#1C7293',
          600: '#065A82',
          700: '#05486A',
          800: '#043652',
          900: '#022439',
        },
        sea: {
          light: '#A8D5E5',
          DEFAULT: '#1C7293',
          dark: '#065A82',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'wave': 'wave 15s linear infinite',
        'wave-slow': 'wave 20s linear infinite',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
      },
      keyframes: {
        wave: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
