import React, {useState} from "react"
import { Link } from "gatsby"


import Context from "../context"
import PodcastsList from "../podcastsList/podcastsList"
import Contact from "../contact/contact"
import EpisodesList from "../episodesList/episodesList"
import classes from "./navbar.module.css"



const Navbar = () => {

  

  return (
    <Context.Consumer>
      {context => (
        <>
          <ul className={classes.Navigation__list}>
            <li onClick={context.openPodcastsList}>
              <a className={classes.Navigation__list_link}>Podcasty</a>
              {context.openList ? <PodcastsList episodesOpen={context.EpisodesListOpen} openEpisodesList={context.openEpisodesList}openClass={true} mobile={false} /> : <PodcastsList mobile={false} />}
            </li>
            <li>
              <Link
                className={classes.Navigation__list_link}
                to="/aboutProject"
              >
                <span>O projekcie</span>
              </Link>
            </li>
            <li
              className={classes.Different}
              onClick={(event) => context.open(event)}
            >
              <a className={classes.Navigation__list_link}>Kontakt</a>
              {context.isOpen ? <Contact mobile={false} /> : null}
            </li>
          </ul>
        </>
      )}
    </Context.Consumer>
  )
}

export default Navbar