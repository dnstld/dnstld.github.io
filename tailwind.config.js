module.exports = {
  purge: ['./src/**/*.js', './src/**/*.jsx', './src/**/*.ts', './src/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        body: 'var(--color-body)',
        tools: 'var(--color-tools)',
        shadowLight: 'var(--color-shadow-light)',
        shadowDark: 'var(--color-shadow-dark)',
      },
      boxShadow: theme => ({
        ...theme('colors'),
        sm: `3px 3px 6px ${theme('colors.shadowDark')}, -3px -3px 6px ${theme('colors.shadowLight')}`,
        default: `5px 5px 10px ${theme('colors.shadowDark')}, -5px -5px 10px ${theme('colors.shadowLight')}`,
      }),
    }
  },
  variants: {},
  plugins: [],
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
}