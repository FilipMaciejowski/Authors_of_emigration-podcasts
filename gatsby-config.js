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
    /* {resolve: `@contentful/gatsby-transformer-contentful-richtext`,
    options: {
      renderNode: {
        [BLOCKS.PARAGRAPH]: node => {
          return `<p classes.Podcast__paragraph_main>${node.data.PodcastContent.body.value}</p>`
        }
      },
      renderNode: {
        [INLINES.HYPERLINK]: node => {
          if (node.data.uri.includes("https://widget.spreaker.com/")) {
            return 
              `<iframe
                src={node.data.uri}
                width="100%"
                height="200px"
                frameBorder="0"
              ></iframe>`
          } else if (
            (typeof node.data.uri === "string")
          ) {
            return `<a className={classes.Paragraph_link} href={node.data.uri}>{node.content[0].value}</a>`
          }
        },
      },
    } 
    }, */
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
