import React from "react"
import { Link } from "gatsby"

import classes from "./EpisodesList.module.css"

const EpisodesList = ({ episodes, mobile }) => {
  const sortEpisodeElements = (podcastA, podcastB) => {
    return podcastA.episode - podcastB.episode
  }



  return (
    <div className={mobile ? classes.EposidesList__main_mobile : classes.EposidesList__main}>
      <ul className={mobile ? classes.List_mobile : classes.List}>
        {episodes.node.podcastelement.sort(sortEpisodeElements).map(element =>
          !element.unpublished ? (
            <Link
              className={mobile ? classes.List__element_link_mobile : classes.List__element_link}
              to={`/podcasts/${element.slug}`}
            >
              <li
                className={mobile ? classes.List__element_mobile : classes.List__element}
                key={element.id}
              >{` Odcinek ${element.episode}`}</li>
            </Link>
          ) : (
            <li
              className={mobile ? classes.List__element_disabled_mobile : classes.List__element_disabled}
              key={element.id}
            >{` Odcinek ${element.episode}`}</li>
          )
        )}
      </ul>
    </div>
  )
}

export default EpisodesList
