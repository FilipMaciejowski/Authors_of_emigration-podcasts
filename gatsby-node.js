const { createFilePath } = require("gatsby-source-filesystem")
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
}

const path = require("path")
exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allMdx {
        edges {
          node {
            id
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  if (result.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query')
  }
  
  const podcasts = result.data.allMdx.edges
  
  podcasts.forEach(({ node }, index) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/podcastTemplate/podscastTemplate.js`),
      // You can use the values in this context in
      // our page layout component
      context: { id: node.id },
    })
  })
}
