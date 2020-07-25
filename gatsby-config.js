module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-blog`,
      options: {
        basePath: `/posts`,
      },
    },
  ],
  // Customize your site metadata:
  siteMetadata: {
    title: `Tech Blog`,
    author: `OskaMathis`,
    description: `徒然なるままに`,
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/oskamathis`,
      },
      {
        name: `github`,
        url: `https://github.com/OskaMathis`,
      },
    ],
  },
}
