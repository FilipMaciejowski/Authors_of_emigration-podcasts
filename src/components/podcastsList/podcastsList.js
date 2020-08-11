import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"


import classes from "./podcastsList.module.css"
import Context from "../context"

const PodcastsList = ({ mobile }) => {
  const data = useStaticQuery(graphql`
  query list {
    Section: allContentfulAuthorSection(sort: { fields: date, order: DESC }) {
      edges {
        node {
          id
          name
        }
      }
    }
  }`)

  return (
    <Context.Consumer>
    {context => (
    <div
      className={
        mobile ? classes.PodcastList__main_mobile : classes.PodcastsList__main
      }
    >
      <ul
        className={
          mobile
            ? classes.PodcastsList__list_mobile
            : classes.PodcastsList__list
        }
      >
        {data.Section.edges.map( ({node}) => <li onClick={context.openEpisodesList} key={node.id}>{node.name}</li>)}
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
    </div>)}
    </Context.Consumer>
  )
}

export default PodcastsList
