import React from "react"
import { Link } from "gatsby"

import PodcastsList from "../podcastsList/podcastsList"
import Context from "../context"
import Contact from "../contact/contact"
import classes from "./navbar.module.css"


const Navbar = () => {
  return (
    <Context.Consumer>
      {context => (
        <ul className={classes.Navigation__list}>
          <li>
            <Link
              className={classes.Navigation__list_link}
              onClick={context.openPodcastsList}
            >
              Podcasty
            </Link>
          </li>
          <li>
            <Link className={classes.Navigation__list_link} to="aboutProject">
              O projekcie
            </Link>
          </li>
          <li className={classes.Different}>
            <Link
              className={classes.Navigation__list_link}
              onClick={context.open}
            >
              Kontakt
            </Link>
          </li>
          <div className={classes.Modal__contact}>
            {context.isOpen ? <Contact /> : null}
          </div>
          <div>{context.openList ? <PodcastsList /> : null}</div>
        </ul>
      )}
    </Context.Consumer>
  )
}

export default Navbar