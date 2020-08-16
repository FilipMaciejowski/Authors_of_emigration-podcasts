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
        {episodes.node.podcastelement.sort(sortEpisodeElements).map(element =>
          !element.unpublished ? (
            <Link
              className={classes.List__element_link}
              to={`/podcasts/${element.slug}`}
            >
              <li
                className={classes.List__element}
                key={element.id}
              >{` Odcinek ${element.episode}`}</li>
            </Link>
          ) : (
            <li
              className={classes.List__element_disabled}
              key={element.id}
            >{` Odcinek ${element.episode}`}</li>
          )
        )}
      </ul>
    </div>
  )
}

export default EpisodesList
