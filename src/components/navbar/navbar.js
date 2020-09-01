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
              <button onKeyDown={context.openPodcastsModal} onClick={context.openPodcastsModal} className={classes.Navigation__list_link}>Podcasty {context.podcastsModalIsOpen ? (
                <PodcastsList
                  mobile={false}
                />)
              : null}</button>
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
            >
              <button className={classes.Navigation__list_link} 
              onKeyDown={event => context.openContactModal(event)}
              onClick={event => context.openContactModal(event)}>Kontakt</button>
              {context.contactModalIsOpen ? <Contact mobile={false} /> : null}
            </li>
          </ul>
        </>
      )}
    </Context.Consumer>
  )
}

export default Navbar
