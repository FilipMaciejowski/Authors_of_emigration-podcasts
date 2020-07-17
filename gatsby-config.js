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
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-catch-links`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `Jelenski`,
        path: `${__dirname}/src/pages/Jelenski`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `Cieslewicz`,
        path: `${__dirname}/src/pages/Cieslewicz`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `Brudzynski`,
        path: `${__dirname}/src/pages/Brudzynski`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/assets/images/Icon_TE.png`, // This path is relative to the root of the site.
      },
    },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
