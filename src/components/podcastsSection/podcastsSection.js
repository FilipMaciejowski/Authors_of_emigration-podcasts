import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import classes from "./podcastSection.module.css"
import AuthorSection from "../authorSection/authorSection"
import PodcastElement from "../podcastElement/podcastElement"

const PodcastsSection = () => {

  const data = useStaticQuery(graphql`
    query Author_of_emigration {
      Section: allContentfulAuthorSection(sort: { fields: date, order: DESC }) {
        edges {
          node {
            id
            name
            podcastelement {
              id
              authorName
              episode
              publishDate
              unpublishedEpisode
              unpublished
              description {
                description
              }
              photo{
                fluid{
                 src
                }
              }
              slug
            }
          }
        }
      }
    }
  `)

  const sortEpisodeElements = (podcastA, podcastB) => {
    return podcastA.episode - podcastB.episode
  }

  return (
    <>
      <main className={classes.Content__main}>
        <div className={classes.Content__container}>
          {data.Section.edges.map(({ node }) => (
            <AuthorSection key={node.id} author={node.name}>
            {node.podcastelement.sort(sortEpisodeElements).map(element => (
                <PodcastElement
                  key={element.id}
                  episode={element.episode}
                  date={element.publishDate}
                  image={element.image}
                  title={element.authorName}
                  description={element.description.description}
                  image={element.photo.fluid.src}
                  page={element.slug}
                  unpublished={element.unpublished}
                  unpublished_episode={element.unpublishedEpisode}
                />
              ))}
            </AuthorSection>
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
