/* const { createFilePath } = require("gatsby-source-filesystem")

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  if (node.internal.type === "Mdx") {
    const value = createFilePath({ node, getNode})
    createNodeField({
      name: "slug",
      node,
      value: `/podcasts${value}`
    })
  }
} */

const path = require("path");
exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  const podcastTemplate = path.resolve(`./src/templates/podcastTemplate/podscastTemplate.js`)

  const result = await graphql(`
  query {
    allContentfulPodcastElement{
      edges{
        node{
          slug
        }
      }
    }
  }
  `)

  
  
  if (result.errors) {
    reporter.panicOnBuild('🚨 ERROR: Loading "createPages" query')
  }
  
  const podcasts = result.data.allContentfulPodcastElement.edges
  
  podcasts.forEach(({ node }) => {
    
    createPage({
      path: `/podcasts/${node.slug}`,
      component: podcastTemplate,
      context: { slug: node.slug },
    })
  })
}
