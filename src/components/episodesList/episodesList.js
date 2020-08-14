import React from "react"
import { Link } from "gatsby"

import classes from "./EpisodesList.module.css"

const EpisodesList = ({ episodes }) => {
  const sortEpisodeElements = (podcastA, podcastB) => {
    return podcastA.episode - podcastB.episode
  }

  return (
    <div className={classes.EposidesList__main}>
      <ul className={classes.List}>
        {episodes.node.podcastelement.sort(sortEpisodeElements).map(element => (
          <li className={classes.List__element} key={element.id}>
            {element.unpublished ? (
              ` Odcinek ${element.episode}`
            ) : (
              <Link
                to={`/podcasts/${element.slug}`}
              >{` Odcinek ${element.episode}`}</Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default EpisodesList
