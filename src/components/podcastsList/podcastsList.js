import React, { useState, useEffect } from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import EpisodesList from "../episodesList/episodesList"
import classes from "./podcastsList.module.css"

const PodcastsList = ({ mobile, openModal}) => {
  const data = useStaticQuery(graphql`
    query list {
      Section: allContentfulAuthorSection(sort: { fields: date, order: DESC }) {
        edges {
          node {
            id
            name
            podcastelement {
              id
              episode
              authorName
              slug
              unpublished
            }
          }
        }
      }
    }
  `)

  


  const [episodesListIsOpen, setEpisodesListIsOpen] = useState(false)
  const [episodesAuthors, setEpisodesAuthors] = useState([])


  const getSiblings = (elem) => {
    const siblings = []
    let sibling = elem.parentNode.firstChild
  
    while(sibling) {
      if (sibling.nodeType === 1 && sibling !== elem) {
        siblings.push(sibling);
      }
      sibling = sibling.nextSibling
    }
    return siblings;
  }
  
  const openEpisodesListHandler = e => {
    const SelectedAuthor = e.target
    const AuthorsOfEmigration = getSiblings(SelectedAuthor)
    const id = SelectedAuthor.getAttribute("data-id")
    const filerEdges = data.Section.edges.filter(el => {
      return el.node.id === id
    })

    AuthorsOfEmigration.forEach(author => {
      if(author.classList.contains(classes.Clicked)){
        author.classList.remove(classes.Clicked)
      }else{
        SelectedAuthor.classList.add(classes.Clicked)
      }
    })
    setEpisodesListIsOpen(true)
    setEpisodesAuthors(filerEdges[0])
    if(mobile){
    }
  }
  
  const authors = data.Section.edges.map(({ node }) => {
    return (
      <li
        className={mobile ? classes.Author_mobile : classes.Author}
        onClick={e => openEpisodesListHandler(e)}
        key={node.id}
        data-id={node.id}
      >
        {node.name}
      </li>
    )
  })

  return (
    <>
      <div
        className={
          mobile
            ? classes.PodcastList__main_mobile
            : [classes.PodcastsList__main, classes.Open].join(" ")
        }
      >
        <ul
          className={
            mobile
              ? classes.PodcastsList__list_mobile
              : classes.PodcastsList__list
          }
        >
          {authors}
        </ul>
      </div>
      {episodesListIsOpen ? <EpisodesList mobile={mobile ? true : false}  episodes={episodesAuthors} /> : null}
      
    </>
  )
}



export default PodcastsList
