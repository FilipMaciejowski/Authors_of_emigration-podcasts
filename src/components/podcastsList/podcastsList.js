import React from "react"
import { Link } from "gatsby"
import { TITLE_JELENSKI, TITLE_CIESLEWICZ, TITLE_BRUDZYNSKI } from "../../assets/constans/constans"

import classes from "./podcastsList.module.css"

const PodcastsList = ({ mobile }) => {
  return (
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
        <li>
          <Link to="/podcast_Jelenski_1">{TITLE_JELENSKI}, Odc.1</Link>
        </li>
        <li>
          <Link to="/podcast_Jelenski_2">{TITLE_JELENSKI}, Odc.2</Link>
        </li>
        <li className={classes.PodcastsList__list_different}>
          <Link to="/podcast_Jelenski_3">{TITLE_JELENSKI}, Odc.3</Link>
        </li>
        <li>
          <Link to="/podcast_Cieslewicz_1">{TITLE_CIESLEWICZ}, Odc.1</Link>
        </li>
        <li>
          <Link to="/podcast_Cieslewicz_2">{TITLE_CIESLEWICZ}, Odc.2</Link>
        </li>
        <li>
          <Link to="/podcast_Cieslewicz_3">{TITLE_CIESLEWICZ}, Odc.3</Link>
        </li>
        <li>
          <Link to="/podcast_Brudzynski_1">{TITLE_BRUDZYNSKI}, Odc.1</Link>
        </li>
        <li>
          <Link to="/podcast_Brudzynski_2">{TITLE_BRUDZYNSKI}, Odc.2</Link>
        </li>
      </ul>
    </div>
  )
}

export default PodcastsList
