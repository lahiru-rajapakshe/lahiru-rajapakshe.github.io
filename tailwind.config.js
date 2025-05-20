/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'spring-green': '#6DB33F',
        'spring-dark': '#34302D',
        'terminal-black': '#121212',
        'terminal-green': '#00FF00',
        'java-blue': '#5382A1',
        'java-orange': '#F89820'
      },
      fontFamily: {
        'code': ['Fira Code', 'monospace'],
        'system': ['JetBrains Mono', 'monospace']
      },
      animation: {
        'terminal-blink': 'blink 1s step-end infinite',
        'float': 'float 6s ease-in-out infinite',
        'code-slide': 'slide 15s linear infinite'
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        slide: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' }
        }
      }
    },
  },
  plugins: [],
}