import React from "react"
import { Link } from "gatsby"
import { TITLE_JELENSKI, TITLE_CIESLEWICZ, TITLE_BRUDZYNSKI, TITLE_HERLING, TITLE_JOCZ, TITLE_NOWAKOWSKI, TITLE_NIEMIEC } from "../../assets/constans/constans"

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
        </li>
        <li>
          <Link to="/podcasts/Jocz/podcast_Jocz_1/">
            {TITLE_JOCZ}, Odc.1
          </Link>
        </li>
        <li>
          <Link to="/podcasts/Jocz/podcast_Jocz_2/">
            {TITLE_JOCZ}, Odc.2
          </Link>
        </li>
        <li>
          <Link to="/podcasts/Jocz/podcast_Jocz_3/">
            {TITLE_JOCZ}, Odc.3
          </Link>
        </li>
        <li>
          <Link to="/podcasts/Nowakowski/podcast_Nowakowski_1/">
            {TITLE_NOWAKOWSKI}, Odc.1
          </Link>
        </li>
        <li>
          <Link to="/podcasts/Nowakowski/podcast_Nowakowski_2/">
            {TITLE_NOWAKOWSKI}, Odc.2
          </Link>
        </li>
        <li>
          <Link to="/podcasts/Nowakowski/podcast_Nowakowski_3/">
            {TITLE_NOWAKOWSKI}, Odc.3
          </Link>
        </li>
        <li>
          <Link to="/podcasts/Niemiec/podcast_Niemiec_1/">
            {TITLE_NIEMIEC}, Odc.1
          </Link>
        </li>
        <li>
          <Link to="/podcasts/Niemiec/podcast_Niemiec_2/">
            {TITLE_NIEMIEC}, Odc.2
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default PodcastsList
