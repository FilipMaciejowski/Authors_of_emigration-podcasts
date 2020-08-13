import React from "react"
import {Link} from "gatsby"

import classes from "./EpisodesList.module.css"

const EpisodesList = ({ episodes }) => {

    const sortEpisodeElements = (podcastA, podcastB) => {
        return podcastA.episode - podcastB.episode
      }

  return (
    <div className={classes.EposidesList__main}>
      <ul>
        {console.log(episodes)}
        {episodes.node.podcastelement.sort(sortEpisodeElements).map((element) => (
          <li key={element.id}><Link to={`/podcasts/${element.slug}`}>{` Odcinek ${element.episode}`}</Link></li>
        ))}
      </ul>
    </div>
  )
}

export default EpisodesList
