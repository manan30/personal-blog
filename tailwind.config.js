module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      keyframes: {
        'slide-in': {
          '0%': { transform: 'translateX(15rem)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 }
        },
        'slide-out': {
          '0%': { transform: 'translateX(0)', opacity: 1 },
          '100%': { transform: 'translateX(15rem)', opacity: 0 }
        }
      },
      animation: {
        'slide-in': 'slide-in 1s ease-out',
        'slide-out': 'slide-out 1s ease-out'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
