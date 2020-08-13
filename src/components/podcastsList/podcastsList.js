import React, {useState} from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import EpisodesList from "../episodesList/episodesList"
import classes from "./podcastsList.module.css"
import Context from "../context"
import { trackCustomEvent } from "gatsby-plugin-google-analytics"

const PodcastsList = ({ mobile }) => {

  const data = useStaticQuery(graphql`
  query list {
    Section: allContentfulAuthorSection(sort: { fields: date, order: DESC }) {
      edges {
        node {
          id
          name
          podcastelement{
            id
            episode
            authorName
            slug
          }
        }
      }
    }
  }`)

  const [episodesAuthors, setEpisodesAuthors] = useState([])
  const [EpisodesListOpen, setOpenEpisodesList] = useState(false)
  
  /* const showEpisodesHandler = (id) => {
    setEpisodes(episodesAuthors)
  } */
  
  const openEpisodesListHandler = (e) => {
    const id = e.target.getAttribute('data-id') 
    /* setEpisodesAuthors([data.Section.edges.node[id]]) */
    const filerEdges = data.Section.edges.filter(el => {
      return el.node.id === id
    })
    setEpisodesAuthors(filerEdges[0])
    setOpenEpisodesList(true)
    /* setEpisodesAuthors(data.Section.edges.node[idx])
    const episodes = [data.Section.edges]
    setEpisodes([episodes]) */
  }

  const authors = data.Section.edges.map(({node}) => {
    return (<li onClick={(e) => openEpisodesListHandler(e)}  
    key={node.id} data-id={node.id} >{node.name}</li>)
  })

    
  return (
    <div
      className={
        mobile ? classes.PodcastList__main_mobile : classes.PodcastsList__main
      }
    >
      {console.log(episodesAuthors)}
      <ul
        className={
          mobile
            ? classes.PodcastsList__list_mobile
            : classes.PodcastsList__list
        }
      >
        {authors}
        {EpisodesListOpen ? <EpisodesList episodes={episodesAuthors}/> : null}
        
     {/*    <li>
          <Link to="/podcasts/Jelenski/podcast_Jelenski_1/">
            {TITLE_JELENSKI}, Odc.1
          </Link>
        </li>
        <li>
          <Link to="/podcasts/Jelenski/podcast_Jelenski_2/">
            {TITLE_JELENSKI}, Odc.2
          </Link>
        </li>
        <li>
          <Link to="/podcasts/Jelenski/podcast_Jelenski_3/">
            {TITLE_JELENSKI}, Odc.3
          </Link>
        </li>
        <li>
          <Link to="/podcasts/Cieslewicz/podcast_Cieslewicz_1/">
            {TITLE_CIESLEWICZ}, Odc.1
          </Link>
        </li>
        <li>
          <Link to="/podcasts/Cieslewicz/podcast_Cieslewicz_2/">
            {TITLE_CIESLEWICZ}, Odc.2
          </Link>
        </li>
        <li>
          <Link to="/podcasts/Cieslewicz/podcast_Cieslewicz_3/">
            {TITLE_CIESLEWICZ}, Odc.3
          </Link>
        </li>
        <li>
          <Link to="/podcasts/Brudzynski/podcast_Brudzynski_1/">
            {TITLE_BRUDZYNSKI}, Odc.1
          </Link>
        </li>
        <li>
          <Link to="podcasts/Brudzynski/podcast_Brudzynski_2/">
            {TITLE_BRUDZYNSKI}, Odc.2
          </Link>
        </li>
        <li>
          <Link to="/podcasts/Brudzynski/podcast_Brudzynski_3/">
            {TITLE_BRUDZYNSKI}, Odc.3
          </Link>
        </li>
        <li>
          <Link to="/podcasts/Herling-Grudzinski/podcast_Herling_1/">
            {TITLE_HERLING}, Odc.1
          </Link>
        </li>
        <li>
          <Link to="/podcasts/Herling-Grudzinski/podcast_Herling_2/">
            {TITLE_HERLING}, Odc.2
          </Link>
        </li>
        <li>
          <Link to="/podcasts/Herling-Grudzinski/podcast_Herling_3/">
            {TITLE_HERLING}, Odc.3
          </Link>
        </li> */}
      </ul>
    </div>
    
  )
}

export default PodcastsList
