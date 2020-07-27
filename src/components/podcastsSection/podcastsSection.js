import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import classes from "./podcastSection.module.css"
import AuthorSection from "../authorSection/authorSection"


const PodcastsSection = () => {

  const data = useStaticQuery(graphql`
   query {
    Sections: allContentfulSection{
              nodes{
            author
      }
      }
    }
  `)

  /* PodcastElement: allMdx(sort: {fields: frontmatter___date, order: DESC}){
    edges {
      node {
        fields {
          slug
        }
        id
        frontmatter {
          title
          date
          author
          description
          episode
          unpublished
          unpublished_episode
          small_heading
        }
      }
    }
  } */

  return (
    <>
      <main className={classes.Content__main}>
        <div className={classes.Content__container}>
        {data.Section.nodes.map(node => (
          <AuthorSection author={node.author} />
          ))}

          {/* <AuthorSection author={TITLE_BRUDZYNSKI}>
            {data.Brudzynski.edges.map(({ node }) => (
              <PodcastElement
                key={node.id}
                episode={node.frontmatter.episode}
                date={node.frontmatter.date}
                author={node.frontmatter.author}
                title={node.frontmatter.title}
                description={node.frontmatter.description}
                page={node.fields.slug}
                unpublished={node.frontmatter.unpublished}
                unpublished_episode={node.frontmatter.unpublished_episode}
              />
            ))}
          </AuthorSection>

          <AuthorSection author={TITLE_CIESLEWICZ}>
            {data.Cieslewicz.edges.map(({ node }) => (
              <PodcastElement
                key={node.id}
                episode={node.frontmatter.episode}
                date={node.frontmatter.date}
                author={node.frontmatter.author}
                title={node.frontmatter.title}
                description={node.frontmatter.description}
                page={node.fields.slug}
                unpublished={node.frontmatter.unpublished}
              />
            ))}
          </AuthorSection>
        
          <AuthorSection author={TITLE_JELENSKI}>
            {data.Jelenski.edges.map(({ node }) => (
              <PodcastElement
                key={node.id}
                episode={node.frontmatter.episode}
                date={node.frontmatter.date}
                author={node.frontmatter.author}
                title={node.frontmatter.title}
                description={node.frontmatter.description}
                page={node.fields.slug}
                unpublished={node.frontmatter.unpublished}
              />
            ))}
          </AuthorSection>
 */}
        </div>
      </main>
    </>
  )
}

export default PodcastsSection
