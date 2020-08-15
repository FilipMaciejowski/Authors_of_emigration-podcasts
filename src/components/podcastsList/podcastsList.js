import React, {useState, useEffect} from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import EpisodesList from "../episodesList/episodesList"
import classes from "./podcastsList.module.css"



const PodcastsList = ({ openModalMainList, mobile, openClass, episodesOpen, openEpisodesList}) => {

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
            unpublished
          }
        }
      }
    }
  }`)
console.log(openClass)
  
/* useEffect(() => {

const modal = document.querySelector('div.PodcastsList__main')
modal.classList.add()

  
}, []) */
  const [episodesAuthors, setEpisodesAuthors] = useState([])
  /* const [EpisodesListOpen, setOpenEpisodesList] = useState(false) */
  
  const openEpisodesListHandler = (e) => {
    const id = e.target.getAttribute('data-id') 
    const filerEdges = data.Section.edges.filter(el => {
      return el.node.id === id
    })
    setEpisodesAuthors(filerEdges[0])
    openEpisodesList(true)
  }

  const authors = data.Section.edges.map(({node}) => {
    return (<li onClick={(e) => openEpisodesListHandler(e)}  
    key={node.id} data-id={node.id} >{node.name} <span className={classes.Indicator}></span></li>)
  })

let openModalAuthors;

if(mobile){
  openModalAuthors = openModalAuthors = classes.PodcastList__main_mobile
  }else if(openClass){
    openModalAuthors = [classes.PodcastsList__main, classes.Open].join(" ")
  }else if(!openClass){
    openModalAuthors = [classes.PodcastsList__main, classes.Close].join(" ")
  }else{
    openModalAuthors = classes.PodcastsList__main
  }

  return (
    <>
    <div
      className={openModalAuthors
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
     {episodesOpen ? <EpisodesList episodes={episodesAuthors}/> : null}
    </>
  )
}

export default PodcastsList
