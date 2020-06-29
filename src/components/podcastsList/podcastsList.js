import React from "react"
import {Link} from "gatsby"
import { TITLE_JELENSKI } from "../../assets/constans/constans"

import classes from "./podcastsList.module.css"


const PodcastsList = () => {
  return (
    <div className={classes.PodcastsList_main}>
      <ul className={classes.PodcastsList__list}>
        <li>
          <Link to="/podcast1">
            🎧 {"\u00A0"}
            {TITLE_JELENSKI}, Odc.1
          </Link>
        </li>
        <li>
          <Link to="/podcast1">
            {" "}
            🎧 {"\u00A0"}
            {TITLE_JELENSKI}, Odc.1
          </Link>
        </li>
        <li className={classes.PodcastsList__list_different}>
          <Link to="/podcast1">
            {" "}
            🎧 {"\u00A0"}
            {TITLE_JELENSKI}, Odc.1
          </Link>
        </li>
        <li>
          <Link to="/podcast1">
            {" "}
            🎧 {"\u00A0"}
            {TITLE_JELENSKI}, Odc.1
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default PodcastsList