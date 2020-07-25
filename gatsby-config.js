const dotenv = require("dotenv")

if (process.env.ENVIRONMENT !== "production") {
  dotenv.config()
}

module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-blog`,
      options: {
        basePath: `/posts`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
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
