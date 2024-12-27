const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './public/*.html',
    './app/helpers/**/*.rb',
    './app/javascript/**/*.js',
    './app/views/**/*.{erb,haml,html,slim}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
        dancing: ['Dancing Script', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        themeColor: '#8673ff',
      },
      keyframes: {
        'heart-zoom': {
          '0%': {
            transform: 'scale(1)',
            opacity: '1',
          },
          '100%': {
            transform: 'scale(2)',
            opacity: '0',
          },
        },
        'heart-zoom-1': {
          '0%': {
            transform: 'scale(1)',
            opacity: '1',
          },
          '100%': {
            transform: 'scale(3)',
            opacity: '0',
          },
        },
      },
      animation: {
        'heart-zoom-1': 'heart-zoom-1 2s ease-in-out infinite',
        'heart-zoom': 'heart-zoom 2s ease-in-out infinite',
      },

    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/container-queries'),
  ]
}
