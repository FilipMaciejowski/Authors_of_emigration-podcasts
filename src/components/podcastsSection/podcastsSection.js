import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import classes from "./podcastSection.module.css"
import PodcastElement from "../podcastElement/podcastElement"
import AuthorSection from "../authorSection/authorSection"
import {
  TITLE_JELENSKI,
  TITLE_CIESLEWICZ,
  TITLE_BRUDZYNSKI,
  TITLE_HERLING,
  TITLE_JOCZ
} from "../../assets/constans/constans"

const PodcastsSection = () => {

  const data = useStaticQuery(graphql`
    query {
      Jocz : allMdx(
        filter: { frontmatter: { author: { eq: "Jocz" } } }
        sort: { fields: frontmatter___episode }
      ) {
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
            }
          }
        }
      }
      Cieslewicz: allMdx(
        filter: { frontmatter: { author: { eq: "Cieslewicz" } } }
        sort: { fields: frontmatter___episode }
      ) {
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
            }
          }
        }
      }
      Jelenski: allMdx(
        filter: { frontmatter: { author: { eq: "Jelenski" } } }
        sort: { fields: frontmatter___episode }
      ) {
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
            }
          }
        }
      }
      Brudzynski: allMdx(
        filter: { frontmatter: { author: { eq: "Brudzynski" } } }
        sort: { fields: frontmatter___episode }
      ) {
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
            }
          }
        }
      }
      Herling: allMdx(
        filter: { frontmatter: { author: { eq: "Herling" } } }
        sort: { fields: frontmatter___episode }
      ) {
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
      }
    }
  `)

  return (
    <>
      <main className={classes.Content__main}>
        <div className={classes.Content__container}>
        <AuthorSection author={TITLE_JOCZ}>
            {data.Jocz.edges.map(({ node }) => (
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
                small={node.frontmatter.small}
              />
            ))}
          </AuthorSection>

          <AuthorSection author={TITLE_HERLING}>
            {data.Herling.edges.map(({ node }) => (
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
                small={node.frontmatter.small}
              />
            ))}
          </AuthorSection>

          <AuthorSection author={TITLE_BRUDZYNSKI}>
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
          {/* <PodcastElement
              episode={1}
              date="07.07.2020"
              author="Cieslewicz"
              title={TITLE_CIESLEWICZ}
              description={DESCRIPTION_CIESLEWICZ_1}
              page="podcast_Cieslewicz_1"
              unpublished={false}
            />
            <PodcastElement
              episode={2}
              date="09.07.2020"
              author="Cieslewicz"
              title={TITLE_CIESLEWICZ}
              description={DESCRIPTION_CIESLEWICZ_2}
              page="podcast_Cieslewicz_2"
              unpublished={false}
              unpublished_episode="Drugi"
            />
            <PodcastElement
              episode={3}
              date="11.07.2020"
              author="Cieslewicz"
              title={TITLE_CIESLEWICZ}
              description={DESCRIPTION_CIESLEWICZ_3}
              page="podcast_Cieslewicz_3"
              unpublished={false}
              unpublished_episode="Trzeci"
            /> */}

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
          {/* <PodcastElement
              episode={1}
              date="01.07.2020"
              author="Jelenski"
              title={TITLE_JELENSKI}
              description={DESCRIPTION_JELENSKI_1}
              page="podcast_Jelenski_1"
              unpublished={false}
            />
            <PodcastElement
              episode={2}
              date="03.07.2020"
              author="Jelenski"
              title={TITLE_JELENSKI}
              description={DESCRIPTION_JELENSKI_2}
              page="podcast_Jelenski_2"
              unpublished={false}
            />
            <PodcastElement
              episode={3}
              date="05.07.2020"
              author="Jelenski"
              title={TITLE_JELENSKI}
              description={DESCRIPTION_JELENSKI_3}
              page="podcast_Jelenski_3"
              unpublished={false}
            /> */}
        </div>
      </main>
    </>
  )
}

export default PodcastsSection
