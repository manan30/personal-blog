// eslint-disable-next-line @typescript-eslint/no-var-requires
const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      fontSize: {
        xxs: '0.6rem'
      },
      colors: {
        'light-blue': colors.lightBlue,
        cyan: colors.cyan
      },
      keyframes: {
        'slide-in': {
          '0%': { transform: 'translateX(15rem)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 }
        },
        'slide-out': {
          '0%': { transform: 'translateX(0)', opacity: 1 },
          '100%': { transform: 'translateX(15rem)', opacity: 0 }
        },
        'slide-up': {
          '0%': { transform: 'translateY(15rem)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 }
        },
        'slide-down': {
          '0%': { transform: 'translateY(0)', opacity: 1 },
          '100%': { transform: 'translateY(15rem)', opacity: 0 }
        }
      },
      animation: {
        'slide-in': 'slide-in 1s ease-out',
        'slide-out': 'slide-out 1s ease-in',
        'slide-up': 'slide-up 1s ease-out',
        'slide-down': 'slide-down 1s ease-in'
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
        },
        dark: {
          css: [
            {
              color: theme('colors.gray.400'),
              '[class~="lead"]': {
                color: theme('colors.gray.300')
              },
              a: {
                color: theme('colors.green.400'),
                textDecoration: 'none',
                transition: 'all 0.2s',
                padding: '0.25rem',
                borderRadius: '0.5rem',
                '&:hover': {
                  backgroundColor: theme('colors.green.400'),
                  color: '#fefefe'
                }
              },
              strong: {
                color: theme('colors.gray.50')
              },
              'ol > li::before': {
                color: theme('colors.gray.400')
              },
              'ul > li::before': {
                backgroundColor: theme('colors.gray.600')
              },
              hr: {
                borderColor: theme('colors.gray.200')
              },
              blockquote: {
                color: theme('colors.gray.200'),
                borderLeftColor: theme('colors.gray.600')
              },
              h1: {
                color: theme('colors.gray.100')
              },
              h2: {
                color: theme('colors.gray.100')
              },
              h3: {
                color: theme('colors.gray.100')
              },
              h4: {
                color: theme('colors.gray.100')
              },
              'figure figcaption': {
                color: theme('colors.gray.400')
              },
              code: {
                color: theme('colors.gray.50')
              },
              'a code': {
                color: theme('colors.gray.50')
              },
              pre: {
                color: theme('colors.gray.200'),
                backgroundColor: theme('colors.gray.900')
              },
              thead: {
                color: theme('colors.white'),
                borderBottomColor: theme('colors.gray.400')
              },
              'tbody tr': {
                borderBottomColor: theme('colors.gray.600')
              }
            }
          ]
        }
      })
    }
  },
  variants: {
    extend: {
      typography: ['dark']
    }
  },
  plugins: [require('@tailwindcss/typography')]
};
