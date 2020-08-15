import React, { useState, useEffect} from "react"
import ReactLoading from "react-loading"
import { useStaticQuery, graphql } from "gatsby"
import Pagination from "react-js-pagination"

import classes from "./podcastSection.module.css"
import AuthorSection from "../authorSection/authorSection"
import PodcastElement from "../podcastElement/podcastElement"


const PodcastsSection = ({closeNavMobile}) => {
  
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
      behavior: 'smooth'
    }
    window.scrollTo(scrollOptions);
    closeNavMobile(false)
  };

  const pagination = {
    activePage,
    itemsCountPerPage: 4,
    totalItemsCount: data.Section.edges.length,
    pageRangeDisplayed: 4,
    hideFirstLastPages: true,
    prevPageText: <svg width="10" height="10" viewBox="0 0 18 30" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1.06466 16.4852L13.9642 29.3843C14.7848 30.2052 16.1152 30.2052 16.9354 29.3843C17.7556 28.564 17.7556 27.2337 16.9354 26.4135L5.52125 14.9998L16.935 3.58643C17.7553 2.76586 17.7553 1.43566 16.935 0.615424C16.1148 -0.205141 14.7845 -0.205141 13.9639 0.615424L1.06433 13.5147C0.654214 13.9251 0.449387 14.4623 0.449387 14.9997C0.449387 15.5374 0.654613 16.075 1.06466 16.4852Z" fill="#767676"/>
    </svg>,
    nextPageText: <svg width="10" height="10" viewBox="0 0 18 30" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16.9353 16.4852L4.03579 29.3843C3.21522 30.2052 1.88481 30.2052 1.06464 29.3843C0.244404 28.564 0.244404 27.2337 1.06464 26.4135L12.4787 14.9998L1.06497 3.58643C0.244736 2.76586 0.244736 1.43566 1.06497 0.615424C1.88521 -0.205141 3.21555 -0.205141 4.03612 0.615424L16.9357 13.5147C17.3458 13.9251 17.5506 14.4623 17.5506 14.9997C17.5506 15.5374 17.3454 16.075 16.9353 16.4852Z" fill="#767676"/>
    </svg>,
    
    disabledClass: classes.Disabled,
    innerClass: classes.Pagination,
    itemClass: classes.Pagination__element,
    linkClass: classes.Pagination__link,
    linkClassPrev: classes.Link__prev,
    linkClassNext: classes.Link__next,
    activeLinkClass: classes.Active,
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
              handlePageClick() }}
          />
        </div>
      </main>
    </>
  )
}

export default PodcastsSection
