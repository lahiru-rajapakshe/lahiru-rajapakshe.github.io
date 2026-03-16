/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#243344',
        'primary-dark': '#1a252f',
        'primary-light': '#2d4156',
        'accent': '#f4c03b',
        'accent-dark': '#d9a82e',
        'accent-light': '#f7d06a',
        'light-gray': '#f1f1f1',
        'dark-gray': '#8b8b8b',
        'white': '#ffffff',
        'black': '#000000'
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'heading': ['Poppins', 'sans-serif']
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-in-left': 'slideInLeft 0.6s ease-out',
        'slide-in-right': 'slideInRight 0.6s ease-out',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' }
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }
        }
      },
      boxShadow: {
        'card': '0 10px 50px rgba(36, 51, 68, 0.2)',
        'card-hover': '0 15px 60px rgba(36, 51, 68, 0.3)',
        'gold': '0 10px 30px rgba(244, 192, 59, 0.3)'
      }
    },
  },
  plugins: [],
}