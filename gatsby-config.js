require('dotenv').config({
  path: `.env`, // or '.env'
});

const { BLOCKS, MARKS, INLINES } = require('@contentful/rich-text-types')

module.exports = {
  siteMetadata: {
    title: `Twórcy Emigracji`,
    description: `Podcasty o twórcach emigracji`,
    author: `Dawid Dziedziczak`,
    developer: `filip.maciejowski@gmail.com`,
    siteUrl: `https://tworcyemigracji.pl`,
    keywords: ['emigracja', 'kultura polska', 'sztuka', 'twórcy emigracji', 'artyści', 'podcasty']
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
    {
      resolve: `gatsby-plugin-react-helmet-canonical-urls`,
      options: {
        siteUrl: `https://tworcyemigracji.pl`,
      },
    },
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
        icon: `src/assets/images/Icon_TE.png`
      },
      
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        workboxConfig: {
          importWorkboxFrom: `cdn`,
        },
          precachePages: [`/mainPage/`, `/`],
      },
    },
    {
      resolve: 'gatsby-plugin-htaccess', 
      options: {
        RewriteBase: '/custom/',
        https: true,
        www: false,
        SymLinksIfOwnerMatch: true,
        host: 'tworcyemigracji.pl', // if 'www' is set to 'false', be sure to also remove it here!
        ErrorDocument: `
          ErrorDocument 401 /error_pages/401.html
          ErrorDocument 404 /error_pages/404.html
          ErrorDocument 500 /error_pages/500.html
        `,
        redirect: [
          'RewriteRule ^not-existing-url/?$ /existing-url [R=301,L,NE]',
          {
            from: 'tworcyemigracji.pl',
            to: 'tworcyemigracji.pl',
          },
          
        ]
      },
    },
  ],
}
