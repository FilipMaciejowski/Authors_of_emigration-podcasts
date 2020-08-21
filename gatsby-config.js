require('dotenv').config({
  path: `.env`, // or '.env'
});

const { BLOCKS, MARKS, INLINES } = require('@contentful/rich-text-types')

module.exports = {
  siteMetadata: {
    title: `Twórcy Emigracji`,
    description: `Podcasty `,
    author: `Dawid Dziedziczak`,
    developer: `filip.maciejowski@gmail.com`,
  },

  pathPrefix: `/Tworcy_emigracji`,
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-172748172-1",
        head: true,
        anonymize: true,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
      }
    },
    
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `authors`,
        path: `${__dirname}/src/content/podcasts`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-catch-links`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#fafafa`,
        theme_color: `#fafafa`,
        display: `minimal-ui`,
        icon: `src/assets/images/Icon_TE.png`, // This path is relative to the root of the site.
      },
      
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        workboxConfig: {
          importWorkboxFrom: `cdn`,
        },
          precachePages: [`/mainPage/`],
      },
    },
  ],
}
