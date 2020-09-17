module.exports = {
  siteMetadata: {
    title: `Denis Toledo`,
    description: `Frontend developer with a taste for design`,
    author: `@dnstld`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-create-client-paths`,
      options: { prefixes: [`/app/*`] },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-postcss`
  ],
}