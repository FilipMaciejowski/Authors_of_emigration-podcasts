import React, { useState, useEffect} from "react"
import ReactLoading from "react-loading"
import { useStaticQuery, graphql } from "gatsby"
import Pagination from "react-js-pagination"

import classes from "./podcastSection.module.css"
import AuthorSection from "../authorSection/authorSection"
import PodcastElement from "../podcastElement/podcastElement"

const PodcastsSection = () => {
  /* useEffect(()=> {
    window.scrollTo(0, 0);
  },[]) */

  const [activePage, setActivePage] = useState(1)

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
              photo {
                fluid {
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

  const handlePageClick = () => {
    const scrollOptions = {
      top: 0,
      left: 0,
      behavior: 'auto'
    }
    window.scrollTo(scrollOptions);
  };

  const pagination = {
    activePage,
    itemsCountPerPage: 4,
    totalItemsCount: data.Section.edges.length,
    pageRangeDisplayed: 4,
    hideFirstLastPages: true,
    prevPageText: "‹",
    nextPageText: "›",
    innerClass: classes.Pagination,
    itemClass: classes.Pagination__element,
    linkClass: classes.Pagination__link,
    activeLinkClass: classes.Active,
    linkClassPrev: classes.Previous,
    linkClassNext: classes.Next
  }

  const indexOfLastEl = activePage * 4
  const indexOfFirstEl = indexOfLastEl - 4
  const currentEls = data.Section.edges.slice(indexOfFirstEl, indexOfLastEl)

  return (
    <>
      <main className={classes.Content__main}>
        <div className={classes.Content__container}>
          {currentEls.map(({ node }) => (
            <AuthorSection key={node.id} author={node.name}>
              {!node.podcastelement ? (
                <ReactLoading
                  type="cubes"
                  color="#919BA2"
                  width="75px"
                  height="35px"
                ></ReactLoading>
              ) : (
                node.podcastelement
                  .sort(sortEpisodeElements)
                  .map(element => (
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
                  ))
              )}
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
        <div className={classes.Pagination__container}>
          <Pagination
            {...pagination}
            onChange={activePage => {setActivePage(activePage)
              handlePageClick()}}
            /* getPageUrl={(i) => `/the-url/${i}`} */
          />
        </div>
      </main>
    </>
  )
}

export default PodcastsSection
