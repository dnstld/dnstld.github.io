module.exports = {
  siteMetadata: {
    title: 'Denis Toledo',
    description: 'Frontend developer with a taste for design',
    author: '@dnstld',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-create-client-paths',
      options: { prefixes: ['/app/*'] },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: 'gatsby-plugin-eslint',
      options: {
        test: /\.js$|\.jsx$/,
        exclude: /(node_modules|.cache|public)/,
        stages: ['develop'],
        options: {
          emitWarning: true,
          failOnError: false,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-178495563-1',
      },
    },
    'gatsby-plugin-styled-components',
    'gatsby-plugin-postcss',
  ],
};
