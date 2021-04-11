module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontSize: {
        xxs: '0.6rem'
      },
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
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            pre: {
              overflowX: 'auto',
              overflowY: 'hidden'
            },
            img: {
              maxHeight: '30rem',
              objectFit: 'cover'
            },
            code: {
              // backgroundColor: '#1f2937',
              // color: '#e5e7eb'
            },
            a: {
              color: theme('colors.blue.700'),
              textDecoration: 'none',
              transition: 'all 0.2s',
              padding: '0.25rem',
              borderRadius: '0.5rem',
              '&:hover': {
                backgroundColor: theme('colors.blue.700'),
                color: '#fefefe'
              }
            }
          }
        }
      })
    }
  },
  variants: {
    extend: {}
  },
  plugins: [require('@tailwindcss/typography')]
};
