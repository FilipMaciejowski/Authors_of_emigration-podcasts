import React from "react"
import { Link } from "gatsby"


import Context from "../context"
import PodcastsList from "../podcastsList/podcastsList"
import Contact from "../contact/contact"
import classes from "./navbar.module.css"


const Navbar = () => {
  return (
    <Context.Consumer>
      {context => (
        <>
          <ul className={classes.Navigation__list}>
            <li onClick={context.openPodcastsList}>
              <Link className={classes.Navigation__list_link}>Podcasty</Link>
            </li>
            <li>
              <Link
                className={classes.Navigation__list_link}
                to="/aboutProject"
              >
                O projekcie
              </Link>
            </li>
            <li
              className={classes.Different}
              onClick={event => context.open(event)}
            >
              <Link className={classes.Navigation__list_link}>Kontakt</Link>
            </li>
          </ul>
          {context.isOpen ? <Contact mobile={false} /> : null}
          {context.openList ? <PodcastsList mobile={false} /> : null}
        </>
      )}
    </Context.Consumer>
  )
}

export default Navbar