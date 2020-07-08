import React from "react"
import { Link } from "gatsby"
import { TITLE_JELENSKI, TITLE_CIESLEWICZ } from "../../assets/constans/constans"

import classes from "./podcastsList.module.css"

const PodcastsList = ({ mobile }) => {
  return (
    <div
      className={
        mobile ? classes.PodcastList__main_mobile : classes.PodcastsList__main}
    >
      <ul className={mobile ? classes.PodcastsList__list_mobile : classes.PodcastsList__list}>
        <li>
          <Link to="/podcast_Jelenski_1">
            <span role="img" aria-label="Headphones">
              🎧
            </span>{" "}
            {"\u00A0"}
            {TITLE_JELENSKI}, Odc.1
          </Link>
        </li>
        <li>
          <Link to="/podcast_Jelenski_2">
            <span role="img" aria-label="Headphones">
              🎧
            </span>{" "}
            {"\u00A0"}
            {TITLE_JELENSKI}, Odc.2
          </Link>
        </li>
        <li className={classes.PodcastsList__list_different}>
          <Link to="/podcast_Jelenski_3">
            🎧 {"\u00A0"}
            {TITLE_JELENSKI}, Odc.3
          </Link>
        </li>
        <li>
          <Link to="/podcast_Cieslewicz_1">
            🎧 {"\u00A0"}
            {TITLE_CIESLEWICZ}, Odc.1
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default PodcastsList
